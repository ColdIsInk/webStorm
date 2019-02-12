//歌曲信息
var  songs = [
    {
        "name":"凉凉",
        "singer":"张碧晨/杨宗纬",
        "url":"mp3/liang.mp3",
        "photo":"images/liang.jpg"
    },
    {
        "name":"刚好遇见你",
        "singer":"李玉刚",
        "url":"mp3/ganghao.mp3",
        "photo":"images/ganghao.jpg"
    },
    {
        "name":"新贵妃醉酒",
        "singer":"李玉刚",
        "url":"mp3/guifei.mp3",
        "photo":"images/guifei.jpg"
    },
    {
        "name":"成都",
        "singer":"赵雷",
        "url":"mp3/chengdu.mp3",
        "photo":"images/zhaolei.jpg"
    },
    {
        "name":"卷珠帘",
        "singer":"霍尊",
        "url":"mp3/juanzhulian.mp3",
        "photo":"images/huozun.jpg"
    },
    {
        "name":"天上掉下个林妹妹",
        "singer":"张杰",
        "url":"mp3/lingmeimei.mp3",
        "photo":"images/zhangjie.jpg"
    }
];
var wayImg=[
    {
        "src": "images/list_cycle.png",
        "title": "列表循环"
    },
    {
        "src": "images/single_cycle.png",
        "title": "单曲循环"
    },
    {
        "src":"images/random.png",
        "title":"随机播放"
    }];
function getSFM( data ){
    var data =Math.round( data ) ;  // 持续时间
    var second = data % 60 ;
    var  minutes = ( data-second) / 60 % 60;
    ( second<10 )&&( second = "0" + second);
    ( minutes<10 )&&( minutes = "0" + minutes);
    return   minutes +":"+second ;
}

var mya=document.getElementById("mya");
var bgImg=document.getElementById("bgImg");
var singerImg=document.getElementById("singerImg");
var singer=document.getElementById("singer");
var song=document.getElementById("song");
var nowTime=document.getElementById("nowTime");
var totalTime=document.getElementById("totalTime");
var progress=document.getElementById("progress");
var pro_cover=document.getElementById("pro_cover");
var front=document.getElementById("front");
var btnPlay=document.getElementById("btnPlay");
var btnStop=document.getElementById("btnStop");
var next=document.getElementById("next");
var sound=document.getElementById("sound");
var noSound=document.getElementById("noSound");
var voice=document.getElementById("voice");
var songsList=document.getElementById("songsList");
var list=document.getElementById("list");
var playList=document.getElementById("playList");
var close=document.getElementById("close");
var play_way_img=document.getElementById("play_way_img");
var play_way=document.getElementById("play_way");
var way=document.getElementById("way");
var voice_cover=document.getElementById("voice_cover");
var  nowsong = 0;
mya.volume=0.5;
var deg=1;
//播放时图片旋转
mya.addEventListener("play",function () {
    setInterval(function () {
        if(mya.paused==false){
            deg=mya.currentTime*2;
            singerImg.style.transform="rotateZ(" +deg+"deg)";
        }
    },1000);
},false);

//歌曲改变，信息改变
function songChange(nowsong) {
    mya.src = songs[nowsong].url ;
    singerImg.src=songs[nowsong].photo;
    bgImg.src=songs[nowsong].photo;
    singer.innerHTML=songs[nowsong].singer;
    song.innerHTML=songs[nowsong].name;
}
songChange(nowsong);
//总时间
mya.addEventListener("loadedmetadata",function(){
    totalTime.innerHTML = getSFM( mya.duration ) ;
},false);
// 当前已播放的进度
mya.addEventListener("timeupdate",function(){
    pro_cover.style.width=(mya.currentTime/mya.duration)*458+"px";
    progress.value=mya.currentTime/mya.duration;
    nowTime.innerHTML = getSFM( mya.currentTime);

},false);


//播放
btnPlay.addEventListener("click",function(){
    mya.play();
    btnPlay.style.display="none";
    btnStop.style.display="inline";
},false);
//暂停
btnStop.addEventListener("click",function () {
    mya.pause();
    btnStop.style.display="none";
    btnPlay.style.display="inline";
},false);

//下一首
next.addEventListener("click",function () {
    nowsong++ ;
    if( nowsong >= songs.length){
        nowsong = 0;
    }
    songChange(nowsong);
    mya.play();
    btnPlay.style.display="none";
    btnStop.style.display="inline";
},false);
//上一首
front.addEventListener("click",function () {
    nowsong-- ;
    if( nowsong <0){
        nowsong = songs.length-1;
    }
    songChange(nowsong);
    mya.play();
    btnPlay.style.display="none";
    btnStop.style.display="inline";
},false);
//静音
sound.addEventListener("click",function() {
    mya.muted=true;
    voice.value=0;
    sound.style.display="none";
    noSound.style.display="inline";
    voice_cover.style.width=0;

},false);
//取消静音
noSound.addEventListener("click",function() {
    mya.muted=false;
    voice.value=0.5;
    noSound.style.display="none";
    sound.style.display="inline";
    voice_cover.style.width=57+"px";
},false);
//根据进度条改变声音
voice.addEventListener("input",function (){
    mya.volume = this.value;
    voice_cover.style.width=this.value*120+"px";
    mya.muted=false;
    if(this.value==0){
        noSound.style.display="inline";
        sound.style.display="none";
    }else {
        noSound.style.display="none";
        sound.style.display="inline";
    }
},false);
//动态播放列表
var songlist="";
for(var i=0;i<songs.length;i++) {
    songlist=songlist+"<a href='#' class='songList' index="+i+"><span class='singer'>" +songs[i].singer +
        "</span>--<span class='name'>" +songs[i].name + "</span></a>";
}
songsList.innerHTML=songlist;

//展开、关闭列表
list.style.display = "none";
playList.addEventListener("click",function (){
    if(list.style.display =="none"){
        list.style.display = "block";
    }
    else {
        list.style.display = "none";
    }
},false);
//点×关闭列表
close.addEventListener("click",function () {
    list.style.display="none";
},false);

//点击播放列表的歌曲
mya.addEventListener("change",function () {
    list_a[nowsong].style.background="#31a0fe";
},false);

var list_a=songsList.getElementsByTagName("a");
for(var i=0;i<songs.length;i++){
    list_a[i].addEventListener("click",function () {
        var index = Number( this.getAttribute("index"));
        songChange(index);
        mya.play();
        btnPlay.style.display="none";
        btnStop.style.display="inline";
    },false);
}
//展开、关闭播放方式
way.style.display = "none";
play_way.addEventListener("click",function () {
    if(way.style.display =="none"){
        way.style.display = "block";
    }
    else {
        way.style.display = "none";
    }
},false);
//选择播放方式，默认为列表循环
play_way_img.src=wayImg[0].src;
play_way_img.title=wayImg[0].title;
var way_li=way.getElementsByTagName("li");
for(var i=0;i<wayImg.length;i++) {
    way_li[i].addEventListener("click", function () {
        var index = Number(this.getAttribute("index"));
        play_way_img.src = wayImg[index].src;
        play_way_img.title = wayImg[index].title;
        way.style.display = "none";
    }, false);

    way_li[i].addEventListener("click", function () {
        if (play_way_img.title == "随机播放") {
            mya.addEventListener("ended", function () {
                songChange(parseInt(Math.random()*songs.length));
                mya.play();
            }, false);
        }
        if (play_way_img.title == "单曲循环") {
            mya.addEventListener("ended", function () {
                songChange(nowsong);
                mya.play();
            }, false);
        }
        //一首歌播放完后自动跳到下一首，顺序播放
        if (play_way_img.title == "列表循环") {
            mya.addEventListener("ended", function () {
                nowsong++;
                if (nowsong >= songs.length) {
                    nowsong = 0;
                }
                songChange(nowsong);
                mya.play();
            }, false);
        }
    }, false);
}