// Anitrox Legacy (formerly Cluckbot and Nyabot)
// BOT.JS
// POWERED BY DISCORD.JS

//Made with ♥ by that navy neko (now known as IDeletedSystem64) and TheCodingGuy

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "nya!";
const token = "token"; // PLEASE, remove the token in the ""'s when sending code to others !

const footertxt = "Nyabot 2.0 © IDeletedSystem64/TheHappySylveon 2020";
const commands = [ prefix + "help", prefix + "ping", prefix + "say", prefix + "shutdown", prefix + "restart", prefix + "help etc", prefix + "bruhwarn", prefix + "hosttime", prefix + "invite"];
const commands2 = [ prefix + "help etc", prefix + "test"]
const myownerid = "309427567004483586";
const evalid = "309427567004483586";
//Information
const buildnum = "2869" // nice
const buildver = "2.0B";
const changelog = "Maintence release, Mostly edits to the footer as well as copyright dates, A small tweak to the restart and shut down message and a new needed invite command, nya!invite"
const buildid = "20H2"
//Logging

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
client.on("ready", () => {
	console.log(`[W E L C O M E]`)
});

client.on("message", message => {
	// OPTIONAL :: Ignore commands from bots
	// if (message.author.bot) return;

	// CUSTOM REACTIONS, LIKE PINGS, WILL GO HERE

	// You can do this.

	// COMMANDS GO DOWN HERE
	if(!message.content.startsWith(prefix)) return; // Is the prefix at the beginning?

	let args = message.content.slice(prefix.length).split(" "); // Args thing
	let command = args[0]; // The command, which will NOT contain the prefix

	if (command == "ping") {
		message.channel.send(":ping_pong: Ping pong! " + Math.round(client.ping) + "ms.");
	} else if (command == "say") {
		message.channel.send(args.slice(1).join(" "));
	} else if (command == "bruhwarn") {
		message.channel.send("https://www.youtube.com/watch?v=V263ad2e2uk")
	} else if (command == "shutdown") {
		if (message.author.id == 309427567004483586) {
			message.channel.send("<a:NyabotWorking:649007740869672980> ``Shutting down...``");
			client.destroy().catch(console.error);
		} else {
			message.channel.send(":x: ``Access is denied.``");
		};
	} else if (command == "restart") {
		if (message.author.id == 309427567004483586) {
			message.channel.send("<a:NyabotWorking:649007740869672980> ``Restarting...``");
			client.destroy().then(client.login(token)).catch(console.error);
		} else {
			message.channel.send(":x: ``Access Denied: Not Bot Owner``");
		}
	
	} else if (command == "test") {
	 	message.channel.send("Bot is working properly.")
	} else if (command == "invite") {
		message.channel.send({ embed: {
			title: "Nyabot Invite",
			color: 0x0000ff,
			description: "Use This Invite to add me to your server!:https://discordapp.com/oauth2/authorize?client_id=489125054261755925&scope=bot&permissions=66186303",
			footer: { text: footertxt }
		}});
	} else if (command == "hosttime") {
		var time = new Date();
		message.channel.send("The time on the Nyabot Host is " + time);
	} else if (command == "eval") {
		//"ownerID "309427567004483586" Pulled with reason: Non Fuctional, needs troubleshooting..?
    if (message.author.id == 309427567004483586) return;
		try {
			const code = args.join(" ");
			let evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);


			message.channel.send(clean(evaled), {code:"x1"});
		} catch (err) {
			message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\`\``);
		}
	} else if (command == "kick") {
		var user = args[1].replace(/[<@!>]/g, ''); // This function removes the ping and leaves the ID from the ping
		if (!user) return message.channel.send(":x: `No user provided!`");

		user = message.guild.members.get(user); // This function tells the bot get the user from the server USING the ID
		if (user.kickable) return message.channel.send(":warning: `This user cannot be kicked!`");

		var reason = args.slice(2).join(' ');
		if (!reason) {
			try {
				member.kick("Kicked by " + message.author.tag);
				message.channel.send(":white_check_mark: `Kicked user " + user.user.tag + "!`");
			} catch (ex) {
				message.channel.send(":x: `Something went wrong!`\n```" + ex.message + "```");
			};
			return;
		} else {
			try {
				member.kick(message.author.tag + " -> " + reason);
				message.channel.send(":white_check_mark: `Kicked user " + user.user.tag + " for " + reason + "`!");
			} catch (ex) {
				message.channel.send(":x: `Something went wrong!`\n```" + ex.message + "```");
			};
			return;
		};
	} else if (command == "ban") {
		var user = args[1].replace(/[<@!>]/g, ''); // This function removes the ping and leaves the ID from the ping
		if (!user) return message.channel.send(":x: `No user provided!`");

		user = message.guild.members.get(user); // This function tells the bot get the user from the server USING the ID
		if (user.bannable) return message.channel.send(":warning: `This user cannot be banned!`");

		var reason = args.slice(2).join(' ');
		if (!reason) {
			try {
				member.ban("Banned by " + message.author.tag);
				message.channel.send(":white_check_mark: `Banned user " + user.user.tag + "!`");
			} catch (ex) {
				message.channel.send(":x: `Something went wrong!`\n```" + ex.message + "```");
			};
			return;
		} else {
			try {
				member.ban(message.author.tag + " -> " + reason);
				message.channel.send(":white_check_mark: `Banned user " + user.user.tag + " for " + reason + "`!");
			} catch (ex) {
				message.channel.send(":x: `Something went wrong!`\n```" + ex.message + "```");
			};
			return;
		};
	} else if (command == "help") {
		message.channel.send({ embed: {
			title: "Nyabot Help",
			color: 0x0000ff,
			description: "The following commands are available:\n" + commands.join(", "),
			footer: { text: footertxt }
		}});
	} else if (command == "about") {
		message.channel.send({ embed: {
			title: "Nyabot About",
			color: 0xff0000,
			description: "Nyabot Information",
			fields: [
				{ name: "Build Number", value: buildnum },
				{ name: "Build Version", value: buildver },
				{ name: "Hosted on", value: "Dell Inspiron Laptop" },
				{ name: "CPU", value: "Intel(R) Celeron(R) @ 2.60 Ghz" },
				{ name: "Host FileSystem", value: "NTFS" },
				{ name: "Prefix", value: prefix },
				{ name: "Bot Latency", value: Math.round(client.ping) + "ms" },
				{ name: "Navy's Squad", value: "https://discord.gg/tKc5gdR" },
				{ name: "V3 Code by", value: "TheCodingGuy, TheHappySylveon. Use nya!credits for more info" },
				{ name: "Found a bug?", value: "DM TheHappySylveon! with the name and description!"},
				{ name: "Changelog", value: changelog},
				{ name: "Build ID", value: buildid}
			],
			footer: { text: footertxt }
		}});
	} else if(command == "credits") {
		message.channel.send({embed: {
			title: "Nyabot Information > Credits",
			color: 133169,
			description: "Nyabot Credits",
			fields: [{
				name: "Original Cluckbot 2.0 Code",
				value: "TheNavyNeko, now known as TheHappySylveon"
			},{
				name: "Cluckbot 2.0 Revision 3 Code and Base, now known as Nyabot",
				value: "TheCodingGuy"
			},{
				name: "Coding Language",
				value: "Discord.JS Developers"
			},{
				name: "RealTTNetwork",
				value: "Teaching me how to use DiscordJS"
			}],
			footer: {text: footertxt}
	}});
	};
});

client.login(token); // Login to Discord!



