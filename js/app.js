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
          volume_text:'10',
          counter:1,
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
            playtime:function(){
                console.log(this.volume);
               
                    tempo=setInterval(this.increment,1000);
                    tempo_testo=setInterval(this.secondsToHms,1000);
  
            },
            increment:function(){
            if((this.volume>=this.timefinish)?this.stoptime():this.volume++);
            },
            secondsToHms:function() {
                let m = Math.floor(this.volume % 3600 / 60);
                let s = Math.floor(this.volume % 3600 % 60);
                let mDisplay = m > 0 ? (m == 1 ? "01:" : 'm') : "";
                let sDisplay = s > 0 ? s +(s == 1 ? "" : "") : "";
                this.volume_text= mDisplay + sDisplay; 
            },
            stoptime:function(){
                clearInterval(tempo);
                clearInterval(tempo_testo);
            },
        }   
    })
}
document.addEventListener('DOMContentLoaded',init);