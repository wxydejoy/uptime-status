// 配置
window.Config = {

  // 站点名
  SiteName: '站点状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur1392304-201dde6196e8d97f10cf9201'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: '项目主页',
      url: 'https://github.com/wxydejoy/uptime-status'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/wxydejoy/'
    },
    {
      text: '博客',
      url: 'https://c.undf.top'
    }
  ]
};
