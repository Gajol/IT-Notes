# Push Down Architecture
I first read this on a Dataiku blog.  

Pushdown Execution
Many data analysis and data science systems include the infrastructure for computation — this tight coupling leads to issues when the system is insufficient for data volume or type of workload.

The solution is pushing down jobs to computation systems like Spark and Kubernetes to handle large workloads with a distributed architecture. Dataiku uses a pushdown architecture to allow organizations to take advantage of existing, elastic, and highly scalable computing systems, including SQL databases, Spark, Kubernetes, and more.

https://www.dataiku.com/learn/ebooks/


data paths between elastic compute and elastic storage:
- elastic compute : { hive, spark, impala, Amazon Athena, Snowflake, Kubernetes, Azure Synapse Analytic, Big Query}
- elastic storage : { Google Cloud Platform, Google Cloud Storage, Amazon Web Service, Amazon S3, Snowflake, Azure, ADLS}
