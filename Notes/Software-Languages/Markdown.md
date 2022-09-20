https://www.ericholscher.com/blog/2016/mar/15/dont-use-markdown-for-technical-docs/
why to not use markdown.

- one sentence per line (https://news.ycombinator.com/item?id=4642395)
- or one line < 80chars?

# Markdown & Pandoc
[multiple files / links:](https://stackoverflow.com/questions/4779582/markdown-and-including-multiple-files#5529508)

# Antora
The multi-repository documentation site generator for tech writers who love writing in AsciiDoc.
- Enforces a clear and consistent separation of text content and supporting assets (such as images, videos, and code).
- [Git Antora](https://gitlab.com/antora/antora) - A modular documentation site generator. Designed for users of Asciidoctor.
- builds HTML files from Asciidoc


# Antora SSG
[Antora](https://antora.org/)
- The multi-repository documentation site generator for tech writers who  writing in AsciiDoc.
- Node-based (JAMstack)


[Youtube Video - Dan Allen - Antora](https://www.youtube.com/watch?v=BAJ8F7yQz64) at #DevoxxUK
Asciidoc - lightweight markup
JAMstack
Asciidoctor.js -> Handlebars -> Page Layout
Authoring : AsciiDoc
Publishing : Antora
software category: JAMstack Static Site Generator

Dan Allen
- tech writing
- long-form documentation : guides, tutorials,
- enterprise documentation
- documentation at scale
- by software teams for software users...
- [docs] as {code}
- docs are curb-appeal of the software
- bad docs raise cost for support

Uphill battle vs Confluence

Distributed Content
Standard Structure

- multi-repository document storage.  Git-literate. - playbook.yml (tells Antora where to get content)
- content catalog - gets all files local (git fetch)
- documentation have standard structure ROOT, assets, pages, partials, ... (good for writers on many projects)
- versions stored on branches

Git branch  (used by Couchbase I think) - version indicator dropdown
- component description

source-to-source references :
- resourceid:   version@component:module:family#path/to/resource.ext
  - page to page reference:  xref: [ resourceid ][text]
- include::resourceid[tag=why]
- content & UI separate
  - UI is a different software project - common style across all products
  - content people just write documents
- nav.adoc (referenced list)  

## Used By
- Couchbase
- Mulesoft
- Rudder




"technuical writing platform"
https://matthewsetter.com/why-antora-is-the-leading-technical-writing-platform/
sphinx - python document generator - https://www.sphinx-doc.org/en/master/

scrivener - author a book...

# Pandoc

- [Pandoc and Markdown](https://garrettgman.github.io/rmarkdown/authoring_pandoc_markdown.html#footnotes)



# SSG: JamStack

Jekyll, Hugo, Sculpin, Gatsby

- [Metalsmith](https://metalsmith.io/) - lightweight.


- [surge.sh](https://surge.sh/) - Surge has been built from the ground up for native web application publishing and is committed to being the best way for Front-End Developers to put HTML5 applications into production.  (Cloud only)



# Tools

ASIN (Amazon) to ISBN : https://www.asinlist.com/asin-to-ISBN/

# Markdown  
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
old merger - https://github.com/elamperti/MDmesh
https://github.com/BateleurIO/combine-files


Github Markdown
- does __not__ support the abbrevation capability.  Where you put a list of expansions at bottom of file and then you can hover over expansions in text:
*[CSA]: Cloud Security Alliance
*[W3C]:  World Wide Web Consortium


Pandoc - github syntax
https://learnbyexample.github.io/customizing-pandoc/
-f gfm   (github flavoured markdown)
