$(function(){
	$('#C-header').load('header.html');
	$('#C-foot').load('foot.html');
	var  URL = window.location.href;
	console.log(URL);
	URL = URL.split("=")[1];
	console.log(typeof URL);
	var getDetail = function(i){
		$.get('JSON/detail.txt',{'_': Math.random()},function(res){
			var obj = JSON.parse(res).data;
			for(var k=0;k<obj.length;k++){
				if(i==obj[k].id){
					console.log(obj[k].id);
					var pic = obj[k].src;
					var title = obj[k].title;
					var price = obj[k].price;
					var detail = obj[k].det;
					var rate = obj[k].rate;
					var num = obj[k].num;
					$('.G-title').html(title);
					$('#J_Price').html(price);
					$('.de-pic').attr('src',pic);
					$('.T-detail').attr('src',detail);
					$('.T-rate').attr('src',rate);
					break;
				}
			}
			
			
			
			
			//加入购物车
			$('.getIn').click(function(){
				var Tnum = parseInt($('#G-count').val());
				var goodspic = getCookie('pic')?getCookie('pic').split("&"):[];
				var goodstitle = getCookie('title')?getCookie('title').split("&"):[];
				var goodsprice = getCookie('price')?getCookie('price').split("&"):[];
				var goodsnum = getCookie('num')?getCookie('num').split("&"):[];
				var LT = parseInt($('#J_Price').html());
				//判断是否有cookie
				if(goodspic.length!=0){
					for(var j=0;j<goodspic.length;j++){
						if(LT==parseInt(goodsprice[j])){
//						if(j==0){
							break;
						}
					}
					
					//判断是否在最尾部
					if(j==goodspic.length){
						goodspic.push(pic);
						goodstitle.push(title);
						goodsprice.push(price);
						goodsnum.push(Tnum);
						setCookie('pic',goodspic.join("&"));
						setCookie('title',goodstitle.join("&"));
						setCookie('price',goodsprice.join("&"));
						setCookie('num',goodsnum.join("&"));
						alert('添加成功！');
						
					}else{
						console.log("进来了");
						goodsnum[j]=parseInt(goodsnum[j])+Tnum;
						setCookie('num',goodsnum.join("&"));
						alert('添加成功！');
					}
				}else{
					goodspic.push(pic);
					goodstitle.push(title);
					goodsprice.push(price);
					goodsnum.push(Tnum);
					setCookie('pic',goodspic.join("&"));
					setCookie('title',goodstitle.join("&"));
					setCookie('price',goodsprice.join("&"));
					setCookie('num',goodsnum.join("&"));
					alert('添加成功！');
				}
				
				
				
				
			})
		})
	}
	getDetail(URL);
	//加减商品数量
	$('.minus').click(function(){
		var num = parseInt($('#G-count').val());
		if(num==1){
			alert('商品件数不能少于一件！');
			return;
		}
		num-=1;
		$('#G-count').val(num);
	})
	$('.plus').click(function(){
		var num = parseInt($('#G-count').val());
		num+=1;
		$('#G-count').val(num);
	})
})