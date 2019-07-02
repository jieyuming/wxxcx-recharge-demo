const app = getApp()

Page({
  data: {
    useHistory: [],
    show: false,//是否显示常用信息
    isFocu: false,//是否聚焦
    busniessList: ['美国', '中国', '巴西', '日本'],
    tab: ['话费充值', '流量充值'],
    current: 0, //当前选中的tab
    width: 375,
    region:'',//号码所属地区
    goodList: [{
      icon: 'https://file.gc.com.cn/backServerImage//mpic/20190207/20190207114852700356.png',
      title: '5元',
      price: '88.8',
      goodid: 3
    }, {
      icon: '',
      title: '5元',
      price: '88.8',
      goodid: 4
    }, {
      icon: 'https://file.gc.com.cn/backServerImage//mpic/20190207/20190207114852700356.png',
      title: '5元',
      price: '88.8',
      goodid: 5
    }, {
      icon: 'https://file.gc.com.cn/backServerImage//mpic/20190207/20190207114852700356.png',
      title: '5元',
      price: '88.8',
      goodid: 6
    }]
  },
  onReady() {
    var that = this;
    that.getTabCss();
    that.getHistoryCss();
  },
  getTabCss(){
    var that = this;
    const query = wx.createSelectorQuery()
    query.select('.tab-list').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      // console.log(`top:%s left:%s width:%s height:%s`, res[0].top, res[0].left, res[0].width, res[0].height);
      that.setData({
        width: res[0].width,
      })
    })
  },
  getHistoryCss(){
    var that = this;
    const input = wx.createSelectorQuery()
    input.select('.user-info').boundingClientRect()
    input.selectViewport().scrollOffset()
    input.exec(function (res) {
      // console.log(`top:%s left:%s width:%s height:%s`, res[0].top, res[0].left, res[0].width, res[0].height);
      that.setData({
        top: res[0].top + res[0].height,
      })
    })
  },
  onShow(){
    var that = this;
    var param = wx.getStorageSync('useHistory');
    // console.log(param);
    that.setData({
      'useHistory': param,
    })
  },
  onShareAppMessage() {

  },
  deletaRecode(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(`delete id:${id}`);
    var params = that.data.useHistory;
    wx.showModal({
      title: '提示',
      content: "是否删除号码:" + params[id].phone,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          params.splice(id, 1);
          that.setData({
            useHistory: params,
          })
          wx.setStorageSync('useHistory', params);
          wx.showToast({
            title: '删除成功',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  chooseTab(e) {
    var id = e.currentTarget.dataset.id;
    console.log(`tab id:${id}`);
    this.setData({
      current: id,
    })
  },
  chooseGoods(e) {
    var goodid = e.currentTarget.dataset.goodsid;
    var id = e.currentTarget.id;
    console.log(`you choose id is : ${id} | you choose goods id is : ${goodid}`);
  },
  clearValue(){
    this.setData({
      value:"",
      region:'',
    })
  },
  getInputInfo(e) {
    var that = this;
    var info = e.detail.value;
    that.setData({
      value:info,
    })
    console.log(`your phone is : ${info}`);
    // 判断号码的合理性，查询所属地区
    if (info){
      if(info.length > 10){
        that.setData({
          region: "广东深圳"
        })
      }
    }else{
      that.setData({
        region: "",
      })
    }
  },
  bindPickerChange(e) {
    console.log('you choose the business is', e.detail.value, this.data.busniessList[e.detail.value])
    this.setData({
      index: e.detail.value
    })
  },
  getToastFocus: function(e) {
    var that = this;
    that.setData({
      show: true
    })
  },
  getToastBlur: function(e) {
    var that = this;
    that.setData({
      show: false
    })
  },
})