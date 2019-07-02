//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        that.globalData.userInfo = res.authSetting["scope.userInfo"] === true ? true : false;
      }
    })
  },
  globalData:{
    userInfo:false,
  }
})