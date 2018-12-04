---
path: "/iot/cloud-computing"
date: "2018-12-04"
title: "Cloud Computing"
author: "Kristoffer-Andre Kalliainen"
draft: false
tags: "iot"
ogKeywords: "iot cloud-computing"
ogDescription: "Cloud Computing"
---

## Characteristics of Cloud Computing

### On-demand self service

Cloud computing resources can be provisioned on-demand by the users, without requiring interactons with the cloud service provider. The process of provisioning resources is automated.

### Broad network access

Cloud computing resources can be accessed over the network using standard access mechanisms that provide platform-independent access through the use of heterogeneous client platforms such as workstations, laptops, tablets and smartphones.

### Resource pooling

The computing and storage resources provided by cloud service providers are pooled to serve multiple users using multi-tenancy. Multi-tenancy aspects of the cloud allow multiple users to be served by the same physical hardware. Users are assigned virtual resources that run on top of the physical resources.

### Rapid elasticity

Cloud resources ca be rapidly scaled up or down based on demand. Two types of scaling options exists:
 
>**Horizontal Scaling (scaling out)**  
> Horizontal scaling or scaling-out involves launching and provisioning additional server resources.

> **Vertical Scaling (scaling up)**  
> Vertical scaling or scaling-up involves changing the computing capacity assigned to the server resources while keeping the number of servers resources constant

### Meaured service

Cloud computing resources are provided to users on a pay-per-use model. Metrics such as amount of CPU cycles used, amount of storage space used, number of network I/O requests, etc. are used to calculate the usage charges of the cloud resources.

### Performance

Cloud computing provides improved performance for applications since the resources available to the application can be scaled up or down based on the dynamic application workloads.

### Reduced costs

Cloud computing provides cost benefits for applications as only as much computing and storage resources as required can be provisioned dynamically, and upfront investment in purchase of computing assets to cover worst case requirements is avoid.

### Outsorced Managment

Cloud computing allows the users to outsource the IT infrastructure requirements to external cloud providers.

### Reliability

Applications deployed in cloud computing environments generally have a higher reliability since the underlying IT infrastructure is professionally managed by the cloud service. Most cloud providers delivers a SLA (service level agreements) with promise of 99.99% uptime guarantee for the cloud resources, witch may often be expensive to achieve with in-house IT infrastructure.

### Multi-tenancy

The multi-tenanted approach of the cloud allows multiple users to make use of the same shared resources. Multi-tenanct can be of different forms:

> **Virtual multi-tenancy**  
> In virtual multi-tenancy, computing and storage resources are shared among multiple users. Multiple tentant are served from virtual machines (VMs) that execute concurrently on top of the same computing and storage resources.

> **Organic multi-tenancy**  
> In a organic multi-tenancy every component in the system architecture is shared among multiple tentants, including hardware, OS, database servers, application servers, load balances, etc. Organic multi-tenancy exists when explicit multi-tenant design patterns are coded into the application.

## Cloud Models

### Service Models

#### Infrastructure-as-a-Service (IaaS)

IaaS provides the users the capability to provision computing and storage resources. These resources are provided to the users as virtual machines instances and virtual storage. Users can start, stop, configure and manage the virtual machine instances and virtual storage.Users can deploy operating systems and applications of their choise on the virtual resources provisioned in the cloud. The cloud service provider manages the underlying infrastructure. The users are billed on the pay-per-useparadigm. Common metering used are the number of virtual machines hours used and/or the amount of storage space provisioned.

##### Platform-as-a-Service (PaaS)

PaaS provides the users the capability to develop and deploy application in the cloud using the development tools, application programming interfaces (API's), software libraries and services provided by the cloud service provider. The cloud service provider manages the underlying cloud infrastructures including servers, network, operating systems and storage. The users, themselves, are repsonsible for developing, deploying, configuring and managing applications on the cloud infrastructure.

##### Software-as-a-Service (SaaS)

SaaS provides the users a complete software appliation or the user interface to the application itself. The cloud service provider manages the underlying cloud infrastructure including servers, network, operating systems, storage and application software, and the user is unaware of the underlying architecture of the cloud. Applications are privided to the user through a thin client interface (e.g., a browser)