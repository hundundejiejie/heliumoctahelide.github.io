var story = [
    [
        "bg_rooftop",
        "char_010_chen_2",
        "char_1507_mephisto_3",
        "char_017_homura_1",
        "char_1508_faust_1",
        "char_002_amiya_7",
        "avg_5_8_homura",
        "avg_npc_016",
        "char_015_lmg",
        "char_1507_mephisto_4",
        "avg_npc_015",
        "char_010_chen_4",
        "char_010_chen_5",
        "char_002_amiya_6",
        "bg_uptown_2",
        "char_1507_mephisto_2",
        "avg_5_8_ruins",
        "char_017_homura_3",
        "char_002_amiya_4",
        "char_010_chen_1",
        "char_002_amiya_1",
        "char_010_chen_6",
        "char_010_chen_3",
        "char_empty",
        "char_2005_weiyw_1",
        "char_308_swire_5"
    ],
    [
        "m_dia_escape_loop",
        "m_dia_escape_intro",
        "d_sp_chixiaobadao",
        "d_sp_ballista",
        "p_imp_blunt_h",
        "e_skill_skulsrsword",
        "d_gen_walk_n",
        "d_gen_soldiersrun",
        "m_dia_newhope01_loop",
        "m_dia_newhope01_intro",
        "d_gen_transmissionget"
    ],
    [
        "background.showImage({image:'bg_rooftop', width:1, height:1,screenadapt:'coverall',  fadetime:1});voice.playMusic({intro:'m_dia_escape_intro', key:'m_dia_escape_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_sp_chixiaobadao'});blocker.blocker({a:0.7, r:1, g:0, b:0, fadetime:0.02, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'退路已尽。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_3'});playground.drawDialog({name:'梅菲斯特',text:'......你，你！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'你们还想往哪逃？'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'唔。'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'放下你的手！'});",
        "playground.drawDialog({name:'煌',text:'你的把戏已经被我看穿了，长鳞的小子！'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_1508_faust_1'});background.cameraShake({duration:0.4, xstrength:8, ystrength:6, vibrato:30, randomness:30, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});playground.drawCharacter({name:'char_017_homura_1'});voice.playSound({key:'p_imp_blunt_h'});background.cameraShake({duration:0.4, xstrength:12, ystrength:18, vibrato:30, randomness:30, fadeout:false});delay(1);playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'我说了，我看穿了。'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'阿米娅',text:'煌！'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'哼，不算什么，这点火力也就和炮仗差不多！'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'你提前防御住了弩弹。'});",
        "playground.drawDialog({name:'浮士德',text:'你知道他们的位置？'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'那当然，我已经全都找出来了。'});",
        "playground.drawDialog({name:'煌',text:'阿米娅，后退，我该用那个了！'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'阿米娅',text:'知道！我会再一次干扰梅菲斯特的护卫，抓紧时间！'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'这点血是送你们做临别礼物的，整合运动的“幻影弩手”们！'});",
        "playground.drawDialog({name:'煌',text:'沸腾吧，爆开他们的伪装吧！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'e_skill_skulsrsword', volume:0.4});blocker.blocker({a:0, fadetime:1.5, block:false});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.3, r:1, g:0, b:0, fadetime:0.02, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});playground.drawImage({image:'avg_5_8_homura', fadetime:0.3,screenadapt:'coverall',block:true});playground.imageTween({xfrom:0, yfrom:0, xto:0, yto:0, xscalefrom:1, yscalefrom:1, xscaleto:1.15, yscaleto:1.15,duration:15, block:false});blocker.blocker({a:0, fadetime:1, block:true});playground.drawDialog({name:'浮士德',text:'——！'});",
        "playground.drawDialog({name:'浮士德',text:'你泼洒自己的血，用血来点火？'});",
        "playground.drawDialog({name:'煌',text:'哈，我难道看起来像个术师吗？那种四处纵火的家伙，最多只是些自我意识过剩的门外汉。'});",
        "playground.drawDialog({name:'煌',text:'抱歉，这是战斗技巧。现身吧射手们，你们无处可藏了！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawImage({});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_016',fadetime:1,block:true});playground.drawDialog({name:'幻影弩手',text:'......'});",
        "playground.drawDialog({name:'幻影弩手',text:'浮士德，伪装消失了。'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'命令，撤退。'});",
        "playground.drawCharacter({name:'char_015_lmg'});playground.drawDialog({name:'近卫局成员',text:'那些是......怎么回事！整合运动的狙击手是什么时候埋伏在那里的？'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'现在？'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:1});playground.drawDialog({name:'浮士德',text:'现在。'});",
        "playground.drawCharacter({name:'char_015_lmg'});playground.drawDialog({name:'近卫局成员',text:'数个整合运动的狙击手突然现身，主要分布在近卫局东二楼和南三楼！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'留神脚下，低处可能也有埋伏！'});",
        "playground.drawCharacter({name:'char_015_lmg'});playground.drawDialog({name:'近卫局成员',text:'大楼里的古怪之处，也是他们引起的吗？'});",
        "playground.drawCharacter({});playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'通过空气折射让身形变得透明啊，好手法。'});",
        "playground.drawDialog({name:'煌',text:'不过你掩盖不了自己的行踪，又或者是动作幅度太大，也会导致这个源石技艺失效。'});",
        "playground.drawDialog({name:'煌',text:'我说得对吗？'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'......你很聪明。'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'煌',text:'是罗德岛情报做得好。你没戏唱了，投降吧。'});",
        "playground.drawDialog({name:'煌',text:'如果还要打的话，哼，不管有没有你的份，你都得为Ace和Scout抵命，小子。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'浮士德，我们还有弹药。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:1});playground.drawDialog({name:'浮士德',text:'撤退。我们已经失去了情报优势。我会狙击他们，你们立刻转移。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'明白。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_4'});playground.drawDialog({name:'梅菲斯特',text:'为什么不射击她？浮士德！'});",
        "playground.drawDialog({name:'梅菲斯特',text:'我的护卫们，快去！四个人，四个人而已......其中只有三个能和你们为敌！'});",
        "playground.drawDialog({name:'梅菲斯特',text:'战斗！现在就撕碎这些罪人！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:`我们三个在Dr.${nickname}的指挥下，胜过你们所有人！`});",
        "playground.drawDialog({name:'阿米娅',text:'更何况那些被你伤害了、剥夺了理智的感染者，意识里只剩下你的赘余思绪，不再是活生生的人......！'});",
        "playground.drawDialog({name:'阿米娅',text:'就连你身边那个带鳞的男孩也未必和你同心，他的思绪里充斥着混乱和悲伤......'});",
        "playground.drawDialog({name:'阿米娅',text:'梅菲斯特，你才是这战场上孤身一人的那个！'});",
        "playground.drawCharacter({name:'char_1507_mephisto_4'});playground.drawDialog({name:'梅菲斯特',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'你读了我的心？'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'阿米娅',text:'我只是感受到了。'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'所以你不会知道我在想什么。'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'阿米娅',text:'——！'});",
        "playground.clearDialog();playground.drawCharacter({});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, fadetime:0.25, block:true});delay(1);playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'阿米娅！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_002_amiya_7',fadetime:1,block:true});delay(1);playground.drawDialog({name:'阿米娅',text:'我没事，他的弩弹我勉强挡的下来......！但这样的话，那些护卫......'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'avg_npc_015'});playground.drawDialog({name:'梅菲斯特的护卫',text:'【杂乱的发音】'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'我的控制力在变弱！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'梅菲斯特，走。'});",
        "playground.drawDialog({name:'浮士德',text:'他们的援军正在消灭我们的队伍。'});",
        "playground.drawDialog({name:'浮士德',text:'有些部队我们从没见过。计划有变，我们被算计了。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:2});playground.drawDialog({name:'梅菲斯特',text:'......为什么整合运动，二十多支小队，两支大队，还没在这里？'});",
        "playground.drawDialog({name:'梅菲斯特',text:'弑君者为什么还没在这里？霜星为什么不在这里？'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'这次和切尔诺伯格不同。我们没有切断对方的通讯，敌人有大量援军，抵抗很激烈。'});",
        "playground.drawDialog({name:'浮士德',text:'梅菲斯特......'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_3',focus:2});playground.drawDialog({name:'梅菲斯特',text:'为什么他们还没在这里！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_3',focus:1});playground.drawDialog({name:'浮士德',text:'想知道原因，我们要亲眼去看。先离开这里。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_002_amiya_7',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'阿米娅',text:'煌，我差不多到极限了，你们能行吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_7',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'没问题，我和那个姓陈的，应该够！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.8, block:true});blocker.blocker({a:0, fadetime:0.8, block:true});playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_3',focus:1});playground.drawDialog({name:'浮士德',text:'快！'});",
        "voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'我允许你走了吗？'});",
        "playground.drawCharacter({name:'char_1507_mephisto_3'});playground.drawDialog({name:'梅菲斯特',text:'你......护卫们！去杀了她！杀了她！'});",
        "playground.drawCharacter({name:'avg_npc_015'});playground.drawDialog({name:'梅菲斯特的护卫',text:'咯......咯！！！'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'嘁，十几个一起动，难办了啊。'});",
        "playground.drawCharacter({name:'avg_npc_015'});background.cameraShake({duration:1, xstrength:12, ystrength:18, vibrato:30, randomness:90, fadeout:false});playground.drawDialog({name:'梅菲斯特的护卫',text:'【咆哮】！！！'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'他们要上了，姓陈的！'});",
        "playground.drawCharacter({name:'char_010_chen_5'});playground.drawDialog({name:'陈',text:'谢谢你，罗德岛的干员。现在没人干扰我了。'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'啊？'});",
        "playground.drawCharacter({name:'char_010_chen_5'});playground.drawDialog({name:'陈',text:'（咳，还是不行？我甚至没法让它彻底接触空气......算了，做到这步，应该够了。）'});",
        "playground.drawDialog({name:'陈',text:'（赤霄，至少这时候......）'});",
        "playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'“其色溢赤——”'});",
        "playground.clearDialog();playground.drawCharacter({name:'avg_npc_015',name2:'avg_npc_015'});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_sp_chixiaobadao'});blocker.blocker({a:0.7, r:1, g:0, b:0, fadetime:0.02, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});delay(0.5);playground.drawCharacter({name:'avg_npc_015',name2:'avg_npc_015'});playground.drawDialog({name:'梅菲斯特的护卫',text:'......咕啊！'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'......不是吧。'});",
        "playground.drawCharacter({name:'avg_npc_015',name2:'avg_npc_015'});playground.drawDialog({name:'梅菲斯特的护卫',text:'唔，唔......呃......'});",
        "playground.drawDialog({name:'梅菲斯特的护卫',text:'（乌萨斯语）谢......谢......'});",
        "playground.drawCharacter({fadetime:2,block:true});delay(2);playground.drawCharacter({name:'char_1507_mephisto_4'});playground.drawDialog({name:'梅菲斯特',text:'......'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'你刚才是不是拔剑了？一剑？十几个这种东西？全灭？'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'那把剑......'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'阿米娅，有些话我是不是不能再乱说了啊。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'哼。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_4'});playground.drawDialog({name:'梅菲斯特',text:'你......你做了......什......'});",
        "background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_sp_chixiaobadao'});blocker.blocker({a:0.7, r:1, g:0, b:0, fadetime:0.02, block:true});blocker.blocker({a:0, r:1, g:0, b:0, fadetime:0.25, block:true});delay(0.6);playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'闪开！'});",
        "playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'你也逃不掉。'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_sp_chixiaobadao'});blocker.blocker({a:0.7, r:1, g:0, b:0, fadetime:0.02, block:true});blocker.blocker({a:0, r:1, g:0, b:0, fadetime:0.25, block:true});playground.drawCharacter({name:'char_1508_faust_1'});background.cameraShake({duration:2, xstrength:8, ystrength:6, vibrato:30, randomness:20, fadeout:true, block:false});playground.drawDialog({name:'浮士德',text:'咕......！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:2});playground.drawDialog({name:'梅菲斯特',text:'浮士德，浮士德！你受伤了，你，不，不......不！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'......'});",
        "playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'结束了。'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'还没有。'});",
        "playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'你？！'});",
        "background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, fadetime:0.25, block:true});delay(1);playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'咳咳，居然引诱我近身后再射击？'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'你这不是挡住了吗。'});",
        "playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'他们要借着爆炸逃走了！'});",
        "playground.drawCharacter({});playground.clearDialog();background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});delay(1);playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'呜啊，连环爆炸？'});",
        "playground.drawDialog({name:'煌',text:'哎，整个顶楼都塌陷了，感觉我们追不了了？'});",
        "playground.drawCharacter({name:'char_010_chen_5',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'陈',text:'一半是你刚才划开的。'});",
        "playground.drawCharacter({name:'char_010_chen_5',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'那也没办法。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_soldiersrun',volume:0.5});background.showImage({image:'bg_uptown_2', width:1, height:1,screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'现在，快走。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:2});playground.drawDialog({name:'梅菲斯特',text:'不行，我要在这里，等到他们......'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'这一步失败了。你必须走。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_3',focus:2});playground.drawDialog({name:'梅菲斯特',text:'失败，失败？不可能！'});",
        "playground.drawDialog({name:'梅菲斯特',text:'难道一切不都是谋划好了吗......我不是早就召集整合运动了吗？'});",
        "playground.drawDialog({name:'梅菲斯特',text:'背叛？泄密？究竟是谁？近卫局为什么会知道我们的分布和计划？'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_3',focus:1});playground.drawDialog({name:'浮士德',text:'快走！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:2});playground.drawDialog({name:'梅菲斯特',text:'如果不是叛徒，又究竟是谁做的！'});",
        "playground.drawDialog({name:'梅菲斯特',text:'塔露拉姐姐是不会犯错的，所以她是故意......'});",
        "playground.drawDialog({name:'梅菲斯特',text:'不会，不会的，她为什么要故意这样设计？'});",
        "playground.drawDialog({name:'梅菲斯特',text:'......浮士德，我不想承认这是我们的失败。我不相信。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_4',focus:1});playground.drawDialog({name:'浮士德',text:'跳！我会拉住你！'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'char_1507_mephisto_2',focus:2});playground.drawDialog({name:'梅菲斯特',text:'......好。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:3});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawImage({image:'avg_5_8_ruins',screenadapt:'coverall', block:true});playground.imageTween({xfrom:0, yfrom:0, xto:30, yto:30, xscalefrom:1, yscalefrom:1, xscaleto:1.1, yscaleto:1.1, duration:20});blocker.blocker({a:0, fadetime:2, block:true});voice.playMusic({intro:'m_dia_newhope01_intro', key:'m_dia_newhope01_loop', volume:0.6, crossfade:1.5, delay:0.5});playground.drawCharacter({name:'char_017_homura_3'});playground.drawDialog({name:'煌',text:'唉哟，这惨状，你要好好修修这栋楼了，长官。'});",
        "playground.drawDialog({name:'煌',text:'遗憾，还是被那两个小子逃了。'});",
        "playground.drawDialog({name:'煌',text:'剩下那些没脑子的家伙像受惊的兽群一样涌过来，想全部制服，还真有点难度。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'至少我们成功地夺回了近卫局。'});",
        "playground.drawDialog({name:'阿米娅',text:'哪怕是暂时的，这也是我们的胜利。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawImage({});playground.drawCharacter({});background.showImage({image:'bg_rooftop', width:1, height:1,screenadapt:'coverall'});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_010_chen_1',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'陈',text:'阿米娅......'});",
        "playground.drawCharacter({name:'char_010_chen_6',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'陈',text:'——'});",
        "playground.drawCharacter({name:'char_010_chen_5',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'陈',text:'罗德岛是怎么撤出切城的？'});",
        "playground.drawCharacter({name:'char_010_chen_5',name2:'char_002_amiya_1',focus:2});playground.drawDialog({name:'阿米娅',text:'是这位罗德岛干员，煌小姐，及时支援了我们。'});",
        "playground.drawDialog({name:'阿米娅',text:'也有一位说话音量很大的龙门警官在废城外接应......'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'如果最开始近卫局没有袖手旁观的话，过程还会更顺利些。'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_010_chen_1'});delay(1.6);playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'煌',text:'我还在想你是不是会说些没有罗德岛的帮助你也能行，你宁可和他们同归于尽一类的话。'});",
        "playground.drawDialog({name:'煌',text:'还行，看来你还没迂腐到那种程度。还有什么想说的？没有的话，我想回罗德岛了。'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_3',focus:2});playground.drawDialog({name:'陈',text:'罗德岛竟然还有那样的飞行载具。'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_3',focus:1});playground.drawDialog({name:'煌',text:'哎，罗德岛还有很多会让你惊讶的东西。'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'我们和罗德岛一样，不想把手牌打光。'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'煌',text:'罗德岛难不成也算是你的牌？'});",
        "playground.drawCharacter({name:'char_017_homura_1',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'——'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_015_lmg'});playground.drawDialog({name:'近卫局成员',text:'陈，陈长官......独立线路。'});",
        "playground.drawDialog({name:'近卫局成员',text:'是通讯。'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'喂。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_2005_weiyw_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'魏彦吾',text:'陈警官，你做得很好。'});",
        "playground.drawDialog({name:'魏彦吾',text:'诗怀雅警官在频道中吗？'});",
        "playground.clearDialog();playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'2', name:'char_308_swire_5', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'诗怀雅',text:'在。'});",
        "playground.clearDialog();playground.drawCharacter({widgetid:'2',fadetime:0.5,block:true});playground.drawCharacter({widgetid:'1', name:'char_2005_weiyw_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'魏彦吾',text:'请向我汇报现在的进度。'});",
        "playground.clearDialog();playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});playground.drawCharacter({widgetid:'2', name:'char_308_swire_5', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'诗怀雅',text:'罗德岛也救出来了，各大队我也安排好了。调度加指挥，花了我整整三个晚上欸。'});",
        "playground.drawDialog({name:'诗怀雅',text:'那么，陈警官呢？'});",
        "playground.clearDialog();playground.drawCharacter({widgetid:'2',fadetime:0.5,block:true});playground.drawCharacter({widgetid:'1', name:'char_2005_weiyw_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawCharacter({name:'char_empty',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'我已经夺回——'});",
        "playground.drawDialog({name:'陈',text:'......'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'——在罗德岛的协助下，我已经夺回近卫局。这个消息将借整合运动的指挥官之口，传达给所有整合运动。'});",
        "playground.drawDialog({name:'陈',text:'龙门中潜藏的所有整合运动，已经聚集在这个城区，也照我们封堵和架设的所有路线，进入了各个埋伏点。'});",
        "playground.drawDialog({name:'陈',text:'接下来，只需等待他们的反扑即可。'});",
        "playground.drawDialog({name:'陈',text:'我的任务已经完成。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_010_chen_5',focus:1});playground.drawDialog({name:'魏彦吾',text:'你们的其他几位同事也已经向我递交了报告，上个阶段的任务，大家都圆满地完成了。各位做得很不错。'});",
        "playground.drawDialog({name:'魏彦吾',text:'那么，我们该进入下个阶段了。'});"
    ]
];