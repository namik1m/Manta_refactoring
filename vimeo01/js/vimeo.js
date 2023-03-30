class MediaPlayer{
    
    constructor(_number, imagename, videoId) {
        let number = (""+_number).replace('0','');
        let contents = `
        <div id="a${number}" class="inside open-video" data-scroll>
        <img src="./img/media/${imagename}.jpg" />
      </div>
      <div class="plyr__video-embed" id="player">
        <span id="closebtn_${number}">&times;</span>
        <iframe id="pf_${number}"
          src="https://player.vimeo.com/video/${videoId}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
          allowfullscreen
          webkitAllowFullScreen
          mozallowfullscreen
          allowtransparency
          allow="autoplay"
          frameborder="0"
          style="display:none;"
        ></iframe>
      </div>
`
        //document.getElementById('videos').innerHTML = document.getElementById('videos').innerHTML + contents;
        document.getElementById('videos').innerHTML += contents;
        document.getElementById('videos').insertAdjacentHTML('beforeend', contents);

       let frame = document.getElementById('pf_'+number).innerHTML += contents;
       console.log(frame)
       this.player = new Vimeo.Player(frame);//iframeList[0]
        // let css = `
        // #a${number}{
        //     width: 35%;
        //     top: ${ number * 400};
        //     left: ;
        // }

//        `
 //       document.getElementById('custom_style').innerHTML += css;
                
        //document.getElementById('videos').innerHTML = document.getElementById('videos').innerHTML + contents;

    }

    play(){
        this.player.play();
    }

    pause(){
        this.player.pause();
    }

}


let playList = [
    {image: '01-01_05-06', videoId: '770809167' },
    {image: '01-02', videoId: '770792708' },
    {image: '01-03', videoId: '800093903' },
    {image: '01-04_05-05', videoId: '770803078' },
    {image: '01-05', videoId: '801528759' },
    {image: '01-06_03-02', videoId: '800093999' },
    {image: '01-07_03-03', videoId: '800093790' },
    {image: '01-08', videoId: '770797145' },
    {image: '01-09', videoId: '800093740' },
    {image: '01-10_04-04', videoId: '770797440' },
    {image: '01-11_03-05', videoId: '805539366' },
]

var playerList = [];
for(let i in playList){
    let item = playList[i];
    console.log(i, item);
    var mp = new MediaPlayer(i+1, item.image, item.videoId);
    playerList.push(mp);
}
