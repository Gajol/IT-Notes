

# Data -> Markdown
Problem:  Often I have datasets that I would like to display in different articles.   
- I would like one central database with the ability to create views and generate a markdown component of this.
- Ideally this component can be embedded in articles and compiled (with the latest dataset, based on the view).  
- The view may include arbitrary view features like timestamp, etc.

Example:
I would like to build knowledge on programming languages.  This data model may include:
- language features:
- language categories:
- urls to {language, tutorial(s), etc}
- urls to {wikipedia, github, opensource, - ..etc}
- license
- ...

## Problem Breakdown
A place to enter data (UI, CSV, Excel)

## Design and Analysis
options:
1.  system with DB: con: need DB to be running, etc...
database: sqllite?

1. manual:  Excel, Pivots, etc...

1. google scripts..., Ragic as a DB integrated to google-sheets or github??

1. NodeJS app...() - access to data on [google-docs](https://docs.google.com/) / [google sheets](https://docs.google.com/spreadsheets/u/0/) / [Google Script](https://script.google.com/home)

1. gatsby, sanity.io, db, etc : __My choice__ keep learning!!  [sanity.io](https://www.sanity.io/
) *Content is Data*

# Existing options
Zotero - link management and citation...
- how to use Zotero in a worklow to insert references into an article.

# Decisions

data : JSON or a database?
JSON : MongoDB
Databse : online?

JSON vs Database
- https://thenewstack.io/technology-pairings-json-documents-databases/
- Sanity.io has GROQ for querying JSON document [GROQ Training Challenges](https://dev.to/mornir/7-challenges-for-querying-with-groq-3p0p)
