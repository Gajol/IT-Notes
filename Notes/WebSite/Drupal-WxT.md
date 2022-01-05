- [ ]  Field Effect - Work using


Your GitHub credentials have been added to your Microsoft account (doug@nielsenfamily.ca).
Next time you sign in, you can choose to use your existing Microsoft account password or to be redirected to GitHub to sign in with Gajol.
https://azure.microsoft.com/

1. Deploy an AKS cluster using the Azure portal. https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal
1. Follow this tutorial to prepare an app for AKS. https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app
1. Learn more about AKS. https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes

[Azure Portal](https://portal.azure.com/)
[Azure](https://azure.microsoft.com/en-us/)

Azure Account setup
doug@...   2112240060000005
You're not eligible for an Azure free account
Don't worry—you can still use Azure by paying as you go, with no upfront commitments. Cancel anytime.
ticket

Create next-generation solutions and deploy them anywhere—on or off the planet. Get started with an Azure free account, 12 months of popular services free, and a $200 credit.

try stuff@...
You're not eligible for an Azure free account
Don't worry—you can still use Azure by paying as you go, with no upfront commitments. Cancel anytime.
Case: SR2112240040003079

Azure Lighthouse: This service supports Azure Lighthouse, which lets service providers sign in to their own tenant to manage subscriptions and resource groups that customers have delegated.

# Azure to Amazon Comparison

|Service|Microsoft Azure|Amazone Web Service|Comment|
|--|--|--|--|
|Containers in Cloud, Container Instance|ACI - Azure Container Instance|Amazon Fargate|Ideal for simple container-based workloads like smaller-scale apps, build jobs, and task automation. ACI does not require the use of Kubernetes or other orchestrators.  ACE support can be used together with plain Kubernetes or Azure Kubernetes Service.|
|Managed kubernetes in Cloud|Azure Kubernetes Service (AKS) simplifies the deployment of managed kubernetes in the Cloud||AKS handles most of the complexity and operational tasks related to managing Kubernetes—including tasks like health monitoring, upgrades, and networking. AKS manages Kubernetes master nodes, while customers manage and maintain agent nodes. AKS is a free managed service. Customers are only required to pay for agent nodes used by the clusters. There is no need to pay for any of the masters, which are configured and deployed by AKS.  [Comparison to Instances](https://cloud.netapp.com/blog/azure-cvo-blg-azure-container-instances-vs-aks-how-to-choose)|

AKS Intro (25min): https://docs.microsoft.com/learn/modules/intro-to-azure-kubernetes-service/?WT.mc_id=APC-Kubernetesservices
K8s (53min): https://docs.microsoft.com/learn/modules/intro-to-kubernetes/?WT.mc_id=APC-Kubernetesservices
Helm (app & pkg mgmt - 58min): https://docs.microsoft.com/learn/modules/aks-app-package-management-using-helm/?WT.mc_id=APC-Kubernetesservices
AKS Overview: https://docs.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=APC-Kubernetesservices
AKS Get Started: https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal?WT.mc_id=APC-Kubernetesservices
AKS Documentation:
https://docs.microsoft.com/azure/aks?WT.mc_id=APC-Kubernetesservices
https://docs.microsoft.com/en-us/azure/aks/
Reference Implementation: https://github.com/mspnp/aks-fabrikam-dronedelivery

# AKS Pricing
https://azure.microsoft.com/en-us/pricing/details/kubernetes-service/
Calculator: https://azure.microsoft.com/en-us/pricing/calculator/?service=kubernetes-service


# AKS overview
You can create an AKS cluster using:
- The Azure CLI
- The Azure portal
- Azure PowerShell
Using template-driven deployment options, like Azure Resource Manager templates and Terraform

# Container Instance vs Kubernetes Service
https://cloud.netapp.com/blog/azure-cvo-blg-azure-container-instances-vs-aks-how-to-Choose




- [ ] - https://blogit.michelin.io/statefull-application-on-kubernetes/

https://drupalwxt.github.io/wxt/repositories/
https://github.com/drupalwxt/

Install AKS
[Kubernetes Concepts for Azure Kubernetes Service](https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads)

Azure Credit Ticket - SR2112240060000005  

Helm Chart : https://github.com/drupalwxt/helm-drupal
This chart will allow you to setup and configure Drupal alongside with other integrations:

MySQL configured with ProxySQL
PostgreSQL configured with PGBouncer
Redis
Varnish
Please consult our Architectural Diagram for a recommended setup on Azure:

[Architectural Diagram](https://github.com/drupalwxt/helm-drupal/blob/master/docs/diagram-drupal.pdf)

Canada installation profile is a sub-profile of WxT sub-profile of Lighting : Lightning Framework created by Acquia

CSPS Digital Academy William Hern - 3hour course - https://www.youtube.com/watch?v=QvMWls8OdmM
Orchard Core CMS - https://github.com/StatCan/StatCan.OrchardCore

shared persistent storage
https://blogit.michelin.io/statefull-application-on-kubernetes/

# Helm Drupal
https://github.com/drupalwxt/helm-drupal
Note: It is recommended that if you are installing this in a cloud environment that you use a shared file system provided by the environment you are running in for the stateful assets. An example for Azure is provided by using the values-nfs-azurefile.yaml as your override file which will allow for stateful assets to work across the nginx and php-fpm containers by using Azure Files (NFS). If you are using other Cloud Providers they will have similar offerings and the CSI driver will be different then azureFile.
https://github.com/drupalwxt/helm-drupal/tree/master/docs

Search
integrated with Solr via https://solr.apache.org/operator/ : Using the SearchAPI module in Drupal we can index content in a variety of search platforms with particular attention focused on either Solr. The Drupal WxT Helm Chart provides integration with the Solr Operator.(https://github.com/drupalwxt/helm-drupal/tree/master/docs)
Solr Operator : The Solr Operator is a control-plane manager for a Solr ecosystem in Kubernetes.

[Solr Operator Documentation](https://apache.github.io/solr-operator/)

# Installation
[Composer](http://getcomposer.org/) is a PHP package management tool to help manage your project or libraries' dependencies. This project allows use of Composer from Drush(http://drupal.org/project/drush).


# Modules
Lightning provides core modules[ref](https://drupalwxt.github.io/docs/modules/)
Complete list of modules used by [DrupalWxT](https://git.drupalcode.org/project/wxt/blob/8.x-3.x/composer.json)

- [Composer Workflow](https://drupalwxt.github.io/docs/composer/): Composer can be used to manage Drupal and all dependencies (modules, themes, libraries). Make sure you have composer installed on your local machine before executing any Composer commands.  Composer also helps facilitate a more security oriented approach whether packaging or deploying a site. In a WxT site the only code in the repository will be custom code and everything else is defined as a dependency. This makes clear what audit-able surface is.




# Authoring
We chose [Lightning](https://github.com/acquia/lightning) because of it being the best standard for enterprise authoring in Drupal tightly focused on the user experience in key functional areas.
- Acquia is ending support for the Lightning distribution in November 2021 - https://lightning.acquia.com/
- Lightning (__archived - read-only__) Lightning was a base distribution for fast and feature-rich Drupal. Support ended on November 2, 2021 and it is no longer maintained.[Lightning - EOL](https://github.com/acquia/lightning)


# Stats Canada
- [Drupal Architecture](https://govcloud.blob.core.windows.net/docs/architecture.pdf) : This document represents a high-level overview of how  Drupal  should be architected in the cloud to support any of the Government of Canada procured cloud service providers (AWS, Azure, and GCP), as well as upcoming ones such as IBM and Oracle. This would also work in an on-premise environment with the appropriate infrastructure. [ref: DrupalWxt](https://drupalwxt.github.io/docs/modules/)


# Terms

- PVC : [Persistent Volumes](https://kubernetes.io/fr/docs/concepts/storage/persistent-volumes/) : A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.  [ Use Case: Drupal ]


# Support Model
from M Woolfe - ongoing support with Drupal involves setting up nodes/content/webforms for our Communications team or ensuring content authors have the proper permissions required to create their content.
