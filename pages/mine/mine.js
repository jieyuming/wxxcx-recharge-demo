// pages/mine/mine.js
Page({

  data: {
    menuList: [{
        icon: '../../image/wechatHL.png',
        text: '我的订单',
        type: 0,
        path: '../../pages/record/record'
      },
      {
        icon: '../../image/wechatHL.png',
        text: '客服帮助',
        type: 0,
        path: '../../pages/help/help'
      },
      {
        icon: '../../image/wechatHL.png',
        text: '推荐给好友',
        type: 1,
        path: '', //分享无需链接
      },
      {
        icon: '../../image/wechatHL.png',
        text: '关于',
        type: 0,
        path: '../../pages/about/about'
      },
      {
        icon: '../../image/wechatHL.png',
        text: '常用号码管理',
        type: 0,
        path: '../../pages/manage/manage'
      },
    ]
  },
  goNextPage(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    // console.log(`meue id is : ${id}`);
    wx.navigateTo({
      url: that.data.menuList[id].path,
    })
  },
  onShareAppMessage: function() {

  }
})