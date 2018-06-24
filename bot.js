const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

const moment = require('moment');
client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","chat");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });


const fs = require('fs');
client.on("guildMemberAdd", member => {
      
      const welcomer = member.guild.channels.find("name","chat"); //اسم روم
                
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
     const mi = ['./img/w1.png','./img/w2.png']; //يمكن ضيف '/img/w3.png','/img/w4.png'...
      
     
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${mi[Math.floor(Math.random() * mi.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                     let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                            //member number..
                        ctx.font = '13px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`انت العضو رقم${member.guild.memberCount} ! `, 340 , 98);
    
                                                      //name
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`${member.user.username}`, 200, 154);
                             
                             //server name
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
   ctx.fillText(`${member.guild.name}` , 200, 190);
   
   

    welcomer.sendFile(canvas.toBuffer())
      
      });
      });
      });

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "chat")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('**ولكم نورت يا وحش @here**')
.setThumbnail(member.avatarURL)
  .setImage('')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**WELCOM TO ⚔KD⚔Kingdom of  Death⚔**${member} `) 
}).catch(console.error)
})
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "⚔KD⚔Kingdom of  Death⚔")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})


client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "⚔KD⚔Kingdom of  Death⚔")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
    
    channel.send(`**نورت سيرفر يـKD = >** ${member}`)     
    channel.send(`**تم دعوته من قبل = >** ${Invite.inviter}`)     
             
 }
            dat[Inv] = Invite.uses;
        })
    })
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار دسكورد جنب اسمك الاصلي')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``! KD |``')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار العبه')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``! ᴷ ᴰ多``')
    }
});



client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('** ٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**');
  }
});


client.on('message', msg => {
  if (msg.content === 'ترحيب') {
    msg.reply('https://i.imgur.com/B5wWkpZ.png');
  }
});





client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});


client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('**يلبى الى ينقط كمل يا حلو **');
  }
});



client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('**لسا بدك تنقط كمل خلينا نشوف نقطك**');
  }
});



client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('**ما اجمل نقطك كمل كمان  **');
  }
});



client.on('message', msg => {
  if (msg.content === '....') {
    msg.reply('**خلاص ما بكمل كمل لوحدك **');
  }
});



client.on('message', msg => {
  if (msg.content === '.....') {
    msg.reply('**انت حمار لسا  بتسمع كلامى :joy: **');
  }
});


client.on('message', msg => {
  if (msg.content === '......') {
    msg.reply('**خلاص يا ابن الحلال وقف **');
  }
});


client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**ۆعـلُـيَـگـم آلُـسـلُآم ۆرحٍـمةّ آلُلُہ ۆبْرگآتٌہ ، منْۆر. :rose: **');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
