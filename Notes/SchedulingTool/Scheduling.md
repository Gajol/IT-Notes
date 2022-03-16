

# Scheduling / Workflow Management Systems
why
- orchestrate workloads (dependency based jobs, jobs triggered by completion of other jobs, notifications, ...)
- programmatically authro, schedule and monitor workloads
- features: trigger mechanism,

## Definition for ["Runbooks"](https://en.wikipedia.org/wiki/Runbook)

> Runbook automation (RBA) is the ability to define, build, orchestrate, manage, and report on workflows that support system and network operational processes. A runbook workflow can potentially interact with all types of infrastructure elements, such as applications, databases, and hardware.

In the category of [Support Automation](https://en.wikipedia.org/wiki/Customer_support#Automation)


# history
[Runbooks](https://en.wikipedia.org/wiki/Runbook): IBM Runbooks
Unix cronjob : Basic job scheduling.
Unix options:

## Scheduling used by Leaders
| Organization | Choice|Rationale|Comments|
|--|--|--|--|
|Airbnd #1|[Apache Airflow](https://github.com/apache/airflow)||Apache Top-Level project|
|Airbnb #2|[Chronos](https://mesos.github.io/chronos/)|Distributed Systems|Replacement for cron [Medium Article](https://medium.com/airbnb-engineering/chronos-a-replacement-for-cron-f05d7d986a9d). Runs ontop of [Apache Mesos](http://mesos.apache.org/)|
|Spotify|[Luigi](https://github.com/spotify/luigi)||Python - *Our orchestration framework, Luigi, was built for data pipelines and had trouble dealing with the unique constraints of machine learning workflows.* - ([Spotify - Pave the Road for Machine Learning - 2019](https://engineering.atspotify.com/2019/12/13/the-winding-road-to-better-machine-learning-infrastructure-through-tensorflow-extended-and-kubeflow/))|
|Pintrest|Pinball||

### Chronos (Airbnb)
- schedule jobs using [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) repeating interval notation

[Apache Airflow](https://airflow.apache.org/)

### Airflow
Airflow is written in Python, and workflows are created via Python scripts. Airflow is designed under the principle of "configuration as code". While other "configuration as code" workflow platforms exist using markup languages like XML, using Python allows developers to import libraries and classes to help them create their workflows. [[Airflow - Wikipedia](https://en.wikipedia.org/wiki/Apache_Airflow)]
