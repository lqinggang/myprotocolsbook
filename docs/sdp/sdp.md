# SDP协议

## SDP简介

`SDP(Session Description Protocol) `协议用于提供媒体参与者之间进行传递媒体详细信息，传输地址和其他会话描述元信息，仅作为单纯的会话描述使用，不包含传输协议, 即相当于一个会话描述样板?具体怎么传输由其他传输协议决定, 如封装在`SIP`协议里面

一个`SDP`会话描述被通过以下形式表示:`application/sdp`, `SDP`会话由以下形式的多行文本表示：`<type>=<value>`, 其中，`<type>`是大小写敏感的字符类型，`value`以空格分隔

通常一个会话级部分以`v=`行开始，其后跟着`m=`行的媒体级部分



## SDP字段

### 会话描述

| 描述字段 | 说明                                   |
| -------- | -------------------------------------- |
| **`v=`** | 协议版本(必须)                         |
| **`o=`** | 发起者和会话标识(必须)                 |
| **`s=`** | 会话名(必须)                           |
| `i=`     | 会话信息                               |
| `u=`     | 描述的`URI`                            |
| `e=`     | 邮件地址                               |
| `p=`     | 电话号码                               |
| `c=`     | 连接信息，如果包含在所有媒体中则非必须 |
| `b=`     | 0个或多个带宽信息行                    |
| `z=`     | 时区调整                               |
| `k=`     | 加密密钥                               |
| `a=`     | 0个或多个会话属性行                    |
|          |                                        |



#### 协议版本

```sip
v=0
```

`v=`域给出了`SDP`的版本，当前为`0`，没有次版本号



#### 发起者和会话标识

```sip
o=<username> <sess-id> <sess-version> <nettype> <addrtype> <unicast-address>
```

`o=`域定义了会话的发起者以及会话标识和会话版本



##### `username`

用户在原始主机上的登录名，或者在原始主机不支持用户`ID`的情况下，使用`-`替代，不能带有空格



##### `sess-id`

一个数字字符串，会话的全局唯一标识符



##### `sess-version`

会话描述的版本号



##### `nettype`

字符串类型的网络类型，当前定义的类型值是`IN`，用于表示`Internet`，将来可能增加其他值



##### `addrtype`

`nettype`类型下，对应的地址字符串类型，当前定义值为`IP4`和`IP6`



##### `unicast-address`

创建会话的计算机地址



#### 会话名

```sip
s=<session name>
```

文本类型会话名，每个会话有且只能有一个会话名，并且会话名不能为空



#### 会话信息

```sip
i=<session description>
```

文本形式的会话信息，每个会话描述最多只能有一个会话级的`i=`域，以及每个媒体级也只能最多有一个`i=`的域



#### URI

```sip
u=<uri>
```

客户端使用的统一资源标识符



#### Email地址和手机号

```sip
e=<email-address>
p=<phone-number>
```

指定会议负责人的联系电子邮件和手机号码



#### 连接数据

```sip
c=<nettype> <addrtype> <connection-address>
```

`c=`域包含连接数据，每个会话必须包含至少一个媒体级的`c=`域或一个单一的会话级`c=`域，可以同时包含媒体级`c=`域和会话级`c=`域，针对当前媒体的媒体级`c=`域会覆盖会话级`c=`域



##### `nettype`

文本类型的网络类型，当前定义值为`IN`，意味着`Internet`



##### `addrtype`

地址类型，当前定义值`IP4`和`IP6`



##### `connection-address`

连接地址，在`IP4`和`IP6`情况下，连接地址可以是一个`IP`组播组地址，或者是一个单播地址，使用`IPv4`多播地址时，必须跟着一个`TTL`值，取值范围为`0-255`, 连接地址和`TTL`之间使用`/`作为分隔符, 例如

```sip
c=IN IP4 224.2.36.42/127
```



#### 带宽

```sip
b=<bwtype>:<bandwidth>
```

会话或媒体使用的建议带宽



##### `bwtype`

带宽类型，`bwtype`标识带宽数字的含义，当前取值为

1.   `CT`

     会话或会话媒体中的带宽域范围中隐含的带宽不一致

2.   `AS`

     带宽被解释为特定于应用程序，应用指定的带宽

带`X-`前缀的`bwtype`仅用于实验



##### `bandwidth`

带宽，默认单位为`kb/s`



### 时区

```sip
z=<adjustment time> <offset> <adjustment time> <offset> ....
```

要安排从夏令时到标准时间（或反之亦然）的重复会话，需要指定与基准时间的偏移量, 这里看起来应该是同步发送者和接收者之间的时间



### 加密密钥

```sip
k=<method>
k=<method>:<encryption key>
```

可使用的`method`定义如下

```sip
k=clear:<encryption key>
k=base64:<encoded encryption key>
k=uri:<URI to obtain key>
k=prompt
```



通过一个安全和可信的通道传输时，需要传递加密密钥，这里用户密钥交换



### 属性

```sip
a=<attribute>
a=<attribute>:<value>
```

主要用于扩展`SDP`，可以定义会话级属性和媒体级属性，在一个会话中可以定义多个属性



### 时间描述

| 描述字段 | 说明                   |
| -------- | ---------------------- |
| **`t=`** | 会话处于活动状态的时间 |
| `r=`     | 重复次数，0次或多次    |
|          |                        |



#### 定时

```sip
t=<start-time> <stop-time>
```

指定一个会话的开始和结束时间，可以指定多个，如果会话是在多个不规则的时间间隔，每一行代表一个时间间隔



##### `start-time`

会话开始时间，以`1900`年开始的秒数



##### `stop-time`

会话结束时间，以`1900`年开始的秒数，被设置成`0`时, 会话不受限制，此时，会话开始时间也被设置成`0`时，表示会话是永久的



### 重复次数

```sip
r=<repeat interval> <active duration> <offsets from start-time>
```

指定会话的重复次数

可以携带单位：

```sip
 d - 天 (86400 秒)
 h - 小时 (3600 秒)
 m - 分钟 (60 秒)
 s - 秒 (允许完整性)
```





### 媒体描述

| 描述字段 | 说明                                     |
| -------- | ---------------------------------------- |
| **`m=`** | 媒体名和传输地址                         |
| `i=`     | 媒体标题                                 |
| `c=`     | 连接信息，如果包含在会话级别则是可以选的 |
| `b=`     | 0个或多个带宽信息行                      |
| `k=`     | 加密密钥                                 |
| `a=`     | 0个或多个媒体属性行                      |



注意：

(1) `c=`和`a=`在会话描述部分和媒体描述部分都有包含，会话描述部分针对整个会话都是有效的，媒体描述部分仅针对该媒体描述，在两个都同时定义的情况下，**媒体描述部分会覆盖会话描述部分同名属性**

(2) 每个描述字段应该以`\r\n`作为结束标志



#### 媒体描述

```sip
m=<media> <port>[/<port number>] <proto> <fmt> ...
```

每个会话描述可能包含一系列的媒体描述，这些媒体描述以`m=`域作为开始或结束标志



##### `media`

媒体类型，当前可以定义的媒体类型：`audio`, `video`, `text`, `application`, `message`



##### `port[/<port number>] `

媒体流要发送的端口，用于通知对端发送的媒体应该发往这个端口，结合`c=`域试对端确定媒体流应该发往哪里

如果端口是非连续的，或者不是按奇偶规则(偶数作为`RTP`端口，奇数作为`RTCP`端口), 就必须要设置`a=rtcp:`属性

这里的`/<port number> `是可选的，表示几对端口号



##### `proto`

媒体流传输协议

1.   `udp`

     表示在`UDP`协议上运行的未指定`SDP`协议类型

2.   `RTP/AVP`

     表示在`UDP`协议上运行的用于音频和视频控制的`RTP`配置

3.   `RTP/SAVP`

     表示在`UDP`上运行的安全实时传输协议



##### `fmt` ...

媒体格式描述，对于`RTP`，这里是数字形式的媒体格式类型，比如`0`表示`PCMU`, `8`表示`PCMA`等

注意，这里是一系列的数字形式的媒体格式，用空格分隔


## `SDP`属性

### 类别

```sip
a=cat:<category>
```

以点分隔的层次类别，接收者通过类别过滤不想要的会话，这是一个会话级属性



### 关键词

```sip
a=keywds:<keywords>
```

与`a=cat:<category>`类似，这个属性用户接收者识别需要的会话



### 工具版本和名字

```sip
a=tool:<name and version of tool>
```

这个属性用户给出创建会话的工具名字或版本号，这是一个会话级属性



### 媒体时间长度

```sip
a=ptime:<packet time>
```

以毫秒为单位，用于表示报文中的媒体时间长度



### 最大媒体时间长度

```sip
a=maxptime:<maximum packet time>
```

以毫秒为单位，用于表示报文中的可以封装的最大媒体时间长度



### RTP类型映射

```sip
a=rtpmap:<payload type> <encoding name>/<clock rate> [/<encoding parameters]
```

`RTP`数字形式的媒体类型和负载格式名称之间的映射，例如

```sip
m=audio 49232 RTP/AVP 96 97
a=rtpmap:96 AMR/8000
a=rtpmap:97 AMR-WB/16000
```



### 仅接收模式

```sip
a=recvonly
```

指定工具以只接收的模式开始



### 发送和接收模式

```sip
a=sendrecv
```

指定工具以发送和接收模式开始



### 仅发送模式

```sip
a=sendonly
```

指定工具以仅发送模式开始



### 非活动模式

```sip
a=inactive
```

指定工具以非活动模式开始



### 演示属性

```sip
a=orient:<orientation>
```

仅用于演示，媒体级属性，可取值为`portrait`, `landscape`, `seascape`



### 会议类型

```sip
a=type:<conference type>
```

会议类型，建议取值：`broadcast`, `meeting`, `moderated`, `test`,`H332`



### 字符集

```sip
a=charset:<character set>
```

指定会话名和会话信息的用于显示的字符集



### 语言

```sip
a=sdplang:<language tag>
```

指定会话或者媒体的描述语言



### 默认语言

```sip
a=lang:<language tag>
```

指定会话或者媒体的描述默认语言



### 最大音频帧速率

```sip
a=framerate:<frame rate>
```

每秒最大的音频帧速率，使用`10`进制表示，允许小数点形式，如`12.2`



### 质量

```sip
a=quality:<quality>
```

编码质量建议整数值



### 格式属性

```sip
a=fmtp:<format> <format specific parameters>
```

此属性允许以 `SDP `不必理解的方式传送特定于特定格式的参数