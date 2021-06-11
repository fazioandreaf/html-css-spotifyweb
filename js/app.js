function init(){
    new Vue({

        el:'#app',
        data:{
          timePlay:0,
          timeFinish:0,  
          buttonPlay:false,
          buttonLikeIt:false,
          buttonMute:true,
          volume:10,
          timefinish:100,
          volume_complete:100- this.volume ,
        },
        mounted:function(){
            this.volume=10 ;
        },
        'methods':{
            booleanPlay:function(){
                this.buttonPlay=!this.buttonPlay;
            },
            booleanLikeIt:function(){
                this.buttonLikeIt=!this.buttonLikeIt;
            },
            booleanMute:function(){
                this.buttonMute=!this.buttonMute;
            },
            playtime:function(time){
                tempo=setInterval(function(){
                    time=time +1;
                    console.log(time);
                },1000)
            },
            stoptime:function(){
                clearInterval(tempo)
            }
        }   
    })
}
document.addEventListener('DOMContentLoaded',init);