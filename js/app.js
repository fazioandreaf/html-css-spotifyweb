function init(){
    new Vue({

        el:'#app',
        data:{
          timePlay:0,
          timeFinish:0,  
          buttonPlay:false,
          buttonLikeIt:false,
          buttonMute:true,
          volume:0,
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
        }   
    })
}
document.addEventListener('DOMContentLoaded',init);