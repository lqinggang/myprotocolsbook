# SIP协议之3-状态码

## 1xx

临时 ---- 请求已经接收到，继续处理请求中

| Status-Code | Reason-Phrase           | 说明                                                         |
| ----------- | ----------------------- | ------------------------------------------------------------ |
| 100         | Trying                  | 此响应表明请求已被下一跳服务器接收, 并且代表该调用正在执行一些未指定的操作(例如，正在查询数据库). 与所有其他临时响应一样, 此响应将阻止`UAC`重新传输`INVITE`. 100(尝试)响应与其他临时响应不同, 因为它永远不会由有状态代理向上游转发 |
| 180         | Ringing                 | UA接收到 INVITE请求，并试图提醒用户，用于发起本地回铃音      |
| 181         | Call Is Being Forwarded | 服务端用于指示呼叫被转移到另一个目的地址                     |
| 182         | Queued                  |                                                              |
| 183         | Session Progress        |                                                              |



## 2xx

成功 ---- 请求被成功接收，理解请求并接受请求

| Status-Code | Reason-Phrase | 说明 |
| ----------- | ------------- | ---- |
| 200         | OK            |      |
|             |               |      |



## 3xx

重定向 ---- 需要进一步行动才能完成请求

| Status-Code | Reason-Phrase       | 说明 |
| ----------- | ------------------- | ---- |
| 300         | Multiple Choices    |      |
| 301         | Moved Permanently   |      |
| 302         | Moved Temporarily   |      |
| 305         | Use Proxy           |      |
| 380         | Alternative Service |      |



## 4xx

客户端错误 ---- 请求包含了坏的语法或者无法在服务端上执行请求

| Status-Code | Reason-Phrase                   | 说明 |
| ----------- | ------------------------------- | ---- |
| 400         | Bad Request                     |      |
| 401         | Unauthorized                    |      |
| 402         | Payment Required                |      |
| 403         | Forbidden                       |      |
| 404         | Not Found                       |      |
| 405         | Method Not Allowed              |      |
| 406         | Not Acceptable                  |      |
| 407         | Proxy Authentication Required   |      |
| 408         | Request Timeout                 |      |
| 410         | Gone                            |      |
| 413         | Request Entity Too Large        |      |
| 414         | Request-URI Too Long            |      |
| 415         | Unsupported Media Type          |      |
| 416         | Unsupported URI Scheme          |      |
| 420         | Bad Extension                   |      |
| 421         | Extension Required              |      |
| 423         | Interval Too Brief              |      |
| 480         | Temporarily Unavailable         |      |
| 481         | Call/Transaction Does Not Exist |      |
| 482         | Loop Detected                   |      |
| 483         | Too Many Hops                   |      |
| 484         | Address Incomplete              |      |
| 485         | Ambiguous                       |      |
| 486         | Busy Here                       |      |
| 487         | Request Terminated              |      |
| 488         | Not Acceptable Here             |      |
| 491         | Request Pending                 |      |
| 493         | Undecipherable                  |      |
|             |                                 |      |



## 5xx

服务端错误 ---- 服务端执行一个看起来有效的请求时失败

| Status-Code | Reason-Phrase         | 说明 |
| ----------- | --------------------- | ---- |
| 500         | Server Internal Error |      |
| 501         | Not Implemented       |      |
| 502         | Bad Gateway           |      |
| 503         | Service Unavailable   |      |
| 504         | Server Time-out       |      |
| 505         | Version Not Supported |      |
| 513         | Message Too Large     |      |
|             |                       |      |



## 6xxx

全局失败 ---- 在任何服务端上都不能执行的请求

| Status-Code | Reason-Phrase           | 说明 |
| ----------- | ----------------------- | ---- |
| 600         | Busy Everywhere         |      |
| 603         | Decline                 |      |
| 604         | Does Not Exist Anywhere |      |
| 606         | Not Acceptable          |      |
