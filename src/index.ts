import Telegraf from "telegraf";
import fs from "fs";
import { ConfigInterface } from "./config";
import { baboHook } from "./hooks/babo";
import { sighHook } from "./hooks/sigh";
import { illegalHook } from "./hooks/illegal";

export const config: ConfigInterface = JSON.parse(fs.readFileSync("config.json", {encoding: "utf-8"}));
export const bot = new Telegraf(config.bot.token);

baboHook(bot);
sighHook(bot);
illegalHook(bot);

bot.launch().then(
  () => {
    console.log("✅  : 🅱️ 🆎 🅾️  BOT ACTIVE!");
    console.log();
  }
)
