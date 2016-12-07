$(function(){
	var pic = getCookie('pic').split("&");
	var price = getCookie('price').split("&");
	var title = getCookie('title').split("&");
	var num = getCookie('num').split("&");
	var tab = "<tr>";
	var toPrice = 0;
	if(pic!=""){
		for(var i=0;i<pic.length;i++){
			tab+="<td><img src="+pic[i]+"></td>";
			tab+="<td>"+title[i]+"</td>";
			tab+="<td><span class='per-price'>"+price[i]+"</span></td>";
			tab+="<td><a class='minus'>-</a><input type='text' name='G-count' class='G-count' value="+num[i]+" /><a class='plus'>+</a></td>";
			tab+="<td class='T-price'>"+(num[i]*price[i])+"</td>";
			tab+="<td><a class='del'>删除</td></tr>";
			toPrice+=parseInt((num[i]*price[i]));
		}
		$(tab).appendTo('#goods-all');
		$('tfoot').find('span').html(toPrice);
	}else{
		$('#goods-all').html("你还没有添加商品哟");
		$('tfoot').hide();
	}
	//加减商品数量
	$('.minus').click(function(){
		var num = parseInt($(this).next('.G-count').val());
		var per = parseInt($(this).parent().parent().find('.per-price').html());
		console.log(per);
		if(num==1){
			alert('商品件数不能少于一件！');
			return;
		}
		num-=1;
		$(this).siblings('.G-count').val(num);
		$(this).parent().parent().find('.T-price').html(num*per);
		var ttt=0;
		for(var t=0;t<$('.T-price').length;t++){
			ttt+=parseInt($('.T-price').eq(t).html());
		}
		$('.ttt').html(ttt);
	})
	$('.plus').click(function(){
		var num = parseInt($(this).prev('.G-count').val());
		var per = parseInt($(this).parent().parent().find('.per-price').html());
		num+=1;
		$(this).siblings('.G-count').val(num);
		$(this).parent().parent().find('.T-price').html(num*per);
		var ttt=0;
		for(var t=0;t<$('.T-price').length;t++){
			ttt+=parseInt($('.T-price').eq(t).html());
		}
		$('.ttt').html(ttt);
	})
	$('#goods-all').find('.del').click(function(evt){
		var Cprice = 0;
		var del = $(this).parent().siblings().eq(2).find('.per-price').html();
		console.log(del);
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		for(var j=0;j<pic.length;j++){
			if(del==price[j]){
				console.log('进来了');
				pic.splice(j,1);
				price.splice(j,1);
				title.splice(j,1);
				num.splice(j,1);				
				setCookie('pic',pic.join("&"));
				setCookie('title',title.join("&"));
				setCookie('price',price.join("&"));
				setCookie('num',num.join("&"));
				break;
			}
		}
		console.log(price);
		for(var k=0;k<pic.length;k++){
			Cprice+=parseInt(num[k]*price[k]);
		}
		$('tfoot').find('span').html(Cprice);
	})
	
})
