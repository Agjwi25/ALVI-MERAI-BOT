module.exports.config = {
  name: "فيديو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "فيديو من تيك توك",
  commandCategory: "خدمات",
  usages: "ا",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ذا"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

    
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388853331_6422355181226082_17445296963811479_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=p4IWtaNInF0AX8qV2nj&_nc_ht=scontent.xx&oh=03_AdSEFqXGcegmAq_LNIUU5o6XpXT5IeoU1-rfBJfy7Ikq9A&oe=652B549D&dl=1",







];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };