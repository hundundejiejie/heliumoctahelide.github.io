var story = [
    [
        "bg_lungmen_n",
        "char_325_bison_2",
        "char_213_mostma_1",
        "char_325_bison_1",
        "char_101_sora_3",
        "char_101_sora_4",
        "char_101_sora_1",
        "bg_lmstreet_2",
        "bg_pgbase_1",
        "char_102_texas_2",
        "char_201_moeshd",
        "bg_motorway",
        "char_105_emper",
        "char_103_angel_8",
        "char_101_sora_5",
        "char_325_bison_4",
        "bg_park",
        "avg_npc_031",
        "char_103_angel_7",
        "char_103_angel_4",
        "char_102_texas_1",
        "char_103_angel_6",
        "char_201_moeshd_3",
        "char_103_angel_3",
        "char_201_moeshd_2"
    ],
    [
        "m_avg_longmenmarketplace_loop",
        "m_avg_longmenmarketplace_intro",
        "m_sys_penguinlogistics_loop",
        "m_sys_penguinlogistics_intro",
        "d_gen_signalbomb"
    ],
    [
        "background.showImage({image:'bg_lungmen_n',screenadapt:'coverall', fadetime:1});playground.drawDialog({text:'7:59 P.M.    天气/多云'});",
        "playground.drawDialog({text:'龙门人工河流，码头'});",
        "playground.clearDialog();playground.drawCharacter({});delay(1);playground.drawDialog({name:'路人',text:'下次不要再突然跳到船上了啊！很危险的！'});",
        "playground.drawCharacter({name:'char_325_bison_2'});playground.drawDialog({name:'拜松',text:'对不起，事出有因才......'});",
        "playground.drawDialog({name:'拜松',text:'请问刚才你有看见一位萨科塔人吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'路人',text:'我没看见啦，真是遭不住，这些糖果可是今晚的后夜派对要用的，要是耽误了你赔得起......唔？'});",
        "playground.drawDialog({name:'路人',text:'萨、萨科塔......'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_213_mostma_1'});delay(1);playground.drawCharacter({name:'char_325_bison_1'});playground.drawDialog({name:'拜松',text:'啊！莫斯提马小——'});",
        "playground.drawCharacter({name:'char_101_sora_3'});playground.drawDialog({name:'空',text:'莫斯提马？你认识莫斯提马？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_3',focus:1});playground.drawDialog({name:'拜松',text:'......不好意思，是我认错人了。'});",
        "voice.playMusic({intro:'m_avg_longmenmarketplace_intro', key:'m_avg_longmenmarketplace_loop', volume:0.8, crossfade:2});playground.drawDialog({name:'拜松',text:'（这个人，好像在哪里见过？）'});",
        "playground.drawCharacter({});playground.drawDialog({name:'路人',text:'咳嗯，总之这次就先放过你了，下次不要再做这么危险的事情了！'});",
        "playground.drawCharacter({name:'char_325_bison_1'});playground.drawDialog({name:'拜松',text:'抱、抱歉，真的是麻烦你了。'});",
        "playground.drawCharacter({name:'char_101_sora_4'});playground.drawDialog({name:'空',text:'嗯......年轻的丰蹄......总觉得好像忘了什么......是什么呢......'});",
        "playground.drawCharacter({name:'char_101_sora_3'});playground.drawDialog({name:'空',text:'啊！'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_101_sora_3',focus:1});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'拜松',text:'哇！？你要做什么！？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'你的角上卡着一颗糖！'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'啊，真的。是不是该还回去......'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'还有，看到这对角，我想起来了！和那个峯驰的标志一模一样！'});",
        "playground.drawDialog({name:'空',text:'你是峯驰物流的小少爷，对不对？'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'小、小少爷......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_lmstreet_2',screenadapt:'coverall'});delay(0.4);blocker.blocker({a:0, fadetime:1, block:true});delay(1);playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'空前辈，这条路真的能和德克萨斯小姐他们汇合吗？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'放心放心，德克萨斯在想什么，我可是一清二楚。'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'是这样。'});",
        "playground.drawDialog({name:'拜松',text:'......这个声音总有种熟悉感，在哪里？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'“前辈”吗，嘿嘿，想不到我也会有带着信使后辈的一天~你对大家的印象如何？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'印象？'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_pgbase_1',screenadapt:'coverall'});playground.drawCharacter({name:'char_102_texas_2',name2:'char_201_moeshd'});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({});blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_motorway',screenadapt:'coverall'});playground.drawCharacter({name:'char_105_emper',name2:'char_103_angel_8'});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_lmstreet_2',screenadapt:'coverall',block:true});playground.drawCharacter({fadetime:0});background.cameraEffect({effect:'grayscale', keep:true, amount:0, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_325_bison_2',name2:'char_101_sora_5',focus:1});playground.drawDialog({name:'拜松',text:'非常，呃，激动人心。'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_5',focus:2});playground.drawDialog({name:'空',text:'啊哈哈......我大概能猜到什么情况了......'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_101_sora_3'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawDialog({name:'空',text:'啊，抱歉！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'孩子',text:'走路注意点啊！嘁！'});",
        "playground.drawCharacter({name:'char_325_bison_4'});playground.drawDialog({name:'拜松',text:'明明是你冲过来的——'});",
        "playground.drawCharacter({});playground.drawDialog({name:'孩子',text:'啊？关你屁事？'});",
        "playground.drawCharacter({name:'char_325_bison_4'});playground.drawDialog({name:'拜松',text:'你这小鬼！'});",
        "playground.drawCharacter({name:'char_325_bison_4',name2:'char_101_sora_5',focus:2});playground.drawDialog({name:'空',text:'算啦算啦，随他去吧。'});",
        "playground.drawCharacter({name:'char_325_bison_4',name2:'char_101_sora_5',focus:1});playground.drawDialog({name:'拜松',text:'可是他刚才顺走了你的钱包——'});",
        "playground.drawCharacter({name:'char_325_bison_4',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'嘿嘿，我知道哦，不过那个钱包里只装了南瓜糖就是了。你看，真正的钱包在这儿~'});",
        "playground.drawDialog({name:'空',text:'“不给糖就捣蛋”嘛。'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'可他是直接来捣蛋的，而且今天也不是......为什么要特地这么做？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_4',focus:2});playground.drawDialog({name:'空',text:'龙门最近经历了很多事情，虽然在今天不太看得出来。'});",
        "playground.drawDialog({name:'空',text:'安魂夜的蜡烛照亮不到这座城市的所有角落，这些孩子也太可怜了点。'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'诶嘿，不过说到底还是一时兴起啦，不错的主意吧？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'那如果被偷的是我可怎么办......'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'前面出去，就到了。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});voice.playMusic({intro:'m_sys_penguinlogistics_intro', key:'m_sys_penguinlogistics_loop', volume:1, crossfade:1.5});background.showImage({image:'bg_park',screenadapt:'coverall'});delay(0.4);blocker.blocker({a:0, fadetime:1, block:true});delay(1);playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:1});playground.drawDialog({name:'拜松',text:'这里是......刚才的公园？又回到这里了？'});",
        "playground.drawCharacter({name:'char_325_bison_1',name2:'char_101_sora_1',focus:2});playground.drawDialog({name:'空',text:'看吧，果然在那里。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});delay(0.4);blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawCharacter({name:'avg_npc_031'});playground.drawDialog({name:'黑帮',text:'唔——唔唔唔，唔！'});",
        "playground.drawCharacter({name:'char_103_angel_7',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'喂，你再不说，我可就要点火了啊？'});",
        "playground.drawCharacter({name:'avg_npc_031',name2:'char_201_moeshd',focus:2});playground.drawDialog({name:'可颂',text:'小哥你还是老实招了吧，这个烟花真的能带着你上天的喔。'});",
        "playground.drawCharacter({name:'char_102_texas_2'});playground.drawDialog({name:'德克萨斯',text:'......你们忘了把他嘴上的胶布撕掉。'});",
        "playground.drawCharacter({name:'char_103_angel_4',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'啊，抱歉抱歉，嘿咻！'});",
        "playground.drawCharacter({name:'avg_npc_031'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawDialog({name:'黑帮',text:'——————！！'});",
        "playground.drawDialog({name:'黑帮',text:'你们这群家伙！你们真的知道我们是什么人吗？'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'德克萨斯',text:'......叙拉古，黑手党。'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'avg_npc_031',focus:2});playground.drawDialog({name:'黑帮',text:'呃，德、德克萨斯吗......别以为我们会怕你们！'});",
        "playground.drawCharacter({name:'char_103_angel_8',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'知道你们不怕啦，毕竟你们把老板的珍藏品全部炸飞了。糖果盒炸弹吗，真是孩子气的陷阱。'});",
        "playground.drawCharacter({name:'char_103_angel_8',name2:'avg_npc_031',focus:2});playground.drawDialog({name:'黑帮',text:'......你在说什么？'});",
        "playground.drawCharacter({name:'char_103_angel_6',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'嗯？'});",
        "playground.drawCharacter({name:'char_103_angel_6',name2:'avg_npc_031',focus:2});playground.drawDialog({name:'黑帮',text:'我可不知道什么糖果盒，笑话！如果真是首领亲自出手，你们早就被炸成碎片——唔唔！唔唔唔！'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'char_103_angel_7',focus:2});playground.drawDialog({name:'能天使',text:'可是这家伙也太臭屁了，不如直接把他炸了吧。'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'char_103_angel_6',focus:1});playground.drawDialog({name:'德克萨斯',text:'有点耐心，能天使，让他说下去。'});",
        "playground.drawCharacter({name:'char_103_angel_6',name2:'avg_npc_031',focus:2});playground.drawDialog({name:'黑帮',text:'噗哈——哼，你们就不奇怪为什么龙门根本对我们睁一只眼闭一只眼吗！？'});",
        "playground.drawCharacter({name:'char_103_angel_7',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'不，一般来说除了每个月要去警署报个到把公共财产妨害的罚款结一下，平时也不怎么管我们哦？'});",
        "playground.drawCharacter({name:'char_103_angel_7',name2:'avg_npc_031',focus:2});playground.drawDialog({name:'黑帮',text:'呃......'});",
        "playground.drawCharacter({name:'avg_npc_031',name2:'char_201_moeshd_3',focus:2});playground.drawDialog({name:'可颂',text:'唉，能天使姐你别打断人家啊，你继续。'});",
        "playground.drawCharacter({name:'avg_npc_031'});playground.drawDialog({name:'黑帮',text:'看你们这样子......！'});",
        "playground.drawDialog({name:'黑帮',text:'那一位已经默许了我们对企鹅物流的所有行动，既然都是龙门的灰色势力，你们肯定明白这意味着什么吧？'});",
        "playground.drawCharacter({name:'char_103_angel_8',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'我们可是有合法运营执照的物流公司哦？而且运营状况其实还不错？'});",
        "playground.drawCharacter({name:'char_102_texas_2',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'德克萨斯',text:'所以为什么每次我们都要被当做......唉，算了。'});",
        "playground.drawCharacter({name:'char_102_texas_1',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'德克萨斯',text:'那一位，是哪一位？'});",
        "playground.drawCharacter({name:'char_103_angel_7',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'这种装腔作势的说法真的太蠢了，透露着一股杂鱼的气息。'});",
        "playground.drawCharacter({name:'avg_npc_031'});playground.drawDialog({name:'黑帮',text:'还装傻！？鼠王可是——'});",
        "playground.drawCharacter({name:'char_101_sora_1'});playground.drawDialog({name:'空',text:'喂！德克萨斯！大家！'});",
        "playground.drawCharacter({name:'char_103_angel_8'});playground.drawDialog({name:'能天使',text:'啊，是阿空！喂~'});",
        "playground.drawCharacter({name:'char_201_moeshd_3'});playground.drawDialog({name:'可颂',text:'嗯？拜松好像也在。'});",
        "playground.drawCharacter({name:'char_101_sora_1'});playground.drawDialog({name:'空',text:'嘿嘿，路上遇到落单的拜松，就把他带来啦。'});",
        "playground.drawCharacter({name:'char_325_bison_4',name2:'char_103_angel_3',focus:1});playground.drawDialog({name:'拜松',text:'......你们这是在干什么？大帝先生呢？'});",
        "playground.drawCharacter({name:'char_325_bison_4',name2:'char_103_angel_3',focus:2});playground.drawDialog({name:'能天使',text:'老板说是有想要确认的事情，就去了别的地方啦。'});",
        "playground.drawCharacter({name:'char_101_sora_1',name2:'char_102_texas_1',focus:2});playground.drawDialog({name:'德克萨斯',text:'空，没有遇见其他人吗？'});",
        "playground.drawCharacter({name:'char_103_angel_3',name2:'char_101_sora_4',focus:2});playground.drawDialog({name:'空',text:'欸？没......有吧。'});",
        "playground.drawCharacter({name:'char_103_angel_7',name2:'char_101_sora_4',focus:1});playground.drawDialog({name:'能天使',text:'嗯？看着我干嘛？'});",
        "playground.drawCharacter({name:'char_101_sora_1'});playground.drawDialog({name:'空',text:'没、没什么。总之，事情的来龙去脉我都已经听拜松说了，接下来我们该怎么办？'});",
        "playground.drawCharacter({name:'char_103_angel_8',name2:'avg_npc_031',focus:1});playground.drawDialog({name:'能天使',text:'先从这家伙嘴里问出点什么，然后对·症·下·药！'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_103_angel_8',focus:1});playground.drawDialog({name:'拜松',text:'等一下，能天使小姐，那个......'});",
        "playground.drawDialog({name:'拜松',text:'其实，刚才我遇到了莫斯提马小姐。但是，她不见了。'});",
        "playground.drawDialog({name:'拜松',text:'呃，我的意思是，我们逃避黑手党的包围，然后她——'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_103_angel_3',focus:2});playground.drawDialog({name:'能天使',text:'......不用担心她，常有的事啦，毕竟她一不留神就能消失好几年嘛。'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_103_angel_3',focus:1});playground.drawDialog({name:'拜松',text:'——好几年？'});",
        "playground.drawCharacter({name:'char_201_moeshd_2'});playground.drawDialog({name:'可颂',text:'话说，我进了公司之后几乎都没见过她的面喔。'});",
        "playground.drawCharacter({name:'char_101_sora_5',name2:'char_201_moeshd_2',focus:1});playground.drawDialog({name:'空',text:'啊哈哈，就不要刺激能天使了......'});",
        "playground.drawCharacter({name:'char_325_bison_2',name2:'char_103_angel_3',focus:1});playground.drawDialog({name:'拜松',text:'这还真是非常的......脱离常识。'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'身为信使，她很特殊。'});",
        "playground.drawDialog({name:'德克萨斯',text:'虽然和老板有着契约关系，但更多的还是她身为拉特兰的——'});",
        "playground.drawCharacter({name:'char_103_angel_3'});playground.drawDialog({name:'能天使',text:'......'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'——能天使，别走神，注意你的火柴。'});",
        "playground.drawCharacter({name:'char_103_angel_7'});playground.drawDialog({name:'能天使',text:'啊，不好。'});",
        "playground.drawCharacter({name:'avg_npc_031'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawDialog({name:'黑帮',text:'唔唔唔——唔唔——！！'});",
        "playground.drawCharacter({name:'char_201_moeshd'});playground.drawDialog({name:'可颂',text:'诶呀，已经来不及了。算了吧。'});",
        "playground.drawCharacter({name:'avg_npc_031'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawDialog({name:'黑帮',text:'唔唔唔——！！！！'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_signalbomb'});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});delay(2.2);blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({name:'黑帮',text:'怎么回事，刚才听见了弗伦佐的惨叫声！？'});",
        "playground.drawDialog({name:'黑帮',text:'在那边那个方向！'});",
        "playground.drawCharacter({name:'char_103_angel_7'});playground.drawDialog({name:'能天使',text:'真的能带着活人飞上天啊，那这烟花还挺劲的。'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'先应付敌人，左右分工。'});"
    ]
];