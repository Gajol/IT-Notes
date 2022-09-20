

# Craig -

An inexpensive method to have a standby-website that can be used in the event the primary site fails.

The website is static (all of the HTML, CSS and JS files are constant) and do not change.  There is no server-side processing as in dynamic pages.


# what to surf
- basic http server backup
- cheap http hosting
- cheap lighttpd hosting
- create static backup of a website
- how to have a standby website
- lighttpd hosts

# Questions
Is it user-controlled (e.g., user is aware and invokes a command)
Is it automated (system is aware and takes action)
 - network routing : http://confignetworks.com/explain-how-to-use-static-routing-for-backup-path-or-load-balancing/ : set administrative distances and ... (but you don't control this - its any user anywhere in the world coming to your server) -
 - nginx routing based on received header (no unique header)


# Options:
- Git build approach
- Git commit hook approach
- End-user command approach ...
- AWS / Terraform / Gitlab
- SSG Hosting

## Not Needed
- LAMP stack : No database is needed.  THe need is to serve static HTML/CSS files.

# nginx
## Install
Ubuntu (too heavy a server for this) - but install curl, update repos to include the nginx repo, sudo apt instal nginx...


# Linux Commands :
wget ...
curl ...
"watch"
rsync https://www.redhat.com/sysadmin/sync-rsync


# Hosts
## nginx

## Lighttpd
- Lighttpd seems less popular.  For example, the last post on Lowendbox was 2008.

www.a2hosting.ca : $5..8USD/month [lighttpd hosting](https://www.a2hosting.ca/lighttpd-hosting)
  - root access to server / files
  - boot, shutdown and reboot control
  - unmanaged - empty box
  - managed VPS $40/mth

lowendbox

whc.ca -

## Shared Hosting

# AWS / Terraform / Gitlab
- https://www.nvisia.com/insights/terraform-automation-with-gitlab-aws
- is there an [AWS marketplace](https://aws.amazon.com/marketplace) for lighttpd server?
  - [Lighttpd PHP FastCGI Configuration - with Adminer by TurnKey Linux (HVM)] : https://aws.amazon.com/marketplace/pp/prodview-ifkqck4btq57u?sr=0-2&ref_=beagle&applicationId=AWSMPContessa
    - HVM - Hardware Virtual Machine
    - t2.small $0.033/hr

## Basic AWS Web Page
### Host a Static Web Site
- https://aws.amazon.com/websites/
- Amazon Lightsail : Lightsail includes everything you need to jumpstart your Website – a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP – for a low, predictable price
  - preconfigured development stacks: LAMP, Nginx, MEAN, and Node.js
  - Easily create and delete development sandboxes and test environments where you can try out new ideas, risk free
  - Lightsail offers preconfigured, one-click-to-launch operating systems, development stacks, and web applications.
  - Highly available SSD storage

#### Charges
- Linux Bundle:  $4USD/mth
- Data Transfer: 1TB
- Containers:
- Object Storage: $1USD/mth  5GB storage, 25GB transfer
- Managed DB: $15/mth
- CDN: $3/mth
- Load Balance: $18/mth
- Block Storage: $1/mth (1GB)


### Web App
- https://aws.amazon.com/getting-started/hands-on/build-web-app-s3-lambda-api-gateway-dynamodb/
  - AWS Amplify : React, Vue, or Next.js web app with built-in continuous integration and continuous deployment (CI/CD) workflows, testing, pull request previews, and custom domains.
  - AWS Lambda
  - Amazon DynamoDB
  - AWS IdAM


# SSG
https://kinsta.com/blog/static-site-generator/

Jekyll, GHPages, Liquid, ...: Markdown
