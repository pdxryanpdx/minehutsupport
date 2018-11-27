
  const discord = require("discord.js");
  const client = new discord.Client();
  const config = require("./config.json");
  
  
  client.on("ready", () => {
      console.log('Ready!')
  });
  
  function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  client.on("message", async message => {
  
      if(message.author.bot) return;
      if(message.channel.type !== 'text') return;
      if(message.content.indexOf(config.prefix) !== 0) return;
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
  
      if(cmd === "ping") {
  
          const msg = await message.channel.send('**Pong!**');
          msg.edit('**Pong!** ' + "`" + Math.round(client.ping) + "ms`")
  
      }
      
      if(cmd === 'help') {

        const embed = new discord.RichEmbed()
        .setTitle('Help')
        .setDescription('**Knowledge Base**\n!outdatedserver\n!deleteserver\n!uploadworld\n!serverlimit\n!notstarting')
        .setColor('#DAA520')
              message.channel.send(embed)
      }
      if(cmd === 'outdatedserver') {

        const embed = new discord.RichEmbed()
        .setTitle('Outdated Server Error!')
        .setDescription('Make sure you are on 1.12.2! \n Minehut supports 1.8-1.12.2')
        .setColor('#DAA520')
              message.channel.send(embed)
      }
      if(cmd === 'deleteserver') {

        const embed = new discord.RichEmbed()
        .setTitle('How to Delete Server')
        .setDescription('You cannot delete your server at the moment\n However, you can reset all and changing the server name on the panel.')
        .setColor('#DAA520')
              message.channel.send(embed)
      }
      if(cmd === 'uploadworld') {

        const embed = new discord.RichEmbed()
        .setTitle('How to upload world?')
        .setDescription('1) Zip all the world files inside of the folder into 1 zip file\n 2) Upload the zip to https://file.io/ or any other online file hosting. \n 3) Click the Copy Link button on file.io or on any other host, get a direct download link to that file.\n 4) On your server, do the command /ul world name link After its uploaded, you can teleport to it using /world [Name].')
        .setColor('#DAA520')
              message.channel.send(embed)
      }
      if(cmd === 'serverlimit') {

        const embed = new discord.RichEmbed()
        .setTitle('Whats the server limit?')
        .setDescription('You can have a maxumuim of two servers.')
        .setColor('#DAA520')
              message.channel.send(embed)
