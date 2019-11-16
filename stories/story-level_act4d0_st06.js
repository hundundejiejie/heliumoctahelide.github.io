var story = [
    [
        "char_248_mgllan",
        "bg_bridge",
        "char_341_amona_2"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "d_gen_walk_n",
        "d_amb_blizzard",
        "d_gen_dooropen"
    ],
    [
        "playground.clearDialog();delay(1);playground.drawDialog({text:'08:30 A.M 天气/暴雪'});",
        "playground.drawDialog({text:'北地，因非冰原，莱茵生命420号临时科考观测站'});",
        "playground.drawDialog({name:'装置',text:'系统已解锁。'});",
        "playground.drawDialog({name:'装置',text:'确定年份：未知'});",
        "playground.drawDialog({name:'装置',text:'时间设置出现问题，现在转到手工控制。'});",
        "playground.drawDialog({name:'装置',text:'要进行下一步操作，请进行身份认证。'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_248_mgllan',fadetime:1,block:true});delay(1);playground.drawDialog({name:'麦哲伦',text:'唔，我想想......嗯，莱茵生命科学考察员，麦哲伦。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'装置',text:'认证中——'});",
        "playground.drawDialog({name:'装置',text:'认证完毕，声音样本已确认。'});",
        "playground.drawDialog({name:'装置',text:'哔哔——'});",
        "playground.drawDialog({name:'装置',text:'指纹已确认。'});",
        "voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1.5});playground.drawDialog({name:'装置',text:'（活泼的女声）嗨，你好呀麦麦，欢迎回来！'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'......'});",
        "playground.drawDialog({name:'麦哲伦',text:'好怪哦！'});",
        "playground.drawDialog({name:'麦哲伦',text:'唉，早知道就不答应梅尔姐测试这个签到系统了，好奇怪的功能啊......'});",
        "playground.drawDialog({name:'麦哲伦',text:'呼，总而言之，开始干活吧！'});",
        "playground.drawDialog({name:'麦哲伦',text:'今年最后一个勘察点，确认没有新的发现。'});",
        "playground.drawDialog({name:'麦哲伦',text:'至此，本年度预定的勘查目标已经完成，确认其他各项任务完成后，将踏上返程。'});",
        "playground.drawDialog({name:'麦哲伦',text:'呼，搞定。'});",
        "playground.drawDialog({name:'麦哲伦',text:'写报告可真是我最不擅长的东西了，还是来听听录音吧。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'装置',text:'（活泼的女声）你好，麦麦。今天，是你本次外出勘察的第1，8，7天了哦。'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'哇，这一次也已经出来这么久啦，我都没有感觉了。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'装置',text:'（活泼的女声）你已经出去很久了，也该回来了吧？大家都想你了。'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'欸？！之前有这一段吗......难道是梅尔姐偷偷录的然后设置了触发条件？'});",
        "playground.drawDialog({name:'麦哲伦',text:'呜哇，不管怎么样，居然还有这样的小惊喜，好开心啊！'});",
        "playground.drawDialog({name:'麦哲伦',text:'不过，说是说可以回去了，但是......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});blocker.blocker({a:1, r:1, g:1, b:1, fadetime:2, block:true});background.showImage({image:'bg_bridge',screenadapt:'coverall'});voice.playSound({key:'d_amb_blizzard'});blocker.blocker({a:0.4, r:1, g:1, b:1, fadetime:2, block:true});playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'这场暴风雪，恐怕还要持续至少一周呢，唉，幸好物资储备还算充裕。'});",
        "playground.drawDialog({name:'麦哲伦',text:'算啦，还是来确认一遍任务表吧，我记得应该还有几个没有填的。'});",
        "playground.drawDialog({name:'麦哲伦',text:'让我看看，嗯，周边的样本采集，完成。遗迹线索的寻找，没有~也算完成。'});",
        "playground.drawDialog({name:'麦哲伦',text:'和去年比没有什么新发现呢，要是再来一个和大前年一样的发现就好了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'虽然说这才是常态啦，要是科长在肯定要批评我贪心了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'应该没有了吧......嗯？还有一项空着，新材料的低温性质测试......啊。'});",
        "playground.drawDialog({name:'麦哲伦',text:'我完全忘记了这件事！！！不如说这个新材料被我放哪儿去了来着！！！'});",
        "playground.drawDialog({name:'麦哲伦',text:'糟了糟了，这个要是丢了，我可要被杀掉了！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawDialog({name:'麦哲伦',text:'呼，好险好险，居然被塞在外层口袋里......'});",
        "playground.drawDialog({name:'麦哲伦',text:'外层口袋是零下43度，持续时间6小时，依然保持弹性。'});",
        "playground.drawDialog({name:'麦哲伦',text:'接下来测试一下硬度。'});",
        "playground.drawDialog({name:'麦哲伦',text:'嘿！'});",
        "playground.drawDialog({name:'麦哲伦',text:'嗯，也没有问题。好，接下来放进实验瓮就行。'});",
        "playground.drawDialog({name:'麦哲伦',text:'唔，幸亏还是有放在外套里......'});",
        "playground.drawDialog({name:'麦哲伦',text:'好吧，反正现在是暴风雪，干脆把它放到门外去摆一天看看低温疲劳性好了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'现在外面的气温应该很合适吧。'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});delay(1);playground.drawDialog({name:'麦哲伦',text:'听着，麦哲伦，你要深呼吸，在打开门的瞬间，把东西丢出去，然后立刻关门。'});",
        "playground.drawDialog({name:'麦哲伦',text:'要快，准，狠！不然暴风雪灌进来可就糟了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'1，2，3！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_dooropen'});voice.playSound({key:'d_amb_blizzard'});playground.drawCharacter({name:'char_341_amona_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'请问......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'麦哲伦',text:'啊啊啊啊啊啊啊啊啊啊！！！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'麦哲伦，你刚才好像看到了一个幽灵。'});",
        "playground.drawDialog({name:'麦哲伦',text:'麦哲伦，虽然她很漂亮，但一定是个幽灵。'});",
        "playground.drawDialog({name:'麦哲伦',text:'但是，这里可是北地，怎么可能会有别人？'});",
        "playground.drawDialog({name:'麦哲伦',text:'难、难道说真的是雪中的幽灵？'});",
        "playground.drawDialog({name:'麦哲伦',text:'不行不行，要再开门看看，要用科学的眼光去看待！！'});",
        "playground.drawDialog({name:'麦哲伦',text:'没有幽灵这种东西！我的体温也没有下降到出现幻觉！'});",
        "playground.drawDialog({name:'麦哲伦',text:'万一是新的族群，那就是大发现！加油啊，麦哲伦！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_dooropen'});playground.drawCharacter({name:'char_341_amona_2'});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'请问，我能进来吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'呃，呃......你......我......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'不用害怕。我是活人，不信的话，摸摸我的脸吧？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'呃？呃？'});",
        "playground.drawDialog({name:'麦哲伦',text:'好，好......'});",
        "playground.drawDialog({name:'麦哲伦',text:'呜啊，好暖和！怎么会，这不是在北地吗，怎么会......'});",
        "playground.drawDialog({name:'麦哲伦',text:'......您是萨米人吗？'});",
        "playground.drawDialog({name:'麦哲伦',text:'咦......欸。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'虽然不知道是哪里让你感到失望，不过我确实是萨米人。你好，小姑娘。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'你，你好。虽然不知道你是怎么到这里来的，不过先进来吧，外面可不是普通人能活下来的温度！'});",
        "playground.drawDialog({name:'麦哲伦',text:'即使是萨米人，对这样的暴风雪也没辙吧？'});",
        "playground.drawCharacter({name:'char_341_amona_2'});playground.drawDialog({name:'？？？',text:'谢谢你。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:2, block:true});playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'给，热茶。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'谢谢。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'姐姐你叫什么？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'？？？',text:'就叫我——'});",
        "playground.drawDialog({name:'？？？',text:'西蒙娜吧，西蒙娜。你的名字呢，小姑娘？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'代号麦哲伦！莱茵生命科考专员，420号观测站的负责人......'});",
        "playground.drawDialog({name:'麦哲伦',text:'说是这么说，其实现在只有我一个人在用啦。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'是这样啊。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'西蒙娜，你为什么会来这里？还被困在暴风雪里......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'我是受人所托来找人的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'找人？这里可是北地哦，别说人了，我一个月连生物都见不到几只呢。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'委托我的人说，她应该就在这一带活动。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'你找她要做什么呢？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这场暴风雪将会持续很久很久，她可能会耽搁一些时间。我是来这里接她的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'咦，是这样吗？！你是来接我的吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'我也不太清楚呢。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'这，这样，不是接我的吗，欸。可是，现在的天气真的很恶劣，西蒙娜你不要紧吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'萨米人......不，我了解雪。'});",
        "playground.drawDialog({name:'西蒙娜',text:'但天气继续恶劣下去的话，许多事情都会向没法预测的方向变化。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'唔，虽然我也看得出这场暴风雪可能要持续一段时间，但没想到这么严峻。'});",
        "playground.drawDialog({name:'麦哲伦',text:'还想等风势变弱一些再走呢......这样的话，反而要加快行程了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'按照日程表和观测结果的话，明早可能是最佳时机了！'});",
        "playground.drawDialog({name:'麦哲伦',text:'嗯，物资储备也足足够了，我做的不错！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这么多物资，是给你一个人使用的吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不是不是，这是为了让生活在这个观测站的人能坚持到明年科考季的时候！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......哦？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'如果西蒙娜姐要在这里住很久的话，也可以使用这些物资！'});",
        "playground.drawDialog({name:'麦哲伦',text:'嗯，但是，实验仪器，不可以乱碰哦！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'嗯，好。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'好吧，既然这么决定了，那就开始整理行李吧！'});",
        "playground.drawDialog({name:'麦哲伦',text:'西蒙娜，不好意思，我要先准备一些东西。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'嗯，没关系，你去吧，不用管我。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});delay(1);playground.drawDialog({name:'麦哲伦',text:'行李箱，行李箱，行李箱去哪儿了来着？哦，想起来了，上个月被我拿来垫脚，放在厨房里了！'});",
        "playground.clearDialog();delay(1);playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'测绘仪和无人机的状况......嗯，没有问题！'});",
        "playground.drawDialog({name:'麦哲伦',text:'不过得充一下电才行。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'有没有我可以帮上忙的地方？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'啊，不用，这些我一个人就能完成的。'});",
        "playground.drawDialog({name:'麦哲伦',text:'一直以来我都是一个人完成这些工作的，已经很熟练啦。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'所以你是在这里工作？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嗯是的，我在这里从事研究和考察工作。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'考察什么？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'整片北地冰原！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这里，只有你一个人？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嗯，这就是我的工作啊？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不会很孤独吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'会！但是孤独和快乐没什么矛盾。'});",
        "playground.drawDialog({name:'麦哲伦',text:'我知道我的同事们都在等我回去，也知道这片冰原还有无数秘密等着我去揭开，所以没那么可怕啦。'});",
        "playground.drawDialog({name:'麦哲伦',text:'有时候我会很孤独，不过很多时候，我也很快乐！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'一个人......这真的相当可怕。这样的生活，我不知道该说什么。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不是每个人都能像我一样乐在其中啦。'});",
        "playground.drawDialog({name:'麦哲伦',text:'想要成为探险家，没有点本事可不行呢！'});",
        "playground.drawDialog({name:'麦哲伦',text:'啊，咳咳，是科考专员！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'你还......真是相当乐观呢。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嘿嘿，借用一位前辈说的话，“探险家最好的朋友，就是孤独”！'});",
        "playground.drawDialog({name:'麦哲伦',text:'哦，不过科长说我好像养成了下意识自言自语的习惯。有吗？应该没有吧？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'挺好的呀，麦哲伦小姐。你是很好的人。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'唔，嗯，哈哈，是这样吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'嗯。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嗯，观测站的能源储备应该也没有问题，只要设定好时间进入休眠状态就好，接下来......'});",
        "playground.drawDialog({name:'麦哲伦',text:'嗯，再说一下，除了科研设备，其它的西蒙娜都可以随便用！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这样啊，谢谢你。'});",
        "playground.drawDialog({name:'西蒙娜',text:'可我是感染者，这样混用物资和设施，真的没问题？'});",
        "playground.drawDialog({name:'西蒙娜',text:'你看到了不是吗，麦哲伦？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'欸，我看到了呀，西蒙娜你也没刻意去掩盖。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'你不害怕吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'第一眼有些吓人......是真的！毕竟这样分布的结晶真的很稀少......'});",
        "playground.drawDialog({name:'麦哲伦',text:'但是，姐姐实在是太漂亮了，那些结晶看起来都有些神秘！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不用避讳我的眼睛。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'啊，是眼睛......吗？西蒙娜姐也要好好注意诊疗，那可是很危险的部分啊......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这并不是我想问的。我是想问，你不害怕感染吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'啊，这个不用担心哦，莱茵生命的研究已经证明过很多次了，矿石病在人之间的传染条件是有规律可循的，并没有人们想的那么可怕。'});",
        "playground.drawDialog({name:'麦哲伦',text:'虽然很多人根本就不会去听......唉。'});",
        "playground.drawDialog({name:'麦哲伦',text:'我有很多朋友和同事，都是感染者哦！没问题的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......是吗。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'啊，对了，莱茵生命的医学研究，虽然大家都很为我们的事业感到自豪！'});",
        "playground.drawDialog({name:'麦哲伦',text:'但是在感染者这个领域，是比不上一家叫做“罗德岛”的医药公司的......'});",
        "playground.drawDialog({name:'麦哲伦',text:'虽然同事也很生气，但不得不承认，他们在矿石病这个方面，确实很厉害呢'});",
        "playground.drawDialog({name:'麦哲伦',text:'结果后来，莱茵生命干脆就和罗德岛进行了合作，就连我也要去罗德岛了呢！'});",
        "playground.drawDialog({name:'麦哲伦',text:'好期待啊，不知道会是怎么样的地方，我居然可以继续参与科考工作！还以为就要一直住研究室了呢......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'你是不是很喜欢聊天？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'那当然了！其实能和别人说说话，非常开心！唔，要是我说的太多，西蒙娜可以随时提醒，我会安静下来的......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不会。我喜欢你讲些我不知道的事情。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'唔，啊，有些不好意思......'});",
        "playground.drawDialog({name:'麦哲伦',text:'西蒙娜你要是想的话，也可以去罗德岛诊治！对了，我带你一起去吧。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'你不怕我别有用心吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'别有用心？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'就是，坏人。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'那西蒙娜，你是不是坏人呢？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......是啊，我是不是坏人呢。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'麦哲伦，你有感觉到这里的温度降低了吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'温度？咦，这么一说，确实比刚才要冷了一些......等等，难道说......'});",
        "playground.drawCharacter({});playground.drawDialog({text:'警报，检测到温控设施出现异常，即将切断外层供暖功能。'});",
        "playground.drawDialog({text:'警报......'});",
        "playground.drawCharacter({name:'char_248_mgllan'});playground.drawDialog({name:'麦哲伦',text:'糟了，西蒙娜，让一下！我要看监控系统！'});",
        "playground.clearDialog();delay(2);playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不好，材料老化导致外部供暖管道泄露了......'});",
        "playground.drawDialog({name:'麦哲伦',text:'不好意思，我要出门一趟。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'接下来会发生什么？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'如果允许系统切断外层供暖，观测站会在科考季之前就停止运作。至少，没法再提供生活功能了。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'还能支持几天？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'两个月左右吧......哪怕西蒙娜很熟悉雪，也没法在这种地方生活的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不会的，我很快就会离开北地。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'这样啊。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......你还在收拾什么？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'准，准备出门呀？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'你刚才不是说能支撑到两个月之后？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'对啊，那是绝对不行的！必须要支撑到下个科考季才行！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'外面的风雪已经不是常人能承受的地步了。这样艰难的环境，可能会危及你的生命，别出去。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不行，观测站不仅仅是为了我运作的，它本来具备营地的作用，也应该一直维持下去。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这种天气不会有别人来的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'西蒙娜不就是在这种天气里走到这里的吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'我不一样，我不是探险家，麦哲伦。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嘿哟......加热设备好重......'});",
        "playground.drawDialog({name:'麦哲伦',text:'那这座观测站就更重要了。'});",
        "playground.drawDialog({name:'麦哲伦',text:'对于探险家来说，观测站这类营地就是他们生命的节点。一旦观测站停运，那么失去资源、走到了这里的探险家，可能就会失去生命。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'那么，从它建立开始直到今天，除了我，还有别的访客吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'没有。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这样的话，你的坚持真的有意义吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'有的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'为什么这么肯定？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'因为总有人会走过这里，可能是明天，可能是下个科考季，也可能就是两个月以后。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这只是毫无根据的想法，麦哲伦，外面很危险。'});",
        "playground.drawDialog({name:'西蒙娜',text:'没有人会来这里的，至少在旱季前，探险家们是不会来的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'西蒙娜姐......你不是探险家，对吧？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'没错。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'那么，不同的探险家，有不同的选择。'});",
        "playground.drawDialog({name:'麦哲伦',text:'有的人会选择在最平静的时候走到这里，为了能踏遍这个北地，现在还没有人做到，但很多人一直在努力。'});",
        "playground.drawDialog({name:'麦哲伦',text:'有的人会选择在最危险的时候走到这里，为的是能看到这片大地的所有变化，为的是能把这里的种种记录和景象，带回文明世界。'});",
        "playground.drawDialog({name:'麦哲伦',text:'玻利维亚的黑流树海，卡西米尔的环山高地平原，伊比利亚的水下火山......这些地方，过去都没有人去过。'});",
        "playground.drawDialog({name:'麦哲伦',text:'但是，现在，已经有人去过了，在那里，已经插上了探险家们的旗帜。'});",
        "playground.drawDialog({name:'麦哲伦',text:'这片大地上还有许多我们未曾踏足的地方，但那也只是说，我们还没来及踏足。'});",
        "playground.drawDialog({name:'麦哲伦',text:'今天，这片冰原已经有我踏足了，那么，未来，总会有更多的人来到这里。'});",
        "playground.drawDialog({name:'麦哲伦',text:'我们也不会知道，他们是在什么条件下走来的。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'如果终你一生，都没有后来者呢？'});",
        "playground.drawDialog({name:'西蒙娜',text:'如果你回去之后，这个科考站就会被废弃呢？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'我也不能为两个月后的那一点点可能性，放弃哪怕是一位不存在的探险家。'});",
        "playground.drawDialog({name:'麦哲伦',text:'西蒙娜姐......麦哲伦我，相信探险这种事业，相信探险家这种人。'});",
        "playground.drawDialog({name:'麦哲伦',text:'总有一天，我们的足迹会遍布这一整片大地。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......把希望寄托于可能不会发生的未来，真的不会失望吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'没关系的，对探险家来说，我们一生都在发现，我们也一生都在失望。'});",
        "playground.drawDialog({name:'麦哲伦',text:'没有探险家的发现是仅仅依靠自己完成的，每一个探险家都是站在前人的肩膀上，每一个重大的发现都连接着遥远的过去。'});",
        "playground.drawDialog({name:'麦哲伦',text:'就好像我会来到这片冰原，一开始，只是因为在小时候听了一个故事。'});",
        "playground.drawDialog({name:'麦哲伦',text:'但是，现在我已经知道，无论我喜欢的那些存在不存在，我所做的，都有意义。'});",
        "playground.drawDialog({name:'麦哲伦',text:'哪怕只是那个虚无缥缈的，会让人失望的不存在的意义。'});",
        "playground.drawDialog({name:'麦哲伦',text:'唉这个加热器，功率会不会太大......上次把头发都烤焦了欸。不管，硬上啦！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'......我知道了。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'嗯！那我去了！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'那么，我替你去吧。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'欸？'});",
        "playground.drawDialog({name:'麦哲伦',text:'西蒙娜姐，你是来找人的吧？我们观测站没有雇佣其他雇员的需求哦！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'我已经找到那个人了。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'欸。'});",
        "playground.drawDialog({name:'麦哲伦',text:'欸，就是麦哲伦我吗？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'环境已经变得相当恶劣，预定要来的信使没法通知你了。'});",
        "playground.drawDialog({name:'西蒙娜',text:'容我重新自我介绍一下。罗德岛干员，代号“寒檀”。我是来接你的。当然，你可以继续叫我西蒙娜。'});",
        "playground.drawDialog({name:'西蒙娜',text:'接下来的工作让我来做。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'这样啊......'});",
        "playground.drawDialog({name:'麦哲伦',text:'不行。外面的环境太危险了！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'刚刚这句话，是我说的吧？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不行不行不行，我可是科考人员，这是我的责任！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不要小看我。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'欸。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'告诉我修理的方法，干员麦哲伦。外面的事情请交给我。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'那，那我知道了！这个，给你！'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'这是？'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'按下这个按钮，我就会立刻出来找你！还有这个装备，这个装备......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'呵呵，谢谢你......'});",
        "playground.drawDialog({name:'西蒙娜',text:'我真的找对人了呢。不用了，麦哲伦。'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:2});playground.drawDialog({name:'麦哲伦',text:'不可以！我可不能让西蒙娜......'});",
        "playground.drawCharacter({name:'char_341_amona_2',name2:'char_248_mgllan',focus:1});playground.drawDialog({name:'西蒙娜',text:'不。干员麦哲伦......相信我。'});",
        "playground.drawDialog({name:'西蒙娜',text:'这片土地也一样信任着我。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0.3, r:1, g:1, b:1, fadetime:1, block:true});playground.drawCharacter({name:'char_341_amona_2'});playground.drawDialog({name:'西蒙娜',text:'我们一生都在发现，也一生都在失望，吗。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({name:'？？？',text:'愚蠢的萨米人，这种抵抗有什么意义？'});",
        "playground.drawDialog({name:'？？？',text:'你确实很厉害，我们走不出这场暴风雪了。'});",
        "playground.drawDialog({name:'？？？',text:'那又怎么样？乌萨斯依然会碾压你们，吞下你们的城市，吃掉你们的土地！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawDialog({name:'？？？',text:'女巫......我们不会杀掉你。'});",
        "playground.drawDialog({name:'？？？',text:'我们会死，我们却要你活！你要活着，你要看整片大地都染血！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5, block:true});playground.drawDialog({name:'？？？',text:'这东西送给你。我们这些死人的礼物，收下！用你的一只眼睛，收下！'});",
        "playground.drawDialog({name:'？？？',text:'惨叫啊，哭啊，然后活着！'});",
        "playground.drawDialog({name:'？？？',text:'我们死得光荣，你活得卑微！而且......你要一直活着！！'});",
        "playground.drawDialog({name:'？？？',text:'女巫！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_341_amona_2'});playground.drawDialog({name:'西蒙娜',text:'真是的。我以前怎么总是觉得这片大地会枯萎呢？'});",
        "playground.drawDialog({name:'西蒙娜',text:'只要有这样的孩子在，大地就会一直挣扎着繁茂下去才对。'});",
        "playground.drawDialog({name:'西蒙娜',text:'放心吧，麦哲伦。有些事情对你来说还太难了，交给我们大人去做，我们也会很开心啊。'});",
        "playground.drawDialog({name:'西蒙娜',text:'“......听啊♪......”'});",
        "playground.drawDialog({name:'西蒙娜',text:'“......白色的生命肆意绽放，漆黑的种子深植土壤......♪”'});",
        "playground.drawDialog({name:'西蒙娜',text:'“歌唱吧，美丽的女孩。哭泣吧，美丽的女孩♪”'});",
        "playground.drawDialog({name:'西蒙娜',text:'“风雪会听见你的歌，也会拥你入怀♪”'});",
        "playground.drawDialog({name:'西蒙娜',text:'——北地的风雪，听见歌声了吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'西蒙娜',text:'麦哲伦......我啊，想看你坚持自己的梦想。'});",
        "playground.drawDialog({name:'西蒙娜',text:'是啊，雪也该停了。'});"
    ]
];