
TO LEARN:
[ ] - Schema on read
[ ] - RDF
[ ] - B-Tree



 Do you need complex queries or just data retrieval via key and value? Should you require ACID transactions, *exactly-once semantics*, or “just” *at-least-once* delivery guarantees?

https://dzone.com/articles/is-apache-kafka-a-database-the-2020-update

 MySQL
 Postgres
 a big data batch platform (Hadoop)
 document store : MongoDB
 time series DB : Influx DB, [OpenTSDB](http://opentsdb.net/)
 key-value store : RocksDB
 in-memory cach : Memcached  (? *Redis* ?)



## Time series

[How TSDB Compare](https://blog.timescale.com/blog/what-is-high-cardinality-how-do-time-series-databases-influxdb-timescaledb-compare/)

TSDB Options:
- [DBengines popularity ranking of Time Series DBMS](https://db-engines.com/en/ranking/time+series+dbms)
- TSDB
- InfluxDB
- [TimescaleDB](www.timescale.db) - [PostgreSQL for time-series](https://www.timescale.com/)

### [OpenTSDB](http://opentsdb.net/)
Store
- Data is stored exactly as you give it
- Write with millisecond precision
- Keep raw data foreve

Scale
- Runs on Hadoop and HBase
- Scales to millions of writes per second
- Add capacity by adding nodes

Read
- Generate graphs from the GUI
- Pull from the HTTP API
- Choose an open source front-end

# Key Value Stores
## [Voldemort](https://www.project-voldemort.com/voldemort/)
- create by same person that created Kafka. Jay Kreps.
- Data is automatically replicated over multiple servers.
- Data is automatically partitioned so each server contains only a subset of the total - data
- Provides tunable consistency (strict quorum or eventual consistency)
- Server failure is handled transparently
- Pluggable Storage Engines -- BDB-JE, MySQL, Read-Only
- Pluggable serialization -- Protocol Buffers, Thrift, Avro and Java Serialization
- Data items are versioned to maximize data integrity in failure scenarios without - compromising availability of the system
- Each node is independent of other nodes with no central point of failure or - coordination
- Good single node performance: you can expect 10-20k operations per second depending on the machines, the network, the disk system, and the data replication factor
- Support for pluggable data placement strategies to support things like distribution across data centers that are geographically far apart.

Voldemort is __not__:
- basically just a big, distributed, persistent, fault-tolerant hash table

Voldemort is __not__:
- not a relational database, it does not attempt to satisfy arbitrary relations while satisfying ACID properties.
- Nor is it an object database that attempts to transparently map object reference graphs.
- Nor does it introduce a new abstraction such as document-orientation.

## [RocksDB](https://rocksdb.org/)
- [RocksDB Wikipedia](https://en.wikipedia.org/wiki/RocksDB)
- RocksDB is a high performance embedded database for key-value data. It is a fork of Google's LevelDB optimized to exploit many CPU cores, and make efficient use of fast storage, such as solid-state drives (SSD), for input/output (I/O) bound workloads. It is based on a log-structured merge-tree (LSM tree) data structure.
- [Apache Samza](http://samza.apache.org/) uses RocksDB. Samza provides build-in support for persistent state store, backed by RocksDB on the disk and changelog in Kafka

# DB Concepts
## Cardinality
[Dzone TSDB - Cardinality](https://dzone.com/articles/what-is-high-cardinality)


# Books
- [2012 - Seven Databases in Seven Weeks](978-1934356920)
  - Postgres, Riak, HBase, MongoDB, CouchDB, Neo4J, Redis
