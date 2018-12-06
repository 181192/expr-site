---
path: "/questions/iot"
date: "2018-11-26"
title: "IoT Questions"
author: "Kristoffer-Andre Kalliainen"
draft: false
tags: "questions"
ogKeywords: "IoT questions"
ogDescription: "IoT Questions"
---

## Internet of Things (IoT) / Web of Things (WoT)

1. Describe an example of an IoT system in which information and knowledge are inferred from data.

> A weather monitoring system where sensors sends raw data values, ex (((67,25);(67,24)), for humidity and temperature. Context is added to the data in form of tuples ex ("humidity", 67). This gives us information and knowledge can be obtained by continuous monitoring of the sensor data and adding ex alerts if the values exceeds a certain threshold.

2. Why do IoT systems have to be self-adapting and self-configuring?

> I general it's because the basic concept of IoT that it should not be more of a hazzle for the client to use than the manual counterpart. In other words, example if you need to change the architecture of the network it can be done without taking down all nodes. Self-adapting is limited to the intelligense given to the device. Say a survilliance camera could switch to night mode given that it has knowledge of the time, or drapes could close if the sensor detects sunlight directed towards it. This touches on self configuring where several devices works together to provide a certain functionality such as a weather monitoring system. The devices can have the ability to to configure themselves, setup the networking and fetch latest sw upgrade with minimal user intervention.

3. What is the role of things and Internet in IoT?

> The "things" can perform remote sensing, actuating or monitoring. They have unique identities and can exchange data with other connected devices and applications (directly or indirectly) or collect data from other devices and process the data either locally or send it to centralized servers or cloud based applications for processing the data.

4. What is the funtion of communication funtional block in an IoT system?

> It handles the communication for the IoT system. It adapts to the different protocols for communicating in an IoT network such as:
>
> - HTTP (Stateless aka each request is independent of previous requests) --> TCP --> URI's --> Request/Response
> - CoAP (Machine to Machine, M2M) --> UDP --> URI's --> Client/Server
> - WebSocket (Full duplex) --> TCP --> Client/Server
> - MQTT --> Client/Server --> Topics --> Publish/Subscribe --> Broker middleman.
> - XMPP --> Real time streaming of XML data --> Client/Server, Server/Server.
> - DDS --> Device/Device, Machine/Machine --> Publish/Subscribe --> Topics --> QoS (Quality of Service).
> - AMQP --> Publish/Subscribe, Point-to-Point --> Uses message queues.

5. Describe an exampe of IoT service that uses publish-subscribe communication model.

> MQTT, DDS and AMQP.

6. Describe an example of IoT service that uses WebSocked-based communication.

> WebSocket is a simple tcp based protocol which does the initial handshake by http and keeps a persistent tcp connection to the server.
> Unlike http, it is a duplex connection that allows client and server push frames from either side. Hence allowing the client and server to communicate in more real-time. A self driving car, pizza delivery service, realtime ambulance guiding system to accident spot etc. There are many usecase where websockets can be or will be or being used.

7. What are the architectural constraints of REST?

> A HTTP Client (REST-Aware), A HTTP Packet (HTTP Commands(GET, PUT, POST, DELETE) REST payload (JSON, XML)), A HTTP Server (Authorization, RESTful Web Service) and the Resources (Software components for accessing, processing and storing sensor data or controlling actuators and remote monitoring capabilities).

8. What is the role of a coordinator in wireless sensor network?

> The coordinator collects data from all nodes (which can have several sensors attached) and acts as a gateway between the WSN (Wireless Sensor Network) and WLAN/Ethernet.

9. What is the role of a controller service in an IoT system?

> Controller service is a native service that runs on the device and interacts with the web services. It sends data from the device and receives commands from the application (via web services) for controlling the device.

## Cloud computing

### Cloud computing models and services

1. Define cloud computing

> Cloud computing let the user(s) access computing, network and storage resources as on demand services without requiring interactions with the Cloud service provider. It can be accessed over the network via standard access mechanics making it platform independent for workstations, laptops, tables and smart phones.

2. List the pros and cons of cloud computing.

> **Pro:**
>
> - Cost efficient - save the cost of HW and implementing services with the same flexibility as Cloud computing.
> - Almost Unlimited Storage
> - Backup and Recovery
> - Automatic Software Integration
> - Easy Access to Information
> - Quick Deployment

> **Con:**
>
> - Technical Issues, cloud internal issues or your internet connection.
> - Security in the Cloud, sensitive information to a third-party cloud service provider.
> - Prone to attack, cloud services are more prone to attacks than your standalone servers.

3. Distinguish between IaaS, PaaS and SaaS.

> **Iaas: Infrastructure-as-a-Service**  
> Computing and storage resources in form of virtual machine and virtual storage. Users can start, stop, configure and manage the virtual machine instances. Users can deploy operating systems and applications of their choice.
>
> **TL;DR** Virtual Resources.

> **PaaS: Platform-as-a-Service**  
> Users can develop and deploy applications in the cloud using the development tools, APIs, libraries and services provided by the cloud service provider. The cloud service provider manages the underlying infrastructure with operating system, servers, network and storage.
>
> **TL;DR** User responsible for development, deploying, configuring and managing applications on the cloud.

> **Saas: Software-as-a-Service**  
> Cloud service provides the user with complete software applications, or the user interface to the application. The cloud provides all the underlying infrastructures. Applications to the user is provided through platfor independent thin clients aka web browsers.
>
> **TL;DR** User accesses application through web browser.

4. Define mulit-tenancy. What is the difference between virtual and organic multi-tenancy?

> **Common factors:**  
>  Specific physical resources assigned to each tenant or virtual storage array
> Specific management and security restrictions
> Multiple parties each having access to, and control over, their own storage resources
>
> - Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. Tenants may be given the ability to customize some parts of the application, such as color of the user interface (UI) or business rules, but they cannot customize the application's code.
>
> - A Virtual-tenancy is an architecture in which a single instance of a software application serves single customers.

5. What is the difference betwwen horizontal scaling and vertical scaling? Describe scenarios in which you will use each type of scaling.

6. Define virtualization. What is the difference between full, para- and hardware-ssisted virtualization?

### Cloud concepts and technologies

1. What are the various layers in a virtualization architecture?
2. What is the difference between full and para-virtualization?
3. What are the benefits of load balancing?
4. What are sticky sessions?
5. What are the difference between traditional and on-demand scaling approaches?
6. What are the various stages in the deployment lifecycle?
7. hat is the difference between array-based and host-based replication?
8. In MapReduce, what are the functions of map, reduce and combine tasks?
9. Describe three applications that can benefit from the MapReduce programming model?
10. What are the various criteria for service level agreements?
