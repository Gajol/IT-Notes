
[Slack Samza Case Study](http://samza.apache.org/case-studies/slack)
- Kafka (Data Warehouse) -> Samza -> Kafka (Analystics) -> Druid

[Slack Slides](https://speakerdeck.com/vananth22/streaming-data-pipelines-at-slack)
[druid-io/tranquility](https://github.com/druid-io/tranquility/blob/master/docs/overview.md)

# Technology Stack
[Apache Samza](http://samza.apache.org/) - 3 main Samza jobs in their pipeline design
  - Router - deserialize Kafka events and add instrumentation
  - Processor - abstraction for a streaming job, add sink operation and instrumentation
  - Converter - implments business logic (join, filter, projection, etc)
[Apache Druid](http://druid.apache.org/) - modern analytics database
 - fast analytics DB : Druid is designed for workflows where fast ad-hoc analytics, instant data visibility, or supporting high concurrency is important.  
 - integration : Druid streams data from message buses such as Kafka, and Amazon Kinesis, and batch load files from data lakes such as HDFS, and Amazon S3. Druid supports most popular file formats for structured and semi-structured data.
[Apache Druid-IO Tranquilty](https://github.com/druid-io/tranquility/blob/master/docs/overview.md) : Tranquility is a Scala library that coordinates streaming ingestion through the Druid indexing service. It exists because the Druid indexing service API is fairly low level. In the indexing service, callers create "tasks" that run on a single machine using a fixed bundle of resources. Indexing tasks start up with a particular configuration and generally this configuration cannot be changed once the task is running.
