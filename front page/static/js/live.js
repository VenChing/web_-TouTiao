// textarea 点击自动下拉框

$(function(){
	$('.big').click(function(){
		if ($(this).hasClass('fa fa-square-o')) {
			$(this).attr('class','fa fa-check-square').css('color','#ed4040');
			$(this).parents('.msg_tab').find('.textarea').stop().animate({height:'300'},1000);
		}else{
			$(this).attr('class','fa fa-square-o').css('color','#eee');
			$(this).parents('.msg_tab').find('.textarea').stop().animate({height:'100'},1000)
		}
	});


// tab切换
	var tab = document.getElementsByClassName('msg_tab');
	var title = document.getElementById('msg_title').getElementsByTagName('li');
	function showTab(i){
		for(var j =0;j<tab.length;j++){
			tab[j].style.display="none";
			title[j].className='';
		}
		tab[i].style.display="block";
		title[i].className='check';
	}
	for(var i=0;i<title.length;i++){
		title[i].index=i;
		title[i].onclick=function(){
			showTab(this.index);
		}
	}
	$(document).on('keyup','.textarea',function(){
		// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
		// 替换空格
		// \s表示匹配空白字符（空格什么的） //g表示匹配全部，匹配到设为空“”
		var len = $(this).text().replace(/\s/g,"").length;
			$(this).parents('.msg_tab').find('.num').text(len);
			if (len==0) {
				$(this).parents('.msg_tab').find('.num').text('0');
				$(this).parents('.msg_tab').find('.btn').attr('disabled','true')
			}else{
				$(this).parents('.msg_tab').find('.btn').removeAttr('disabled')
		}
	})
	// 点击发布新闻
	$(document).on('click','.btn',function(e){
		var content=$(this).parents('.msg_tab').find('.textarea').text();
		console.log(content)
		$('.msg').after("<div class='new_list bb'><div class='fl' style='width:100%;'><a href='' class='strong'>"+content+"</a><p class='mt_10' ><span class='tip mr_10'>时政</span><span><img src='static/images/a.jpg' width='18'>  央视新闻网</span><span>.人评论</span><span>.时间</span><span class='remove fr'><span class='fa fa-close noT'></span>不感兴趣</span> </p></div><div class='clear'></div></div>")
		$(this).parents('.msg_tab').find('.textarea').text('');
		$(this).parents('.msg_tab').find('.num').text("0");
		// $(this).attr('disabled','true');
	})
	// 循环表情包
	for(var i=1;i<30;i++){
		$('.emoji').append("<img src='static/images/emoji/f"+i+".png'width='20'>");
	}

	//动态删除 不感兴趣
	$(document).on('click','.remove',function () {
		$(this).parents('.new_list').remove()
	})

	// 主页 menus 滚动条事件
	$(window).scroll(function(){
		if ($(window).scrollTop()>60) {
			$('.menus').css('top','10px');
		}else{
			$('.menus').css('top','60px');
		}
	})

	// 将表情添加到输入框
	$('.Emoji img').each(function(){
		$(this).click(function(){
			var url = $(this)[0].src
			 console.log(url)
			$(this).parents('.msg_tab').find('.textarea').append("<img src='+url+' width:20px;");
			console.log(this)
			// $(this).parents('.msg_tab').find('.btn').addClass('disabled');
		})
	})
})
// 表情下拉按钮
function showEmoji(){
	var Emoji = document.getElementById('Emoji');
	if (Emoji.style.display==='block') {
		Emoji.style.display='none';
	}else{
		Emoji.style.display='block';
	}
}
window.onload=function(){
	var close = document.getElementById('close');
		close.onclick=function(){
			var Emoji = document.getElementById('Emoji');
			Emoji.style.display='none';
	}
}
