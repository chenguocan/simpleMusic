import config from "./config";
function request(url,data={},methods="GET"){
    return new Promise((resolve,reject)=>{
        url=config.host+url;
        wx.request({
            url,
            data,
            methods,
            success:(res)=> {
                resolve(res.data);
            },
            fail:(err)=>{
                reject(err);
            }
        })
    })
}


export  default request