

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

## Design and Analysis
options:
- system with DB: con: need DB to be running, etc...
database: sqllite?
