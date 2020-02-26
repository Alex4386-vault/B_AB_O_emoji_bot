import Telegraf, { ContextMessageUpdate } from "telegraf";

const illegalRegex = /(불법)/g;

export function illegalHook(bot: Telegraf<ContextMessageUpdate>) {
  bot.hears(illegalRegex, async (msg) => {
    console.log(msg.message?.from?.username+": 👮  ‍");
    const chat = msg.chat;
    
    if (chat !== undefined) {
      const fbiMsg = await msg.replyWithVideo("BAACAgUAAxkBAAM6XlbWFB_vQpHw-jLaI64Qvgr9UZ0AApEAA9VDuFZNyVoeRWy50RgE");
      setTimeout(() => {
        msg.telegram.deleteMessage(chat.id, fbiMsg.message_id);
      }, 60000);
    }
  
  });
}