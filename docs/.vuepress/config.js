module.exports = {
    base: '/myprotocolsbook/',
    theme: 'reco',
    title: '协议相关知识笔记',
    description: '协议相关知识笔记',
    plugins: [
        [
            'vuepress-plugin-right-anchor', {
                showDepth: 3,
                expand: {
                    trigger: 'click',
                    clickModeDefaultOpen: true
                }
            }
        ]
    ],
    themeConfig: {
        type: 'blog',
        repo: 'https://github.com/lqinggang',
        repoLabel: 'GitHub',
        smoothScroll: true,
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: [
            [ '/', '首页' ],
            {
                title: 'SIP 协议',
                children: [
                    [ '/sip/format.md', '协议格式说明' ],
                    [ '/sip/nominal.md', '部分名词解析' ],
                    [ '/sip/status_code.md', '状态码' ],
                    [ '/sip/respond.md', '响应处理' ],
                    [ '/sip/session_init.md', '会话初始化' ],
                    [ '/sip/session_terminate.md', '会话终止' ],
                    [ '/sip/transaction.md', '事务' ],
                    [ '/sip/transmit.md', '传输' ]
                ]
            },
            {
                title: 'RTP 协议',
                children: [
                    [ '/rtp/', 'RTP 协议' ]
                ]
            },
            {
                title: 'SDP 协议',
                children: [
                    [ '/sdp/', 'SDP 协议' ]
                ]
            },
            [ '/reference.md', '参考文献' ]
        ]
    }
}
