
# Installing Things

## Package Manager
Configuring to use a package repository (using the Atom install [Atom Install](https://flight-manual.atom.io/getting-started/sections/installing-atom/)) requires:
- getting a key `wget -q0 - <url>`
- adding the key to APT `apt-Key add...`
- install app `apt` or `apt-get`

```sh
```
wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
sudo apt-get update

# Install Atom
sudo apt-get install atom
# Install Atom Beta
sudo apt-get install atom-beta

### Updating the package
If you are using Atom's official package repositories, use your distribution's package manager to update Atom. 
```
# fetch updated index
sudo apt-get update
# update package
sudo apt update

# view packages ready to be upgraded
sudo apt list --upgradable
# upgrade
sudo apt upgrade

# upgade a specifc package named ppp
sudo apt-get --only-upgrade install ppp
```

## Checking apt sources
`$ cat /etc/apt/sources.list`


