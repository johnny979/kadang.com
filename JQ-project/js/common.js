	
	$(function(){
			//头部操作
	//对我的卡当添加时间
				$('.MyKD').hover(
					function(){
						$('.MyKD').addClass("hover");
						$('.Myacc').show();
					},
					function(){
						$('.MyKD').removeClass("hover");
						$('.Myacc').hide();
					});
				$('.Myacc').hover(
					function(){
					$('.MyKD').addClass("hover");
					$(this).show();
				},function(){
					$(this).hide();
					$('.MyKD').removeClass("hover");
				});
				//对购物车添加事件
				$('.cart').hover(
					function(){
						$(this).addClass("hover");
						$('.Mycart').show();
					},
					function(){
						$(this).removeClass("hover");
						$('.Mycart').hide();
					});
				$('.Mycart').hover(
					function(){
					$('.cart').addClass("hover");
					$(this).show();
				},function(){
					$(this).hide();
					$('.cart').removeClass("hover");
				});
				//对手机添加二维码事件
				$('.phone').hover(
					function(){
						$(this).addClass("hover");
						$('.QR').show();
					},
					function(){
						$(this).removeClass("hover");
						$('.QR').hide();
					});
				$('.QR').hover(
					function(){
					$('.phone').addClass("hover");
					$(this).show();
				},function(){
					$(this).hide();
					$('.phone').removeClass("hover");
				});
				//对我的收藏添加事件
				$('.Myfav').hover(
					function(){
						$(this).addClass("hover");
						$('.MyLike').show();
					},
					function(){
						$(this).removeClass("hover");
						$('.MyLike').hide();
					});
				$('.MyLike').hover(
					function(){
					$('.Myfav').addClass("hover");
					$(this).show();
				},function(){
					$(this).hide();
					$('.Myfav').removeClass("hover");
				});
				//搜索栏
				$('#S-button').hover(function(){
					$(this).css('color','red');
				},function(){
					$(this).css('color','');
				})
				//导航栏，光标移动
				$('#dif li').hover(function(){
					$('#dif').next('#slide').show().css('width',$(this).width()-10).animate({left:$(this).position().left},100);
				},function(){
//					$('#dif').next('#slide').hide().css('width',$(this).width()-10).animate({left:0},100);
				});
				$('#dif').hover(function(){
//					$('#dif').next('#slide').show();
				},function(){
					$('#dif').next('#slide').css('width',$(this).width()-10).animate({left:0},100).hide();;
				})
				//导航栏 左侧
				$('.N-all>li').hover(function(){
					$(this).addClass('Nhover');
					$("#inside").show();
				},function(){
					$(this).removeClass('Nhover');
					$("#inside").hide();
				})
				
				console.log($('#L-login').find('span>a').text());
				//登录/注册出页面事件
				$("#login>li").click(function(){
					if($(this).text()===' 登录'){
						$('#N-login').animate({width:1140},300);
						$('#N-login').find('.act').text('用户登录');
						$('#L-login').find(".countT").text('还没有账号？');
						$('#L-login').find(".tips").html('注册');
						$('#L-login').find('input[type=button]').addClass('LOG').removeClass('Reg').val('用户登录');
						$('#L-login').find('label').show();
						$('#L-login').find('.con').hide();
						$('#L-login').find('.forget').show();
					}else{
						$('#N-login').animate({width:1140},300);
						$('#N-login').find('.act').text('用户注册');
						$('#L-login').find('label').hide();
						$('#L-login').find('.con').show();
						$('#L-login').find('input[type=button]').addClass('Reg').removeClass('LOG').val('同意协议并注册');
						$('#L-login').find('.forget').hide();
						$('#L-login').find(".countT").text('已有账号？');
						$('#L-login').find(".tips").html('登录');
					}
				})
				
				$('#L-login').find(".tips").click(function(){
					if($(this).text()=='注册'){
						$('#N-login').find('.act').text('用户注册');
							$('#L-login').find('label').hide();
							$('#L-login').find('i').show();
							$('#L-login').find('input[type=button]').addClass('Reg').removeClass('LOG').val('同意协议并注册');
							$('#L-login').find('.forget').hide();
							$('#L-login').find(".countT").text('已有账号？');
							$('#L-login').find('.tips').text('登录');
					}else{
							$('#N-login').find('.act').text('用户登录');
							$('#L-login').find(".countT").text('还没有账号？');
							$('#L-login').find('.tips').text('注册');
							$('#L-login').find('input[type=button]').addClass('LOG').removeClass('Reg').val('用户登录');
							$('#L-login').find('label').show();
							$('#L-login').find('i').hide();
							$('#L-login').find('.forget').show();
					}
				})
				//关闭登录窗口事件
				$('.close').click(function(){
					$('#N-login').animate({width:0},400);
				})
				//回到顶部事件
				$(window).scroll(function(){
					var sTop = $(window).scrollTop();
					if(sTop>200){
						$('.Btop').show('slow').click(function(){
							$('html,body').stop().animate({scrollTop:0},600);
						});
					}else{
						$('.Btop').hide('slow');
					}
				})
				var isMail = false;
				var isPass = false;
				//登陆按钮事件
				$('#L-login').find('input[type=button]').click(function(){
					
					var usermail = $(this).siblings('.mail').val();
					var password = $(this).siblings('.password').val();
					if($(this).hasClass('LOG')){
						if(isMail&&isPass){
							//读取cookie并验证;
						}else{
							alert('用户名有误');
							return;
						}
						
					}else{
						var usermail = $(this).siblings('.mail').val();
						var password = $(this).siblings('.password').val();
						if(isMail&&isPass){
//							if()
							//设置一个cookie;
						
						}else{
							alert('请按正确格式填写');
							return;
						}
					}
				})
				//邮箱注册事件
				$('.mail').blur(function(){
					var usermail = $(this).val();
						if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(usermail)){
							$('.MT').hide();
							isMail = true;
						}else{
							$('.MT').show();
							isMail = false;
						}
				})
				$('.password').blur(function(){
					var password = $(this).val();
						if(/^[0-9A-Za-z]{6,20}$/.test(password)){
							isPass = true;
							$('.PT').hide();
						}else{
							$('.PT').show();
							isPass = false;
						}
				})
				//登陆函数实现
			$('#LorR').click(function(){
				//登录事件
				if($(this).hasClass('LOG')){
					//获取输入框中的值
					var user = $(this).siblings('.mail').val();
					var pass = $(this).siblings('.password').val();
					var DuserArry = [];
					var DpassArry = [];
					DuserArry.push(user);
					DpassArry.push(pass);
					var getUser = getCookie('username').split("&");
					var getPass = getCookie('password').split("&");
					console.log(getUser);
					for(var i=0;i<getUser.length;i++){
						
						if(user==getUser[i]){
							break;
						}
					}
					if(i==getUser.length){
						alert('用户名不存在');
					}else{
						alert('登陆成功');
						$('#N-login').animate({width:0},400);
					}
					
				}
				//注册事件
				if($(this).hasClass('Reg')){
					//获取输入框中的值
					var user = $(this).siblings('.mail').val();
					var pass = $(this).siblings('.password').val();
					var userArry = [];
					var passArry = [];
					userArry.push(user);
					passArry.push(pass);
					setCookie('username',userArry.join('&'));
					setCookie('password',passArry.join('&'));
				}
			})
	})
