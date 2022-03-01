$(function() {
	// // slider call
	$('.jumbotron-slide .slide-listing').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
        appendArrows: $('.arrows-ls'),
        prevArrow: '<span class="slick-prev">&#8592;</span>',
        nextArrow: '<span class="slick-next">&#8594;</span>'
	});
	$('.jumbotron-slide .slide-arrows .slick-prev').on('click', function(){
		console.log('test');
		$('.jumbotron-slide .slide-listing').slick("slickPrev");
	});
	$('.jumbotron-slide .slide-arrows .slick-next').on('click', function(){
		console.log('test');
		$('.jumbotron-slide .slide-listing').slick("slickNext");
	});
	$('.portfolio__slide').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});