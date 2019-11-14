var story = [
    [
        "bg_wild_a",
        "char_010_chen_1",
        "char_136_hsguma",
        "char_106_franka_1",
        "char_107_liskam_1",
        "char_102_texas_1",
        "char_103_angel_1",
        "char_002_amiya_1",
        "char_002_amiya_4",
        "char_002_amiya_7",
        "char_015_lmg",
        "char_002_amiya_6",
        "char_010_chen_2",
        "char_002_amiya_5",
        "bg_1_back",
        "char_1500_skulsr",
        "char_1002_nsabr_2"
    ],
    [
        "m_dia_mist_loop",
        "p_imp_blunt_h",
        "p_imp_sword_n",
        "p_atk_smg_h",
        "e_skill_skulsrexplo",
        "m_bat_game02_loop",
        "m_bat_game02_intro"
    ],
    [
        "background.showImage({image:'bg_wild_a', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_dia_mist_loop', key:'m_dia_mist_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);blocker.blocker({a:0.3, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0,fadetime:0.1, block:true});voice.playSound({key:'p_imp_blunt_h', volume:0.7});voice.playSound({key:'p_imp_sword_n', volume:0.3, delay:0.4});background.cameraShake({duration:0.6, xstrength:14, ystrength:20, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'第二防线，突破！'});",
        "playground.drawDialog({name:'陈',text:'都跟上！别脱节了！'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'整合运动成员',text:'不能让他们过去！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'W应该带走米莎了——————！'});",
        "playground.drawDialog({name:'整合运动成员',text:'不能让这些家伙得逞！！'});",
        "playground.clearDialog();background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'整合运动成员',text:'啊啊啊！'});",
        "playground.drawDialog({name:'整合运动成员',text:'这是为了报碎骨的仇！！死吧！！'});",
        "background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'p_imp_blunt_h'});playground.drawCharacter({name:'char_136_hsguma'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});playground.drawDialog({name:'星熊',text:'愚昧！'});",
        "playground.drawDialog({name:'星熊',text:'——给我让开！别急着寻死！'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'整合运动成员',text:'呃，呃啊！！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'哦，哦哦......这么粗暴的作战方式，让我想起了罗德岛的一个人。'});",
        "playground.drawDialog({name:'芙兰卡',text:'她和星熊长官大概，大概会很有共同话题吧？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'不要光站在那里，芙兰卡！'});",
        "playground.drawDialog({name:'雷蛇',text:'快做点什么！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'好啦，好啦。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();delay(0.5);playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'哈，龙门的督察传说看来是真的啊......'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'德克萨斯',text:'别分心。'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'没光是——'});",
        "playground.drawDialog({name:'能天使',text:'在看别人哦！砰！'});",
        "blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'p_atk_smg_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'整合运动术师',text:'唔啊！'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'废墟二楼的那些火力小组，可是我发现的哦？'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'德克萨斯',text:'很棒。'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'嘿嘿。'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'德克萨斯',text:'......我们走。'});",
        "playground.drawDialog({name:'德克萨斯',text:'不能让雇主孤身奋战。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();delay(0.5);playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'芙兰卡，有没有找到米莎？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'到处都没有她的踪迹。'});",
        "playground.drawDialog({name:'芙兰卡',text:'W可能，已经把她带走了——'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_4', focus:2});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_4', focus:1});playground.drawDialog({name:'芙兰卡',text:'啧，动作也太快了——'});",
        "voice.playSound({key:'e_skill_skulsrexplo', volume:0.3});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawCharacter({name:'char_002_amiya_7'});voice.stopMusic({});playground.drawDialog({name:'阿米娅',text:'......？'});",
        "playground.drawDialog({name:'阿米娅',text:'哪里发生了......爆炸？'});",
        "playground.drawDialog({name:'阿米娅',text:'芙兰卡，集合各个小队，支援近卫局！'});",
        "voice.playSound({key:'e_skill_skulsrexplo', volume:0.5});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawCharacter({name:'char_015_lmg', name2:'char_002_amiya_7', focus:1});voice.playMusic({intro:'m_bat_game02_intro', key:'m_bat_game02_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawDialog({name:'近卫局队员',text:'罗德岛的各位，千万小心！'});",
        "playground.drawDialog({name:'近卫局队员',text:'这个敌人，它，它......'});",
        "playground.drawDialog({name:'近卫局队员',text:'它......'});",
        "playground.drawCharacter({name:'char_015_lmg', name2:'char_002_amiya_7', focus:2});playground.drawDialog({name:'阿米娅',text:'——发生什么了？为什么不说话？'});",
        "playground.drawDialog({name:'阿米娅',text:'敌人——'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'......咦？！'});",
        "playground.drawDialog({name:'阿米娅',text:'那是......？'});",
        "playground.drawDialog({name:'阿米娅',text:'怎，怎么会......!'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'————什么？'});",
        "playground.drawDialog({name:'陈',text:'嘁，这是什么把戏？'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();background.cameraShake({duration:1, xstrength:14, ystrength:20, vibrato:30, randomness:90, fadeout:true});playground.drawDialog({name:'整合运动成员',text:'——'});",
        "playground.drawDialog({name:'整合运动成员',text:'是奇迹，奇迹啊！'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'————'});",
        "playground.drawDialog({name:'阿米娅',text:'为什么？'});",
        "voice.playSound({key:'e_skill_skulsrexplo', volume:0.7, delay:0.4});background.cameraShake({duration:1, xstrength:14, ystrength:20, vibrato:30, randomness:90, fadeout:true});playground.drawCharacter({name:'char_010_chen_2', name2:'char_002_amiya_5', focus:1});playground.drawDialog({name:'陈',text:'别发呆！找掩体！'});",
        "playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.clearDialog();delay(1);blocker.blocker({a:1, initr:2, r:255, g:255, b:255, fadetime:0.5, block:true});delay(1);blocker.blocker({r:0.6, g:0.3, a:1, fadetime:0.1, block:true});playground.drawCharacter({});background.showImage({});playground.drawImage({image:'bg_1_back', fadetime:0.5, xscale:1, yscale:1, });playground.imageTween({image:'bg_1_back', xscaleto:1.3, yscaleto:1.3, xfrom:0, xto:-100, duration:20, block:false});blocker.blocker({r:0.6, g:0.3, a:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0,fadetime:0.1, block:true});playground.drawDialog({name:'整合运动成员',text:'奇迹发生了！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'————是你吗......是你吗！！！'});",
        "delay(1);playground.drawDialog({name:'整合运动成员',text:'——他没事！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'他，他没事啊！'});",
        "delay(1);playground.drawDialog({name:'整合运动成员',text:'碎骨还活着！！'});",
        "blocker.blocker({a:0.3, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0,fadetime:0.1, block:true});playground.drawDialog({name:'整合运动成员',text:'碎骨！真的是碎骨！！'});",
        "delay(1);blocker.blocker({a:0.3, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0,fadetime:0.1, block:true});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:15, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'整合运动成员',text:'万岁！！'});",
        "playground.clearDialog();background.showImage({screenadapt:'coverall', screenadapt:'coverall', image:'bg_wild_a', width:1, height:1, fadetime:1});playground.drawImage({fadetime:0.5, block:true});delay(1);playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'......难道......'});",
        "playground.drawDialog({name:'阿米娅',text:'......不......'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'整合运动......因为领袖的出现士气大振了吗。'});",
        "playground.drawDialog({name:'陈',text:'要拿下他们变得更难了。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0});delay(1);playground.drawCharacter({name:'char_1500_skulsr', name2:'char_1002_nsabr_2', focus:2});playground.drawDialog({name:'整合运动成员',text:'......形势很严峻，碎骨。'});",
        "playground.drawDialog({name:'整合运动成员',text:'但至少......你回来了。'});",
        "playground.drawDialog({name:'整合运动成员',text:'——太好了......真的......太好了。'});",
        "playground.drawDialog({name:'整合运动成员',text:'米莎她也应该离开了吧。'});",
        "playground.drawCharacter({name:'char_1500_skulsr', name2:'char_1002_nsabr_2', focus:1});playground.drawDialog({name:'碎骨',text:'......'});",
        "playground.drawCharacter({name:'char_1500_skulsr', name2:'char_1002_nsabr_2', focus:2});playground.drawDialog({name:'整合运动成员',text:'这样，我们就能放手一搏了！'});",
        "playground.drawCharacter({name:'char_1500_skulsr', name2:'char_1002_nsabr_2', focus:1});playground.drawDialog({name:'碎骨',text:'——我会在这里，挡住他们。'});",
        "playground.drawDialog({name:'碎骨',text:'你们，快走。'});",
        "playground.drawDialog({name:'碎骨',text:'我会保护你们——'});",
        "playground.drawCharacter({name:'char_1500_skulsr', name2:'char_1002_nsabr_2', focus:2});playground.drawDialog({name:'整合运动成员',text:'说什么呢碎骨。'});",
        "playground.drawDialog({name:'整合运动成员',text:'我们不是早说过，要一起回乌萨斯，给那些家伙点颜色看看吗？'});",
        "playground.drawCharacter({name:'char_1500_skulsr'});playground.drawDialog({name:'碎骨',text:'......'});",
        "playground.drawDialog({name:'碎骨',text:'好好照顾自己，别死了。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});delay(1);playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'不，不可能......'});",
        "delay(1);playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'愣在那做什么！'});",
        "playground.drawDialog({name:'陈',text:'星熊，立刻向外围的近卫局成员发出通讯！'});",
        "playground.drawDialog({name:'陈',text:'陷阱和埋伏已经基本被我方排除，没有发现敌方领袖W和任务目标的身影。'});",
        "playground.drawDialog({name:'陈',text:'现在，更改作战目标！'});",
        "playground.drawDialog({name:'陈',text:'立刻收拢包围圈，合力夹击整合运动！'});",
        "delay(1);playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'为什么......'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1.1, block:true});playground.drawDialog({name:'阿米娅',text:'......为什么会这样.......'});",
        "playground.drawDialog({name:'阿米娅',text:'不......'});"
    ]
];