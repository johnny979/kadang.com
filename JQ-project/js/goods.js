$(function(){
	$('#C-header').load('header.html?_='+Math.random());
	$('#C-foot').load('foot.html?_='+Math.random());
	//点击切换红点
	$('.Check-a').click(function(){
		$(this).addClass('Check-a-cur').siblings().removeClass('Check-a-cur');
	});
	//点击收起/伸出导航
	$('#second-M').hover(function(){
		if($(this).hasClass('bt-click')){
			$(this).find('.bt').css('background-position','-12px -21px');
		}else{
			$(this).find('.bt').css('background-position','-12px -17px');
		}
		
	},function(){
		if($(this).hasClass('bt-click')){
			$(this).find('.bt').css('background-position','-7px -26px');
		}else{
			$(this).find('.bt').css('background-position','-0px -26px');
		}
		}).click(function(){
			if($(this).hasClass('bt-click')){
			$(this).removeClass('bt-click');
			$(this).find('.bt').css('background-position','-0px -26px');
			$('.G-check').stop().slideDown();
			
		}else{
			$(this).addClass('bt-click');
			$(this).find('.bt').css('background-position','-7px -26px');
			$('.G-check').stop().slideUp();
		}
		})
		//变色
		$('.I-sort').find('a').click(function(){
			$(this).addClass('I-active').siblings().removeClass('I-active');
		})
		$('.S-price').find('a').click(function(){
			$(this).addClass('I-active2').siblings().removeClass('I-active2');
		})
		//小楼梯
		$(window).scroll(function(){
			var Top = $(window).scrollTop();
			if(Top>448){
				$('#F-floor').css('position','fixed');
				$('.close').show();
			}
			if(Top<448){
				$('#F-floor').css('position','relative');
				$('.close').hide();
			}
			
		})
		//关闭楼梯
		$('.close').hover(function(){
			$(this).css('background-position','0 -31px');
		},function(){
			$(this).css('background-position','0 0');
		}).click(function(){
			$('.close').hide();
			$('#F-floor').css('position','');
			$(window).unbind('scroll');
		})
		//获取ajax拼接分页
		//获取页码
		var page = function(_pageindex, _isgenerate){
				$.get('JSON/goods.txt', {'_': Math.random(), page: _pageindex}, function(response){
					var obj = JSON.parse(response);
					var  i = (_pageindex-1)*obj.pageSize;
					var pageNo = _pageindex*obj.pageSize;
					$("#G-inside").html(" ");
					var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize);
					//<a><span class="pageUp">&nbsp</span></a>
					var pageFlag = '';
					var data = obj.data;
					console.log(data[0].id);
					var least = ((pageCount-1)*obj.pageSize);
					console.log(least);
					var goods = "";
					if(_pageindex==pageCount&&pageCount>1){
						for(least;least<data.length;least++){
							goods+="<li class="+data[least].id+"><img class='pic' src="+data[least].src+' /><span class="intro">'+data[least].title+'</span><span class="price"><a class="T-price"><i>￥<i>'+data[least].price+'</a><a class="rate">'+data[least].rate+'</a></span></li>';
						}
						
					}else{
						for(i;i<pageNo;i++){
							goods+="<li class="+data[i].id+"><img class='pic' src="+data[i].src+' /><span class="intro">'+data[i].title+'</span><span class="price"><a class="T-price"><i>￥<i>'+data[i].price+'</a><a class="rate">'+data[i].rate+'</a></span></li>';
						}
					}
					
						
					
					
					$(goods).appendTo('#G-inside');
					
					
					if(!_isgenerate){
						return _pageindex;
					}
					for(var j = 1; j <= pageCount; j++){
						if(j==1){
							pageFlag += ('<span class="pageC G-active">' + j + '</span>');
							continue;
						}
						pageFlag += ('<span class="pageC">' + j + '</span>');
					}
					pageFlag += '';
					//<a><span class="pageDown">&nbsp</span></a>
					$(pageFlag).appendTo('#pagecode');
				})
				return _pageindex;
			}
			page(1, true);
			$('#pagecode').on('click','span', function(evt){
				$(this).addClass("G-active").siblings().removeClass('G-active');
				page($(this).index()+1);
				var self = $(this);
			});
			//为其绑定跳转事件
			$('#G-inside').on('click','li',function(){console.log(123);
				window.location.href = 'detail.html?goodsId='+$(this).prop('class');
			})
			

})