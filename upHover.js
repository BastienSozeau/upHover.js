$.fn.upHover = function() {

$('.upHover').each(function(){
var $this = $(this),
content = $this.prop('outerHTML').replace('upHover', ''); 
$this.after('<div class="upHover">'+content+'</div>');
$this.remove();
});

$('.upHover').hover(function(){
	$(this).addClass('active');
}, function() {
	$('.upHover').removeClass('active');
});
    return this;
};
  
  

