Git.md

# Development - Sharing Repositroy
git clone
: [Alassian Clong](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) [Git Clone Official](https://git-scm.com/docs/git-clone)

```
git clone <repo> <directory>
git clone --branch <tag> <repo>
git clone -depth=1 <repo>
git clone -branch <branch>
```

[Github Clone](https://github.com/git-guides/git-clone)

git Clone Fetch Pull push
: [Medium Git clone](https://1drv.ms/b/s!AkwXSmFk-_xpge0PfSj2vBcejizhMQ?e=enF18t)


git Personal Access Token
: git config --global credential.helper manager
The first time you are pushing to a repo, a popup will ask for your credentials: username and your PAT.  The next time, it won't ask, and reuse directly that PAT, which remains stored securely in your Credential Manager.
([Stackoverflow](https://stackoverflow.com/questions/46645843/where-to-store-the-personal-access-token-from-github))

- [Caching GitHub creditials in Git](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).  Can use github cli (need to install gh), or, use Git Credential Management (GCM).  For GCM:
1. need to install git
2. [install and configure GCM](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions)
3. configure git to use GCM - see [GCM Linux](https://github.com/GitCredentialManager/git-credential-manager/blob/main/docs/credstores.md) - options change based on credentials store you choose

Commands I did (Jan 2022)
[GCM install](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions) - to [cache github crednetials](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

``` sh
sudo dpkg -i <path-to-package>
git-credential-manager-core configure
// cd to directory where I wanted repository
git init
git config --global credential.helper manager-core
```

On Github create PAT - personal access token. - GH-pages
 (see ../Downloads)
 https://gajol.github.io/


## Jekyll Install
- [Good overview of creating Repo and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
1. [Publishing Source](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites) : The publishing source for your GitHub Pages site is the branch and folder where the source files for your site are stored.
2. [Mime Types](https://github.com/jshttp/mime-db#adding-custom-media-types)

```sh
$ jekyll new --skip-bundle .
# Creates a Jekyll site in the current directory
```


#  Other Atlassian

Atlassian Tutorial : https://www.atlassian.com/git/tutorials/saving-changes/git-stash
>>>>>>> 8b60eb1aa2a7ea44f46e068348f2d29d0df0e3ce


# tutorials
- [move files to another repo](https://medium.com/@ayushya/move-directory-from-one-repository-to-another-preserving-git-history-d210fa049d4b) - includes *git remote rm origin* to unlike local from remote for safety.


# Git Build  



*TODO* Static Site Generator

Generate Combined Markdown File:
https://antora.org/
The multi-repository documentation site generator for tech writers who  writing in AsciiDoc.

## Markdown Preprocessor
https://github.com/jreese/markdown-pp
NOTICE: This project is no longer actively maintained. It will not receive any future releases.
https://github.com/jreese/markdown-pp
https://adityam.github.io/context-blog/post/markdown-with-gpp/

https://github.com/SeanSobey/markdown-preprocessor  (extends gitdown)
zeromq gitdown - https://awesomeopensource.com/project/zeromq/gitdown
- gitdown mainted by https://www.howold.co/person/pieter-hintjens/biography (Peite died 2016)

- Gitdown:  https://github.com/gajus/gitdown  


https://github.com/CDSoft/pp
https://logological.org/gpp
