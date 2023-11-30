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
                    [ '/sip/', 'SIP 协议' ]
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
