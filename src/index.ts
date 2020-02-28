import Telegraf from "telegraf";
import fs from "fs";
import { ConfigInterface } from "./config";
import { baboHook } from "./hooks/babo";
import { sighHook } from "./hooks/sigh";
import { illegalHook } from "./hooks/illegal";

export const config: ConfigInterface = JSON.parse(fs.readFileSync("config.json", {encoding: "utf-8"}));
export const bot = new Telegraf(config.bot.token);

bot.start(
  (ctx) => {
    ctx.reply(`🅱️🆎🅾️ BOT
Source code is available at https://github.com/Alex4386/B_AB_O_emoji_bot
`)
  }
)

baboHook(bot);
sighHook(bot);
illegalHook(bot);

bot.launch().then(
  () => {
    console.log("✅  : 🅱️ 🆎 🅾️  BOT ACTIVE!");
    console.log();
  }
)
