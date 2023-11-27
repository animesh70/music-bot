const { MessageEmbed } = require("discord.js");
const emojis = require('../emojis.json');

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
      .setAuthor(
        `Commands of ${client.user.username}`,
        client.botconfig.IconURL
      )
      .setColor(client.botconfig.EmbedColor)
      .setDescription(`
        <a:CatgirlEars:1168788888337264701> __**ABOUT ME:**__

        <a:thumbs:1178177127149998140> Eve ♡ (v1.0.0-Fuyune) is a bot specially made for pure entertainment purposes with awesome command modules like music, fun, anime and many more commands, My prefix is +. Need to enjoy? Invite Eve ♡ <a:uwu:1168590791539691710>

        **Short Information**:
        • ᴀʟꜱᴏ ᴋɴᴏᴡɴ ᴀꜱ ! 𝐙𝐃 Eve ♡ <a:f_sharp_Neko:1168763160854016060>
        • ʙᴇɪɴɢ ᴀ **ᴋᴀᴡᴀɪɪ** ɢɪʀʟ <:a_hrt:1178177117394055238>
        • ʀᴇʟᴀᴛɪᴏɴꜱʜɪᴘ ᴡɪᴛʜ ! 𝐙𝐃 Ethan ♡ <a:Tr_Heart:1170256683369504808>
        • ɪ ʟɪᴋᴇ ᴄᴀᴛꜱ **ᴍᴇᴏᴡᴡ** >_< <a:a_paw:1178177119507992667>

        <:2026developer:1170236422050037801> __**TEAM**__

        <:SimpCord_BlueCrown:1170238378835460168> [! 𝐙𝐃 CRIMINAL YT](https://youtube.com/@CRIMINALYT006?si=lDCB2zUlcHB17nml)
        <:rd_developer:1177147273587732590> [! 𝐙𝐃 Team](https://discord.gg/zendenofficial)

        <a:gifland_discord:1178027978463133826> __**DISCORD INFORMATION**__

        <:bot:1178027976823152661> **Client Name**: Eve_♡#7444
        <:pu02:1178177118673309696> **Client ID**: 1134677019297321062
        <:p_bow:1178177113426231357> **Creation Date**: 25th Nov, 2023 | 11:59:03
        <:discordjs:1178177123945545861> **Build Pack**: Node.js, Discord.js, Ferralink (Shoukaku), MongoDB, Lavalink
        <:system:1106514990615240704> **Hosting**: VPS | Linux'
      `)
      .setImage('https://cdn.discordapp.com/attachments/1159031178024726558/1175315576839741500/Final_copy.jpg?ex=656ac8ed&is=655853ed&hm=c5ebd5c936a390fb5d692562&')
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command] |  Made With <a:Tr_Heart:1170256683369504808> by ! 𝐙𝐃 CRIMINAL YT`
      ).setDescription(`${Commands.join("\n")}
  
      ${emojis.discord} [**Discord**](${
    client.botconfig.SupportServer
  }) | ${emojis.dashboard} [**Dashboard**](${
      client.botconfig.Website
    })`);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `<a:uwu:1168590791539691710> | Unable to find that command.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setImage('https://cdn.discordapp.com/attachments/1159031178024726558/1175315576839741500/Final_copy.jpg?ex=656ac8ed&is=655853ed&hm=c5ebd5c936a390fb5d692562&')
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );

      let Embed = new MessageEmbed()
        .setAuthor(
          `Commands of ${client.user.username}`,
          client.botconfig.IconURL
        )
        .setColor(client.botconfig.EmbedColor)
        .setImage('https://cdn.discordapp.com/attachments/1159031178024726558/1175315576839741500/Final_copy.jpg?ex=656ac8ed&is=655853ed&hm=c5ebd5c936a390fb5d692562&')
        .setFooter(
          `To get info of each command type ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }help [Command] | Made With <a:Tr_Heart:1170256683369504808> by ! 𝐙𝐃 CRIMINAL YT`
        ).setDescription(`${Commands.join("\n")}
  
        ${emojis.discord} [**Discord**](${
          client.botconfig.SupportServer
        }) | ${emojis.dashboard} [**Dashboard**](${
            client.botconfig.Website
          })`);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `<a:uwu:1168590791539691710> | Unable to find that command.`
          );

        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          .setImage('https://cdn.discordapp.com/attachments/1159031178024726558/1175315576839741500/Final_copy.jpg?ex=656ac8ed&is=655853ed&hm=c5ebd5c936a390fb5d692562&')
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );

        interaction.send(embed);
      }
    },
  },
};
