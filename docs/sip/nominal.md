# SIP协议之2-部分名词解析

## Call

呼叫。`Call `非正式用语，指的是对等方之间的某些通信，通常是为了多媒体对话而建立的



## Client

客户端。`Client `是发送SIP请求和接收`SIP`响应的任意网络单元，不一定需要和人类直接交互才叫`Client`, 比如 `User Agent Client` 或者 `Proxy `也能称为 `Client`



## Conference

会议。`Conference `指的是包含多个参与者的多媒体会话



## Dialog

对话。`Dialog `是两个 `UA `之间持续一段时间的点对点 SIP 关系, `Dialog `由 `SIP `消息建立，比如对 `INVITE `请求的 `2xx `响应，一个 `Dialog `通过呼叫标识，本地 `tag`，远端 `tag `来标识



## Downstream

下载流。事务内部消息转发的方向，指请求从`UAC`到`UAS`方向



## Final Response

终止响应。终止`SIP`事务的的响应，而不是不终止 `SIP `事务的临时响应, 所有的 `2xx`, `3xx`, `4xx`, `5xx `和 `6xx`响应都是终止响应



## Header Field / Header Field Value

头域。`SIP`消息的组成部分之一，用于传达有关消息的信息, 一个 `Header `可以包含一个或多个 `Header Field` 行，一个 `Header Field`可以包含0个或多个对应的由逗号分隔的`Header Field Value`



## Initiator, Calling Party, Caller

通过 `INVITE `请求发起会话（和对话）的一方。呼叫者从发送建立对话的初始 `INVITE `开始一直保留此角色，直到该对话终止。



## Message

消息。作为协议一部分在 `SIP `元素之间发送的数据, 请求或者应答都可以是 `SIP `消息



## Method

方法。`Method `是请求在服务器是啊还能够调用的主要函数，`Method `携带在请求消息本身中，如 `INVITE `方法和 `BYE `方法



## Outbound Proxy

外部代理。接收来自客户端请求的代理，即使这个消息可能不是`Request-URI`中指定的解析服务器



## Provisional Response

临时响应。服务器用于指示进度的响应，但不会终止 `SIP `事务，`1xx`响应都是`Provisional Response`, 其他的响应都是终止响应



## Proxy, Proxy Server

代理和代理服务器。充当服务器和客户端的中间实体，用于代表其他客户端发出请求，`Proxy Server`主要起到路由的作用，这意味着它的工作是确保将请求发送到距离目标用户“更近”的另一个实体



## Redirect Server

重定向服务器。`Redirect Server`对其收到的请求生成 `3xx `响应，指导客户端联系一组备用 `URI`



## Regular Transaction

常规事务。是指`INVITE`, `ACK`或`CANCEL`之外的任意事务



## Request

请求。为了执行特定操作的从客户端到服务端的`SIP`消息



## Response

应答。从服务端发送给客户端的`SIP`消息，用于指示客户端发送到服务器的请求的状态



## Ringback

回铃。`Ringback`是主叫方应用程序产生的信令音，指示被叫方正在收到振铃



## Server

服务端。一个网络元素，用于接收请求以便提供服务并响应这些请求



## Session

会话。`SDP `规范：多媒体会话是一组多媒体发送器和接收器以及从发送器流向接收器的数据流。多媒体会议是多媒体会话的一个示例



## Sip Transaction

`SIP`事务。SIP 事务发生在客户端和服务器之间，包含从客户端发送到服务器的第一个请求到从服务器发送到客户端的最终（非 `1xx`）响应的所有消息, 如果请求是 `INVITE `并且最终响应是非 `2xx`，事务还包括响应的 `ACK`。对 `INVITE `请求的 `2xx `响应的 `ACK `是一个单独的事务



## Stateful Proxy

有状态代理。在处理请求期间维护本规范定义的客户端和服务器事务状态机的逻辑实体，也称为事务有状态代理



## Stateless Proxy

无状态代理。在处理请求期间不维护客户端和服务器事务状态机的逻辑实体



## Transaction User(TU)

事务用户。位于事务层之上的协议处理层，包括`UAC core`, `UAS core`以及`proxy core`



## Upstream

上传流。事务内消息转发的方向，指的是响应从用户代理服务器流回用户代理客户端的方向



## User Agent Client(UAC)

用户代理客户端。一个创建新请求并通过客户端事务状态机发送的逻辑实体，`UAC `的作用仅在该事务的持续时间内持续, 即如果某个软件发起请求，它会在该事务期间充当 `UAC`, 如果稍后收到请求，它将承担`UAS`的角色来处理该事务



## UAC  Core

`UAC`核心。`UAC` 所需的一组位于事务层和传输层之上的处理功能

## User Agent Server(UAS)

用户代理服务器。一个用于对`SIP`请求生成响应的逻辑实体，响应可以是接收，拒绝，或者重定向，仅在事务有效期内扮演`UAS`角色。换句话说，如果一个软件响应一个请求，它就扮演`UAS`的角色，后面，它生成一个请求时，它就不再扮演`UAS`，而是变成`UAC`角色



## UAS  Core

`UAS`核心。`UAS `所需的一组位于事务层和传输层之上的处理功能



## User Agent(UA)

用户代理。可以充当用户代理客户端和用户代理服务器的逻辑实体
