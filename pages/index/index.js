// pages/index/index.js
import request from "../../utils/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],//导航栏
        recommendList: [],//推荐歌曲
        topList:[],//排行榜
    },
    getData() {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let bannerListData = await request("/banner", {type: 2});
        if (bannerListData.code !== 200) {
            return console.log("获取请求失败");
        }
        this.setData({
            bannerList:bannerListData.banners,
        })
        let recommendListData=await request("/personalized",{limit:10});
        if(recommendListData.code!==200) {
            return console.log("获取请求失败");
        }
        this.setData({
            recommendList:recommendListData.result,
        })
        let index=0;
        let resultArr=[];
        while(index<5){
            let tempData=await request("/top/list",{idx:index++});
            let topListData={name:tempData.playlist.name,tracks:tempData.playlist.tracks.slice(0,3)};
            resultArr.push(topListData);
            this.setData({
                topList:resultArr,
            })
        }
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