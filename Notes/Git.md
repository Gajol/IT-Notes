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

# Git stash
Atlassian Tutorial : https://www.atlassian.com/git/tutorials/saving-changes/git-stash
