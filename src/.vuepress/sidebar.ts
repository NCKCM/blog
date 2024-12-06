import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",

    //
    {
      text: "资源",
      icon: "laptop-code",
      prefix: "demo/",
      children: "structure",
    },

    //
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },

    //
    {
      text: "介绍页",
      icon: "circle-info",
      prefix: "intro",
      link: "intro",
      children: "structure",
    },

    //
    {
      text: "友链",
      icon: "link",
      prefix: "friendChain",
      link: "friendChain",
      children: "structure",
    },

    //
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
