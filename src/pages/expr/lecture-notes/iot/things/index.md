---
path: "/iot/iot"
date: "2018-12-01"
title: "Internet of Things"
author: "Kristoffer-Andre Kalliainen"
draft: false
tags: "iot"
ogKeywords: "iot"
ogDescription: "All about IoT"
---

# Concepts

## IoT (Internet of Things)

The Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.

In the Internet of Things, all the things that are being connected to the internet can be put into three categories:

- Things that collect information and then send it.
- Things that receive information and then act on it.
- Things that do both.

## Things

A “thing” is an object equipped with sensors that gather data which will be transferred over a network and actuators that allow things to act (for example, to switch on or off the light, to open or close a door, to increase or decrease engine rotation speed and more). This concept includes fridges, street lamps, buildings, vehicles, production machinery, rehabilitation equipment and everything else imaginable. Sensors are not in all cases physically attached to the things: sensors may need to monitor, for example, what happens in the closest environment to a thing.

## Gateways

Data goes from things to the cloud and vice versa through the gateways. A gateway provides connectivity between things and the cloud part of the IoT solution, enables data preprocessing and filtering before moving it to the cloud (to reduce the volume of data for detailed processing and storing) and transmits control commands going from the cloud to things. Things then execute commands using their actuators.

## Cloud gateway

Cloud gateway facilitates data compression and secure data transmission between field gateways and cloud IoT servers. It also ensures compatibility with various protocols and communicates with field gateways using different protocols depending on what protocol is supported by gateways.

## RESTful API

A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.

A RESTful API, also referred to as a RESTful web service, is based on representational state transfer (REST) technology, an architectural style and approach to communications often used in web services development.

The REST used by browsers can be thought of as the language of the internet. With cloud use on the rise, APIs are emerging to expose web services.

### How RESTful APIs work

A RESTful API breaks down a transaction to create a series of small modules. Each module addresses a particular underlying part of the transaction. This modularity provides developers with a lot of flexibility, but it can be challenging for developers to design from scratch. Currently, the models provided by Amazon Simple Storage Service, Cloud Data Management Interface and OpenStack Swift are the most popular.

A RESTful API explicitly takes advantage of HTTP methodologies. They use GET to retrieve a resource; PUT to change the state of or update a resource, which can be an object, file or block; POST to create that resource; and DELETE to remove it.

With REST, networked components are a resource you request access to -- a black box whose implementation details are unclear. The presumption is that all calls are stateless; nothing can be retained by the RESTful service between executions.

Because the calls are stateless, REST is useful in cloud applications. Stateless components can be freely redeployed if something fails, and they can scale to accommodate load changes. This is because any request can be directed to any instance of a component; there can be nothing saved that has to be remembered by the next transaction. That makes REST preferred for web use, but the RESTful model is also helpful in cloud services because binding to a service through an API is a matter of controlling how the URL is decoded. Cloud computing and microservices are almost certain to make RESTful API design the rule in the future.

# Protocols

## CoAP

Constrained Application Protocol (CoAP) is a protocol that specifies how low-power compute-constrained devices can operate in the internet of things (IoT).

CoAP is designed to enable simple, constrained devices to join the IoT even through constrained networks with low bandwidth and low availability. The protocol is generally used for machine-to-machine (M2M) communication.

CoAP functions as a sort of HTTP for constrained devices, enabling such component level equipment as sensors or actuators to communicate on the IoT, being controlled and passing along their data as part of a system. The protocol is designed for reliability in low bandwidth and high congestion through its low power draw and low network overhead.

## IP (Internet Protocol)

The Internet Protocol (IP) is the method or protocol by which data is sent from one computer to another on the Internet. Each computer (known as a host) on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet.

Because a message is divided into a number of packets, each packet can, if necessary, be sent by a different route across the Internet. Packets can arrive in a different order than the order they were sent in. The Internet Protocol just delivers them. It's up to another protocol, the Transmission Control Protocol (TCP) to put them back in the right order.

IP is a connectionless protocol, which means that there is no continuing connection between the end points that are communicating. Each packet that travels through the Internet is treated as an independent unit of data without any relation to any other unit of data. (The reason the packets do get put in the right order is because of TCP, the connection-oriented protocol that keeps track of the packet sequence in a message.) In the Open Systems Interconnection (OSI) communication model, IP is in layer 3, the Networking Layer.

The most widely used version of IP today is Internet Protocol Version 4 (IPv4). However, IP Version 6 (IPv6) is also beginning to be supported. IPv6 provides for much longer addresses and therefore for the possibility of many more Internet users. IPv6 includes the capabilities of IPv4 and any server that can support IPv6 packets can also support IPv4 packets.

## TCP (Transmission Control Protocol)

TCP (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation via which application programs can exchange data. TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other. Together, TCP and IP are the basic rules defining the Internet.

TCP is a connection-oriented protocol, which means a connection is established and maintained until the application programs at each end have finished exchanging messages. It determines how to break application data into packets that networks can deliver, sends packets to and accepts packets from the network layer, manages flow control, and—because it is meant to provide error-free data transmission—handles retransmission of dropped or garbled packets as well as acknowledgement of all packets that arrive. In the Open Systems Interconnection (OSI) communication model, TCP covers parts of Layer 4, the Transport Layer, and parts of Layer 5, the Session Layer.

For example, when a Web server sends an HTML file to a client, it uses the HTTP protocol to do so. The HTTP program layer asks the TCP layer to set up the connection and send the file. The TCP stack divides the file into packets, numbers them and then forwards them individually to the IP layer for delivery. Although each packet in the transmission will have the same source and destination IP addresses, packets may be sent along multiple routes. The TCP program layer in the client computer waits until all of the packets have arrived, then acknowledges those it receives and asks for the retransmission on any it does not (based on missing packet numbers), then assembles them into a file and delivers the file to the receiving application.

Retransmissions and the need to reorder packets after they arrive can introduce latency in a TCP stream. Highly time-sensitive applications like voice over IP (VoIP) and streaming video generally rely on a transport like User Datagram Protocol (UDP) that reduces latency and jitter (variation in latency) by not worrying about reordering packets or getting missing data retransmitted.

## UDP (User Datagram Protocol)

UDP (User Datagram Protocol) is an alternative communications protocol to Transmission Control Protocol (TCP) used primarily for establishing low-latency and loss-tolerating connections between applications on the internet.

Both UDP and TCP run on top of the Internet Protocol (IP) and are sometimes referred to as UDP/IP or TCP/IP. But there are important differences between the two.

Where UDP enables process-to-process communication, TCP supports host-to-host communication. TCP sends individual packets and is considered a reliable transport medium; UDP sends messages, called datagrams, and is considered a best-effort mode of communications.

In addition, where TCP provides error and flow control, no such mechanisms are supported in UDP. UDP is considered a connectionless protocol because it doesn't require a virtual circuit to be established before any data transfer occurs.

UDP provides two services not provided by the IP layer. It provides port numbers to help distinguish different user requests and, optionally, a checksum capability to verify that the data arrived intact.

TCP has emerged as the dominant protocol used for the bulk of internet connectivity due to its ability to break large data sets into individual packets, check for and resend lost packets, and reassemble packets in the correct sequence. But these additional services come at a cost in terms of additional data overhead and delays called latency.

In contrast, UDP just sends the packets, which means that it has much lower bandwidth overhead and latency. With UDP, packets may take different paths between sender and receiver and, as a result, some packets may be lost or received out of order.

### Applications of UDP

UDP is an ideal protocol for network applications in which perceived latency is critical, such as in gaming and voice and video communications, which can suffer some data loss without adversely affecting perceived quality. In some cases, forward error correction techniques are used to improve audio and video quality in spite of some loss.

UDP can also be used in applications that require lossless data transmission when the application is configured to manage the process of retransmitting lost packets and correctly arranging received packets. This approach can help to improve the data transfer rate of large files compared to TCP.

In the Open Systems Interconnection (OSI) communication model, UDP, like TCP, is in Layer 4, the transport layer. UDP works in conjunction with higher level protocols to help manage data transmission services including Trivial File Transfer Protocol (TFTP), Real Time Streaming Protocol (RTSP), Simple Network Protocol (SNP) and domain name system (DNS) lookups.

### User datagram protocol features

The user datagram protocol has attributes that make it advantageous for use with applications that can tolerate lost data.

- It allows packets to be dropped and received in a different order than they were transmitted, making it suitable for real-time applications where latency might be a concern.
- It can be used for transaction-based protocols, such as DNS or Network Time Protocol.
- It can be used where a large number of clients are connected and where real-time error correction isn't necessary, such as gaming, voice or video conferencing, and streaming media.

### UDP header composition

The User Datagram Protocol header has four fields, each of which is 2 bytes. They are:

- source port number, which is the number of the sender;
- destination port number, the port the datagram is addressed to;
- length, the length in bytes of the UDP header and any encapsulated data; and
- checksum, which is used in error checking. Its use is required in IPv6 and optional in IPv4.

## WebSocket

WebSocket is a communications protocol for a persistent, bi-directional, full duplex TCP connection from a user’s web browser to a server.

A WebSocket connection is initiated by sending a WebSocket handshake request from a browser’s HTTP connection to a server to upgrade the connection. Along with the upgrade request header, the handshake request includes a 64-bit Sec-WebSocket-Key header. The server responds with a hash of the key in a Sec-Websocket-Auth header. This header exchange prevents a caching proxy from resending previous WebSocket exchanges.

From that point, the connection is binary and does not conform to HTTP protocol. A server application is aware of all WebSocket connections and can communicate with each one individually. As WebSocket remains open, either the server or the user can send messages at any time until one of them closes the session. The communication can be initiated at either end, which makes event-driven web programming possible. In contrast, standard HTTP allows only users to request new data.

## MQTT

MQTT (MQ Telemetry Transport) is a lightweight messaging protocol that provides resource-constrained network clients with a simple way to distribute telemetry information. The protocol, which uses a publish/subscribe communication pattern, is used for machine-to-machine (M2M) communication and plays an important role in the internet of things (IoT).

MQTT enables resource-constrained IoT devices to send, or publish, information about a given topic to a server that functions as an MQTT message broker. The broker then pushes the information out to those clients that have previously subscribed to the client's topic. To a human, a topic looks like a hierarchical file path. Clients can subscribe to a specific level of a topic's hierarchy or use a wild-card character to subscribe to multiple levels.

The MQTT protocol is a good choice for wireless networks that experience varying levels of latency due to occasional bandwidth constraints or unreliable connections. Should the connection from a subscribing client to a broker get broken, the broker will buffer messages and push them out to the subscriber when it is back online. Should the connection from the publishing client to the broker be disconnected without notice, the broker can close the connection and send subscribers a cached message with instructions from the publisher.
