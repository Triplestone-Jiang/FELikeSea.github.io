//首页的js代码封装
(function(){
    $(function(){
        $(window).resize();
    });//ready

    $(window).resize(function(){ 
        $("#firstPage,.memberPages").css("height", $(window).height());
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
//teamMembers模块
(function(){
	//teamMembers页面article元素垂直居中
	var h=($(window).height()/2-351)+"px";
	$("article").css("top",h);
	//页面随滑轮而滚动到下一页
	$(function() {
		$(".panel").css({"height":$(window).height()});
		var timer;
		$(window).resize(function() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				$(".panel").css({"height":$(window).height()});
			},40);
		});
	
		$.scrollify({
			section:".panel"
		});
		
		$(".scroll").click(function(e) {
			e.preventDefault();
			$.scrollify("move",$(this).attr("href"));
		});
	});
})();
