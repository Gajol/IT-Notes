

Node.js and Elasticsearch
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.HTML
- One-to-one mapping with REST API.
- Generalized, pluggable architecture.
- Configurable, automatic discovery of cluster nodes.
- Persistent, Keep-Alive connections.
- Load balancing across all available nodes.
- Child client support.
- TypeScript support out of the box.


Project - Node.jS, Antora (ASCIIdoc JAMStack) & Elasticsearch

1. Create Index
https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-create-index.html

?? how to search Markdown (or Asciidoc) files in Github; (1) clean index build and (2) incremental index build on git-push.


## Terms to think about

tokenizer: A tokenizer receives a stream of characters, breaks it up into individual tokens (usually individual words), and outputs a stream of tokens. For instance, a whitespace tokenizer breaks text into tokens whenever it sees any whitespace. It would convert the text "Quick brown fox!" into the terms [Quick, brown, fox!].[Github Elasticsearch Tokenizers](https://github.com/elastic/elasticsearch/blob/master/docs/reference/analysis/tokenizers.asciidoc)


serialization:



# Elastic

Elastic Grok Processor
https://www.elastic.co/guide/en/elasticsearch/reference/master/grok-processor.html

(didn't Sanity.io have a JSON grok???)

Indexing (using NY Transportation data)
https://www.elastic.co/fr/blog/indexing-csv-elasticsearch-ingest-node
- https://data.ny.gov/Transportation/NYC-Transit-Subway-Entrance-And-Exit-Data/i9wp-a4ja
1. injest into Elastic Cloud
2. parse data into structured JSON
3. index the data
4. use Kibana to build map of NYC with Railway stations


# Elasticsearch Technical

Elasticsearch’s data replication model is based on the primary-backup model and is described very well in the [PacificA paper](https://www.microsoft.com/en-us/research/publication/pacifica-replication-in-log-based-distributed-storage-systems/) of Microsoft Research.

## Document Build Process
[Elastic's Document Build Process](https://github.com/elastic/docs#for-the-website) the build process results in [Elastic Stack and Product Documentation](https://www.elastic.co/guide/index.html)

Pre-2019
- used [DocBook](https://tdg.docbook.org/tdg/4.5/)
  - pros: made HTML and a PDF (the Elastic Definitive Guide is both)
  - cons: slow and difficult to customize
- now: build HTML directly from Asciidoc files
  - many Asccidoc files with docbook in mind
  - still use docbook's concept of 'chunking'

- link check validates corss-document links
