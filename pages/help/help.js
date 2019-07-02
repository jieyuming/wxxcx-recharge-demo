var app = getApp();
Page({

  data: {
    message:{},
    isAuthUserInfo: false,
    requestList: [{
        txt: '这是一条测试问题',
        answer:'这个一个标准答案'
      },
      {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      }, {
        txt: '这是一条测试问题',
        answer: '这个一个标准答案'
      },
    ],
    footerList: [{
        icon: '../../image/wechatHL.png',
        txt: '在线客服',
        time: '8:30-22:30',
      }, {
        icon: '../../image/wechatHL.png',
        txt: '微信客服',
        time: '8:30-22:30',
      },
      {
        icon: '../../image/wechatHL.png',
        txt: '客服热线',
        time: '8:30-22:30',
      }
    ],
  },
  onReady() {
    this.messageToast = this.selectComponent("#messageToast");
    console.log('是否已经授权个人信息:'+app.globalData.userInfo);
    this.setData({
      isAuthUserInfo: app.globalData.userInfo,
    })
  },
  selectRequest(e){
    var id = e.currentTarget.dataset.id;
    console.log(`you choose the request id is : ${id}`);
    var obj = this.data.requestList[id];
    this.setData({
      message: obj,
    })
    this.messageToast.showToast();
  },
  dealPage:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(`help tab id is : ${id}`);
    if(id == '0'){
      // that.userLogin();
    }else if(id == '1'){
      var userid = '12345678902';
      wx.showModal({
        title: '客服微信',
        content: userid,
        confirmText:"一键复制",
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            wx.setClipboardData({
              data: userid,
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else if(id == '2'){
        wx.makePhoneCall({
          phoneNumber:'10086'
        })
    }
  },
  onShareAppMessage: function() {

  },
  getUserInfo(e){
    var that = this;
    if (e.detail.userInfo){
      app.globalData.userInfo = true;
      that.setData({
        isAuthUserInfo :true,
      })
      wx.showToast({
        title: '请重新点击',
        icon:'none'
      })
      console.log('user agree')
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
    }else{
      app.globalData.userInfo = false;
      that.setData({
        isAuthUserInfo: false,
      })
      console.log('user refuse : '+e.detail.errMsg)
    }
  }
})