function init(){
    new Vue({

        el:'#app',
        data:{
          timePlay:0,
          timeFinish:0,  
          buttonPlay:false,
          buttonLikeIt:false,
          buttonMute:true,
          repeat:false,
          random:false,
          volume:0,
          volume_text:'Inizio',
          counter:1,
          timefinish:200,
          timefinish_text:'Fine',
        },
        mounted:function(){
            this.secondsToHms();
            this.secondsToHmss();
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
            booleanRepeat:function(){
                this.repeat=!this.repeat;
            },
            booleanRandom:function(){
                this.random=!this.random;
            },

            playtime:function(){
                console.log(this.volume);
                tempo=setInterval(this.increment,1000);
                tempo_testo=setInterval(this.secondsToHms,1000);
            },
            increment:function(){
                if(this.repeat && this.volume>=this.timefinish){
                    this.volume=0
                }else if(this.volume>=this.timefinish){
                    this.stoptime();
                    this.booleanPlay();
                }else this.volume++;
            
            },
            secondsToHms:function() {
                let m = Math.floor(this.volume % 3600 / 60);
                let s = Math.floor(this.volume % 3600 % 60);
                let mDisplay = m > 0 ?  m+":" : "0:";
                let sDisplay = s > 9 ? s  : "0"+s;
                this.volume_text= mDisplay + sDisplay; 
            },
            secondsToHmss:function() {
                let m = Math.floor(this.timefinish % 3600 / 60);
                let s = Math.floor(this.timefinish % 3600 % 60);
                let mDisplay = m > 0 ?  m+":" : "0:";
                let sDisplay = s > 9 ? s  : "0"+s;
                this.timefinish_text= mDisplay + sDisplay; 
            },
            stoptime:function(){
                clearInterval(tempo);
                clearInterval(tempo_testo);
            },
        }   
    })
}
document.addEventListener('DOMContentLoaded',init);