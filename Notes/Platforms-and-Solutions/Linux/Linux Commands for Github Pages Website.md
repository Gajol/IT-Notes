

# Linux Commands for Github Pages Website

https://github.com/gajol

##  My Setup

Github Project 

### Application Architecture

- where my ARA notes are.  
- This repository will be the place where all "Architecture" notes are.

### Gajol.github.io

- nothing first attempt

### balance

- https://github.com/Gajol/balance 
- [website - gajol.github.io/balance](https://gajol.github.io/balance/)
- gh-pages branch https://github.com/Gajol/balance/tree/gh-pages
- This site contains a "snapshot" of the documents.   I use a process on the Linux machine to copy the files to the balance project repository and build the site (or so I think)

### Eloquent Javascript

- Where I was learning Javascript and started making notes on Technology.  A mess.
- https://github.com/Gajol/Eloquent-JavaScript
- The [Notes](https://github.com/Gajol/Eloquent-JavaScript/tree/main/Notes) folder is where I have many notes.   A dumping ground of notes.   My goal is to move those to more official repositories.
- Workflow
  1. Write in Application Architecture : ARA project.
  2. Push to Git
  3. Copy this to the web-pages and generate web page

# General Idea

Usually write using Typora on desktop.   Occasionally push changes to github.

## Linux Setup

1. cd /home/doug/Documents/Gajol/balance
   bundle exec jekyll serve --verbose  (Runs a browser so you don't have to push to github time)
   using browser (Firefox) goto: http://localhost:4000/balance

2. gulp ara

3. maybe how I did it:
   git clone https://github.com/gajol/balance
   rm -rf balance
   git clone https://github.com/gajol/balance
   cd balance/
   git checkout gh-pages

4. Linux Machine where gajol / balance files are:
   /home/doug/Documents/Gajol/balance

5. On pushes to github of the [ApplicationArchitecture](https://github.com/Gajol/ApplicationArchitecture/) repo two artefacts are built:

   ARA-gulp.pdf : ugly one - still has markdown markings

   - I beilieve on the Linux machine I run "gulp ara" which runs 2 gulp tasks to generate a ARA markdown with and without a table of contents.   The output is then local files ARA-TOC.md and ARA.md

   

   ARA.pdf : pretty

Pandoc

pandoc ARA.md | lynx -stdin

pandoc --pdf-engine=pdflatex --listings -o ARA-concat.pdf ARA-concat.md

pandoc --pdf-engine=pdflatex --listings -o test.pdf ARA-Business.md 

evince test.pdf



# Challenges

## pandoc and github actions

- get errors like "! LaTeX Error: Too deeply nested." [39](https://github.com/Gajol/ApplicationArchitecture/actions/runs/3863914234/jobs/6586396381#step:5:40)
  - attempts to solve nesting: https://stackoverflow.com/questions/1935952/maximum-nesting-level-of-lists-in-latex
  - https://texfaq.org/FAQ-toodeep
  - just adding --verbose to the pandoc command and then it passed (so no idea why it fails)

## markdown variants

different markdown support on different platforms (github pages, browswer, typora, pandoc->PDF, ...)

- sed '/^<a name=*/a /n' test.md  > test_new.md
- sed '/<a name=*/d/g' ARA-TOC.md  > pandoc-ARA-TOC.md
- fc-list  (list fonts on system)

how to change markdown (add, remove, conditional) so the content can exist on several sites with various levels of support. 

- meraid diagrams do not work on github pages

## content : publishing workflow

website has content from different githut repos.   For example, a book-review in economics is not in the applicaiton architecture repo.  How to merge from multi-repo's to one site.

what is the tooling process to "publish" and take this copy to the site.

- raw content : might be "annotated" to suite the target web-site.
- images that work locallly (image stored locally) need to have image stored on a web-site (github, etc).  Onedrive/Google Drive do not allow image retrieval by web-servers (e.g., hosting images for web display)

on github jekyll the front-matter makes the title - therefore you do not need the first heading 1 (#summary-and-assignments)

decisions:

| Question                                                     | Challenge                                                    | Decision                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Where do I put "psychology" and "economic" content           |                                                              | Generic github repo with folders by major category.  Psychology, Leadership, Economics.  [Github Content Repository](https://github.com/Gajol/Content). |
| Once doing minor editors so the look & feel is corrent for a site (e.g., github pages) - and can I backwards propagate thoses changes to the main/branch on the content repository. |                                                              |                                                              |
| Mermaid Not Working - Github says it should - https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/ .  [Test Site Showing Not Worrking](https://rabestro.github.io/test-mermaid/). | Mermaid is scalable, works with presentation changes (light/dark background, etc).   Drawing image and embedding an image file (PNG) is less flexible. |                                                              |
| Where to put reference documents and books.  Onedrive Book Library : .../documents/books/ |                                                              |                                                              |
| Extra media for a site.                                      | To move content to a web site also requires an excerpt, thumbnail and other media.  How can this be managed as a container so components can be re-used? Header Image (main image, teaser image, responsive images, Excerpt, ... |                                                              |



## Test Image

<img src="C:\Users\doug\OneDrive\Documents\GitHub\Content\Psychology\Book-The-Defining-Decade\Defining-Decade-Choice.drawio.png" alt="Image Text" style="zoom:67%;" />



## Image URL in Minimal Mistakes

books
```markdown
- ![image-text](../assets/images/XYZ.png)
```

- site/books/assets/images/XYZ.png

ara - nng image : failed

```markdown
- [Design Thinking Process - Nielsen Norman Group](./ARA/Assets/DesignThinkingNNG.png)
```

- 

## Github Tools to Build

On ARA document, the TOC is generated.  Can this be parsed, to generate the navigation YML for the Jekyll page?  This would allow side bar navigation on longer documents

## How does "related articles" work?

# Tools

### Atom : Editor

### Typora : Markdown editor

### gtidown

```javascript
{"gitdown": "date", "format": "YYYY-MM-DD"}

Generate table of contents

{"gitdown": "contents"}

{"gitdown": "include", "file": "./ARA-Intro.md"}

{"gitdown": "include", "file": "./ARA-Business.md"}

{"gitdown": "include", "file": "./ARA-Discovery.md"}

{"gitdown": "include", "file": "./ARA-Application.md"}

{"gitdown": "include", "file": "./ARA-Guidance.md"}

{"gitdown": "include", "file": "./ARA-Patterns.md"}

{"gitdown": "include", "file": "./ARA-Qs.md"}
```



# TODO 

1. Move Data Protect to a good place. https://github.com/Gajol/Eloquent-JavaScript/blob/main/Notes/CISSP%20-%20Git/DataProtection.md
2. What is correct way for github actions to generate a PDF and make it available in the repo?
3. Maintenance:  github actions have deprecated actions ([example](https://github.com/Gajol/ApplicationArchitecture/actions/runs/3863650891))....The `set-output` command is deprecated and will be disabled soon. Please upgrade to using Environment Files. For more information see: https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/Show less

Website Terms

Masthead:  The top part of a site meant to define what the page is about.   From print making.

Canonical URL: A canonical URL refers to an HTML link element, with the attribute of rel="canonical" (also known as a canonical tag), found in the <head> element of your client's webpage. It specifies to search engines their preferred
