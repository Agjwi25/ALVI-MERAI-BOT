/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
name: "صور",
version: "1.0.0",
hasPermssion: 0,
credits: "احمد",
description: "هذه عمليات بحث ذات الصلة ⁦(⁠✯⁠ᴗ⁠✯⁠)⁩",
commandCategory: "صور",
usePrefix: false,
usages: "[Text]",
cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
const keySearch = args.join(" ");
if(keySearch.includes("-") == false) return api.sendMessage('BABU BAHYIA TEXT FORMATE MEIN TYPE KRO CMND LIKE AESY 👉【 𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐍𝐚𝐫𝐮𝐭𝐨 - 𝟏....𝟏𝟎 】', event.threadID, event.messageID)
const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
const numberSearch = keySearch.split("-").pop() || 6
const res = await axios.get(`https://api-dien.kira1011.repl.co/pinterest?search=${encodeURIComponent(keySearchs)}`);
const data = res.data.data;
var num = 0;
var imgData = [];
for (var i = 0; i < parseInt(numberSearch); i++) {
let path = __dirname + `/cache/${num+=1}.jpg`;
let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
}
api.sendMessage({
attachment: imgData,
body: '•| هذا صور آلتي طلبتها|• شكرا لثقتك بنا𒁍🫀 '
}, event.threadID, event.messageID)
for (let ii = 1; ii < parseInt(numberSearch); ii++) {
fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
}
};
