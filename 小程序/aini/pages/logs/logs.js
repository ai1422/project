//logs.js
const util = require('../../utils/util.js')

// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist:[],
    tuplist:[],
    tuplist2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.request({
      url:"http://localhost:3000/imageslist",
      success:(res)=>{
        this.setData({
          imagelist:res.data
        });
      }
    }),
    wx.request({
      url:"http://localhost:3000/tuplist",
      success:(res)=>{
        this.setData({
          tuplist:res.data
        });
      }
    }),
    wx.request({
      url:"http://localhost:3000/tuplist2",
      success:(res)=>{
        this.setData({
          tuplist2:res.data
        });
      }
    })
  },
  //onLoad:function(options){
    //this.loadMore();
  //},

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
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //监听上拉触底操作
    //this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showDetail:function(e){
    //自定义方法
    var pid = e.target.dataset.pid;
    wx.navigateTo({
      url: "/pages/detail/detail?pid="+pid
    });
  }
})

