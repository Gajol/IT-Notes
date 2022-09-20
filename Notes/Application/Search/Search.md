

Search General

features
scopes, indexes
search within results
saved searches ( time-based so same results guarantee )
saved sarch environments, can tag results and save to collections ( eDsicovery toolchain ))


Names:
languages, alphebets, pronounciations, ...

Phonetic Algorithms
- Soundex
- Metaphone

Fuzzy Search
- https://www.elastic.co/fr/blog/found-fuzzy-search : Fuzzy queries sit somewhere in the middle of the search natural-language undersanding toolchest in terms of sophistication; they find words that need at most a certain number of character modifications, known as 'edits', to match the query. For instance, a fuzzy search for 'ax' would match the word 'axe', since only a single deletion, removing the 'e', is required to match the two words.  Fuzzy search is based on *edit distance*.
- The metric used by fuzzy queries to determine a match is the [Damerau-Levenshtein distance formula](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance)

Arabic Name Search
OTher cultures ..Asian, etc.


Search KPI Terms
- high recall : lots of results - imprecise search string, or bad indexing (e.g,. bad phonetic algorithm...)
- poor precision : ...
- false positivies : a return-result that should not have been included
- false negatives : a missing item that should have been returned
- might be solr specific : boosts, rank, tuning, relevance, tokenizer, filter ... (https://stackoverflow.com/questions/5516503/searching-names-with-apache-solr)
- scope
- results
- text (ascii or unicode)



Search Phonetic
https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-phonetic.HTML
The Phonetic Analysis plugin provides token filters which convert tokens to their phonetic representation using Soundex, Metaphone, and a variety of other algorithms.


[Wikipedia Phonetic Algorithms](https://en.wikipedia.org/wiki/Phonetic_algorithm)

|Algorithm|Description|Comments|
|--|--|--|
|Soundex|Developed to encode surnames for use in censuses. Soundex codes are four-character strings composed of a single letter followed by three numbers||
|Daitch–Mokotoff Soundex|A refinement of Soundex designed to better match surnames of Slavic and Germanic origin. Daitch–Mokotoff Soundex codes are strings composed of six numeric digits.||
|Cologne phonetics|This is similar to Soundex, but more suitable for German words.||
|Metaphone and Double Metaphone|Are suitable for use with most English words, not just names. Metaphone algorithms are the basis for many popular spell checkers.|Used by PG.  First letter must match - e.g., searching for "Sayed" won't find "Zaid" eventhough they sound the similar.  PG implementation does not allow [edit-distance](https://en.wikipedia.org/wiki/Edit_distance) to be combined (NEAR, ADJ, ...).|
|New York State Identification and Intelligence System (NYSIIS)|Maps similar phonemes to the same letter. The result is a string that can be pronounced by the reader without decoding.||
|Match Rating Approach developed by Western Airlines in 1977|This algorithm has an encoding and range comparison technique.|
|Caverphone|Created to assist in data matching between late 19th century and early 20th century electoral rolls, optimized for accents present in parts of New Zealand.||


|Language|Algorithm|Open Source|
|--|--|--|
|English|[Soundex](https://en.wikipedia.org/wiki/Soundex), [MEtaphone](https://en.wikipedia.org/wiki/Metaphone), [Double Metaphone](https://en.wikipedia.org/wiki/Double_Metaphone)|
|English, Slavid, German|[Dutch-Mukotoff Soundex](https://en.wikipedia.org/wiki/Daitch%E2%80%93Mokotoff_Soundex)|
|Germnan|[Cologne Phonetics](https://en.wikipedia.org/wiki/Cologne_phonetics)|
|Language Agnostic|[Beider-Morse](https://en.wikipedia.org/wiki/Daitch%E2%80%93Mokotoff_Soundex#Beider%E2%80%93Morse_Phonetic_Name_Matching_Algorithm) - based on Dutch-Mokotoff|[Solr Beider Morse Filter](https://solr.apache.org/guide/6_6/filter-descriptions.html#FilterDescriptions-Beider-MorseFilter)




Vendors

IBM GNR - Global Name Recognition




Solr
Lucene
Elastic


stemming
stop words
multi-lingual
Phonetic

Indexes...
