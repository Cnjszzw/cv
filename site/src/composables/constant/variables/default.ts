import { PREVIEW_SELECTOR } from "./render";
import type { ResumeStyles } from "../../stores/style";

export const DEFAULT_STYLES = {
  marginV: 30,
  marginH: 40,
  lineHeight: 1.25,
  paragraphSpace: 0,
  themeColor: "#377BB5",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 13,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: 赵志文
header:
  - text: <span class="iconify" data-icon="tabler:phone"></span> (+86) 185-5613-5826
  - text: <span class="iconify" data-icon="tabler:mail"></span> cnjszzw@qq.com
    link: mailto:cnjszzw@qq.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> cnjszzw
    link: https://github.com/cnjszzw
  - text: <span class="iconify" data-icon="charm:person"></span> zhaozhiwen.site
    link: https://zhaozhiwen.site
  - text:  籍贯：江苏扬州
    newLine: true
  - text:  现居城市：上海
  - text:  年龄：26(1999/10/27)
---

## <span style="background-color: #377BB5; color: white; padding: 2px 10px; border-radius: 0px;">教育经历</span>
**山东师范大学-本科**
  ~ 广播电视编导-新闻与传媒学院-山东济南

  ~ 2018/09 - 2022/06

  - 雅思IELTS（6.5分）、英语六级CET-6（593分）、计算机二级证书（MS OFFICE）

**西京学院-硕士**
~ 计算机技术-计算机学院-陕西西安
~ 2022/09 - 2025/01

- 2022年度西京学院一等奖学金（前20%）、2022传智杯程序设计赛区域赛二等奖(前20%)

## <span style="background-color: #377BB5; color: white; padding: 2px 10px; border-radius: 0px;">实习经历</span>


**后端开发实习生**
  ~ 北京流金岁月科技有限公司
  ~ 2024/12 - 2025/03

- 负责开发数据采集及数字化处理系统，实现结构化管理、数据清洗、数据审核、数字化监控和预警功能

**测试开发实习生**
  ~ 美团（上海）
  ~ 2024/02 - 2024/05

- 参与美团内部测试工具的开发工作，包括需求分析、开发文档编写、编码与测试、漏洞排查和修复、跨部门沟通等。
- 负责在线点餐上单流程接口自动化测试，包括业务/接口梳理、方案设计、数据构造、交互流程校验、用例维护等。


## <span style="background-color: #377BB5; color: white; padding: 2px 10px; border-radius: 0px;">项目经历</span>

<span style="color: #377BB5;">**1️⃣数据采集及数字化处理系统**</span>
  ~ 北京流金岁月科技有限公司
  ~ 2024/12 - 2025/03

**技术栈**：Java、SpringBoot、Maven、Oracle、JDBC、Git

**项目描述**：数字化采集系统是一个基于规则引擎的数据同步系统，核心目标是高效、准确地实现不同数据库表项之间的数据同步。系统通过四个主要阶段（同步映射管理、数据清洗、数据审核、数据同步）确保数据的完整性、安全性和可用性。

**我的职责**：负责多个数据同步阶段中的数据管理功能的开发，包括同步过程中的预警机制、异常处理和监控看板的开发。

**项目亮点**：

- 优化监控看板性能：针对监控看板中数据量大且实时性要求高的挑战，采用定时任务与缓存技术，提升了接口响应速度。
- 架构优化：通过反射与JDK动态代理技术，优化了系统架构，实现了功能模块的解耦，提高了系统的可扩展性与维护性。
- 冗余字段自动处理：通过自定义注解与AOP切面编程，实现了自动化处理，简化了代码，提高了系统的效率和可维护性。

<span style="color: #377BB5;">**2️⃣仿"B站"弹幕视频网站**</span>
  ~ 个人开源项目
  ~ 2024/05 - 2024/11

**项目开源地址**：[https://github.com/Cnjszzw/imooc-bilibili](https://github.com/Cnjszzw/imooc-bilibili)  **线上地址**：[www.citywork.icu](http://www.citywork.icu)

**技术栈**：Java、SpringBoot、Mybatis、Redis、RocketMQ、Nginx、FastDFS、WebSocket

**项目描述**：实现B站核心功能，包括“用户功能”、“视频功能”、“弹幕功能”。具体实现了用户注册登录、用户关注、用户动态发布、用户视频上传和观看、弹幕推送等逻辑，并进行了系统性能提升和用户体验优化。

**我的职责**：

- 使用JWT实现基于双Token机制的用户无感登录和注册功能，利用RSA进行加解密、MD5进行加密存储和比对保证安全

- 使用RBAC模型实现权限控制，通过提供接口实现前端元素、页面权限控制，利用AOP切面编程实现部分接口权限控制

- 使用RocketMQ、Redis基于订阅发布模式推方式实现动态发布推送订阅功能，减少DB压力、解决大量动态实时发布问题

- 使用FastDFS实现视频上传、下载和在线观看功能，通过断点续传以及秒传提升用户体验，通过Nginx实现外部Http访问
- 使用WebSocket协议构建高并发下的弹幕系统，使用Redis、MQ实现弹幕异步化推送以及数据库的削峰和异步化存储

项目亮点：

- 设计模式：利用工厂策略模式对登录进行了优化，实现了代码解耦，符合了代码开闭原则，提高了拓展性
- 调优(线程池)：利用线程池技术进行数据汇总，优化原接口响应速度，从150ms降低到50ms，提升67%

<span style="color: #377BB5;">**3️⃣JBOX环境治理工具**</span>
  ~ 美团（上海）
  ~ 2024/02 - 2024/05

**技术栈**：Java、SpringBoot、Redis、Redisson、Git

**项目背景**：主干环境每日拉取最新服务代码构建部署，且直连团队采用JBOX插件容器技术对接不同商家，存在“平台”和“插件”概念，不同部署方式和特定部署顺序。当前内部平台无法：按序部署插件、感知插件、及时同步线上下插件。

**项目任务**：新技术和平台的不兼容引发了：插件部署失败、插件记录缺失、新插件不同步等一系列现象，并最终导致环境的不稳定以及大量自动化用例无效失败，针对这些现象进行了JBOX环境治理工具的开发以解决问题。

**工作成果**：

- 独立负责并完成线上下插件同步工具开发，解决线上下插件及时同步问题
- 参与插件监控修复工具开发，重新设计原问题方案并完成开发和测试，日均修复20+问题插件
- 对工具进行日常持续维护、反馈收集，共计解决一个线下告警并修复相关代码Bug

**项目亮点**：
- 利用Redis和分布式锁解决分布式架构下同平台插件只能串行部署的问题- 利用多线程技术并发部署不同平台的插件，提高插件的部署速度和效率
## <span style="background-color: #377BB5; color: white; padding: 2px 10px; border-radius: 0px;">专业技能</span>

1.具备扎实编程基础，熟悉Java语言、JVM、内存模型、并发编程；熟悉SpringBoot、SpringCloud、Mybatis等开发技术

2.熟悉关系型数据库MySQL，有一定SQL优化经验；熟悉Redis等非关系型数据库；熟悉RocketMQ等主流消息中间件

3.可以灵活使用设计模式，如：单例、工厂、策略、责任链等设计模式进行开发；熟练运用git、Linux操作系统等基本命令

4.熟悉分布式常见解决方案：分布式事务、分布式一致性、分布式锁；有高并发、高性能系统架构设计实践，有性能调优经验

5.熟悉计算机网络、熟悉HTTP、TCP/IP和WebSocket协议，熟悉数据结构，了解栈、堆、树等基本结构
`;

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: circle;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definitions"] {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"] p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"]::marker {
  content: attr(data-label);
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="reference"] {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;
