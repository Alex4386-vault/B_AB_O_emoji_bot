import Telegraf, { ContextMessageUpdate } from "telegraf";

const baboRegex = /(바보|babo|밥오|바부)/ig;

export function baboHook(bot: Telegraf<ContextMessageUpdate>) {
  bot.hears(baboRegex, async (msg) => {
    const chat = msg.chat;
    const message = msg.message?.text;
    
    if (chat !== undefined && message !== undefined) {
      const baboCount = (message.match(baboRegex) || []).length;
      const baboMsg = await msg.reply("🅱️🆎🅾️".repeat(baboCount));
      console.log(msg.message?.from?.username+": "+"🅱️ 🆎 🅾️ ".repeat(baboCount)+" ");
      setTimeout(() => {
        msg.telegram.deleteMessage(chat.id, baboMsg.message_id);
      }, 10000);
    }
  });
}