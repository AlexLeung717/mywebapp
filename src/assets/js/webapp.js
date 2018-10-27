;(function(self){

    var desiginWidth = self.desiginWidth || 750;
    var doc = self.document
    
    //
    function setFontSize(){
        var winWidth = doc.documentElement && doc.documentElement.clientWidth || self.innerWidth
        var fontSize = winWidth / (desiginWidth / 100)
        var el = doc.getElementsByTagName('html')[0]
        
        // 
        if( winWidth > 1024 ){
            fontSize = 16;
    
        // ipad
        }else if( winWidth >= 768 ){
            fontSize = 90;
        }
    
        el.style.fontSize = fontSize + 'px'
        self.fontSize = fontSize 
    }
    
    if( self.addEventListener ){
        self.addEventListener( 'resize', setFontSize )
    
    }else{
        self.onresize = setFontSize
    }
    
    
    setFontSize();
    
    })(window);