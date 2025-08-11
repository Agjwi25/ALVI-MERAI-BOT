module.exports.config = {
  name: "انمي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "احمد",
  description: "صور أنمي",
  commandCategory: "جديد",
  usages: "",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

 const link = [
    
{ link: "https://i.imgur.com/sJfO0GI.png", answer: "فلسطين" },
     ];
     var callback = () => api.sendMessage({body:`صور أنمي  `,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };