const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    function clean(text) {
        if (typeof text === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if (message.author.id !== "278066332493283328") return undefined;
    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
    name: "&eval"
}