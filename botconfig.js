module.exports = {
  Admins: ["753971988799684608"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "+",
  Port: 3128, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/zendenofficial", // Support Server Link
  Token: process.env.Token || "", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", 
  ClientSecret: process.env.Discord_ClientSecret || "", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": true,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://media.tenor.com/sce9SDRey4EAAAAi/disc.gif",
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, 
  Website: process.env.Website || "http://139.59.1.14/",

  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "+help | BEING A KAWAII GIRL >_<", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    id: "Main",
    host: "n1.ll.darrennathanael.com", 
    port: 2269, 
    pass: "glasshost1984", 
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "61babf3002214dbfad20b11cc38227b9", 
    ClientSecret: process.env.Spotify_ClientSecret || "c4fd00e6a9134ceda944c3cb4ad7cb93", 
  },


 

};
