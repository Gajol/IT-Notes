

Nordic Ski Club - One Skate
https://www.youtube.com/watch?v=S47I-3gjzzg&ab_channel=NordicSkiLab
Beginner Drill (Nordic Ski Club) V2 / One Skate
https://www.youtube.com/watch?v=-yr0YtQ_UDQ&ab_channel=NordicSkiLab
Drills
 https://www.youtube.com/watch?v=7ZqtGqD1zOo&ab_channel=NordicSkiLab

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

Questions to Investigation Options for:
- Understand different components in architecture and their use.  (Redis, NGINX, ).   
- Which Drupal version to deploy.


# Ability to Configure Drupal
IT Admin Accounts
Web Master Accounts
Content Publisher Accounts

#
