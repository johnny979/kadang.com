//首页所有事件
$(function(){
				$('#C-header').load('header.html?_='+Math.random());
				$('#C-foot').load('foot.html?_='+Math.random())
				
				//轮播图
				$('.banner>li:gt(0)').hide();
				//设置一个淡入淡出的函数
				var i=0
				var num = $('.banner>li').length;
				function fade(){
					
					if(i==num-1){
						i=-1;
					}
					
					$('.count>li').eq(i+1).css("background",'orange').siblings("li").css("background",'#71706e');
//					$('.count>li').eq(i).addClass("Bhover").siblings("li").removeClass('Bhover');
					$('.banner>li').eq(i+1).fadeIn('slow').siblings('li').fadeOut();
					i++;
				};
			//封装运动
			var timer = null;
			function getBanner(){
				timer = setInterval(function(){
					fade();
				},2000)
			};
			getBanner();
				
		//设置点击事件
		//下一页
		$('.pageDown','.banner').click(function(){
						fade();
					});
		//上一页
		$('.pageUp','.banner').click(function(){
			if(i==0){
				i=num
			}
			//大图切换
			$('.banner>li').eq(i-1).fadeIn('slow') .siblings('li').fadeOut('slow');
		//小图切换
			$('.count>li').eq(i-1).css("background",'orange').siblings("li").css("background",'#71706e');

			i--;
			});
		//小圆点 点击切换
		$('.count>li').click(function(){
			$(this).css("background",'orange').siblings("li").css("background",'#71706e');
			var i_num=$('.count>li').index(this);
			$('.banner>li').eq(i_num).fadeIn('slow').siblings('li').fadeOut('slow');

			i=i_num;
		});
					
//						$('.banner>li').eq(3).animate({'opacity':1},1000).siblings().animate({'opacity':0},1000);
				
				//翻页图标效果
				$('.banner').hover(function(){
					//鼠标进入时 停止轮播
					clearInterval(timer);
					$('.pageUp','.banner').css('opacity',0.5).animate({left:0},200);
					$('.pageDown','.banner').css('opacity',0.5).animate({right:0},200);
				},function(){
					//鼠标移除 继续轮播
					getBanner();
					$('.pageUp','.banner').css('opacity',0).animate({left:50},200).hover(function(){
						
						$(this).css('opacity',0.9);
					},function(){
						$(this).css('opacity',0.5);
					});
					$('.pageDown','.banner').css('opacity',0).animate({right:50},200).hover(function(){
						
						$(this).css('opacity',0.9);
					},function(){
						$(this).css('opacity',0.5);
					});
				})
			//跳楼事件
			//当页面出现指定模块时，开始显示背景色
			
			$(window).scroll(function(){
				var oHeight = $('.G-floor').height();
				var scrollTop = $(window).scrollTop();
				
				if(scrollTop>$('.floor1').position().top){
					$('.G-floor').css('position','fixed');
					$('.G-floor').css('border-bottom','1px solid #b1b1b1');
				}
				if(scrollTop<$('.floor1').position().top||scrollTop>$('#foot-link').position().top){
					$('.G-floor').css('position','');
					$('.G-floor').css('border','none');
				}
				
				$('#goods').find('div').each(function(idx,ele){
					 if (scrollTop >= $(ele).offset().top-oHeight && scrollTop < ($(ele).offset().top + $(ele).outerHeight() / 2)){

							$('#floor').find('li').css({'background':'','color':""}).eq(idx).css({'background':'#f4614d','color':'#fff'});

							// 退出循环
							return false;
						}
				})
			})	
			//实现点击跳转
			
			$('#floor').on('click','li',function(){
					var index = $(this).index();
					var top;
					top = $('#goods').find('.J-floor').eq(index).offset().top;
					// $(window).scrollTop(top);
					$('html,body').animate({scrollTop:top-$('.G-floor').height()});
				});
			
	})