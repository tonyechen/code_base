# Oracle Cloud Infrastructure
## Cloud Conecpt
---
### **What is cloud?**
Multiple physical machiens act as one system and abstracted into multiple cloud services

### **Types**
Saas - for customers, software as a service, a product run and managed by service provider

Paas - for developers, platform as a service, focus on the deployment and management of your apps. Don't worry about provisioning, configuring, or understanding hardware or OS

Iaas - for admins, infrastructure as a service, building blocks for cloud IT, provide access to networking features, computers and data storage space without worry about IT staff, data centers, and hardware

### **Cloud Deployment Models**
Cloud-Native - everything built on cloud

Hybrid-Architecture - using both on-premise and cloud

Cross-Cloud - using multiple cloud providers

## OCI Global Infrastructure
---
### **Regions**
- a geographically distinct location that has many data center that allow you to launch cloud services

### **Availability Domain**
An AD aka datacenter for OCI, aka a building that contains lots of computers

## **Fault Domains**
an FD aka a logical datacenter for OCI, virtual/abstract data center on top of a physical datacenter

used to isolate groupings of hardware within a datacenter so they don't share a single point of failure


## Core Services
---
### Computing Services
---
Virtual Machines
- multi-tenant server running a hypervisor layer.

Container Engines
- docker as service, you can run docker containers on a virtual machine

Functions
- serverless compute. cloud provider runs your code for a short period of time and you choose a managed container with runtime

Dedicated Virtual Hosts
- a single-tenant server that is running a hypervisor layer where you can run multiple VMs. you don't share the service with anyone else

Bare Metal
- a dedicated server that has no hypervisor layer. You have direct access to processor, memory resources of the server, used when hypervisor would hinder performance for spcialized workload

### Storage Services
---
Block Volume
- like having a local virtual hard drive where you can choose HDD or SSD
- data is split into evenly split blocks directly accessed by the OS, support only a single write volume

Local NVMe
- Non-Volatile-Memory-Express is a transfer protocol for SSD that allows the drives to operate very efficiently

File Storage
- use a files system NSFv3 allowing multiple connections to the same storage device at the same time
- file is stored with data and metadata, multiple connections via a network share 
- support multiple reads, writing locks the file


Object Storage
- Serverless storage. Upload as many files as you like and scale without worrying about running out of space or data loss
- object is stored with data, metadata, and unique ID
- scales with limited no file limit or storage limit
- supports multiple reads and writes with no locks

Archive Storage
- long-term cold storage. Files you need to keep around for years that you infrequently need to accdess at a fraction of the stroage cost

### Networking Services
---
Region - the geographical location of your network

ADs - the datacenter of your resources

FDs - a logical grouping of resources in your data center

VCN - a logically isolated section of the 
OCI Cloud where you launch OCI resources

Internet Gateway - enable excess to the internet

Subnets - a logical partition of an IP network into multiple smaller network segments

Virtual Firewall Options
- security rules
- network security groups
- security lists

Service Gateways - a secure tunnel that keeps traffic within the OCI Network

NAT Gateway- let resources in a private subnet reach the Internet

IPSec VPN - a secure connection to your on-prem to Oracle Cloud

Fast Connect - a dedicated secure connection to your on-prem to Oracle Cloud

Dynamnic Routing Gateway - a virtual router that provides a path for private traffic between VCN and outside network

VCN Peering - create a network connection between VCN

### Virtual Network Interface Cards (VCINs)
- Enables an instance to connect to a VCN and determines how the instance connects with endpoints inside and outside the VCN

### Virtual Firewall Options
1. Security Lists (SLs)
- original firewall feature from the Networking service
- associated with subnets and the security rules apply to VCINs in those subnets

2. Network Security Groups (NSGs)
- new firewall feature designed for application components that have different security postures
- only support for specific services
- directly associated with VCINs regardless of subnet

### Database Services
---
VM DB Systems:
- uses block storage
- fast provisioning
- a vm running a mangaed oracle database instance

BM DB Systems
- use fast local storage
- fast performance
- a bare metal machine running a managed Oracle Database Instance

Oracle RAC
- highly available
- Oracle DBs running as a cluster
- share the same disk but different instances running on different nodes if a node fails, connection fails over another node

Exadata DB Systems
- specialized infrastructure
- a pre-configured combination of hardware and software that provides an infrastructure for running Oracle DB

Autonomous-Shared / Ddicated
- Fully Managed
- automatically patches, upgrades and self-healing bad data
- Highly Available
- Secure

### DB Systems DB Options
Oracle DB Systems
- choose your AD and and Shape Type

MySQL DB Systems
- choose AD, Fault Domain, Shape Type

### Oracle NoSQL
- produce and consume data at high volume and velocity
- require instantaneous response time to match user expectations
- developed with continuously evolving data models
- scale on - demand based on the dynamic workloads

### Cloud Native Services
---
Oracle API Gateway
- a comprehensive platform for managing, delivering, and securing Web APIs

Oracle Streaming
- ingest and store continuous, high-volume data streams and process them in real-time

Oracle Kubernets Container Engine(OKE)
- a managed service to run a Kubernets Cluster

Oracle Registry OCIR
- a repository for your docker containers

Oracle Notifications
- a fully managed publish-subscribe service for reliable and scalable message delivery

Oracle Integrations
- a service to connect on-premise, third party to your OCI with premade adapters for easy application integration

## Security
---
Identify and Access Management (IAM)

Users - an individual employee or system that needs to manage or use your OCI resources

Groups - a collection o users who all need the same type of access to a set of resources or compartment

Dynamic Groups - a special type of group that contains resources that match rules that you define

Policies - a language that defines permissions if users, gorups, or compartments should be allowed access to specific OCI resources in your account

Ex. Allow \<subject> to \<verb> \<resource-typoe> in \<location> where \<conditions>


https://docs.oracle.com/en-us/iaas/Content/Identity/Concepts/commonpolicies.htm

## OCI Vault
- make it easy to create control and rotate encryption keys used to encrypt data on OCI

## OS Management
- a service that allows you to manage updates and patches for the VMs OS running on OCI

## DDoS Protection
- a malicious attempt to disrupt normal traffic by flooding a website with large amounts of fake traffic
