/* ==========================================================================
   BILINGUAL TRANSLATION DICTIONARY (ENGLISH & 中文)
   ========================================================================== */

const TRANSLATIONS = {
  zh: {
    brandTitle: "张净依 • 生日快乐",
    langToggle: "English",
    musicPlaying: "正在播放",
    musicPaused: "点击播放音乐",
    musicSong: "王俊凯 (Karry Wang)",
    musicArtist: "依依最爱 • 浪漫循环",

    // Countdown
    countdownBadge: "重庆时间 8月20日 00:00 倒计时",
    countdownTitle: "距离宝贝 依依 的生日还有",
    countdownSubtitle: "每一秒的流逝，都是我对你更加深沉的思念...",
    beijingTimeLabel: "当前重庆时间",
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
    lockMsg: "零点准时开启生日惊喜 • 倒计时结束后自动呈现",
    countdownDoneTitle: "宝贝 依依，生日快乐！",

    // Hero
    heroGreeting: "致我全世界最可爱的女孩 依依 (宝贝)",
    heroTitle: "Happy Birthday Zhang Jingyi",
    heroSubtitle: "愿你的世界永远灿烂温柔，所有的美好与幸运都如期而至。虽然隔着千山万水，但我的心每分每秒都和你紧紧相依。",
    fromParis: "巴黎 (Paris)",
    toChongqing: "重庆 (Chongqing)",
    distanceText: "8,245 km • 巴黎 ✈️ 重庆 • 心心相印",

    // Timeline
    storyTag: "OUR CHERISHED STORY",
    storyTitle: "我们珍藏的浪漫记忆",
    storyDesc: "从6月17日至7月3日的中国之旅，到属于我们的每一次心动...",
    timeline1Date: "2026年6月24日",
    timeline1Title: "初遇 • 重庆鸿恩寺公园 1号门",
    timeline1Text: "那是故事开始的地方。当你在鸿恩寺公园向我走来的那一刻，整个重庆的夏天都变得无比温柔。你的笑容是我见过最美的风景。",
    timeline2Date: "阳台上的初吻与无数甜蜜瞬间",
    timeline2Title: "牵手、拥抱、阳台一吻与停不下来的心动",
    timeline2Text: "还记得在阳台上的初吻吗？从那一刻起，我们牵着手走过大街小巷，深情拥抱，一起品尝无数美食，分享无尽的欢笑与甜蜜，怎么亲吻都舍不得停下。",
    timeline3Date: "10月假期见 • 明年常驻重庆",
    timeline3Title: "10月重庆度假见 • 明年定居重庆天天相伴",
    timeline3Text: "宝贝，我真的太想你了！10月份我就要回重庆度假见你啦！而且明年我就会正式搬到重庆定居，到时候我们就能天天见面，一起创造更多属于我们的幸福时光！",

    // Gallery
    galleryTag: "MEMORIES & POLAROIDS",
    galleryTitle: "依依的闪光瞬间墙",
    galleryDesc: "记录你每一个可爱、美丽、迷人的笑容（点击可放大查看）",

    // Envelope
    envelopeTag: "SECRET LOVE LETTER",
    envelopeTitle: "来自远方的亲笔信",
    envelopeDesc: "轻触火漆印章，拆开这份独一无二的心意",
    waxSealText: "Y & L",
    envelopeTip: "轻触火漆印章打开信件",
    letterSalutation: "最亲爱的 依依 (我的小宝贝)：",
    letterSubtitle: "Happy Birthday to my sweetest girl",
    letterP1: "今天是8月20日，你的专属大日子，祝我最爱的宝贝生日快乐！",
    letterP2: "现在的我隔着8000多公里，但我脑海里全是你可爱的模样。真的好想你，想你的声音，想你甜甜地喊我「baby」，想紧紧抱着你感受你的温度与心跳。",
    letterP3: "在中国的那些日子（6月17日到7月3日），每一次约会、每一次牵手、我们在阳台上的初吻，还有后来停不下来的亲吻、拥抱、一起散步吃美食的欢声笑语，全部深深烙印在我的心底。我们之间有太多太多的美好回忆，而我相信，这仅仅是我们漫长幸福未来的第一章！",
    letterP4: "宝贝，无论平时遇到什么压力或烦恼，请一定要开心、振作起来（Cheer up! 🌟）。你在我眼里是全世界最棒、最迷人、最善良闪耀的女孩。我会一直站在你身后，永远支持你、宠溺你、毫无保留地爱着你。",
    letterP5: "我已经迫不及待要回到中国拥抱你！<span class='letter-highlight'>10月份我就回去度假陪你</span>，而且<span class='letter-highlight'>明年我就会搬到重庆定居</span>，到时候我们就能天天见面、经常在一起啦！",
    letterP6: "愿你今天所有的愿望都能成真，每天都被快乐、健康和满满的爱包围。祝最美的依依永远无忧无虑，笑口常开！",
    letterSignature: "永远深爱你的 Baby 💕<br>2026.08.20",

    // Quests
    questsTag: "INTERACTIVE SURPRISES",
    questsTitle: "为依依准备的三大生日仪式",
    questsDesc: "动动手指，体验专属你的生日互动",
    quest1Title: "放飞生日许愿天灯",
    quest1Desc: "将你的心愿写下，放飞升入夜空，星星会为你守护每一个梦想。",
    quest1Btn: "放飞天灯",
    quest2Title: "爱依依的100个理由",
    quest2Desc: "点击抽取一颗爱心胶囊，看看今天我又多爱了你一点什么！",
    quest2Btn: "抽取爱心胶囊",
    quest3Title: "吹灭专属生日蛋糕蜡烛",
    quest3Desc: "闭上眼睛许个愿，然后点击吹灭蜡烛，开启一整年的好运！",
    quest3Btn: "许愿吹蜡烛",

    // Modals
    lanternModalTitle: "放飞星空许愿天灯",
    lanternPlaceholder: "在这里写下你的愿望（或直接放飞默认祝福）...",
    lanternDefaultWish: "愿依依岁岁平安，幸福无忧，所愿皆成真！",
    lanternSendBtn: "放飞天灯",
    reasonModalTitle: "爱你的理由",
    nextReasonBtn: "再抽一颗",
    cakeModalTitle: "宝贝 依依，许个愿吧！",
    cakeHint: "轻触跳动的火苗吹灭蜡烛",
    cakeBlownMsg: "蜡烛已吹灭！愿望一定会实现！宝贝生日快乐！",

    // Footer
    footerLove: "Made with infinite love for Zhang Jing Yi (依依)",
    footerCopyright: "2026 • Paris ✈️ Chongqing • Forever & Always"
  },

  en: {
    brandTitle: "Zhang Jing Yi • Happy Birthday",
    langToggle: "中文",
    musicPlaying: "Playing",
    musicPaused: "Click to Play Music",
    musicSong: "Wang Junkai (Karry Wang)",
    musicArtist: "Yi's Favorite • Love Melodies",

    // Countdown
    countdownBadge: "Countdown to Aug 20, 00:00 (Chongqing Time)",
    countdownTitle: "Counting down to baby Yi's Birthday",
    countdownSubtitle: "With every second that ticks by, my love and longing for you grows deeper...",
    beijingTimeLabel: "Current Chongqing Time",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    lockMsg: "Unlocks automatically at Midnight Chongqing Time",
    countdownDoneTitle: "Happy Birthday, my sweet Yi!",

    // Hero
    heroGreeting: "To the most wonderful girl in the universe, Yi (宝贝)",
    heroTitle: "Happy Birthday Zhang Jingyi",
    heroSubtitle: "May your life always be bathed in warmth, joy, and gentle light. Though distance separates us today, my heart beats beside yours every single second.",
    fromParis: "Paris",
    toChongqing: "Chongqing",
    distanceText: "8,245 km • Paris ✈️ Chongqing • Connected by Heart",

    // Timeline
    storyTag: "OUR CHERISHED STORY",
    storyTitle: "Our Beautiful Journey Together",
    storyDesc: "From our trip in China (June 17 - July 3) to every heartbeat we shared...",
    timeline1Date: "June 24, 2026",
    timeline1Title: "Where It All Began • Hong'en Temple Gate 1",
    timeline1Text: "The moment you walked towards me at Hong'en Temple Forest Park in Chongqing, the entire summer became breathtaking. Your radiant smile captured my heart forever.",
    timeline2Date: "Balcony First Kiss & Sweet Dates",
    timeline2Title: "Holding Hands, Our Balcony Kiss & Pure Love",
    timeline2Text: "Remember our first kiss on that balcony? From that magical moment, we held hands walking through the streets, hugged tightly, shared delicious meals, and laughed endlessly without ever wanting to stop kissing.",
    timeline3Date: "October Reunion & Moving Next Year",
    timeline3Title: "October Vacations in Chongqing • Moving Next Year",
    timeline3Text: "My darling baby, I miss you so deeply! I'm coming back to Chongqing in October for holidays to see you, and next year I'll move to Chongqing so we can see each other all the time!",

    // Gallery
    galleryTag: "MEMORIES & POLAROIDS",
    galleryTitle: "Yi's Shining Moments Wall",
    galleryDesc: "Capturing your cutest, most radiant, and most beautiful smiles (Click to view full photo)",

    // Envelope
    envelopeTag: "SECRET LOVE LETTER",
    envelopeTitle: "A Sealed Letter From Across The World",
    envelopeDesc: "Tap the wax seal to unveil the letter written just for you",
    waxSealText: "Y & L",
    envelopeTip: "Tap the wax seal to open",
    letterSalutation: "To my dearest Yi (My sweet baby):",
    letterSubtitle: "Happy Birthday to my sweetest girl",
    letterP1: "Today is August 20th, your special day. Happy Birthday to the love of my life!",
    letterP2: "Even though I am 8,000 kilometers away right now, you are in every single thought of mine. I miss you so much—your sweet voice, the way you call me 'baby', your warm smile, and holding you close.",
    letterP3: "Those days in China (June 17 to July 3), every date, holding hands, our first kiss on the balcony, and how we couldn't stop kissing, hugging, walking through the streets, sharing meals and laughing together... all of it is etched into my heart forever. We have shared so many unforgettable memories, and this is only the beginning!",
    letterP4: "Whenever you feel tired or down, remember to cheer up! 🌟 You are the most radiant, wonderful, and beautiful girl in the world. I will always stand right beside you, cheering you on and loving you unconditionally.",
    letterP5: "I can't wait to be back in China with you! <span class='letter-highlight'>I'll be back in October for our holiday reunion</span>, and <span class='letter-highlight'>next year I am moving to Chongqing</span> so we can see each other all the time!",
    letterP6: "May all your birthday wishes come true today. Keep smiling and shining, my precious baby!",
    letterSignature: "Forever yours, your Baby 💕<br>2026.08.20",

    // Quests
    questsTag: "INTERACTIVE SURPRISES",
    questsTitle: "Three Birthday Rituals for Yi",
    questsDesc: "Touch and interact to celebrate your special day",
    quest1Title: "Release a Sky Lantern",
    quest1Desc: "Write a wish or send your blessing floating up into the starry sky.",
    quest1Btn: "Launch Lantern",
    quest2Title: "Reasons Why I Love You",
    quest2Desc: "Pick a glowing lucky capsule to discover another reason why you're so special to me!",
    quest2Btn: "Draw Love Capsule",
    quest3Title: "Make a Birthday Wish",
    quest3Desc: "Close your eyes, make a secret wish, and tap to blow out the candles for good luck!",
    quest3Btn: "Make Wish & Blow Candles",

    // Modals
    lanternModalTitle: "Release Your Sky Lantern",
    lanternPlaceholder: "Write your birthday wish here (or launch default blessing)...",
    lanternDefaultWish: "May Yi always be happy, healthy, and surrounded by endless love!",
    lanternSendBtn: "Launch Lantern",
    reasonModalTitle: "Why I Love You",
    nextReasonBtn: "Draw Another Capsule",
    cakeModalTitle: "Baby Yi, Make a Wish!",
    cakeHint: "Tap the glowing candle flame to blow it out",
    cakeBlownMsg: "The candles are blown out! Your wish will definitely come true! Happy Birthday baby!",

    // Footer
    footerLove: "Made with infinite love for Zhang Jing Yi (依依)",
    footerCopyright: "2026 • Paris ✈️ Chongqing • Forever & Always"
  }
};
