
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
