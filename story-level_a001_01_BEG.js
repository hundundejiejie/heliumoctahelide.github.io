var story = [
    [
        "ac1_0",
        "ac1_4",
        "bg_med",
        "avg_npc_009",
        "avg_npc_003",
        "avg_npc_008",
        "avg_npc_007",
        "char_220_grani_5",
        "char_220_grani_3",
        "bg_county_1",
        "avg_npc_005",
        "char_220_grani_2",
        "char_220_grani_1",
        "char_220_grani_4",
        "ac1_2",
        "ac1_1"
    ],
    [
        "m_dia_darkness01_loop.wav",
        "m_dia_darkness01_intro.wav",
        "d_gen_walk_n.wav",
        "b_char_defboost.wav",
        "m_dia_street_loop.wav",
        "m_dia_street_intro.wav",
        "d_gen_soldiersrun.wav",
        "m_bat_indust_loop.wav",
        "m_bat_indust_intro.wav"
    ],
    [
        "playground.clearDialog();voice.playMusic({intro:'m_dia_darkness01_intro.wav', key:'m_dia_darkness01_loop.wav', volume:0.6, crossfade:1.5});delay(1);playground.clearDialog();playground.drawDialog({name:'？？？',text:'......'});",
        "playground.clearDialog();delay(1);blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});playground.drawImage({image:'ac1_0',x:0, y:0, xscale:1, yscale:1, fadetime:0, screenadapt:'cvoerall'});blocker.blocker({a:0, fadetime:0.6, block:false});playground.imageTween({xfrom:0, yfrom:0, xto:0, yto:-20, xscalefrom:1, yscalefrom:1, xscaleto:1.1, yscaleto:1.1, duration:15, block:false});playground.drawDialog({name:'？？？',text:'......好热......'});",
        "playground.drawDialog({name:'？？？',text:'好痛......'});",
        "playground.clearDialog();delay(1);playground.drawDialog({name:'赏金猎人',text:'这女人，还不肯说吗？'});",
        "playground.drawCharacter({});playground.clearDialog();delay(1);playground.clearDialog();playground.drawDialog({name:'？？？',text:'好渴......喉咙像是被火烤着......'});",
        "playground.drawDialog({name:'？？？',text:'......究竟有多长时间了......？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1.6, block:true});playground.drawImage({image:'ac1_4',x:0, y:0, xscale:1, yscale:1, fadetime:0, screenadapt:'cvoerall'});blocker.blocker({a:0, fadetime:0.6, block:false});playground.imageTween({xfrom:0, yfrom:0, xto:0, yto:-20, xscalefrom:1, yscalefrom:1, xscaleto:1.1, yscaleto:1.1, duration:15, block:false});delay(1);background.showImage({image:'bg_med', fadetime:2,block:true});playground.drawCharacter({name:'avg_npc_009',name2:'avg_npc_009',focus:1,fedetime:1,block:true});delay(1);playground.drawDialog({name:'赏金猎人',text:'真厉害啊，都被吊在这一天多了，真亏她能忍得住啊。'});",
        "playground.drawCharacter({name:'avg_npc_009',name2:'avg_npc_009',focus:2});playground.drawDialog({name:'粗暴的赏金猎人',text:'喂，你们可别把她搞死了，宝藏的位置她还没说呢！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:false});playground.drawCharacter({name:'avg_npc_003',fadetime:1,block:true});delay(1);playground.drawDialog({name:'可萝尔',text:'......我不会.....不会告诉你的......'});",
        "playground.drawCharacter({name:'avg_npc_009'});playground.drawDialog({name:'赏金猎人',text:'别给她水喝，直到她说了为止！'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5,block:true});playground.clearDialog();playground.drawCharacter({fadetime:0});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({});playground.clearDialog();delay(1);playground.clearDialog();playground.drawDialog({name:'可萝尔',text:'我会死......吗？'});",
        "playground.drawCharacter({});playground.clearDialog();delay(1.5);playground.clearDialog();voice.stopMusic({fadetime:1});voice.playSound({key:'d_gen_walk_n.wav'});delay(1);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawDialog({name:'？？？',text:'没想到就算到了卡西米尔。'});",
        "playground.drawDialog({name:'？？？',text:'胡作非为的歹徒也是哪里都有。'});",
        "playground.clearDialog();background.showImage({image:'bg_med', fadetime:1,block:true});playground.drawCharacter({name:'avg_npc_008'});playground.drawDialog({name:'赏金猎人',text:'嗯？哪里来的家伙，不想活了吗？'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'粗暴的赏金猎人',text:'喂，小子，你赶紧给我——'});",
        "playground.clearDialog();voice.playSound({key:'b_char_defboost.wav', volume:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:20, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});delay(1);playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'粗暴的赏金猎人',text:'唔，好，好疼。'});",
        "playground.drawDialog({name:'粗暴的赏金猎人',text:'仔细看，他这身装扮......不像是当地人啊。'});",
        "playground.drawCharacter({name:'avg_npc_008'});playground.drawDialog({name:'赏金猎人',text:'管他是哪里来的！他就一个人，不过是来送死的！'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_220_grani_5',fadetime:1.5,block:true});delay(1);playground.drawDialog({name:'？？？',text:'所以，得把你们全部解决掉才行？'});",
        "playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_008'});voice.playSound({key:'b_char_defboost.wav', volume:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:20, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});playground.drawDialog({name:'粗暴的赏金猎人',text:'噗啊！'});",
        "playground.drawCharacter({name:'avg_npc_007'});voice.playSound({key:'b_char_defboost.wav', volume:0.7});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:20, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});playground.drawDialog({name:'赏金猎人',text:'咕......'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});blocker.blocker({a:0, r:0,g:0, b:0, fadetime:2, block:true});delay(1);voice.playMusic({intro:'m_dia_street_intro.wav', key:'m_dia_street_loop.wav', volume:0.6,crossfade:1});playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'？？？',text:'好了，他们一时半会还醒不过来，我们赶紧离开这里。'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'你......你是......'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'？？？',text:'别怕，没有人能再伤害你了，我会带你离开。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'可萝尔',text:'——'});",
        "playground.drawDialog({name:'可萝尔',text:'抱歉，我、我的头......好晕......'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'？？？',text:'你脸色不太好。没关系，让我抱着你。'});",
        "playground.drawDialog({name:'？？？',text:'请抓紧了。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'可萝尔',text:'嗯.....'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_soldiersrun.wav'});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2,block:true});background.showImage({image:'bg_county_1',fadetime:1});delay(1);playground.drawDialog({name:'',text:'晴 \\ 能见度 14公里'});",
        "playground.drawDialog({name:'',text:'某村庄内'});",
        "blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'avg_npc_008',name2:'avg_npc_005',focus:1});playground.drawDialog({name:'赏金猎人',text:'你有没有看到一个拿长枪的小子？'});",
        "playground.drawCharacter({name:'avg_npc_008',name2:'avg_npc_005',focus:2});playground.drawDialog({name:'村民',text:'我一直待在家里，外面发生什么我不知道。'});",
        "playground.drawCharacter({name:'avg_npc_008',name2:'avg_npc_005',focus:1});playground.drawDialog({name:'赏金猎人',text:'要是让我知道你窝藏了他们，有你好看的！'});",
        "voice.playSound({key:'d_gen_soldiersrun.wav'});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1,block:true});delay(1);blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_street_intro.wav', key:'m_dia_street_loop.wav', volume:0.6,crossfade:1});playground.drawCharacter({name:'avg_npc_005'});playground.drawDialog({name:'村民',text:'————'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1,block:true});playground.drawDialog({name:'村民',text:'那群家伙已经离开了，格拉尼骑警小姐，你们可以从壁橱里出来了。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_walk_n.wav'});playground.drawCharacter({name:'char_220_grani_3',fadetime:1});delay(1);playground.drawDialog({name:'格拉尼',text:'嘿~！'});",
        "playground.drawDialog({name:'格拉尼',text:'又被大叔帮了大忙啊。'});",
        "playground.drawCharacter({name:'avg_npc_005'});playground.drawDialog({name:'村民',text:'可萝尔你没事吧？真是苦了你了。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'avg_npc_005',focus:1});playground.drawDialog({name:'可萝尔',text:'卢克大叔，多谢你，我现在好多了。'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'因为有大家的帮助，我才能救出你。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'avg_npc_005',focus:2});playground.drawDialog({name:'村民',text:'可萝尔，不要担心！'});",
        "playground.drawDialog({name:'村民',text:'骑士小姐已经和我们商量好了！她一定会拯救整个村子的！'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'啊？小姐？'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_2',focus:2});playground.drawDialog({name:'格拉尼',text:'这，是啊，我是女孩子啊。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_2',focus:1});playground.drawDialog({name:'可萝尔',text:'啊？'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'唔！就算是我，也是有女孩子的自尊心的！'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_1',focus:1});playground.drawDialog({name:'可萝尔',text:'欸、欸，对不起。'});",
        "playground.drawDialog({name:'可萝尔',text:'......'});",
        "playground.drawDialog({name:'可萝尔',text:'虽然看穿着不像......'});",
        "playground.drawDialog({name:'可萝尔',text:'请问，您是......新受封的卡西米尔骑士大人吗？'});",
        "playground.drawDialog({name:'可萝尔',text:'在您解救我们村子之后，会向我们征税吗？'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'格拉尼',text:'不不不，我可并不是卡西米尔人，更不是什么骑士。'});",
        "playground.drawDialog({name:'格拉尼',text:'虽然维多利亚也有骑士，但我之前是骑警啦！'});",
        "playground.drawDialog({name:'格拉尼',text:'骑警和骑士不一样，是公务治安职务。骑警做事，不图回报，可不会向你们征什么税！'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'可萝尔',text:'维多利亚？'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'格拉尼',text:'是在卡西米尔外面的地方，我的祖辈也都是从卡西米尔迁到那里去的库兰塔人。'});",
        "playground.drawDialog({name:'格拉尼',text:'这次接到了你们的委托，也是想来卡西米尔看一看，父母的家乡是什么样......没想到会是这么严重的事态。'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'可萝尔',text:'......我本来以为，交给信使的那些委托信都石沉大海了。'});",
        "playground.drawDialog({name:'可萝尔',text:'毕竟那些民间互助组织从来不会在意我们这偏僻的地方。'});",
        "playground.drawCharacter({name:'char_220_grani_4'});playground.drawDialog({name:'格拉尼',text:'不过，为什么卡西米尔政府没有伸出援手？'});",
        "playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_4',focus:1});playground.drawDialog({name:'可萝尔',text:'哼......首都的骑士大人们怎么会关注我们这种偏远的村子？'});",
        "playground.drawDialog({name:'可萝尔',text:'正因如此，许多年来，我们反而过得很安稳，城市里动荡不安的生活也不怎么吸引我们。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, block:true});playground.drawImage({image:'ac1_2',x:-100, y:0, xscale:1.2, yscale:1.2, fadetime:1,screenadapt:'coverall'});playground.imageTween({xfrom:-100, yfrom:0, xto:0, yto:0, xscalefrom:1.2, yscalefrom:1.2, xscaleto:1.2, yscaleto:1.2, duration:10, block:false});playground.drawDialog({name:'可萝尔',text:'滴水村的人们世世代代都在这片山区附近居住。'});",
        "playground.drawDialog({name:'可萝尔',text:'尽管生活没那么富裕，但至少我们可以自给自足。'});",
        "playground.drawDialog({name:'可萝尔',text:'虽然有时候会为了躲避天灾暂时迁走村庄，但这里毕竟还是我们的家园。'});",
        "playground.drawDialog({name:'可萝尔',text:'所以，我们无法割舍这片土地......'});",
        "blocker.blocker({a:1, r:0, g:0, b:0,fadetime:0.5, block:true});playground.drawCharacter({});playground.clearDialog();playground.drawImage({});background.showImage({image:'bg_county_1',block:true});blocker.blocker({a:0, r:0, g:0, b:0,fadetime:0.5, block:true});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'但是现在，村子却被那些赏金猎人破坏得满目疮痍——'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'......都是因为那个骑士宝藏。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, block:true});playground.drawImage({image:'ac1_1',x:-100, y:0, xscale:1.2, yscale:1.2, fadetime:1,screenadapt:'coverall'});playground.imageTween({xfrom:-100, yfrom:0, xto:0, yto:0, xscalefrom:1.2, yscalefrom:1.2, xscaleto:1.2, yscaleto:1.2, duration:10, block:false});playground.drawDialog({name:'可萝尔',text:'最近几年，附近的几个村落都成了赏金猎人们常常光顾的地方。'});",
        "playground.drawDialog({name:'可萝尔',text:'好像是，卡西米尔北部控制区常有动乱什么的，所以不断有赏金猎人去那里寻找发财的机会，而我们滴水村位于通往北方的必经之路上。'});",
        "playground.drawDialog({name:'可萝尔',text:'本来村子就经常会有赏金猎人出入，但是也没有造成什么危害。'});",
        "playground.drawDialog({name:'可萝尔',text:'直到一个月前，有一伙赏金猎人在山中挖出了一位随从骑士的石棺，还翻出了一小箱陪葬的金币......'});",
        "blocker.blocker({a:1, r:0, g:0, b:0,fadetime:0.5, block:true});playground.drawCharacter({});playground.clearDialog();playground.drawImage({});background.showImage({image:'bg_county_1',block:true});blocker.blocker({a:0, r:0, g:0, b:0,fadetime:0.5, block:true});playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'格拉尼',text:'是这种印着卡西米尔徽章的金币吧？'});",
        "blocker.showItem({image:'item_act1_1'});playground.drawDialog({name:'格拉尼',text:'我刚来这里就有赏金猎人跑来找麻烦，这几枚金币，算做他们举止粗鲁的赔礼。'});",
        "blocker.hideItem({});playground.drawCharacter({name:'avg_npc_003',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'可萝尔',text:'嗯......就是这些金币，在赏金猎人之间带出了一段传说，也给我们带来了大麻烦。'});",
        "playground.drawDialog({name:'可萝尔',text:'“卡西米尔的每位古代骑士会带着他们的精神与财富，下葬于其家乡的无名之地，并永世保护着这片土地。”'});",
        "playground.drawDialog({name:'可萝尔',text:'“只有来自不惧牺牲，无畏艰险的卡西米尔血脉才能破除所有的阻碍。”'});",
        "playground.drawDialog({name:'可萝尔',text:'这样的传说被传得越来越远，附近的赏金猎人变得越来越多。'});",
        "playground.drawDialog({name:'可萝尔',text:'最初，赏金猎人还只是讨论如何寻找更大的骑士宝藏，可后来“滴水村有人知道骑士宝藏下落”的消息却不知怎么的越传越开——'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'————嘘！大家先别说话！'});",
        "voice.stopMusic({fadetime:1});playground.clearDialog();playground.drawCharacter({});delay(1);voice.playSound({key:'d_gen_soldiersrun.wav'});playground.drawDialog({name:'赏金猎人',text:'不行，找不到他们，给我从头再搜一遍！'});",
        "voice.playMusic({intro:'m_bat_indust_intro.wav', key:'m_bat_indust_loop.wav', volume:0.6, crossfade:1.5});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'继续待在这里不太安全，不能拖累这位大叔。'});",
        "playground.drawDialog({name:'格拉尼',text:'总之，我们先离开这里。'});",
        "playground.drawCharacter({name:'avg_npc_005'});playground.drawDialog({name:'村民',text:'你们要小心点自己的安全，骑士......不对，骑警小姐，村长就交给你了！'});",
        "playground.drawCharacter({name:'char_220_grani_2'});playground.drawDialog({name:'格拉尼',text:'大叔，你放心，我一定保护好——'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'啊？村长？'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'......滴水村村长可萝尔，虽然上任才半年，就算是我，也是有村长的自尊心的哦。'});"
    ]
];