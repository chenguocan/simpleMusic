// pages/index/index.js
import request from "../../utils/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],
        recommendList: [],
    },
    getData() {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let bannerListData = await request("/banner", {type: 2});
        if (bannerListData.code !== 200) {
            console.log("获取请求失败");
        }
        this.setData({
            bannerList:bannerListData.banners,
        })
        let recommendListData=await request("/personalized",{limit:10});
        if(recommendListData.code!==200) {
            return alert("获取请求失败");
        }
        this.setData({
            recommendList:recommendListData.result,
        })
        console.log(this.data.recommendList);
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

    }
})