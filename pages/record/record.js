Page({
  data: {
    tabs: ['tab1', 'tab2', 'tab3'],
    footerList: [{
      icon: '../../image/wechatHL.png',
        txt: '返回首页',
      }, {
        icon: '../../image/wechatHL.png',
        txt: '我的客服',
      },
      {
        icon: '../../image/wechatHL.png',
        txt: 'TOP',
      }
    ],
    // orderList:[],
    orderList:[
      {
        number:'2019063131231',
        time:'2019-08-09 1004',
        phone:'12345678901',
        count:'10',
        status:'充值成功',
      },
      {
        number: '2019063131231',
        time: '2019-08-09 1004',
        phone: '12345678901',
        count: '10',
        status: '充值成功',
      },
      {
        number: '2019063131231',
        time: '2019-08-09 1004',
        phone: '12345678901',
        count: '10',
        status: '充值成功',
      },
      {
        number: '2019063131231',
        time: '2019-08-09 1004',
        phone: '12345678901',
        count: '10',
        status: '充值成功',
      },
    ],
    current: 0,
  },
  chooseTab(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(`record tab id is : ${id}`);
    that.setData({
      current: id,
    })
  },
  dealPage(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(`footer tab id is : ${id}`);
    if(id == '0'){
      wx.switchTab({
        url: '../../pages/index/index',
      })
    }else if(id == '1'){
      wx.navigateTo({
        url: "../../pages/help/help",
      })
    }else if(id == '2'){
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 100
      })
    }
  },
  copyOrderNumber(e){
    var that = this;
    var number = e.currentTarget.dataset.number;
    console.log(`number is : ${number}`);
    wx.setClipboardData({
      data: number,
    })
  },
  goConcat(e){
    wx.navigateTo({
      url: '../help/help',
    })
  },
  onShareAppMessage: function() {

  }
})