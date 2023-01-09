
# References
- [MongoDB: The Definitive Guide - O'Reilly](https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/)

- [The little MongoDB Book 2016](https://github.com/karlseguin/the-little-mongodb-book/blob/master/en/mongodb.markdown)

- [MongDB - Roles - Administration, etc](https://docs.mongodb.com/manual/reference/built-in-roles/)

- [MongoDB - Data Modelling](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

- [MongoDB Official Group - Community](https://developer.mongodb.com/community/forums/) & [MongoDB link - redirects to Community](https://community.mongodb.com)
  - [MongoDB University](https://developer.mongodb.com/community/forums/c/university/19)

# MongoDB Terms
  - database
  - collections : A collection shares enough in common with a traditional table that you can safely think of the two as the same thing
  - documents : documents in a single collection do not need to have the set of fields, and the data type for a field can differ across documents within a collections
  - a document is made up of one or more fields (a lot like columns, but in RDMS columns are defined at the table level)
  - schema validation : can enforce [documentation validation rules] (https://docs.mongodb.com/manual/core/schema-validation/) on update and insert operations.
  - indexes : in MongoDB function mostly like their RDBMS counterparts
  - cursors : seems similar to RDBMS

  query selectors : like a *where* clause in SQL statements [Query Selectors](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors)

    ```js
    db.unicorns.find({gender: 'm',
  	weight: {$gt: 700}})
    ```
    - $gt, $gte,
    - $exists : presence of a field
    - $in : match one or more values *{$in:['apple','orange']}*
    - [update operators](http://docs.mongodb.org/manual/reference/operator/update/#update-operators)
      - $inc : increment field *{$inc: {vampires: -2}}*
      - $push : adds a value to field *{$push: {loves: 'sugar'}*
      - upsert : update if exists, insert if not *{upsert:true}*
      - multi : by default update updates a single document, multi updates all matching *{multi:true}*
      - [find](https://github.com/karlseguin/the-little-mongodb-book/blob/master/en/mongodb.markdown#chapter-3---mastering-find)
        - projection : similar to select name, address from customer...*db.unicorns.find({}, {name: 1});*, and, *db.unicorns.find({}, {name: 1});*

  # [Data Modelling](https://github.com/karlseguin/the-little-mongodb-book/blob/master/en/mongodb.markdown#chapter-4---data-modeling)


## Compared to SQL (NoSQL Document DBs)

1. Schema-less : Dynamic schema reduces setup and a reduced-friction with OOP (especially with a static language.)

1. No JOINs  (non-scalable?) - once data is split horizontally, joins occur on the client.  (joins in MongoDB must be done in application code)
      - find (get a temporary collection) and do a find on this collection.
      - embedded documents - find using dot-notation *db.employees.find({'family.mother': 'Phyllis'})
      - embed arrays
    ```js
    db.employees.insert({_id: ObjectId(
    	"4d85c7039ab0fd70a117d735"),
    	name: 'Chani',
    	family: [ {relation:'mother',name: 'Chani'},
    		{relation:'father',name: 'Paul'},
    		{relation:'brother', name: 'Duncan'}]})
    ```
1. Denormlization
    SQL usually only denormalized for performance sensitive code or snapshots (like an audit log).  With NoSQL, most do not support JOINs, and denormlization is part of normal modeling.

1. No Transactions
    Atomic update operations.  $inc, $set and findAndModify which can update or delete a document and return it automatically.
    Two-Phase Commit.  Cubersome but flexible.  A storage-agnostic solution that is done in code.   That is the application owns the two-phase commit logic.  *init-pending-commit/rollback steps manually.  Maybe MongoDB has added transactions [MongoDB Transactions](https://docs.mongodb.com/manual/core/transactions/), [MongoDB Atomicity and Transactions](https://docs.mongodb.com/manual/core/write-operations-atomicity/)
      - MongoDB 4.0 added multi-document transactions on replice sets
      - MongoDB 4.2 added distributed transactions, which adds support for multi-document transactions on sharded clusters. [MongoDB Transactions](https://docs.mongodb.com/manual/core/transactions/)

1. Data Processing
      MapReduce and [aggregation framework / pipeline](http://docs.mongodb.org/manual/core/aggregation-pipeline/)

1. Geospatial
      [Geospatial Indexes](http://docs.mongodb.org/manual/applications/geospatial-indexes/)


# Aggregating Data / Pipeline
- old - Mongo 2.2 2016 (5 years ago)
- SQL group by

```js
// create new document with _id field, group by gender
db.unicorns.aggregate([{$group:{_id:'$gender',
	total: {$sum:1}}}])
{ "_id" : "m", "total" : 7 }
{ "_id" : "f", "total" : 7 }
```
[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/)

```js
/*
    Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
*/
db.unicorns.aggregate([{$unwind:'$loves'},
 	{$group: {_id:'$loves',  total:{$sum:1},
 	unicorns:{$addToSet:'$name'}}},
  	{$sort:{total:-1}},
  	{$limit:1} ])
```

# indexes
[MongoDB Indexes](http://docs.mongodb.org/manual/indexes/)
```js
// where "name" is the field name
db.unicorns.ensureIndex({name: 1});
db.unicorns.dropIndex({name: 1});

// unique index
db.unicorns.ensureIndex({name: 1},
	{unique: true});

// compound index
  db.unicorns.ensureIndex({name: 1,
	vampires: -1});

// check if index used on queyr
db.unicorns.find().explain()
db.unicorns.find({name: 'Pilot'}).explain()
// > BasicCursor == non-indexed

```

# Other features
- Replication : production deployments should be replica sets (3 or more servers hold the same data)
  - writes are sent to a single server, asynchronously replicated to every   secondary (primary / secondary model)
  - can control if reads are permitted on secondaries.
- Sharding : supports auto-sharding.  Helps provide high-availability (helps performance, but main purpose is HA).  Sharding is the main way to scale MongoDB clusters.  
  - Combine Sharding and Replication to get scaling and high availability.
- statistics:  *db.stats()*
- profiler  : The output tells us what was run and when, how many documents were scanned, and how much data was returned.
```js
db.setProfilingLevel(2);
db.unicorns.find({weight: {$gt: 600}});
db.system.profile.find()

> output
{ "op" : "query", "ns" : "learn.unicorns", "command" : { "find" : "unicorns", "filter" : { "weight" : { "$gt" : 600 } }, "lsid" : { "id" : UUID("f7450639-393b-4924-b08a-bf388459eb46") }, "$db" : "learn" }, "keysExamined" : 0, "docsExamined" : 14, "cursorExhausted" : true, "numYield" : 0, "locks" : { "Global" : { "acquireCount" : { "r" : NumberLong(2) } }, "Database" : { "acquireCount" : { "r" : NumberLong(1) } }, "Collection" : { "acquireCount" : { "r" : NumberLong(1) } } }, "nreturned" : 6, "responseLength" : 950, "protocol" : "op_msg", "millis" : 0, "planSummary" : "COLLSCAN", "execStats" : { "stage" : "COLLSCAN", "filter" : { "weight" : { "$gt" : 600 } }, "nReturned" : 6, "executionTimeMillisEstimate" : 0, "works" : 16, "advanced" : 6, "needTime" : 9, "needYield" : 0, "saveState" : 0, "restoreState" : 0, "isEOF" : 1, "invalidates" : 0, "direction" : "forward", "docsExamined" : 14 }, "ts" : ISODate("2021-06-08T20:20:14.771Z"), "client" : "127.0.0.1", "appName" : "MongoDB Shell", "allUsers" : [ ], "user" : "" }
```
- backups and restore : *../bin/mongodump ../bin/mongrestore*
```js
mongodump --db learn --out backup
mongorestore --db learn --collection unicorns backup/learn/unicorns.bson
mongoexport --db learn --collection unicorns
// CSV output
mongoexport --db learn \
	--collection unicorns \
	--csv --fields name,weight,vampires

'''

# Limits
  - document is 16MB - BSON size [MongooDB Documents](https://docs.mongodb.com/manual/core/document/).   To store documents large than the maximum size use GridFS API [mongofiles](https://docs.mongodb.com/database-tools/mongofiles/#mongodb-binary-bin.mongofiles) and [GridFS API driver](https://docs.mongodb.com/database-tools/mongofiles/#mongodb-binary-bin.mongofiles)


  # Administration
  - [MongDB - Roles - Administration, etc](https://docs.mongodb.com/manual/reference/built-in-roles/)


# MongoDB and HBase
[MongodDB - Comparing to HBase](https://www.mongodb.com/compare/mongodb-hbase)

[ ] TODO: complete this comparison from above article

HBase (Apache HBase)
- Apache HBase is a wide column store
- distributed, persistent multidimensional sorted *map* (sparse! - think Googles search index map reduce flow)
  - map is indexed by a row key, column key and a timestamp
  - each value in the map is uninterpreted array of bytes
- applications store rows in labelled tables
  - a row is a sortable key and arbitrary number of columns
  - all rows are sorted in strict alphabetical sequence
  - the table is stored *sparsely* so that rows in the same table can have varying columns (?? huh?? - how does sparesly enable this ??)
  - providing resilience to failures, data is replicated across a number of participating nodes in the cluster.

- inspired by Google BigTable
- written in Java - uses HDFS for storage layer.
- designed for key-value workloads with random read and write access patterns


# MongoDB Architecture

[MongDB Architecture Guide](https://1drv.ms/b/s!AkwXSmFk-_xpgfoBy1M-dDuDrGf9gA?e=vnkUTb)

- Questions to ask:
- Blog site, do you have a posts collection and a comments collection?   Or does each post have an array of comments?
