

[Hadoop YARN 2012](https://en.wikipedia.org/wiki/Apache_Hadoop)
- Yet Another Resource Manager
- introduced in 2012 - a full-fledged sub-project of Apache Hadoop
- a platform responsible for managing computing resources in clusters and using them for scheduling users' application
- [Cloudera - 2012 - Apache Hadoop YARN - Concepts and Applications](https://blog.cloudera.com/apache-hadoop-yarn-concepts-and-applications/)
- [Cloudera - 2012 - Apache Hadoop YARN - Background and Overview](https://blog.cloudera.com/apache-hadoop-yarn-background-and-an-overview/) - original published on Hortonworks (now part of Cloudera)

- a general-purpose, distributed, application management framework that supersedes the classic Apache Hadoop MapReduce framework for processing data in Hadoop clusters
  - problems with MapReduce ( two phases - map phase and reduce phase - very parallet)
    - lack of data in motion - MapReduce moves data to compute, versus, moving compute to data.



[YARN Package Manager](https://yarnpkg.com/)

[YARN vs MapReduce](https://www.janbasktraining.com/blog/yarn-vs-mapreduce/)
YARN.
- Introduced in Hadoop 2.0.
- used to separate processing components and resource management process
- YARN is known as:
  - Not a cluster manager but a Resource Manager,
  - Instead of short-lived and dedicated job tracker, it is known as ApplicationMaster,
  - Not a Task Tracker instead a Node Manager,
  - Not a MapReduce job but a distributed application.
