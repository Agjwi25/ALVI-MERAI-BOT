const axios = require("axios");
const apiUrl = 'https://yuki-ai-sim-vr.ma-pro.repl.co';

module.exports = {
  config: { 
    name: "شات",
    version: "1.1.0",
    hasPermission: 0,
    credit: "عمر",
    description: "دردشة مع بوت",
    commandCategory: "ترفية",
    usages: "تتكلم مع البوت",
    cooldowns: 2,
  },
  
  run: async function({ api, event, args }) {
    const { messageID, threadID, senderID } = event;
    const content = args.join(" ");
    if (!args[0]) return api.sendMessage(`اكتب مثال: .شات كيفك => الحمدللله ونت حتا اتعلم`, event.threadID);
    
    if (content.includes("=>")) {
      const [word, response] = content.split("=>").map(item => item.trim());
      if (!word || !response) {
        return api.sendMessage("شات كلمة => رد : حتا تعلمني", event.threadID);
      }
      await teachYuki(word, response);
      return api.sendMessage("شكرا لتعليم شات 😌🍷", event.threadID);
    }

    api.sendMessage(`${await chatwithYuki(content)} `, event.threadID);
  }
}

async function chatwithYuki(word) {
  const response = await axios.get(`${apiUrl}/yuki`, {
    params: { word: word, password: "momohBIRsigma" }
  });
  return response.data.response;
}

async function teachYuki(word, response) {
  try {
    const apiResponse = await axios.get(`${apiUrl}/teach`, {
      params: {
        word: word,
        responsesToAdd: response,
        password: "momohBIRsigma"
      }
    });
    return apiResponse.data.response;
  } catch (error) {
    console.error('خطاء', error.message);
    throw error;
  }
}