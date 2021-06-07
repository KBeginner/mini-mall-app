export default {
  pages: [
    'pages/index/index',
    'pages/login/login',
    'pages/category/category',
    'pages/cart/cart',
    'pages/user/user'
  ],
  subPackages: [],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,  // 是否自定义tabBar，如为true则在custom-tab-bar下开发
    color: "#8a8a8a",
    selectedColor: "#ffffff",
    backgroundColor: "#000000",
    borderStyle: 'black',
    list: [
      {
      pagePath: "pages/index/index",
      iconPath: "./assets/tab-bar/home.png",
      selectedIconPath: "./assets/tab-bar/home-active.png",
      text: "首页"
    }, 
    // {
    //   pagePath: "pages/category/category",
    //   iconPath: "./assets/tab-bar/cate.png",
    //   selectedIconPath: "./assets/tab-bar/cate-active.png",
    //   text: "分类"
    // }, 
    {
      pagePath: "pages/cart/cart",
      iconPath: "./assets/tab-bar/cart.png",
      selectedIconPath: "./assets/tab-bar/cart-active.png",
      text: "购物袋"
    },
     {
      pagePath: "pages/user/user",
      iconPath: "./assets/tab-bar/user.png",
      selectedIconPath: "./assets/tab-bar/user-active.png",
      text: "我的"
    }
  ]
  }
}
