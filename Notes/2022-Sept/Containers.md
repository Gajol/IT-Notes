
Why use Containers
1. Containers are a solution to the problem of how to get software to run reliably when moved from one computing environment to another. [CIO 2017](https://www.cio.com/article/2924995/what-are-containers-and-why-do-you-need-them.html

With virtualization technology, the package that can be passed around is a virtual machine, and it includes an entire operating system as well as the application. A physical server running three virtual machines would have a hypervisor and three separate operating systems running on top of it.

By contrast a server running three containerized applications with Docker runs a single operating system, and each container shares the operating system kernel with the other containers. Shared parts of the operating system are read only, while each container has its own mount (i.e., a way to access the container) for writing. That means the containers are much more lightweight and use far fewer resources than virtual machines.

2. Containers are small than VMs
A server can run more Containers than VMs; save costs.


3. Modularity / Microservices
A third benefit is that containerization allows for greater modularity. Rather than run an entire complex application inside a single container, the application can be split in to modules (such as the database, the application front end, and so on). This is the so-called microservices approach. 

# Container Formats
- Docker 
- CoreOS App Container Image (ACI)
- Open Container Project (OCP) ; funded by Docker. Open Container Initiative (OCI) under Linux Foundation 
  - sponsors include Microsoft, Oracle, HP, Twitter, Red Hat, VMware 

# Container Management Systems
- kubernetes (free open-source Google project): deploy, maintain and scale containerized applications 
- Docker Enterprise Edition (commercial) : integrated, tested certified platform for running on enterprise Linux & Microsoft 
- Red Hat Open Shift Container Platform 
- Rancher (commercial open source) deploy and manage containers) 

# Containers vs VMs 
- belief VMs are more secure 
- comprehensive software to manage VMs.  The container management software is not as comprehensive. 
- complementary; containers could run in lightweight VMs to increase security and isolation 

# Kubernetes Security Practices 
- keep kubernetes up-to-date and patched.
- follow [CVE for kubernetes](https://www.cvedetails.com/vulnerability-list/vendor_id-15867/product_id-34016/Kubernetes-Kubernetes.html)
- use authorized, signed containers 
- scan and update containers regularly (scanning tools include Sonatype Nexus, CoreOS Clair, Dockscan).  Use SAST, DAST, IAST, or SCA tools : Static/Dynmaic/Interactive Application Security Testing and Software Composition Analysis tools. 
- use TLS for network access.  Use TLS for: 
  - API server access (control plane) 
  - etcd (persistent storage database 
  - kubelet agent 
  - kubends
  - ensure kubernetes clusers have end-to-end TLS enabled 
- Kubernetes RBAC authorization and authentication 
- network policeis enabled 
- kubernetes namespaces for cluster for groups/boundaries 
- implement namespace resource quotas 
- restrict access to insecure API server ports 
- secure dashbaord 
- enable Kubernetes security logging 




https://sysdig.com/resources/ebooks/kubernetes-security-guide/?utm_source=bing&utm_medium=cpc&utm_campaign=403641088&adgroupid=1343603808552220&utm_content=&utm_term=security%20best%20practices%20kubernetes&utm_position=&utm_device=c&utm_type=p&utm_geo=32&msclkid=eaf54a712d78104277eb2b1c9081f6f4





