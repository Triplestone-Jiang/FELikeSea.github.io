//首页的js代码封装
(function(){
    $(function(){
        $(window).resize();
    });//ready

    $(window).resize(function(){ 
        $("#block-firstPage").css("height", $(window).height());
        //首页文字slidedown效果
        $('.blockTitle').stop().fadeIn("normal").animate({
            "top" : ($(window).height() - $('.blockTitle').outerHeight())/2
        },500); 
    });

    $(window).on('click',function(e){
        startProgress();
        $(window).unbind('click');
    })

    var currProgress = 0; 
    var done = false; 
    var total = 100; 

    function startProgress() { 
        var prBar = document.getElementById("prog"); 
        var val = document.getElementById("numValue"); 
        prBar.value = currProgress; 
        val.innerHTML = Math.round((currProgress/total)*100)+"%"; 
        currProgress++; 
        if(currProgress>100){
            done=true; 
        }
        if(!done) {
            setTimeout(startProgress, 10);
        }else{ 
            done = false; 
            currProgress = 0; 
        } 
    } 

})();