## Markdown Preprocessor
https://github.com/jreese/markdown-pp
NOTICE: This project is no longer actively maintained. It will not receive any future releases.
https://github.com/jreese/markdown-pp
https://adityam.github.io/context-blog/post/markdown-with-gpp/

https://github.com/SeanSobey/markdown-preprocessor  (extends gitdown)


- Gitdown:  https://github.com/gajus/gitdown  

Preprocessor Features
 - embedding files (and embedded files can embed files) - recursive
 - chaning headings on embed (i.e., if embedded @ level-2 demote headings...)


 Relative LInks in Markdown - https://stackoverflow.com/questions/7653483/github-relative-link-in-markdown-file?noredirect=1
 https://github.com/blog/1395-relative-links-in-markup-files

Pandoc : Document Generation
- [StatsCan](https://github.com/StatCan/aaw-security-proposal) - pandoc


 Gitdown
 - https://github.com/gajus/gitdown#features-include-file : JavaScript - seems a subset of gitdown (PERL)
   - zeromq gitdown - https://awesomeopensource.com/project/zeromq/gitdown
   - gitdown maintained by https://www.howold.co/person/pieter-hintjens/biography (Pieter died 2016) - 5 years since changes
     - https://typicode.github.io/husky/#/
     - https://github.com/zeromq/gitdown (includes Gitdown Syntax Summary) - PHP


 - ditaa - diagrams through ascii art - http://ditaa.sourceforge.net/
 - features:
   - transclusions : Transclusion is generally the inclusion of the content of a document into another document by reference.
   - toc
   - ..
   table of contents
   - heading nesting: gitdown on its own does not auto-increment included files (e.g., change h1 to h2 if it was included within a h1)
   - maybe this helps https://github.com/gajus/markdown-contents


Markdown PP
 - Zero-Stars: Markdown PP for GitHub Pages - https://github.com/SeanSobey/markdown-preprocessor#readme
   - uses gitdown
 - 295 stars, but no longer maintained - https://github.com/jreese/markdown-pp ( python )


 Git Commit - Best Practices
 - https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60

# PP - Generic preprocessor (with pandoc in mind)
https://github.com/CDSoft/pp  : with pandoc in mind (done in Haskell) 207 stars, updates 2 months ago
Their is no plan to support PP from now on. PP is meant to be replaced by a combination of:
- UPP: Lua-scriptable Universal PreProcessor http://cdelord.fr/upp
- Panda: Pandoc add-ons (Lua filters for Pandoc) http://cdelord.fr/panda

# ??
https://logological.org/gpp

# GPP - General Purpose Preprocessor
- [GPP](https://logological.org/gpp)
- [GPP Documentation](https://files.nothingisreal.com/software/gpp/gpp.html)


# Workflows
Seems complicated:
- Markdown -> pandoc -> Context : https://randomdeterminism.wordpress.com/2012/06/01/how-i-stopped-worring-and-started-using-markdown-like-tex/ -> PDF  (uses GPP to get more features - read article)
 - the authors now 2021 github blog - https://adityam.github.io/context-blog/
  - [qpdf to strip metadata](https://adityam.github.io/context-blog/post/remove-metadata-pdf/)
  - exiftool --all output.pdf  : shows pdf metadata
  - qpdf --empty --pages input.pdf -- output.pdf : removes metadata
 - merge pdfs
   - LUA macro


# Preprocessor Features:
- nested headings
- recursive includes
- conditional text / builds
- syntax highlighting
- include file with syntax highlight (e.g., include a java file and highlight it as java)

# Pandoc
- [Lua Filters](https://pandoc.org/lua-filters.html)
  - [links across files - lua filter](https://stackoverflow.com/questions/48169995/pandoc-how-to-link-to-a-section-in-another-markdown-file)
  - [pandoc lua filters](https://github.com/pandoc/lua-filters)
- [Pandoc Github Actions](https://github.com/pandoc/pandoc-action-example)

- citations : https://v4.chriskrycho.com/2015/academic-markdown-and-citations.html


# StatsCan

- [bilingual workflow](https://github.com/StatCan/daaas/tree/master/docs)
- [github wf to generate pdf](https://github.com/StatCan/aaw-security-proposal/blob/master/.github/workflows/build.yaml)
