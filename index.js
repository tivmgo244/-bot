// Librarys //
const Discord = require("discord.js")
const DiscordEasyPages = require("discordeasypages")

// Bot //
const Bot = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],

  presence: {
    activity: {
      name: `^명령어`,
      type: "PLAYING"
    },
    status: "online"
  }
})

const Prefix = "^"

// 호두 정보 //
Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "호두"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#B404AE')
            .setTitle(":butterfly: 호두 정보:butterfly: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/866160372325941288/c39d6c4171fbdbf9.png')
            .setDescription("miHoYo")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868402984474796062/38ae9bbf518e234e.png')
            .addFields(
                { name: '호두 운명의 자리', value: '나비자리' },
                { name: '\u200B', value: '\u200B' },
                { name: '소속', value: '왕생당', inline: true },
                { name: '무기', value: '장병기', inline: true },
                { name: '성우', value: '김하루', inline: true },
            )

        const Embed2 = new Discord.MessageEmbed()
            .setColor('#B404AE')
            .setTitle(":butterfly: 호두 성유물:butterfly: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/866160372325941288/c39d6c4171fbdbf9.png')
            .setDescription("성유물 추천 개인에 따라 다를수도 있음")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868420031183192064/378daeb595d4486b.PNG')

            const Embed3 = new Discord.MessageEmbed()
            .setColor('#B404AE')
            .setTitle(":butterfly: 호두 무기:butterfly: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/866160372325941288/c39d6c4171fbdbf9.png')
            .setDescription("Welcome to page 2!")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868419266846801960/73ec99099c8f0229.PNG')
            .addFields(
                { name: '호두 무기 추천', value: '정보' },
                { name: '\u200B', value: '\u200B' },
                { name: '호마의 지팡이', value: '호두 전용 무기', inline: true },
                { name: '초기 공격력', value: '46', inline: true },
                { name: '성추가 능력치', value: '치명타%', inline: true },
                { name: '용 학살창 추천도', value: '★★★★☆' },
                { name: '\u200B', value: '\u200B' },
                { name: '옵션1', value: '.불속성의 영향을 받은 적에게 딜 버프', inline: true },
                { name: '옵션2', value: '.혈매향효과와 시너지가 좋다', inline: true },
            )
            
            const Embed4 = new Discord.MessageEmbed()
            .setColor('#B404AE')
            .setTitle("호두 스킬 1")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/866160372325941288/c39d6c4171fbdbf9.png')
            .setDescription(":butterfly: 나비의 서:butterfly:  'E'")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868417559408570368/2132.gif')

        DiscordEasyPages(message, [Embed, Embed2, Embed3, Embed4], ["⬅", "➡"])
    }
})

//////////////////////////////////////////////////



// 명령어 코드 //
Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "명령어"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#B404AE')
            .setTitle("호두 명령어 ")
            .setDescription("해당 메세지는 다음 페이지가 없습니다.")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/865466203774386176/ee2581ffd0bc469a.png')
            .addFields(
                { name: '^', value: '캐릭터이름  아직 제작중' },
                { name: '!', value: '캐릭터이름' },
                { name: '\u200B', value: '\u200B' },
                { name: '!게임', value: '가위,바위,보', inline: true },
                { name: '!주사위', value: '숫자는 랜덤으로 1~6까지 하나만 나옵니다.', inline: true },
                { name: '제작', value: 'Nakiri', inline: true },
            )

        DiscordEasyPages(message, [Embed], ["⬅", "➡"])
    }
})




  /////////////////////////// 카미사토 아야카 ////////////////////////
Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "아야카"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(":snowflake: 아야카:snowflake: ")
            .addFields(
                { name: ':snowflake: 카미사토 아야카:snowflake: ', value: '플레이어블 정보' },
                { name: '\u200B', value: '\u200B' },
                { name: '신의눈', value: '얼음', inline: true },
                { name: '무기', value: '한손검', inline: true },
                { name: '운명의 자리', value: '설학자리', inline: true },
                { name: '성우', value: '이유리', inline: true },
            )

            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868423601144094770/a33fef18123496a9.png')
            .setDescription("miHoYo")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868425165820813353/2.png')
       
        const Embed2 = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(":snowflake: 카미사토 아야카 성유물:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868423601144094770/a33fef18123496a9.png')
            .setDescription("성유물 추천 개인에 따라 다를수도 있음")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868423632274210846/e8d1cc0b0a7e6910.png')

            const Embed3 = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(":snowflake: 카미사토 아야카 무기 추천:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868423601144094770/a33fef18123496a9.png')
            .setDescription("Welcome to page 2!")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868423643816935494/fd2211489a9043d8.png')
            
            const Embed4 = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(":snowflake: 카미사토 아야카 재료 및 돌파 재료:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868423601144094770/a33fef18123496a9.png')
            .setDescription("요일: 화요일 금요일 ")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868423614167400448/76626d1c9c2db9a7.png')

        DiscordEasyPages(message, [Embed, Embed2, Embed3, Embed4], ["⬅", "➡"])
    }
})


  /////////////////////////// 남행자 ////////////////////////
  Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "여행자"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake:여행자:snowflake: ")
            .addFields(
                { name: ':snowflake:여행자:snowflake: ', value: '플레이어블 정보' },
                { name: '\u200B', value: '\u200B' },
                { name: '본명 남행자 여행자 포함', value: '남행자:아이테르 여행자:루미네', inline: true },
                { name: '생일', value: '불명', inline: true },
                { name: '신의눈', value: '없음', inline: true },
                { name: '무기', value: '한손검', inline: true },
                { name: '운명의 자리', value: '나그네자리', inline: true },
                { name: '성우', value: '남행자:이경태 여행자:이새아', inline: true },)
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868430567459418123/118.PNG')
            .setDescription("miHoYo")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868429025624862750/d9e1dd0cd84399a9.png')
       
        const Embed2 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868430567459418123/118.PNG')
            .setTitle(":snowflake:여행자:snowflake: ")
            .setDescription("성유물 추천 개인에 따라 다를수도 있음")
            
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868430063417303101/b3e6e5b7329edbf0.png')

            const Embed3 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake:여행자:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868430567459418123/118.PNG')
            .setDescription("Welcome to page 2!")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868423643816935494/fd2211489a9043d8.png')
            
            const Embed4 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake: 카미사토 아야카 재료 및 돌파 재료:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868430567459418123/118.PNG')
            .setDescription("요일: 화요일 금요일 ")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868423614167400448/76626d1c9c2db9a7.png')

        DiscordEasyPages(message, [Embed, Embed2, Embed3, Embed4], ["⬅", "➡"])
    }
})








  /////////////////////////// 카에데하라 카즈하 ////////////////////////
  Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "카즈하"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake:카즈하:snowflake: ")
            .addFields(
                { name: ':snowflake:카즈하:snowflake: ', value: '플레이어블 정보' },
                { name: '\u200B', value: '\u200B' },
                { name: '카즈하 정보', value: '본명: 카에데하라 카즈하', inline: true },
                { name: '생일', value: '10월 29일', inline: true },
                { name: '신의눈', value: '바람', inline: true },
                { name: '무기', value: '한손검', inline: true },
                { name: '운명의 자리', value: '붉은 단풍자리', inline: true },
                { name: '성우', value: '김신우', inline: true },)
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868432429419991080/08141a5fbdd6a0be.png')
            .setDescription("miHoYo")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868432791552016394/1.PNG')
       
        const Embed2 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868432429419991080/08141a5fbdd6a0be.png')
            .setTitle(":snowflake:카에데하라 카즈하 성유물:snowflake: ")
            .setDescription("성유물 추천 개인에 따라 다를수도 있음")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868433328670375966/d4462ebf607b1710.PNG')
            
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868430063417303101/b3e6e5b7329edbf0.png')

            const Embed3 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake:카에데하라 카즈하 무기추천:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868432429419991080/08141a5fbdd6a0be.png')
            .setDescription("나무위키")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868433458601529344/7b40a5a8bb23f0da.png')
            
            const Embed4 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake: 카에데하라 카즈하 재료 및 돌파 재료:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868432429419991080/08141a5fbdd6a0be.png')
            .setDescription(" 돌파재료  ")
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868434601725538354/3b5d4097a5565738.PNG')

        DiscordEasyPages(message, [Embed, Embed2, Embed3, Embed4], ["⬅", "➡"])
    }
})

































////////////// 요일별 비경///////////////

/////////////////////////// 카에데하라 카즈하 ////////////////////////
Bot.on("message", (message) => {
    if (message.author.bot){
        return
    }

    if (!message.content.startsWith(Prefix)){
        return
    }

    const Arguments = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g)
    const command = Arguments.shift()

    if (command.toLowerCase() == "요일"){
        const Embed = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setTitle(":snowflake:요일:snowflake: ")
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868360931359477820/6666.png')
            .setDescription("miHoYo")
            .setImage('https://cdn.discordapp.com/attachments/832790398219845653/868370215635943424/Screenshot_2021-07-24_at_14.51.03.jpg')
       
        const Embed2 = new Discord.MessageEmbed()
            .setColor('#00FF40')
            .setThumbnail('https://cdn.discordapp.com/attachments/850006988234424330/868360931359477820/6666.png')
            .setTitle(":snowflake:요일:snowflake: ")
            .setDescription("성유물 추천 개인에 따라 다를수도 있음")
            .setImage('https://cdn.discordapp.com/attachments/832790398219845653/868370248955490334/Screenshot_2021-07-24_at_14.51.29.jpg')
            
            .setImage('https://cdn.discordapp.com/attachments/850006988234424330/868430063417303101/b3e6e5b7329edbf0.png')
        DiscordEasyPages(message, [Embed, Embed2], ["⬅", "➡"])
    }
})


console.log("호두봇 패키지 프로그램") 
Bot.login("ODMwNTA4MTYyNDg2MjM5MjY1.YHHtAA.yaaz6yRaQHE6ZvKPh2Jq8MNrwn0")