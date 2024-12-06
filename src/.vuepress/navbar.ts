import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  //导航
  {
    text: "导航",
    icon: "laptop-code",
    link: "nav/",
  },

  //分类
  {
    text: "分类",
    icon: "pen-to-square",
    prefix: "posts/",
    children: [

      //编辑
      {
        text: "editor",
        icon: "pen-to-square",
        prefix: "editor",
        children: [
          { 
            text: "编辑1", 
            icon: "pen-to-square", 
            link: "编辑1" 
          },
          "编辑2",
        ],
      },

      //笔记
      {
        text: "note",
        icon: "pen-to-square",
        prefix: "note",
        children: [

          {
            text: "笔记1",
            icon: "pen-to-square",
            link: "笔记1",
          },
          "笔记2",
        ],
      },


    ],
  },

  //更多
  {
    text: "更多",
    icon: "more",
    prefix: "more/",
    children: [

      //编辑
      {
        text: "关于",
        icon: "pen-to-square",
        link: "about",
      },


    ],
  },



  //V2文档
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
