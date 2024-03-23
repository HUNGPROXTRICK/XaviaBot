const config = {
  name: "up",
  aliases: ["upt"],
  credits: "MiSao",
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  const Cpu =
    Math.floor(uptimeInSeconds % 9);
  const Ram =
    Math.floor(uptimeInSeconds % 30);
  const Ping =
    Math.floor(uptimeInSeconds % 76);
  

  try {
    const replyMessage = await message.reply(`
【Bot duoc dieu hanh boi...】
🐉『BOT NHU CAC』🐉
═════════════════
⏰【ʙᴏᴛ ᴢᴇɴɪᴛsᴜ ᴆᴀ̃ ᴏɴʟɪɴᴇ ᴆᴜ̛ᴏ̛̣ᴄ】⏰『${hours} 𝑮𝒊𝒐̛̀ ┇ ${minutes} 𝑷𝒉𝒖́𝒕 ┇ ${seconds} 𝑮𝑰𝑨̂𝒀』
━━━━━━━━━━━━━━━━━
 ⚙️ᴛʜᴏ̂ɴɢ ᴛɪɴ ʜᴇ̣̂ ᴛʜᴏ̂́ɴɢ⚙️
『\❯𝐶𝑝𝑢 𝑢𝑠𝑎𝑔𝑒: ${Cpu}%』☄️
『\❯𝑅𝑎𝑚 𝑢𝑠𝑎𝑔𝑒: ${Ram}%』🌌
『\❯𝑃𝑖𝑛𝑔: ${Ping}𝑚𝑠』🌠
【🌟ᴡɪsʜ ʏᴏᴜ ᴀ ʜᴀᴘᴘʏ ᴅᴀʏ ᴡɪᴛʜ ʙᴏᴛ ᴡᴀʀ🌟】
═════════════════
【ᴛʜᴏ̂ɴɢ ᴛɪɴ ʟɪᴇ̂ɴ ʜᴇ̣̂ ᴀᴅᴍɪɴ】👑
━━━━━━━━━━━━━━━━━
『⚜️【ғᴀᴄᴇʙᴏᴏᴋ】:https://www.facebook.com/mhungdev⚜️』
═════════════════
【ɢᴍᴀɪʟ ᴀᴅ】:【ccc👑】`);
    
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};
