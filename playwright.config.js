const {PlaywrightTestConfig} = require("@playwright/test"); 
const config = {
    retries :1,
    //timeout :3000,
    //reporter :"./report.js",
    use :{
        baseURL : "https://the-internet.herokuapp.com",
        headless : true,
        viewport : {width:1280,height:720},
        video : "off",
        screenshot : "only-on-failure",
        trace : "on"
    },
    projects :[
        {
          name : "Chrome",
          use : {browserName : "chromium"}
        },
        {
            name : "Firefox",
            use : {browserName : "firefox"}
        },
        {
            name : "Webkit",
            use : {browserName : "webkit"}
        }
    ]
}
module.exports = config;