

https://www.youtube.com/watch?v=KQ5OnL2hMBY&ab_channel=LinkedInEngineering

XML - 1/2 trillion lines of XML (started in 2000)

System of Record
- billing
- reporting
- monitoring (closer real-time feeds)
- new applications - push notifications - easier than HDFS to query datahub

Problem to solve with ETL
2-3 hour lag:
Blocks innovation
Scaling issues
Hard to Test / Debug
Completed @ 4am - not much time for daily-jobs to work off data
Bad XML Line - would break hourly jobs
HDFS - if input and output is HDSF it is hard to build applications

Why Samza?
Samza and Kafka by LinkedIn
- Isolation - upstream and downstream processes do not need to know if these are up/down.
- RocksDB - use DB as randow I/O, changes get replicated to Kafka change-log topic.   Samza can rebuild state.

# Patterns
## Decompose
- How to decompose using MapReduce.  Phases:
  - 1. Parse clean data
  - 1. Groups, Joins (pull data from secondary tables)
  - 1. Fraud detection algorithm (TripAdvisor proprietary)
  - 1. Windows Over Time (24 - 48 hours)

- Streaming system - Decompose Stream
  - 1. Feeding System: read logs  
  - 1. Parse, Clean, Shard - I/O intensive.  Parse, and route so downstream tiers have consistent view
  - 1. SQL Operations:  Group, Join, Window, Agg, Fraud.
  - 1. Upload (HDFS, S3, Monitor) - 120Mb files every 2seconds (Redshift )
  - 1. SQL copy new data into existing table structure (how data gets to Hive)

## Controlling Time
- Controlling Time (Map Reduce - Legacy)
- Exact requirements of where data ends up in each hour.
- Wait for all data, start processing, ..

Streaming
- want data to flow in as fast as possible. Start processing with first log.
- Feeding System - Clock (header) - Controls "Time".  Can rewind the clock, by clearing out target system data, and reset clock.  (useful for patching, etc)
  - Start paging systems when files missing.
  - Once feeding system knows it has all files, sends messages to tiers
- Durable Storage - once all written notifies it is safe to move forward.

## Order
In M/R (MapReduce) world it is easy, Order By / Limit To.   Very resource instensive, I/O churn on cluster to resort data.
Order (Stream) - very hard to control order.   TripAdvisor Logs roll-over every hour.  Minute 0..59.  Control "Grouping" and not Order.

## State == SQL Constructs
RocksDB - stateful replicated storage.
Sharding - shard by GroupBy key
Process looks at metadata tables and broadcasts to partitions.

## Validation
MVP in 2-months.
Redefine system to match old-system over 8-months.
Feeding - known # logs writting
Target Sytem - know # logs received
Compare #'s
Collect metrics, sums, revenues, duplicates, ... - write metrics hourly and compare to old system.
