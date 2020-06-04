"use strict";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.indexOf("!테스트") === 0) {
    replier.reply("테트리스.");
  }
}