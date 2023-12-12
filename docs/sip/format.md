# SIP协议之1-协议格式说明

sip 协议是一个基于文本的使用`UTF-8`字符集编码的协议，sip消息包括客户端到服务端的请求消息，以及服务端到客户端的响应消息


## 协议组件说明

sip 消息有**一个起始行**，**一个或多个消息头部字段**，**一个用于指示消息头部字段结束的空行**以及**可选的消息正文**，格式如下

```text
 generic-message = start-line
 				  *message-header
 				  CRLF
 				  [ message-body ]
 start-line = Request-Line / Status-Line
```

其中，`start-line`, `message-header`, `CRLF`都是必须的(即使没有`mesage-body`, `message-header`后面也必须要跟一个`CRLF`)



## 起始行

sip 消息的区分是具有一个作为起始行的请求行或者状态行，即起始行的格式可以用于区分是请求还是响应



### 请求行

```text
Request-Line = Method SP Request-URI SP SIP-Version CRLF
```

这里的 `SP`表示空格，以`CRLF`作为结束标志。除末尾的`CRLF`之外，不允许带有其他的`CR`或者`LF`

一个请求行包括一个`Method`名，一个`Request-URI` 以及一个协议版本，它们之间以空格分隔



####  Method

sip 请求规范定义了如下 6 种方法：`REGISTER`，`INVITE`, `ACK`, `CANCEL`，`BYE`，`OPTIONS`

其中，`REGISTER`请求用于登记联系信息，`INVITE`, `ACK`, `CANCEL`请求用于设置会话，`BYE`请求用于终止会话，`OPTIONS`用于查询服务器功能选项



#### Request-URI

`request-uri` 用于指示该请求所针对的用户或服务, `request-uri`不能包含未转义的空格，控制字符以及`<>`



#### SIP-Version

正在使用的`SIP`版本，遵循`[H3.1]`关于版本订购、合规要求和版本号升级，虽然大小写不敏感，但是实际实现的时候都是使用大写发送



### 状态行

```text
Status-Line = SIP-Version SP Status-Code SP Reason-Phrase CRLF
```

这里的 `SP`表示空格，以`CRLF`作为结束标志。除末尾的`CRLF`之外，不允许带有其他的`CR`或者`LF`



#### SIP-Version

正在使用的`SIP`版本，遵循`[H3.1]`关于版本订购、合规要求和版本号升级，虽然大小写不敏感，但是实际实现的时候都是使用大写发送



#### Status-Code

状态码，3位10进制数值，用于标识请求结果，第一位(即最高位)用于标识一类状态，可取的状态码请参考[SIP协议之3-状态码](./status_code.md)一章



#### Reason-Phrase

状态码对应的描述信息, 请参考 `Stauts-Code`



## 消息头部

`SIP `头字段在语法和语义上都与 `HTTP `头字段相似，消息头部按键值对的形式给出，以`CRLF`结尾，形式如下：

```text
 field-name: field-value
```

冒号两端可以跟着任意数量的空格，但是建议做法是冒号前没有空格，冒号后跟一个空格

消息头部，也可以使用如下形式，其中`;`将作为分隔符

```text
 field-name: field-value *(;parameter-name=parameter-value)
```

头部的最小集合为： `To`, `From`, `CSeq`, `Call-ID`, `Max-Forwards`, 以及`Via`



###  Request-URI

消息的初始 `Request-URI` 应设置为 `To `字段中 `URI `的值



### Via

`Via`头部被用于标识事务的传输，以及标识响应被发送的位置，仅在选择用于到达下一跳的传输之后才添加 `Via `标头字段值

当`UAC`创建一个请求时，必须在请求中插入一个`Via`头部，`Via`头部中的协议名和协议版本必须分别是`SIP`和`2.0`，并且必须带有一个`branch`的参数

`branch`参数值用于标识该请求创建的事务，客户端和服务端都需要这个参数，对于 `UA `发送的所有请求，`branch`参数值在空间和时间上必须是唯一的, 此规则的例外情况是`CANCEL`响应和非`2xx`的`ACK`响应, 对于`CANCEL`响应`branch`参数值用于取消请求，对于非 `2xx `的 `ACK `响应也将具有与其确认其响应的 `INVITE` 相同的`branch`参数值

`branch`参数值必须以`z9hG4bK`字符串开始(这7个字符可以认为是魔数)

```text
Via: SIP/2.0/UDP 10.100.70.17:15060;branch=z9hG4bK2H34JI5OJ3AdsE3hN50000000000734226
```



### To

`To `标头字段首先指定请求的所需的“逻辑”接收者，或者作为该请求目标的用户或资源的记录地址。`To`域中有可能是也有可能不是请求的最终接收者

所有的`SIP`实现必须支持`SIP URI`格式，任何支持`TLS`的`SIP`实现必须支持`SIPS URI`格式

`To`域允许带有显示名

```text
To: <sip:10001@192.168.60.126:5060>;tag=0132456789
```



### From

`From`头部指示发起请求的逻辑实体，有可能是用户的地址记录，和`To`域类似，包含了一个`URI`以及可选的显示名。`From`域用于确定请求应用哪些处理规则

`From`域允许带有显示名, 如果客户端身份需要保持隐藏，则显示名应该使用"Anonymous"以及语法正确但无意义的`URI`

`From`域必须包含一个新的由`UAC`选择的`tag`参数

```text
From: <sip:10001@192.168.60.126>;tag=0132456789
```



### Call-ID

`Call-ID`头部充当将一系列消息组合在一起的唯一标识符，在一个对话中，对于任意`UA`，发送的所有请求和响应消息中`Call-ID`必须一致，`UA`的每次注册都应该相同

```text
Call-ID: 0123456789
```



### CSeq

序列号，用于识别和排序事务，它包含了一个序列号和方法，方法必须比配请求(请求行中的`Method`)

```text
CSeq: <sequence number> <Method>
```

对于对话之外的非`REGISTER`请求，序列号的值可以任意值，序列号必须是一个32位无符号整数，并且必须小于`2 ^ 31`

```text
CSeq: 2 REGISTER
```



### Contact

`Contact`头部提供`SIP`或者`SIPS URI`，可以通过这个值来联系`UA`特定实例，并进行后续的请求，`Contact`必须存在，并且在任何可能导致建立对话的请求中仅包含一个`SIP`或`SIP URI`



### User-Agent



### Content-Length

用于标识消息主体部分长度，消息中不带有消息主体时，取值为0

```text
Content-Length: 0
```



### Content-Type

用于标识消息主体的类型描述

```text
Content-Type: application/sdp
```



### Max-Forwards

指定一个请求发送到目的地的最大跳数，由一个整数组成，每经过一跳，自动减一，当`Max-Forwards`的值在到达目的地前变为0，则返回一个`483`响应

`UAC`必须在每个请求中都插入一个初始值为`70`的`Max-Forwards`域

```text
 Max-Forwards: 70
```



### Supported

`Supported` 域列举出[`UAC`](./SIP协议之2-名词定义.md)或[`UAS`](./SIP协议之2-名词定义.md)支持的所有扩展, 当`UAC`支持扩展的时候使用



## 消息主体

`SIP`消息消息主体部分，里面一般封装其他类型协议，由`Content-Type`和`Content-Length`分别指示消息主体的类型和长度，可选




