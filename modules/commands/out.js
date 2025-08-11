module.exports.config = {
    name: "غادري",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "عمر",
    description: "مو شغلك 😇",
    commandCategory: "المطور",
    usages: "غادري [ايدي الكروب]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const permission =
    [`100019463832721`,`100083297827792`]
    if (!permission.includes(event.senderID)) return api.sendMessage("ليس لديك الصلاحية", event.threadID, event.messageID);
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
                                                                                              }
