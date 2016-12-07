$(function(){
	$('#C-header').load('header.html');
	$('#C-foot').load('foot.html');
	
	var getDetail = function(i){
		$.get('JSON/detail.txt',{'_': Math.random()},function(res){
			var obj = JSON.parse(res).data;
			var pic = obj[i].src;
			var title = obj[i].title;
			var price = obj[i].price;
			var detail = obj[i].det;
			var rate = obj[i].rate;
			$('.G-title').html(title);
			$('#J_Price').html(price);
			$('.de-pic').attr('src',pic);
			$('.T-detail').attr('src',detail);
			$('.T-rate').attr('src',rate);
			//加入购物车
			$('.getIn').click(function(){
				var goodspic = getCookie('pic')?getCookie('pic').split("&"):[];
				var goodstitle = getCookie('title')?getCookie('title').split("&"):[];
				var goodsprice = getCookie('price')?getCookie('price').split("&"):[];
				var goodsdetail = getCookie('detail')?getCookie('detail').split("&"):[];
				goodspic.push(pic);
				goodstitle.push(title);
				goodsprice.push(price);
				goodsdetail.push(detail);
				setCookie('pic',goodspic.join("&"));
				setCookie('title',goodstitle.join("&"));
				setCookie('price',goodsprice.join("&"));
				setCookie('detail',goodsdetail.join("&"));
			})
		})
	}
	getDetail(2);
	
})