var story = [
    [
        "bg_forest",
        "char_145_prove_1",
        "char_166_skfire_1",
        "char_166_skfire_2"
    ],
    [
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_gen_leaveshake",
        "d_gen_transmissionget",
        "m_bat_indust_loop",
        "m_bat_indust_intro",
        "d_gen_runsand"
    ],
    [
        "background.showImage({image:'bg_forest', fadetime:1});voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.8, crossfade:1.5});playground.clearDialog();playground.drawCharacter({});delay(1);voice.playSound({key:'d_gen_leaveshake', volume:0.7});playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2,fadetime:1,block:true});delay(1);playground.drawDialog({name:'天火',text:'普罗旺斯。'});",
        "playground.drawDialog({name:'天火',text:'普罗旺斯，我真的真的不能把这里烧干净吗？'});",
        "playground.drawDialog({name:'天火',text:'这些长得毫无意义的树枝和草实在是太碍事了。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'这已经是一小时内你第十次抱怨了，天火大小姐。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'本来我就只是想来验证一下我的疑惑而已，顺便帮艾雅法拉小姐收集一些样本。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'可是你自己提出要一起来实地勘察的，要是实在忍受不了这里的生态环境的话，也不用强忍着。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'现在大家应该都在海边玩，你直接回去和大家汇合就好，你完全不用跟我来受这种罪的。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'不，我才不放心你这么乱来。'});",
        "playground.drawDialog({name:'天火',text:'虽然有你这样的天灾信使在，只有以我的知识储备，才能保证火焰环境下的你们不出什么意外状况。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'这样的话，万一反而在山上引起大火就不妙了。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'虽然我知道你能应付那种情况......这一次我们毕竟只是来度假的，还是不要引起什么混乱比较好。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'否则到时候又要给博士他们添麻烦了。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'好吧，看在博士和阿米娅的面子上，忍耐一下也没什么问题。'});",
        "playground.drawDialog({name:'天火',text:'诶，那边有一堆黑色的石头你看到了吗？'});",
        "playground.drawDialog({name:'天火',text:'好像是黑曜石什么的，我过去看看。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'小心一点，别在这一带乱跑。尤其是不要随意用火！'});",
        "playground.drawDialog({name:'普罗旺斯',text:'呼......应付这位小姐可比实地勘察要累多了。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'不过，真奇怪......即使是夏天，这里的气温......也有些反常。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});voice.playSound({key:'d_gen_leaveshake', volume:0.7});blocker.blocker({a:0, fadetime:2, block:false});delay(2);playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'大尾巴。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});background.cameraShake({duration:0.3, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'天火',text:'我说，大尾巴！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'嗯？欸，你是在叫我？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'你从刚才起有闻到什么奇怪的味道吗？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'这么说的话，的确有点......'});",
        "playground.drawDialog({name:'普罗旺斯',text:'唔。很微弱，但是我敢肯定不是错觉。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'火山气体排出的量比我想象中要多，而且艾雅法拉交给我的检测符文也已经有反应了。'});",
        "playground.drawDialog({name:'天火',text:'看上去不用我做什么，搞不好再过一段时间，这里就自然会变成一片火海哦。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'这座火山的确有可能有问题......'});",
        "playground.drawDialog({name:'普罗旺斯',text:'但是更多的我们只能向艾雅法拉小姐求证了。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'这边，岩壁上还有些样本。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'普罗旺斯',text:'喝！'});",
        "playground.drawDialog({name:'普罗旺斯',text:'好，这些就够了！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});voice.playSound({key:'d_gen_leaveshake', volume:0.7});blocker.blocker({a:0, fadetime:2, block:false});delay(2);voice.playSound({key:'d_gen_transmissionget',volume:0.6});voice.playSound({key:'d_gen_transmissionget',volume:0.6});playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'样品数据可以用临时的仪器做点检测，然后发回罗德岛。'});",
        "playground.drawDialog({name:'天火',text:'艾雅法拉那一头应该会最快作出后续数据分析。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:1});playground.drawDialog({name:'普罗旺斯',text:'可是从这些黑曜石的触感看来......我也不知道，这里的黑曜石感觉有点特殊，不像是普通的黑曜石。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'加上刚才闻到的那股味道以及这里的气温......'});",
        "playground.drawDialog({name:'普罗旺斯',text:'虽然我也不确定，但是......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'你到底想说什么，支支吾吾的，干脆一点！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});playground.drawDialog({name:'？？？',text:'来啊！不过是几个虫子而已！看我就在这里把你们都收拾掉！'});",
        "background.cameraShake({duration:0.8, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'？？？',text:'可恶，裙子的下摆卡住了......'});",
        "playground.drawDialog({name:'？？？',text:'有、有没有人在这附近啊！为什么这里的源石虫会聚集这么多啊？！'});",
        "playground.drawDialog({name:'？？？',text:'不、不要过来啊！谁来帮帮我！'});",
        "voice.playMusic({intro:'m_bat_indust_intro', key:'m_bat_indust_loop', volume:0.8, crossfade:0.5});playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'是求救声！海滩那边传来的！'});",
        "playground.drawDialog({name:'普罗旺斯',text:'我们快过去看看！'});",
        "playground.drawCharacter({name:'char_166_skfire_1'});playground.drawDialog({name:'天火',text:'喂，等等我啊！'});"
    ]
];