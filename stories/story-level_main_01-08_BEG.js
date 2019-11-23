var story = [
    [
        "bg_cher_7",
        "char_148_nearl_3",
        "char_002_amiya_4",
        "char_002_amiya_7",
        "char_014_riope",
        "char_130_doberm_ex",
        "char_011_talula_1",
        "char_013_riop",
        "bg_cher_8",
        "char_016_medic",
        "avg_11_1",
        "bg_light",
        "bg_1_reflect",
        "char_002_amiya_9",
        "char_002_amiya_8",
        "char_148_nearl_8"
    ],
    [
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_gen_thunders_amb",
        "b_char_defboost",
        "g_ui_stagepush",
        "d_sp_ballista",
        "e_atk_arrow_h",
        "p_skill_chimera",
        "m_bat_game02_loop",
        "m_bat_game02_intro",
        "p_skill_spiritexplo",
        "d_gen_walk_n"
    ],
    [
        "voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:0.8, crossfade:1.5, delay:0.5});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_7', fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5,block:true});delay(0.3);playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'阿米娅，带博士离开。'});",
        "playground.drawDialog({name:'临光',text:'......立刻！'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'不行！我不能......'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_148_nearl_3', focus:2});playground.drawDialog({name:'临光',text:'你也感觉到了！她......再这样下去，整个救援队都会葬送在这里！'});",
        "playground.drawDialog({name:'临光',text:'那个塔露拉......'});",
        "playground.drawDialog({name:'临光',text:'她是活生生的怪物！阿米娅！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', name2:'char_148_nearl_3', focus:1});playground.drawDialog({name:'阿米娅',text:'我们一起战斗的话，不会有问题的！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', name2:'char_148_nearl_3', focus:2});playground.drawDialog({name:'临光',text:'那博士呢？你能保证博士的安全吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_148_nearl_3', focus:1});playground.drawDialog({name:'阿米娅',text:'......唔......'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'E4小队，我们留在这里断后！'});",
        "playground.drawDialog({name:'临光',text:`一定要让阿米娅和Dr.${nickname}，以及各个医疗小组安全撤离！`});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'不，交给我和我的小队吧。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_148_nearl_3',focus:2});playground.drawDialog({name:'临光',text:'Ace！现在难道是说这种话的时候吗！'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_148_nearl_3',focus:1});playground.drawDialog({name:'Ace',text:'我很冷静。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_148_nearl_3',focus:2});playground.drawDialog({name:'临光',text:'你难道没看到吗，她周围的东西，都在融化！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'我不会留下你们独自战斗的。'});",
        "playground.drawDialog({name:'阿米娅',text:'罗德岛......绝不会丢下你们的！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'阿米娅，时间宝贵！你必须撤退！'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'——你应该信任我们。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'我不能看着罗德岛的任何一个人牺牲！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'想想任务目标，想想我们的目的！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'不是说这个的时候！'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'——'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:10, randomness:20, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0, fadetime:3, block:true});playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'——？热量......在......她手里......聚集？'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'她周身的景象......扭曲了？'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'不，那是她......加热了周围的空气！'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'小心，她将要使用的法术......'});",
        "playground.drawDialog({name:'阿米娅',text:'不对......不对！临光！！快回来！！'});",
        "playground.drawDialog({name:'阿米娅',text:'那不是......那个法术会把你——'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});background.showImage({image:'bg_cher_7', width:1, height:1, fadetime:0});blocker.blocker({a:0, fadetime:1.5, block:true});playground.drawCharacter({name:'char_011_talula_1',block:true});playground.drawDialog({name:'塔露拉',text:'——安静。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'呜呃......！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_011_talula_1',block:true});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0.1, fadetime:2, block:false});delay(1);playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'哈，哈......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'临光！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'临光',text:'咳......退后！我不要紧......'});",
        "playground.drawDialog({name:'临光',text:'只不过是......有点烫而已......'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'说什么......不要紧？'});",
        "playground.drawDialog({name:'杜宾',text:'全身的铠甲没有一块是完好的，究竟哪里不要紧了？！'});",
        "playground.drawDialog({name:'杜宾',text:'你不能再与她战斗了！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'临光',text:'我说了——退后！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'临光！你这倔脾气......！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});playground.drawCharacter({name:'char_011_talula_1',block:true});playground.drawDialog({name:'塔露拉',text:'——哦？'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'蹲下！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0.1, fadetime:2, block:false});delay(1);playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'咳，咳......又是什么把戏！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'......不可见的火扫过了我们的头顶。'});",
        "playground.drawDialog({name:'Ace',text:'后撤。整个街区都在融化......'});",
        "playground.drawDialog({name:'Ace',text:'别做无谓的牺牲！'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_014_riope',focus:1});playground.drawDialog({name:'临光',text:'......'});",
        "playground.drawDialog({name:'临光',text:'我是在和什么东西战斗？'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'必须干扰她施术的过程......'});",
        "playground.drawDialog({name:'Ace',text:'狙击干员！瞄准目标敌人！'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, block:true});playground.clearDialog();playground.drawCharacter({fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, block:true});background.showImage({fadetime:2});playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'——'});",
        "playground.drawDialog({name:'塔露拉',text:'反抗会为大地带去希望。'});",
        "playground.drawDialog({name:'塔露拉',text:'但反抗，改变不了你们的命运。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'射击！！'});",
        "playground.drawCharacter({fadetime:0});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'切尔诺伯格已得解放。'});",
        "playground.drawDialog({name:'塔露拉',text:'我们的工作已经完成，而我对你们产生了些许兴趣。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'什么——'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'不过，也就仅此而已。'});",
        "playground.drawDialog({name:'塔露拉',text:'你们做出了错误的选择。'});",
        "playground.drawDialog({name:'塔露拉',text:'罗德岛，你们该真正站在感染者这边。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0.1, fadetime:2, block:true});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_8', width:1, height:1, fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, block:true});playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'怎么......回事？'});",
        "playground.drawDialog({name:'医疗干员',text:'为什么整个广场......都被烧焦了？'});",
        "playground.drawDialog({name:'医疗干员',text:'刚刚......发生了......什么......？'});",
        "playground.drawDialog({name:'医疗干员',text:'呼......呼吸......好烫......我......'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'石块，弩箭，弓矢......'});",
        "playground.drawDialog({name:'近卫干员',text:'都没了。'});",
        "playground.drawDialog({name:'近卫干员',text:'一瞬间......她周围的所有事物，全都都被燃烧殆尽......'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'你们具备解放者该有的韧性。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'......连渣滓都没剩下。'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'临光',text:'阿米娅。你很清楚。'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:2});playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'临光',text:'必须有人，挡住她。'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'——但我厌烦了。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'阿米娅！！'});",
        "voice.playSound({key:'d_gen_thunders_amb', volume:0.3});voice.playSound({key:'b_char_defboost', volume:0.3, delay:0.4});blocker.blocker({a:1, initr:2, r:1, g:1, b:1, fadetime:0.5, block:true});playground.clearDialog();delay(1);blocker.blocker({r:0.9, g:0.4, b:0.3, a:1, fadetime:0.1, block:true});playground.drawCharacter({});playground.drawImage({image:'avg_11_1',x:0, y:-50,xscale:1.3, yscale:1.3, fadetime:0});playground.imageTween({xfrom:-100, yfrom:-50, xto:0, yto:0, xscalefrom:1.3, yscalefrom:1.3, xscaleto:1, yscaleto:1, duration:35, block:false});blocker.blocker({r:0.7, g:0.4, a:1, fadetime:0.3, block:true});blocker.blocker({r:0.2, g:0,b:0, a:0.1, fadetime:1.5, block:true});playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'你们总要为杀害同胞而付出代价。'});",
        "playground.drawDialog({name:'塔露拉',text:'我将赐予你们一个我十分喜爱的结局。'});",
        "playground.drawDialog({name:'塔露拉',text:'——毁灭。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'糟了！！'});",
        "playground.drawDialog({name:'杜宾',text:'走，走......快走！！'});",
        "playground.drawDialog({name:'杜宾',text:'那种热量和规模......不行，不行！'});",
        "playground.drawDialog({name:'杜宾',text:'保护阿米娅和博士！快！！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'来不及了——！'});",
        "playground.drawDialog({name:'临光',text:'让我挡住她！！！'});",
        "playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'啊啊！！'});",
        "voice.stopMusic({fadetime:1});blocker.blocker({r:0.9, g:0.4, b:0.3, a:1, fadetime:0.1, block:true});playground.drawImage({fadetime:0});playground.clearDialog();playground.drawCharacter({fadetime:0});background.showImage({image:'bg_light'});background.cameraShake({duration:6, xstrength:10, ystrength:8, vibrato:20, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});voice.playSound({key:'p_skill_chimera', volume:1});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.2, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:1, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'......'});",
        "playground.drawDialog({name:'医疗干员',text:'......嗯？？？'});",
        "blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawDialog({name:'医疗干员',text:'阿......阿米娅？'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'不会让你伤害他们的。'});",
        "delay(1);playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'......'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawImage({image:'bg_1_reflect',fadetime:0,screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_002_amiya_9'});playground.drawDialog({name:'阿米娅',text:'我不会......允许你这么做的！'});",
        "voice.playMusic({intro:'m_bat_game02_intro', key:'m_bat_game02_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.clearDialog();background.cameraShake({duration:6, xstrength:10, ystrength:8, vibrato:20, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});voice.playSound({key:'p_skill_spiritexplo', volume:1});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.4, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawCharacter({fadetime:1});playground.drawCharacter({name:'char_011_talula_1', fadetime:1, block:false});blocker.blocker({a:1, r:1, g:1, b:1, fadetime:0.3, rfrom:0.8, bfrom:0.8, gfrom:0.8, block:true});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:1, r:1, g:1, b:1, fadetime:0.3, rfrom:0.8, bfrom:0.8, gfrom:0.8, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:false});blocker.blocker({a:0, fadetime:2, block:true});playground.drawDialog({name:'塔露拉',text:'————哦？'});",
        "delay(0.6);playground.clearDialog();playground.drawCharacter({fadetime:0});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0.1, fadetime:2, block:true});playground.drawCharacter({name:'char_002_amiya_7'});background.cameraShake({duration:6, xstrength:10, ystrength:8, vibrato:20, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});voice.playSound({key:'p_skill_chimera', volume:1});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.2, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_7'});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0.8, r:1, g:0.4, b:0.5, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:true});blocker.blocker({a:1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.2, block:false});playground.drawDialog({name:'阿米娅',text:'咕......'});",
        "playground.drawDialog({name:'阿米娅',text:'必须......让大家......！'});",
        "background.cameraShake({duration:6, xstrength:10, ystrength:8, vibrato:20, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});voice.playSound({key:'p_skill_spiritexplo', volume:1});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.4, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawCharacter({name:'char_148_nearl_8'});delay(1);playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'阿米娅她一个人......挡下了敌人的法术......？'});",
        "playground.drawCharacter({name:'char_148_nearl_3',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'临光',text:'不行......那力量太庞大了......！'});",
        "playground.drawDialog({name:'临光',text:'哪怕是阿米娅......'});",
        "playground.drawDialog({name:'临光',text:'哪怕是阿米娅也撑不了多久的！'});",
        "playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'阿米娅！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'没问题......我没问题......'});",
        "playground.drawDialog({name:'阿米娅',text:'我没问题的——！'});",
        "playground.drawDialog({name:'阿米娅',text:'我要......我必须......保护你们！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});blocker.blocker({a:0, fadetime:2, block:true});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'黑色......将敌人的法术封在了广场上......'});",
        "playground.drawCharacter({name:'char_002_amiya_9'});playground.drawDialog({name:'阿米娅',text:'唔......唔啊......呃......！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'阿米娅......她，她设下的屏障，在燃烧！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_002_amiya_9',focus:1});playground.drawDialog({name:'杜宾',text:'阿米娅，不可以！！那样的话，你的戒指——！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_002_amiya_4',focus:2});playground.drawDialog({name:'阿米娅',text:'哪怕......虽然......'});",
        "playground.drawDialog({name:'阿米娅',text:'博士，对不起——'});",
        "playground.drawDialog({name:'阿米娅',text:'哪怕会带来灾难，哪怕我会......！'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'我也不能......再看着重要的人......'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'呵————'});",
        "playground.drawDialog({name:'塔露拉',text:'很好。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'啊......啊啊......！！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'阿米娅！'});",
        "playground.drawDialog({name:'临光',text:'可恶......再这样下去，阿米娅会......！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_148_nearl_3',focus:1});playground.drawDialog({name:'杜宾',text:'你要干什么？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_148_nearl_3',focus:2});playground.drawDialog({name:'临光',text:'去毁掉那个龙女的法术！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_148_nearl_3',focus:1});playground.drawDialog({name:'杜宾',text:'你......'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'——“卡西米尔的光芒啊，耀骑士将为你奉献自身——”'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'博士！快走！我们会帮助阿米娅的，你必须......'});",
        "playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'————！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});voice.playSound({key:'d_gen_thunders_amb', volume:0.5});voice.playSound({key:'b_char_defboost', volume:0.5, delay:0.4});voice.playSound({key:'d_gen_thunders_amb', volume:0.2, delay:0.7});playground.drawCharacter({name:'char_002_amiya_7'});voice.playSound({key:'g_ui_stagepush', volume:0.2, delay:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0.3, r:1, g:0.4, b:0.4, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0.1, r:1, g:0.4, b:0.1, afrom:1, rfrom:1, gfrom:0.4, bfrom:0.4, fadetime:0.2, block:true});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0.8, rfrom:1, gfrom:1, bfrom:1, fadetime:0.3, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:0.1, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.3, block:true});blocker.blocker({a:0.1, fadetime:1, block:true});background.cameraShake({duration:6, xstrength:10, ystrength:8, vibrato:20, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});voice.playSound({key:'p_skill_spiritexplo', volume:1});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_8'});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.4, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_7'});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0.8, r:1, g:1, b:1, fadetime:0.1, block:true});playground.drawCharacter({name:'char_002_amiya_9'});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.5, block:true});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});playground.drawDialog({name:'阿米娅',text:'啊啊啊啊啊！！'});",
        "blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:1, block:true});blocker.blocker({a:1, r:0, g:0, b:0, block:true});voice.stopMusic({fadetime:1});playground.drawDialog({name:'阿米娅',text:'唔————？'});",
        "playground.drawDialog({name:'Ace',text:'可以了，阿米娅。'});",
        "playground.drawDialog({name:'阿米娅',text:'——？！'});",
        "playground.drawCharacter({fadetime:0});playground.drawImage({});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'你已经很了不起了。'});",
        "playground.drawDialog({name:'Ace',text:'把你的重担，也分给我们一些吧。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'我———'});",
        "background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, block:false});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'阿米娅！'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'杜宾，带他们先走，我一会儿就跟上。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......Ace......'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'Ace......不......Ace......！'});",
        "playground.drawDialog({name:'阿米娅',text:'一定......要............'});",
        "playground.drawCharacter({fadetime:1.5});voice.playSound({key:'d_gen_walk_n', volume:1});playground.drawDialog({name:'Ace',text:'——'});",
        "playground.drawDialog({name:'Ace',text:`抱歉，Dr.${nickname}，你可能不记得我了。`});",
        "playground.drawDialog({name:'Ace',text:'但我记得你，也知道你是怎样的人。'});",
        "playground.drawDialog({name:'Ace',text:'......总有一天，你要和阿米娅一起共同面对这片残酷的大地。'});",
        "playground.drawDialog({name:'Ace',text:'所以，保护好她，博士。'});",
        "playground.drawDialog({name:'Ace',text:'走吧。'});",
        "playground.drawDialog({name:'Ace',text:'祝你们前路无阻。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];