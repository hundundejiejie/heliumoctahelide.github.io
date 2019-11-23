var story = [
    [
        "bg_uptown_1",
        "char_010_chen_1",
        "avg_npc_012",
        "char_136_hsguma",
        "char_010_chen_6",
        "char_015_lmg",
        "char_308_swire_5",
        "char_empty",
        "char_010_chen_4"
    ],
    [
        "m_dia_newhope01_loop",
        "m_dia_newhope01_intro",
        "d_gen_transmissionget"
    ],
    [
        "voice.playMusic({intro:'m_dia_newhope01_intro', key:'m_dia_newhope01_loop', volume:0.6, crossfade:1.5, delay:0.5});background.showImage({image:'bg_uptown_1',fadetime:1,screenadapt:'coverall'});delay(1);playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',fadetime:1,focus:2});delay(1);playground.drawDialog({name:'罗德岛干员',text:'在和他们正面冲突之前，我也没想到整合运动竟然会这么脆弱。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'本以为他们给切城和其他小队造成了那么大麻烦，一定是非常强大的军事力量。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'现在看来，任务简报上的资料没什么大问题，整合运动的实力确实也就那样。对整合运动阴谋的了解不足才是任务的难点。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'不要大意。整合运动的最大优势，本就在于出乎所有人的意料。'});",
        "playground.drawDialog({name:'陈',text:'渗透、突然袭击、动用特殊力量攻坚，都是他们的常用手段。我们并不清楚他们隐藏了什么。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:2});playground.drawDialog({name:'罗德岛干员',text:'我明白，毕竟这么强盛的龙门和那么庞大的切尔诺伯格，都已经遭到了整合运动的侵袭。也许他们的数量真的超乎想象吧。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'不过，陈长官，之前的任务中，阿米娅是和近卫局一同行动的，你们不是一起去侦查切城废城了吗，阿米娅他们怎么还没归队？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'......抱歉。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'（老陈......）'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'我们与阿米娅的小队失散了。我们没法跟他们汇合，情况紧急，我们只能先行离开。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:2});playground.drawDialog({name:'罗德岛干员',text:`你的意思是，你们近卫局把阿米娅和Dr.${nickname}就这样留在了废城？`});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'是。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:2});playground.drawDialog({name:'罗德岛干员',text:'也就是说他们现在生死不明？'});",
        "playground.drawDialog({name:'罗德岛干员',text:'不，陈长官......'});",
        "playground.drawDialog({name:'罗德岛干员',text:'不。即使你们是龙门近卫局也不能这样做。即使是龙门近卫局，也不应该、更不能抛弃合作伙伴。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'这是我的失职。我的任务是优先维护龙门的安全，作出了这个判断的是我。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:2});playground.drawDialog({name:'罗德岛干员',text:'知道负责人又能怎样......不用再说下去了，龙门的警官，这件事已经没什么好说的了。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'也是。是啊，我其实很清楚你们对感染者的态度。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'我不是这个意思——'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:2});playground.drawDialog({name:'罗德岛干员',text:'你需要多少干员？会有干员愿意协助你的，尽管我不会。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'我们也有任务。帮助龙门战胜整合运动同样也是我们的任务。'});",
        "playground.drawDialog({name:'罗德岛干员',text:'只不过我会和罗德岛的小队自己去做。记好我们的识别码，长官。请不要误伤合作伙伴，哪怕他们是感染者。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_012',focus:1});playground.drawDialog({name:'陈',text:'......我知道了。'});",
        "playground.drawDialog({name:'陈',text:'如果有愿意和近卫局一起行动的，可以向我报到。'});",
        "playground.drawDialog({name:'陈',text:'——不必勉强自己。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',fadetime:1,block:true,focus:1});delay(1);playground.drawDialog({name:'星熊',text:'你和诗怀雅刚才那出，难道不是为了加强和罗德岛之间的合作吗？'});",
        "playground.drawDialog({name:'星熊',text:'怎么到了罗德岛这边，你又临阵变卦，不按说好的来？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_6',focus:2});playground.drawDialog({name:'陈',text:'你弄错了，星熊。我没这个打算。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_6',focus:1});playground.drawDialog({name:'星熊',text:'可能吧。至少我更乐意看你说实话。你的表情也比刚才坦然多了。'});",
        "playground.drawDialog({name:'星熊',text:'不过确实，把我放在他那个位置，我一样会很恼火。你得庆幸那个罗德岛的战士还挺好说话。'});",
        "playground.drawDialog({name:'星熊',text:'这么说吧，我知道时间紧迫，可我也弄不明白——为什么你要把阿米娅他们那么干脆地留在废城？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'不确定因素太多了。'});",
        "playground.drawDialog({name:'陈',text:'废城的地况不适合近卫局战斗，我们也很难估计废城内整合运动的实力。我们的队伍不能承担这种风险。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'这说服不了我。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'......星熊，我们的行动是被规划好的。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'命令就是命令，我会服从。但你该亲自和我说，而不是让我等到诗怀雅来告知我。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'在当今事态成真之前，命令的具体内容是机密的。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'所以是魏先生亲自下的命令。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'你可以随便猜测。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'即使现在是，我也不知道你们的具体目标，在龙门没什么人能让近卫局做到这步。'});",
        "playground.drawDialog({name:'星熊',text:'只可能是这样。'});",
        "playground.drawDialog({name:'星熊',text:'我确实很佩服魏先生。但我不会敬重他，今天发生的一切就是原因之一。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'这一切都是必要的。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'你在说服你自己。'});",
        "playground.drawDialog({name:'星熊',text:'唉，老陈，你要么是想得太多，要么是连自己都说服不了。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'可能吧。'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'帮我接诗怀雅。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_015_lmg',focus:2});playground.drawDialog({name:'近卫局成员',text:'明白。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_308_swire_5', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'诗怀雅',text:'喂？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'诗怀雅，我们已经离开了罗德岛，你那边可以开始了。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'刚才骂我骂得挺舒服的，嗯？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'我们关系很差，但没差到那个地步。我是有点虚张声势。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'但我可不是，我骂爽了。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_4',focus:2});playground.drawDialog({name:'陈',text:'你这家伙......'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_4',focus:1});playground.drawDialog({name:'诗怀雅',text:'行，行。真奇怪，我们都只知道自己的任务，却一点也不知道对方的。'});",
        "playground.drawDialog({name:'诗怀雅',text:'还有，我听说了，你为什么不希望罗德岛插手？这是某种程度的赎罪吗？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:`我相信罗德岛的能力，也相信阿米娅和Dr.${nickname}。`});",
        "playground.drawDialog({name:'陈',text:'所以我不想让他们介入现在的情况，他们只会是不确定的因素。'});",
        "playground.drawDialog({name:'陈',text:'甚至是那个凯尔希。她绝不会按我们的规划行事。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'我没见过那家伙。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'没必要见了。有点像你祖父，而且不用每天戴着呼吸机。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'啊。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'各自开工吧。不过我要先去找个人。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'随你。记得看时间。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'星熊，走吧。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'去哪？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'木禾仓库。'});",
        "delay(0.3);playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];