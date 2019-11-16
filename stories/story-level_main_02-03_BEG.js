var story = [
    [
        "bg_lungmen_b",
        "char_012_misa_1",
        "char_012_misa_3",
        "char_002_amiya_1",
        "char_002_amiya_6",
        "char_002_amiya_7",
        "char_002_amiya_4",
        "char_002_amiya_2",
        "char_106_franka_1",
        "char_107_liskam_1",
        "char_010_chen_1"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "d_gen_soldiersrun",
        "p_skill_spiritexplo",
        "d_gen_walk_n",
        "d_gen_transmissionget"
    ],
    [
        "voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});background.showImage({image:'bg_lungmen_b', width:1, height:1, fadetime:1});delay(1);playground.drawCharacter({name:'char_012_misa_1'});playground.drawDialog({name:'？？？',text:'快藏起来！'});",
        "playground.drawDialog({name:'？？？',text:'我......我必须走了。'});",
        "playground.drawDialog({name:'？？？',text:'这个......这个，给你们。'});",
        "playground.drawDialog({name:'？？？',text:'这是我们的护身符，是我妈妈亲手教我做的......'});",
        "playground.drawDialog({name:'？？？',text:'给你们的这个是我做的。'});",
        "playground.drawDialog({name:'？？？',text:'亲手做的布偶，能保证重要的人平安无事。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'小孩们',text:'嗯，米莎姐姐，我们会好好保管它的！'});",
        "playground.drawCharacter({name:'char_012_misa_3'});playground.drawDialog({name:'米莎',text:'真乖。'});",
        "playground.drawCharacter({name:'char_012_misa_1'});playground.drawDialog({name:'米莎',text:'藏好！别出声。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'小孩们',text:'嗯！'});",
        "playground.clearDialog();delay(2);blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});voice.playSound({key:'d_gen_soldiersrun'});playground.drawDialog({name:'暴民',text:'往哪去了？！你们，追！看那些感染者还能跑多远！'});",
        "playground.drawDialog({name:'暴民',text:'嗯？这里......看来还有些东西呢？'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......依据能天使的情报，任务目标一定在这附近逗留过才对......'});",
        "playground.drawDialog({name:'阿米娅',text:'啊啊，这里的地形真是很复杂，光凭罗德岛，这个任务果然也有些麻烦呢......'});",
        "playground.drawDialog({name:'阿米娅',text:'幸好联系了企鹅物流......'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'......有人？'});",
        "playground.drawDialog({name:'阿米娅',text:'这些人是......！'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});playground.drawDialog({name:'小孩',text:'坏蛋！你们这些坏蛋！放开我！放——开——！'});",
        "playground.drawDialog({name:'暴民',text:'说！她往哪跑了？'});",
        "playground.drawDialog({name:'暴民',text:'别不知好歹！'});",
        "playground.drawDialog({name:'小孩',text:'龙姐姐！龙姐姐！你在哪里！救命啊——'});",
        "playground.drawDialog({name:'小孩',text:'米莎姐姐！米莎姐姐，救救我！！'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({fadetime:0});playground.drawDialog({name:'暴民',text:'谁？'});",
        "playground.drawDialog({name:'暴民',text:'别想走！'});",
        "playground.drawCharacter({name:'char_002_amiya_7',fadetime:1});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'......我劝你们，立刻离开。'});",
        "delay(1);playground.drawCharacter({fadetime:0});playground.drawDialog({name:'暴民',text:'......？！'});",
        "playground.drawDialog({name:'暴民',text:'你——？！'});",
        "playground.drawDialog({name:'暴民',text:'哪里来的外地人！'});",
        "playground.drawDialog({name:'暴民',text:'你就不怕我们......'});",
        "playground.clearDialog();voice.playSound({key:'p_skill_spiritexplo', volume:0.4});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'否则——'});",
        "playground.drawCharacter({fadetime:0});playground.drawDialog({name:'暴民',text:'啊？'});",
        "playground.drawDialog({name:'暴民',text:'咕啊！！'});",
        "playground.drawDialog({name:'暴民',text:'那，那是什么？'});",
        "playground.drawDialog({name:'暴民',text:'法术！她，她在使用法术？！'});",
        "playground.drawDialog({name:'暴民',text:'啊啊啊！别过来！'});",
        "blocker.blocker({a:0, block:true, fadetime:0.5});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'——以后别再做些欺压弱小的事情。'});",
        "playground.drawCharacter({fadetime:0});background.cameraShake({duration:1, xstrength:3, ystrength:4, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'暴民',text:'呃呃啊，怪物！'});",
        "voice.playSound({key:'d_gen_soldiersrun', volume:0.4});background.cameraShake({duration:1, xstrength:5, ystrength:6, vibrato:90, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'呵......怪物......吗。'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'好啦，没事了，都出来吧。'});",
        "playground.drawDialog({name:'阿米娅',text:'这里危险，快去安全点的地方吧。'});",
        "playground.drawCharacter({fadetime:0});playground.drawDialog({name:'小孩们',text:'谢谢你，兔姐姐！'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'都小心点啊！'});",
        "delay(0.5);voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_106_franka_1', fadetime:1});playground.drawDialog({name:'芙兰卡',text:'阿米娅，这是什么情况？'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:1});playground.drawDialog({name:'阿米娅',text:'嗯，我看见了一个，应该也是未登记的感染者......'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:2});playground.drawDialog({name:'芙兰卡',text:'乌萨斯人？'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:1});playground.drawDialog({name:'阿米娅',text:'是的，乌萨斯人，她往贫民区更深处去了。'});",
        "playground.drawDialog({name:'阿米娅',text:'芙兰卡，让附近参与搜查的干员集合。'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:2});playground.drawDialog({name:'芙兰卡',text:'Ok。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'越往贫民区前进，形势就越复杂......'});",
        "playground.drawDialog({name:'阿米娅',text:'一般居民，犯罪分子，未确认身份的流民......层出不穷。'});",
        "playground.drawDialog({name:'阿米娅',text:'必须多加准备才行。'});",
        "playground.drawCharacter({name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'有通信，阿米娅。'});",
        "playground.drawDialog({name:'雷蛇',text:'请稍等一下。'});",
        "playground.drawDialog({name:'雷蛇',text:'——'});",
        "playground.drawDialog({name:'雷蛇',text:'是。'});",
        "playground.drawDialog({name:'雷蛇',text:'阿米娅，是近卫局。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'阿米娅',text:'是陈长官？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'没错。'});",
        "playground.drawDialog({name:'雷蛇',text:'——是的，我们已经搜查出了不少非登记感染者。'});",
        "playground.drawDialog({name:'雷蛇',text:'——是的。'});",
        "playground.drawDialog({name:'雷蛇',text:'——什么？'});",
        "playground.drawDialog({name:'雷蛇',text:'——白色短发，乌萨斯人，少年女性，身高一米四五左右，名叫米莎？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'阿米娅',text:'这是——？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'——明白。'});",
        "playground.drawDialog({name:'雷蛇',text:'阿米娅，陈长官要求我们，立即搜查具备这种特征的感染者。'});",
        "playground.drawDialog({name:'雷蛇',text:'一经发现，立刻交给近卫局。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'阿米娅',text:'请给我一下通讯设备。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'喂，喂......'});",
        "playground.drawDialog({name:'阿米娅',text:'陈长官，你听得到吗？'});",
        "playground.drawCharacter({widgetid:'1', name:'char_010_chen_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'陈',text:'我听得到。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'我能否确认下，刚才你下达命令的有效性？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',focus:0});playground.drawDialog({name:'陈',text:'真实可靠，立刻执行。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'明白了。'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'突然就挂断了......'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'陈长官，好硬的脾气啊。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'那这就是我们接下来所要执行的任务了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'阿米娅......几位重装干员向我发来了另一条通讯。'});",
        "playground.drawDialog({name:'雷蛇',text:'他们遭遇了对罗德岛干员展现出攻击倾向的人。'});",
        "playground.drawDialog({name:'雷蛇',text:'而且，那些袭击者不是普通人，他们是......感染者。'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});delay(0.5);playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......让重装干员们向我们目前所在的区域撤退。'});",
        "playground.drawDialog({name:'阿米娅',text:'侦察小队！去追踪任务目标，白发乌萨斯少女，身高1.45米，务必注意隐蔽和安全！'});",
        "playground.drawDialog({name:'阿米娅',text:'其他干员，跟随各自的队长散开。'});",
        "playground.drawCharacter({});playground.Decision({options:[['以逸待劳，很好。', '这是......诱敌深入？', '芙兰卡小姐，我们是不是要伏击敌人？']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'哟——不错嘛。'});",
        "playground.drawDialog({name:'芙兰卡',text:'雷蛇，这孩子很聪明呢。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:`......Dr.${nickname}可是战术指挥官，你严肃点。`});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'行动吧。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'攻击罗德岛的感染者......吗。'});"
    ]
];