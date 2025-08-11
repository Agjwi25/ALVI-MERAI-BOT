module.exports.config = {
	name: "شخصيتي",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "احمد",
	description: "شخصيتك في الأنمي",
	commandCategory: "جديد",
	usages: "[شخصيتي]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["ايرين ييغر","مونكي دي لوفي","زورو","سانجي","اوسوب","فرانكي","جيمبي","تشوبر","بروك","ايروين سميث","غون فريكس","كيلوا زولديك","إسحاق نيتيرو","زينو زولديك","المحقق كونان","سيلفا زولديك","كورابيكا كوروتا","ليوريو","اوزوماكي ناروتو","اوتشيها ساسكي","اوتشيها اوبيتو","اوتشيها ايتاشي","اوتشيها مادارا","هاشيراما سينجو","توبيراما سينجو","شارلوك هولمز","موريارتي","غولد دي روجر","إدوارد نيوغيت","ساكازوكي اكاينو","ايلومي زولديك","انت لا تشبه احد ، أنت فريد من نوعك ! ","جين فريكس","كايدو","تشارلوت لينلين","ميكاسا اكرمان","ليفاي اكرمان","زيك ييغر","غريشا ييغر","راينر","ارمين ارليرت","نامي","روبين","بوا هانكوك","هانجي","ماكيما","باور","هانما باكي","هانما جاك" ,"يوجيرو هانما","مونكي دي غارب","سينغوكو","تانجيرو كامادو","نيزيكو كامادو" ,"تينغين اوزوي","غيومي","شينوبو كوتشو","رينغوكو كيوجيرو","اكازا","موزان" ,"ميدوريا ايزوكو","اولمايت","سايتاما","باكوغو","انديفار","كيزارو","دوفلامينغو","اوكيجي","ميرويم"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` ✨ شخصيتك في الأنمي : 

${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};