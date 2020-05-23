$(function(){
	var k = $(window).height();//当前屏幕的高度
	var flag = false;
	// 点击next 往下滚动一屏
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
    $('#fullpage').fullpage({
	//这个fullpage  方法里面接受json对象
	
	//是否显示项目导航
	navigation: true,
	//navigationPosition: 'left',
	loopBottom: true, //循环滑动
	heyboardScrolling: true,//是否使用键盘方向键导航
	scrollingSpeed:  900,//滚动时间，默认700ms
	
// 回调函数滚动到某一屏后的回调函数，接收  anchorLink 和 index 两个参数，
// 	anchorLink 是锚链接的名称 index 是序号，从1 开始计算
	afterLoad:function(anchorLink, index){
		//往第二屏幕滚动时，先消失   动画完毕 再出现
		 $(".next").fadeOut();
		if(index == 2 ){
			//缓动动画要加到时间的后面，回调函数的前面
		$(".search").show().animate({"right":250},1200,"easeOutBack",function(){
			// 方块走进来，沙发显示
			$(".search-words").animate({"opacity": 1},500,function(){
				$(".search").hide();
				//图片往上走并缩小
				$(".search-02-1").show().animate({"height":30,"right":80,"bottom":448},500);
				//同时沙发图片变大
				 $(".goods-02").show().animate({"height":218},1000)
				 // 同时白色文字显现出来
				 $(".words-02").animate({"opacity":1},1000,function(){
					 $(".next").fadeIn();
				 });
				});
		    });
	    }
    },
	//刚开始滚动屏幕就触发的回调函数  onLeave
	//滚动前的回调函数，接收  Index 、netIndex 和 direction 3个参数： index
	//是离开的"页面"的序号，从1 开始计算：nextIndex 是滚动到"页面"的序号，从1开始计算：
	 //direction 判断往上滚动还是往下滚动，值是 up 或是 down
	onLeave:function(index,nextIndex,direction){
		
		 $(".next").fadeOut();
		if(index == 2 && nextIndex == 3){
		//当第二屏往第三屏滚动时，沙发向下  白色盒子显示
		//沙发要往第三屏幕走
		$(".shirt-02").show().animate({"bottom": -(k - 250),"width":207, "left": 115},2000,function(){
			$(".img-01-a").animate({"opacity":1},500,function(){
			$(".btn-01-a").animate({"opacity":1},500,function(){
				$(".next").fadeIn();
			});
			});
		});
		$(".cover").show();
		}
		//第三屏幕到第四屏幕过度
		if(index == 3 && nextIndex == 4){
			$(".shirt-02").hide();
			//沙发的距离  当前屏幕的高度  -250 +第三屏幕的 50 距离
			$(".t1f").show().animate({"bottom": -((k-250)+50),"left":260},2000,function(){
				$(this).hide();
				$(".car-img").show();
				//购物车开始往右走
				$(".car").animate({"left": "150%"},3000,"easeInElastic",function(){
					$(".note").show();
					$(".note-img,.words-04-a").animate({"opacity":1},1000,function(){
						$(".next").fadeIn();
					});
				});
			})	
		}
		//第四屏到第五屏的过渡
		if(index == 4 && nextIndex == 5){
			//小手上来
			$(".hand-05").animate({"bottom":0},1000,function(){
				//鼠标显示
			$(".mouse-05-a").fadeIn();
			//沙发从 800 到 230
				$(".t1f-05").show().animate({"bottom":230},1000,function(){
					//卡片上走
					$(".order-05").animate({"bottom": 390},500,function(){
						$(".words-05").addClass("words-05-a");
						$(".next").fadeIn();
					});
				})
			});
			}
			// 从第五屏到第六屏过度
			if(index == 5 && nextIndex == 6){
				// 沙发往下走
				$(".t1f-05").animate({"bottom": -(k-450),"left":"40%","width":"65"},1500,function(){
				$(".t1f-05").hide();	
				});
				$(".box-06").animate({"left":"38%"},1500,function(){
					$(".box-06").animate({"bottom":"40"},500,function(){
					$(".box-06").hide();
					//行走的过程就是背景移动的过程
					
					$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
						$(".boy").animate({"height":305,"bottom":116},1000,function(){
							$(this).animate({"right":500},500,function(){
								//门显示出来
								$(".door").animate({"opacity":1},200,function(){
										$(".girl").show().animate({"right": 350,"height":305},500,function(){
									$(".pop-07").show();
									$(".next").fadeIn();
								});
							});	
						});
					});
				});
					//光的速度
					$(".words-06-a").show().animate({"left":"30%"},2000);
					$(".pop-06").show();
				});
			});
		}	
		// 从第6屏到第7屏过度
		if(index == 6 && nextIndex == 7){
			setTimeout(function(){
				$(".star").animate({"width":120},500,function(){
					$(".good-07").show();
					$(".next").fadeIn();
				});
			},2000);
		}
		// 这是第8屏
		// $(".beginShoping").mouseenter(function(event){
		// 	$("btn-08-a").show();
		// }).mouseleave(function(event){
		// 	$("btn-08-a").hide();
		// });
		//hover 来代替个更简洁 
		$(".next").fadeOut();
		$(".beginShoping").hover(function(){
			$(".btn-08-a").toggle(); //显示和隐藏的替换
		});
		//大手跟随鼠标移动
		$(document).mousemove(function(event){
			
			var x = event.pageX - $(".hand-08").width() /2; //获得鼠标在页面中的x坐标
			var y = event.pageY + 10; //获得鼠标在页面中的y坐标
			
			//手的top值不能小于这个大小    当前屏幕高度 k 减去 手的高度
			var minY = k - 449;
			//把鼠标在页面中的坐标给 hand 大手 left  top
			if(y < minY ){
				y =  minY ;
				//$(".hand-08").css({"left": x,"top": minY});
			}
			 $(".hand-08").css({"left": x,"top": y});	
		});
		// 当我们点击  再来一次的时候   分两步进行
		// 1.返回第一屏幕
		$(".again").click(function(event){
			$.fn.fullpage.moveTo(1);
		
		//2.所有的动画都复原 
		// 核心原理就是让图片（做过动画的元素）清除所有行内样式
		$("img, .move").attr("style","");
		});
	  },
	});
});