$(function(){
	var pic = getCookie('pic').split("&");
	var price = getCookie('price').split("&");
	var title = getCookie('title').split("&");
	var detail = getCookie('detail').split("&");
	var tab = "<tr>";
	var toPrice = 0;
	if(pic!=""){
		for(var i=0;i<pic.length;i++){
			tab+="<td><img src="+pic[i]+"></td>";
			tab+="<td>"+title[i]+"</td>";
			tab+="<td>"+detail[i]+"</td>";
			tab+="<td>"+price[i]+"</td>";
			tab+="<td><a class='del'>删除</td></tr>";
			toPrice+=parseInt(price[i]);
		}
		$(tab).appendTo('#goods-all');
		$('tfoot').find('span').html(toPrice);
	}else{
		$('#goods-all').html("你还没有添加商品哟");
	}
	
	$('#goods-all').find('.del').click(function(evt){
		var del = $(this).parent().siblings().eq(3).html();
		console.log(del);
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		for(var j=0;j<pic.length;j++){
			if(del==price[j]){
				console.log('进来了');
				pic.splice(j,1);
				price.splice(j,1);
				title.splice(j,1);
				detail.splice(j,1);
				setCookie('pic',pic.join("&"));
				setCookie('title',title.join("&"));
				setCookie('price',price.join("&"));
				setCookie('detail',detail.join("&"));
			}
		}
	})
	
})
