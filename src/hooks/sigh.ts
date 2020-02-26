import Telegraf, { ContextMessageUpdate } from "telegraf";

const sighRegex = /(^| )하($|[아]{1,}| )/g;

export function sighHook(bot: Telegraf<ContextMessageUpdate>) {
  bot.hears(sighRegex, async (msg) => {
    console.log(msg.message?.from?.username+": 🤦  ‍");
    const chat = msg.chat;
    
    if (chat !== undefined) {
      const reimuMsg = await msg.replyWithSticker("CAACAgQAAxkBAAMDXlbKLJPmAQFXdCvpuRu5J3u2rv4AAo8DAALZI2QhKi2HdC1q9j4YBA");
      setTimeout(() => {
        msg.telegram.deleteMessage(chat.id, reimuMsg.message_id);
      }, 10000);
    }
  
  });
}