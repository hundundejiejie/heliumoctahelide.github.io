var story = [
    [
        "bg_indoor_2",
        "char_002_amiya_1",
        "char_010_chen_1",
        "char_106_franka_1",
        "char_107_liskam_1",
        "char_103_angel_1",
        "char_002_amiya_6"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "d_gen_transmissionget"
    ],
    [
        "background.showImage({image:'bg_indoor_2', width:1, height:1, fadetime:1, screenadapt:'coverall'});voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'——就是这样，陈长官。'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_010_chen_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'陈',text:'收到。'});",
        "playground.drawDialog({name:'陈',text:'近卫局会保证汇合地点的安全，等候你们护送目标抵达。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'明白。'});",
        "playground.drawDialog({name:'阿米娅',text:'芙兰卡，把侦查小队绘制的地图给我——'});",
        "playground.drawDialog({name:'阿米娅',text:'嗯，这样就行。'});",
        "playground.drawDialog({name:'阿米娅',text:'我们会沿最短路径离开贫民区。'});",
        "playground.drawDialog({name:'阿米娅',text:'（还有其他指示吗，陈长官？）'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();playground.drawDialog({name:'陈',text:'动作快点。时间不等人。通话结束。'});",
        "playground.drawDialog({name:'陈',text:'——收队！别磨蹭！！'});",
        "playground.drawDialog({name:'陈',text:'......'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'.......呼，挂断了......'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:2});playground.drawDialog({name:'芙兰卡',text:'也就是说，我们现在要给她跑腿？'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_106_franka_1', focus:1});playground.drawDialog({name:'阿米娅',text:'毕竟是我们找到了目标......'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'（龙门近卫局并没有向我们出示过任何目标的具体资料。）'});",
        "playground.drawDialog({name:'雷蛇',text:'明明是合作者，却突然向我们告知，被我们发现的感染者有重要作用。'});",
        "playground.drawDialog({name:'雷蛇',text:'我们缺少了许多关键信息。'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'阿米娅',text:'（......近卫局不过多透露信息是理所当然的。）'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'为什么？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'你那聪明脑瓜现在转不过来了？知道太多对罗德岛有什么好处？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'我只理解知道太少对任务有害。'});",
        "playground.drawDialog({name:'雷蛇',text:'总之，我们得先把米莎护送到汇合地点。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'路线的选择，唔——'});",
        "playground.drawDialog({name:'阿米娅',text:'又得麻烦他们了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'你是指？'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'企鹅物流。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'哟，罗德岛的各位~'});",
        "playground.drawDialog({name:'能天使',text:'任务是不是很快就完成了？“企鹅”的服务如何？'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'——我就知道。'});",
        "playground.drawDialog({name:'芙兰卡',text:'唉......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'别这么~垂头丧气的嘛。'});",
        "playground.drawDialog({name:'能天使',text:'是发生什么不开心的事情了？还是说，遇到了什么不喜欢的人？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'你。'});",
        "playground.drawCharacter({name:'char_107_liskam_1', name2:'char_106_franka_1', focus:1});playground.drawDialog({name:'雷蛇',text:'别这么说，没有企鹅物流的情报，罗德岛没法缩小搜索范围——'});",
        "playground.drawDialog({name:'雷蛇',text:'更不可能那么轻易地掌握有关龙门感染者的各种信息的。'});",
        "playground.drawCharacter({name:'char_107_liskam_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'这位小姐，多谢夸奖！你还是很识货的！'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'能天使，我们需要一条比较安全的路线。'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'那我就直接说结论好了。'});",
        "playground.drawDialog({name:'能天使',text:'嗯......哪条都不好走。'});",
        "playground.drawDialog({name:'能天使',text:'这条，就这条，嗯，请看地图，就是从贫民区中心，向北移动三条街道，然后再向南一路向前，直到离开贫民区。'});",
        "playground.drawDialog({name:'能天使',text:'这就算是，最安全的路线了吧。'});",
        "playground.drawDialog({name:'能天使',text:'然而，就算是这条路上埋伏着的敌人，也够组好几个合唱团了呢。'});",
        "playground.drawCharacter({name:'char_002_amiya_6', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'阿米娅',text:'敌人？'});",
        "playground.drawCharacter({name:'char_103_angel_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'看来整合运动确实已经渗透进了龙门。'});",
        "playground.drawDialog({name:'雷蛇',text:'能天使小姐，我可不可以理解成，你已经摸清了敌人的分布？'});",
        "playground.drawCharacter({name:'char_103_angel_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'能天使',text:'嗯嗯！'});",
        "playground.drawCharacter({name:'char_103_angel_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'那，他们的行动趋势呢？'});",
        "playground.drawCharacter({name:'char_103_angel_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'能天使',text:'正在朝你们靠拢！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1',focus:2});playground.drawDialog({name:'雷蛇',text:'......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1',focus:1});playground.drawDialog({name:'芙兰卡',text:'......'});",
        "playground.drawCharacter({ name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'我们被围堵了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'首要任务，是把米莎安全带出去。'});",
        "playground.drawDialog({name:'阿米娅',text:'芙兰卡，针对敌人的突袭，就交给你们了。'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'简单。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'雷蛇，重装小队负责两翼。米莎也交由你保护。'});",
        "playground.drawCharacter({name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'没问题。'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'对了对了，敌人似乎还带了些术师哦？'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......唔。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士，请牢牢跟在我身边。'});",
        "playground.drawDialog({name:'阿米娅',text:'接下来也请你继续指挥小队作战，我会传达你的命令。'});",
        "playground.drawDialog({name:'阿米娅',text:'......我们就走这最安全的路线试试看。'});"
    ]
];