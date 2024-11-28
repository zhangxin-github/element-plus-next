import{_ as n}from"./chunks/theme.C0VdCxcc.js";import{_ as e,o as t,c as h,a as i,W as l,y as a}from"./chunks/framework.SZaum9Aq.js";const m=JSON.parse('{"title":"国际化","description":"","frontmatter":{"title":"国际化","lang":"zh-CN"},"headers":[{"level":2,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":2,"title":"ConfigProvider","slug":"configprovider","link":"#configprovider","children":[]},{"level":2,"title":"日期和时间本地化","slug":"日期和时间本地化","link":"#日期和时间本地化","children":[]},{"level":2,"title":"CDN 用法","slug":"cdn-用法","link":"#cdn-用法","children":[]}],"relativePath":"zh-CN/guide/i18n.md","filePath":"zh-CN/guide/i18n.md","lastUpdated":1732797638000}'),k={name:"zh-CN/guide/i18n.md"};function r(p,E,d,c,g,u){const s=n;return t(),h("div",null,[i("h1",{id:"国际化",tabindex:"-1"},[l("国际化 "),i("a",{class:"header-anchor vp-link",href:"#国际化","aria-label":'Permalink to "国际化"'},"​")]),i("p",null,[l("Element Plus 组件 "),i("strong",null,"默认"),l(" 使用英语，如果你希望使用其他语言，你可以参考下面的方案。")]),i("h2",{id:"全局配置",tabindex:"-1"},[l("全局配置 "),i("a",{class:"header-anchor vp-link",href:"#全局配置","aria-label":'Permalink to "全局配置"'},"​")]),i("p",null,"Element Plus 提供了全局配置国际化的配置。"),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," zhCn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/es/locale/lang/zh-cn'")]),l(`
`),i("span",{class:"line"}),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, {")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  locale: zhCn,")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h2",{id:"configprovider",tabindex:"-1"},[l("ConfigProvider "),i("a",{class:"header-anchor vp-link",href:"#configprovider","aria-label":'Permalink to "ConfigProvider"'},"​")]),i("p",null,[l("Element Plus 还提供了一个 Vue 组件 "),i("a",{href:"/en-US/component/config-provider.html",class:"vp-link"},"ConfigProvider"),l(" 用于全局配置国际化的设置。")]),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"locale"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"zhCn"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"app"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"}),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElConfigProvider } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," zhCn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/es/locale/lang/zh-cn'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h2",{id:"日期和时间本地化",tabindex:"-1"},[l("日期和时间本地化 "),i("a",{class:"header-anchor vp-link",href:"#日期和时间本地化","aria-label":'Permalink to "日期和时间本地化"'},"​")]),i("p",null,[l("我们使用 "),i("a",{href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("Day.js"),a(s,{class:"link-icon"})]),l(" 库来管理组件的日期和时间，例如 "),i("code",null,"DatePicker"),l("。 必须在 Day.js 中设置一个适当的区域，以便使国际化充分发挥作用。 您必须分开导入Day.js的区域设置。")]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'dayjs/locale/zh-cn'")])])])]),i("h2",{id:"cdn-用法",tabindex:"-1"},[l("CDN 用法 "),i("a",{class:"header-anchor vp-link",href:"#cdn-用法","aria-label":'Permalink to "CDN 用法"'},"​")]),i("p",null,"如果通过 CDN 使用 Element Plus ，那么你需要添加以下代码，以下是使用 unpkg 的示例"),i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//unpkg.com/element-plus/dist/locale/zh-cn"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, {")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    locale: ElementPlusLocaleZhCn,")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  })")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("p",null,[l("完整文档详见： "),i("a",{href:"/en-US/component/config-provider.html",class:"vp-link"},"ConfigProvider")]),i("p",null,[i("a",{href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("支持的语言列表"),a(s,{class:"link-icon"})])]),i("ul",{class:"language-list"},[i("li",null,"简体中文（zh-cn）"),i("li",null,"美国英语（en）"),i("li",null,"阿塞拜疆语（az）"),i("li",null,"德语（de）"),i("li",null,"葡萄牙语（pt）"),i("li",null,"西班牙语（es）"),i("li",null,"丹麦语（da）"),i("li",null,"法语（fr）"),i("li",null,"挪威语（nb-NO）"),i("li",null,"繁体中文（zh-tw）"),i("li",null,"意大利语（it）"),i("li",null,"韩语（ko）"),i("li",null,"日语（ja）"),i("li",null,"荷兰语（nl）"),i("li",null,"越南语（vi）"),i("li",null,"俄语（ru）"),i("li",null,"土耳其语（tr）"),i("li",null,"巴西葡萄牙语（pt-br）"),i("li",null,"波斯语（fa）"),i("li",null,"泰语（th）"),i("li",null,"印度尼西亚语（id）"),i("li",null,"保加利亚语（bg）"),i("li",null,"普什图语（pa）"),i("li",null,"波兰语（pl）"),i("li",null,"芬兰语（fi）"),i("li",null,"瑞典语（sv）"),i("li",null,"希腊语（el）"),i("li",null,"斯洛伐克语（sk）"),i("li",null,"加泰罗尼亚语（ca）"),i("li",null,"捷克语（cs）"),i("li",null,"乌克兰语（uk）"),i("li",null,"土库曼语（tk）"),i("li",null,"泰米尔语（ta）"),i("li",null,"拉脱维亚语（lv）"),i("li",null,"南非荷兰语（af）"),i("li",null,"爱沙尼亚语（et）"),i("li",null,"斯洛文尼亚语（sl）"),i("li",null,"阿拉伯语（ar）"),i("li",null,"希伯来语（he）"),i("li",null,"立陶宛语（lt）"),i("li",null,"蒙古语（mn）"),i("li",null,"哈萨克语（kk）"),i("li",null,"匈牙利语（hu）"),i("li",null,"罗马尼亚语（ro）"),i("li",null,"库尔德语（ku）"),i("li",null,"库尔德语 (ckb)"),i("li",null,"维吾尔语 (ug-cn)"),i("li",null,"高棉语 (km)"),i("li",null,"塞尔维亚语 (sr)"),i("li",null,"巴斯克语 (eu)"),i("li",null,"吉尔吉斯语 (ky)"),i("li",null,"亚美尼亚语 (hy-am)"),i("li",null,"克罗地亚语（hr）"),i("li",null,"世界语 (eo)"),i("li",null,"孟加拉语 (bn)")]),i("p",null,[l("如果你需要使用其他的语言，欢迎贡献 "),i("a",{href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("PR"),a(s,{class:"link-icon"})]),l("，只需在 "),i("a",{href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("这里"),a(s,{class:"link-icon"})]),l(" 添加一个语言配置文件即可。")])])}const v=e(k,[["render",r]]);export{m as __pageData,v as default};
