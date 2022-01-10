
# Drupal

Running on VM on Desktop PC
Virtual Box
Ubuntu 21.1


drupal-vbox
doug / pinball


install editor
connect to github
filehsaring to pC via dropbox

tldr (shorter man pages)
sudo apt install nodejs npm
sudo npm install -g tldr
tldr --update


# Ubuntu Vbox Configs

## Screen Scaling
Shut down your Ubuntu VM.
[screen size](https://askubuntu.com/questions/104440/how-do-you-resize-the-standard-ubuntu-desktop-inside-of-virtualbox)

[screen size]
https://askubuntu.com/questions/22743/how-do-i-install-guest-additions-in-a-virtualbox-vm

``` sh
sudo apt-get install virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11
```
Didn't work - trying [guest addtions](https://help.ubuntu.com/community/VirtualBox/GuestAdditions)
In the guest virtual machine, choose Devices -> Install Guest Additions from the menubar of VirtualBox.

- this fixed the system disk warning; https://blog.surges.eu/virtualbox-how-to-solve-the-issue-with-low-disk-space/





# Drupal Install
[ref: DrupalWxT ](https://github.com/drupalwxt/wxt) - We highly recommend using our Composer-based project template to build and maintain your WxT derived project’s codebase.
If you don't want to use Composer, you can install WxT the traditional way by downloading a tarball from [WxT's GitHub releases page](https://github.com/drupalwxt/wxt/releases).

or (as per M.Woolfe) : [DrupalWxT Container Image](https://hub.docker.com/r/drupalwxt/site-wxt) & [Helm Chart](https://github.com/drupalwxt/helm-drupal)

## Try Install Using Composer
[PHP Composer](https://getcomposer.org/) : A Dependency Manager for PHP
- Composer is not a package manager in the same sense as Yum or Apt are. Yes, it deals with "packages" or libraries, but it manages them on a per-project basis, installing them in a directory (e.g. vendor) inside your project. By default, it does not install anything globally. Thus, it is a dependency manager. It does however support a "global" project for convenience via the global command.

This idea is not new and Composer is strongly inspired by node's npm and ruby's bundler.

## PHP
https://ubuntu.com/server/docs/programming-php
sudo apt install php

## Composer
sudo apt install curl
curl -sS https://getcomposer.org/installer -o composer-setup.php

(global install)
php composer-setup.php --install-dir=/usr/local/bin --filename=composer




## Install WxT
composer self-update
composer create-project drupalwxt/wxt-project:4.1.x MYPROJECT
[ref:](https://github.com/drupalwxt/wxt)
composer create-project drupalwxt/wxt-project:4.1.x-dev MYPROJECT
- was asked to "Enter composer project name "drupalwxt/site-wxt)" - I entered "Douglas"
- likely wrong answer as I got "Your requirements could not be resolved to an installable set of packages"
  - needed PHP dom
    - sudo apt-get install php-xml
  - needed ext-gd
    - sudo apt install php-gd
- failing on PHP version (https://stackoverflow.com/questions/66368196/reference-composer-error-your-php-version-does-not-satisfy-requirements-afte)

- used common-software-properties to install php7.4
https://www.tecmint.com/install-different-php-versions-in-ubuntu/  ( the ubuntu 21.1 image had php8.0)
  - again, requires dom..., php-gd, ...
  - installed by version:
  sudo apt install php7.4-xml
  sudo apt install php7.4-gd
  sudo apt install php7.4-curl
  composer require embed/embed

  



drupal/core 9.1.14
