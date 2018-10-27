// pages/detail/detail.js
Page({


  
  /**
   * 页面的初始数据
   */
  data: {
     shop:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pid=options.pid;
    wx.request({
      url:"http://localhost:3000/shop?pid="+pid,
      success:(res)=>{
        this.setData({
          shop:res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showOrder:function(e){
    //自定义方法
    var pid = e.target.dataset.pid;
    wx.navigateTo({
      url: "../order/order?pid="+pid
    });
  }
})