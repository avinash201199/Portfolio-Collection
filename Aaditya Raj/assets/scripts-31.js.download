/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var apihu_port_appilo = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APIHUPORTScrollTop();
				this.APIHUPORTNavScroll();
				this.APIHUPORTStickyMenu();
				this.APIHUPORTMobileMenu();
				this.APIHUPORTPortfolio();
				this.APIHUPORTTestimonialCarousel(); 
				this.APIHUPORTClientsCarousel();
				this.APIHUPORTBlogCarousel();
			},

			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

            Animation: function (){
				$(window).on("load", function(){
					if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},


			APIHUPORTScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".apihu-port-scroll-top").fadeIn(); 
					} else {
						$(".apihu-port-scroll-top").fadeOut();
					}
				});

				$(".apihu-port-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			APIHUPORTNavScroll: function (){
				//Desktop Menu
				$('.apihu-port-main-navigation li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -94
							}, 1000);
							return false;
						}
					}
				});

				// /Mobile Menu 
				$('.apihu-port-mobile-menu li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -94
							}, 1000);
							return false;
						}
					}
				});
			}, 

			//Sticky Header 
			APIHUPORTStickyMenu: function() {
				$(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".apihu-port-header-area").addClass("apihu-port-header-sticky"); 
					} else {
						$(".apihu-port-header-area").removeClass("apihu-port-header-sticky");
					}
				});
			},

			APIHUPORTMobileMenu: function (){
				$(".apihu-port-mobile-menu-hamburger").on("click", function(e){
					e.preventDefault();
					$(".apihu-port-mobile-menu").toggleClass("apihu-port-mobile-menu-on");
					$(".apihu-port-body-overlay").toggleClass("apihu-port-body-overlay-on");
				});

				$(".apihu-port-body-overlay").on("click", function(){
					$(".apihu-port-mobile-menu").removeClass("apihu-port-mobile-menu-on");
					$(".apihu-port-mobile-menu-open").removeClass("open");
				});

				$(".apihu-port-menu-close").on("click", function(){
					$(".apihu-port-mobile-menu").removeClass("apihu-port-mobile-menu-on");
					$(".apihu-port-body-overlay").removeClass("apihu-port-body-overlay-on"); 
					$(".apihu-port-mobile-menu-open").removeClass("open");
				});

				$(".apihu-port-dropdown.has-submenu a").each(function(){
					$(this).on("click", function(e){
						e.preventDefault();
						$('.apihu-port-dropdown-menu').slideToggle();
						$(this).parent().toggleClass('apihu-port-submenu-icon-rotate');
					});
				});
			},

			APIHUPORTPortfolio: function () {
				var $grid = $('.apihu-port-portfolio-grid').isotope({
					itemSelector: '.apihu-port-portfolio-item',
					percentPosition: true,
					masonry: {
						columnWidth: 1
					}
				});

				$('.apihu-port-portfolio-navigation').on('click', 'li', function() {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({filter: filterValue});
				});
				
				$('.apihu-port-portfolio-navigation').on('click', 'li', function() {
					$(this).addClass('active').siblings().removeClass('active');
				});
			},
			
			APIHUPORTTestimonialCarousel: function (){
				$(".apihu-port-testimonial-slider").owlCarousel({
					loop: true,
					nav: true,
					navText: ['<i class="flaticon-left-arrow"></i>','<i class="flaticon-right-arrow"></i>'],
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 2
						}
					}
				});
			},

			APIHUPORTClientsCarousel: function() {
				$(".apihu-port-clients-carousel").owlCarousel({
					loop: true,
					nav: false,
					dots: false,
					margin: 25,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 5
						}
					}
				});
			},

			APIHUPORTBlogCarousel: function() {
				$('.apihu-port-blog-carousel').owlCarousel({
					loop: true,
					nav: false,
					dots: true,
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 3
						}
					}
				});
			},

		}	
	}
	jQuery(document).ready(function (){
		apihu_port_appilo.init();
	});

})();
