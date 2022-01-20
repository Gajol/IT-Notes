



# Goals

## ITSS
Ability to provide Drupal WxT (Web Experience Toolkit) in Classified Production and PB-Cloud.
This includes:
- Deploy & Configure: ability to deploy and configure an instance of DrupalWxT
  - ability to deploy in a cloud-native environment (as per [Drupal WxT Reference Architecture](https://github.com/drupalwxt/helm-drupal/blob/master/docs/diagram-drupal.pdf))
  - ability to deploy an on-premise solution of DrupalWxT leveraging Classified Production ITDO services (non-cloud native deployment)
- Secure: ability to secure DrupalWxT with best DevOps practices (shift-left security)
  - Patch: ability to patch on a regular basis ( steps towards continuous deployment )
- Administration:  The knowledge of what roles (Active Directory defined) are required for the solution.  The ability to provision (add, remove, modify) user roles.


This excludes:
- webmaster expertise.  The business (ECE) will be responsible for these skillsets
- content publishing.  The business (content publishers, ECE, ++) will be responsible for these skillsets.

# Ability to Deploy Drupal - Cloud Native Deployment

Goal:
Deploy into our Azure cloud a DrupalWXT instance.

References:
- [Drupal WxT](https://drupalwxt.github.io/en/)
- Drupal Image : https://hub.docker.com/r/drupalwxt/site-wxt
- Helm Chart: https://github.com/drupalwxt/helm-drupal
  - [DrupalWxT Github](https://github.com/drupalwxt)
  - [DrupalWxT Architecture Diagram](https://github.com/drupalwxt/helm-drupal/blob/master/docs/diagram-drupal.pdf)

Tasks:
- Research and understand how to deploy [Drupal Image](https://hub.docker.com/r/drupalwxt/site-wxt).   Tools used::
  - [Composer - PHP Dependency Manager](https://getcomposer.org/)
  - [NodeJS](https://nodejs.org/en/)
- Deploy Drupal image to a container in our Cloud environment.   Work with DS to ensure container is secure "walled-off"
- Configure and Provision three (3) basic roles; IT-admin, webmaster and content-publisher.


Questions to Investigation Options for:
- Begin to understand different components in architecture and their use.  (Redis, NGINX, ).   
- Become opinionated on Which Drupal version to deploy.
- Which roles should be configured for an initial experiment (internal to ITSS initially, but eventuall with ECE)?
- How can this be deployed on-premise use (or without using) the DS CI/CD Pipeline.


# Ability to Configure Drupal
IT Admin Accounts
Web Master Accounts
Content Publisher Accounts

# Future

## Content Lifecycle
How can content be disposed of either automatically (time & metadata based) or through a workflow?

## Media
Media: Client wants ability to play high-definitiion media nationwide.   No idea of how much or how often which would affect the design and infrastructure needs.   Some numbers to help (prior to requirements) for video-on-demand (versus multicast):
- people: assume 3,000 employees
- usage: assume 505 of employees watch 0.5 hours a day
- peak: assume peak time is ??

Options:
1. Media Server & oEmbed : Can Drupal support the oEmbed standard to embed content from another source.
  - [Drupal Embedded Media Field](https://www.drupal.org/project/emfield): For YouTube, TED, Fox, Flick, Facebook, ...media embeds.
  - [oEmbed Standards](https://oembed.com/)
  - [Media Management in Drupal 8.6](https://opensenselabs.com/blog/articles/media-management-drupal-86)
  - [Drupal - Cloud Acquia Digital Asset Media](https://www.drupal.org/project/media_acquiadam)
  - [Drupal - Asset and Media Management Moduels](https://www.drupal.org/node/206708)

## Bilingual
Consult Drupal WxT and GC people for their best practices.
Drupal should also be bilingual for IT / IM administrators.  I assume the StatsCan DockerHub Drupal image includes the Configruation Translation moduel.  From the user guide (2021-01):

```
Even if the default language of your site is not English, you will still see English text on
certain administrative pages used to manage configuration. The reason is that when you
edit configuration, you are editing the base, untranslated configuration values; translating
configuration is a separate operation. For example, if you visit the Menus administration
page, you will see menu names in English (for the menus that were set up when you installed
your site), and if you click an Edit menu link, you will be editing the English name and
description of the menu. To edit the menu name in a different language, you would need to
have the core __Configuration Translation__ module installed, and use the Translate link to edit
the translated menu information.
```

  # References
  - [Tutorial Sprint - Drupal](https://www.tutorialspoint.com/drupal/)

# Drupal:

[Drupal User Guide](https://www.drupal.org/docs/user_guide/en/index.html)   

[Nodes](https://www.drupal.org/docs/7/nodes-content-types-and-fields/about-nodes) : A node is any piece of information: page, poll, article, forum topic, or a blog entry.  The Drupal Node Module manages these nodes:
- List, sort through, and manage all the content on your site.
- Set defaults for how all posts are displayed.
- List and configure the "content types" for your site, and create new ones.

The Node module manages the creation, editing, deletion, settings, and display of the main site content. Content items managed by the Node module are typically displayed as pages on your site, and include a title, some meta-data (author, creation time, content type, etc.), and optional fields containing text or other data. (Fields are managed by the [Field module](https://www.drupal.org/documentation/modules/field) in Drupal 7.)
