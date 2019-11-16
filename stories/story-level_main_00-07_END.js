var story = [
    [
        "bg_cher_5",
        "char_130_doberm_ex",
        "char_013_riop",
        "char_002_amiya_7",
        "char_014_riope",
        "char_002_amiya_5",
        "char_1502_crowns",
        "char_1002_nsabr_2",
        "char_1507_mephisto_6"
    ],
    [
        "m_dia_escape_loop",
        "m_dia_escape_intro",
        "d_gen_soldiersrun",
        "e_atk_arrow_h",
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_gen_walk_n"
    ],
    [
        "background.showImage({image:'bg_cher_5', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_dia_escape_intro', key:'m_dia_escape_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);voice.playSound({key:'d_gen_soldiersrun',volume:0.5});delay(1);playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'依照既定路线，我们已经很接近切城南边的中城区了。'});",
        "playground.drawDialog({name:'杜宾',text:'穿过这个公园，就是汇合点。不出意外的话，临光和E4小队应该已经在那里等着我们了。'});",
        "playground.drawCharacter({name:'char_013_riop',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'近卫干员',text:'可是......'});",
        "playground.drawDialog({name:'近卫干员',text:'要是临光......被袭击了，会怎么样？'});",
        "playground.drawDialog({name:'近卫干员',text:'要是他们原本想用通讯设施警告我们，却发现信号遭到干扰......'});",
        "playground.drawDialog({name:'近卫干员',text:'我们该怎么办？'});",
        "playground.drawCharacter({name:'char_013_riop',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'我们会去确认。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'......啊。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_013_riop',focus:1});playground.drawDialog({name:'Ace',text:'我们要亲眼确认事件之后，才会做出揣测。'});",
        "playground.drawDialog({name:'Ace',text:'不要用怀疑恐吓自己。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'char_013_riop',focus:2});playground.drawDialog({name:'近卫干员',text:'明，明白了......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'失去联络手段所带来的恐慌情绪，比想象中蔓延的快得多......'});",
        "playground.drawDialog({name:'杜宾',text:'特别是......在这个天灾仿佛近在眼前的时候。'});",
        "playground.drawDialog({name:'杜宾',text:'我们得赶紧加快速度了。'});",
        "playground.clearDialog();blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:4, block:true});playground.drawCharacter({name:'char_002_amiya_5'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'欸......这阵雾气......？'});",
        "playground.drawDialog({name:'阿米娅',text:'——难道——'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'小心！！'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'？？？',text:'干掉他们。'});",
        "playground.clearDialog();blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:1, crossfade:1.5});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'敌军的射击！！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'这是陷阱......！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'————！！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'不好，我们的后方也出现了整合运动的追兵......！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'侦查干员呢！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'被战场分割了！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'？？？',text:'罗德岛......'});",
        "playground.drawDialog({name:'？？？',text:'追上你们了。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'——！'});",
        "playground.drawDialog({name:'整合运动成员',text:'杀！！'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'？？？',text:'这次，就让你们粉身碎骨。'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'杜宾！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'狙击干员！压制敌人的冲锋！'});",
        "playground.drawDialog({name:'杜宾',text:'重装干员，防御姿态，随时准备向前顶上！'});",
        "playground.drawDialog({name:'杜宾',text:'Ace，准备————'});",
        "playground.drawCharacter({fadetime:0});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_1507_mephisto_6',fadetime:2});voice.stopMusic({fadetime:2});playground.drawDialog({name:'？？？',text:'等一下，等一下——'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'？！'});",
        "playground.drawCharacter({name:'char_1507_mephisto_6'});playground.drawDialog({name:'？？？',text:'在清剿了东南要塞之后，我一听到你的消息，可是立刻就赶过来了。'});",
        "playground.drawDialog({name:'？？？',text:'这里已经是我的处理范围咯，弑君者。'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'......'});",
        "playground.drawDialog({name:'弑君者',text:'你来做什么？'});",
        "playground.drawCharacter({name:'char_1507_mephisto_6'});playground.drawDialog({name:'？？？',text:'该把他们，交给我了吧？'});"
    ]
];