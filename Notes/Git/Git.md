Git.md

# Development - Sharing Repository
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

- [Caching GitHub credentials in Git](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).  Can use github cli (need to install gh), or, use Git Credential Management (GCM).  For GCM:
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


#  Other Atlassian
Atlassian Tutorial : https://www.atlassian.com/git/tutorials/saving-changes/git-stash

# Tutorials
- [move files to another repo](https://medium.com/@ayushya/move-directory-from-one-repository-to-another-preserving-git-history-d210fa049d4b) - includes *git remote rm origin* to unlike local from remote for safety.

# Git Build  

 Github


# Git Push
## Failure Message
- [git push - stack overflow](https://stackoverflow.com/questions/39399804/updates-were-rejected-because-the-tip-of-your-current-branch-is-behind-its-remot#39400690)
```
git push -f origin master
```


# Git Sub Modules
- [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules ) : allow you to work with other git projects inside your project and separate the git commits.
