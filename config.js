//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "92300795089";
global.owner = process.env.OWNER_NUMBER || "92300795089";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUYzY3p2WGVkV3hRd3Roa0h2c0RzbTJaWkZxUEIwTkVxUWhEanJHUFFHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWdrS1g2WHpwV0JOaGtIbDhDdUpxSHdNeHprYk9jUkFMVC9Gc0hKSDQxbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ3A1dDRLKzFPL2V4QUYwaTRpNDB5MWxlS0M5SlFYM0NMckdjMVc5UG5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIveFlOSjNwMW1GeXY1RFFncFNHeUpoM1I4M0RPT3U2aXplTHB5ekliUTFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIWHBqbWNTS2pWa3MrMmhJaXhjZTZIUDg3cWc0VWRCbk9ObkxoRnVnM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlVUGtXWnpLNXZwbUkrc2JEU0tKdzhHbTlpTkptQzVtOXNYRE1ZYmMvUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURsUFEwcFAyQUZNYTFRV084NGxKU2lGdVlaNEFXZ2FyZFVCUnA0TXdFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWStDZU9JN0NJWjRnY3VCK3E3c0VHeGN4UEZRQmg3YU1IdTQ3V1lzTlBtND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNSeG5hWHlyM3ZXa2ZEeUpNQ2Z0cVdhdmJHaXZNam83VXJ1RDZIV0NiUVJUTEZLR2wxSjJVdjFTTldzeHN1OWtwakxGd3NDZWNPMTNVcit6a2RaMUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJJZGQ0UG1jdDBkQTM2WEFyNEFwQi9hTDArb0ZhUmdsaWxmZFg5VGlhbmJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDc5NTA4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMEQ1MTBBNjk1NkUwQTUxREI4RDBBNTZCQTQ0NkE1QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MTgwNjcxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDA3OTUwODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0RBQTNENjJDQTU4QkIwNkUzMDJENTUzRjJDMzNGNEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTE4MDY3MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNVhCb3FuSDBRcEtqY0ZxTWxnaTZvQSIsInBob25lSWQiOiJjMGRjZmY5Yy00NDZhLTRiMmMtYTk2Zi1lOWY0NjNmZTgzZjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnIreHpHWG5uWmt3N1pIMWs5anBUQm0xSFlvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkvTWpVN0h6cS9vb09SRnRGUFIzL3R4dkV1QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJONFRITUY4QSIsIm1lIjp7ImlkIjoiOTIzMzAwNzk1MDg5OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWxpIPCfmJjwn5iYIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZTUvZGtHRU96VjBMWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2TW1xcXdEcVlqZzBrZ20yYTg4Mlg0NjBTNHJpdW1DREhZbndXbFpoRVNJPSIsImFjY291bnRTaWduYXR1cmUiOiJrcDRDT3RqM3ZGaCt2anNYTEY5NnY1SFpPblR0TExpQitoejdhQ0FMbWtNK0xMMVFQUWIzYlY4WDhEbFQ3WTlORzVCRURYdkgxdTQ4Qzhya2RudU9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUXkzSnVoM2RwNG43THNMNWNXRHZQQjQyVWJoSVczZFZ1V29YcURDei9QNndZRVoxYjk1bTFjaUs0YWZLekNwRitGb1lxc2hFd1VNZVg3TzkxNnMrQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDA3OTUwODk6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlakpxcXNBNm1JNE5KSUp0bXZQTmwrT3RFdUs0cnBnZ3gySjhGcFdZUkVpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MTgwNjY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt4TyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
