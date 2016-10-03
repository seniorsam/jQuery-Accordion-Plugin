/**
* Made in tatbeke lab
* @author sameh abdel moneim <http://www.github.com/seniorsam>
*/
(function($, window, document, undefined){

	var Accordion = {

		init:
			function( options , elem){
				var self = this;
				self.options = $.extend({}, $.fn.options, options);
				// grab the element.
				self.$elem = $( elem );
				// grab the title and content.
				self.panelTitle   =   self.$elem.find('.acc-title');
				self.panelContent =   self.$elem.find('.acc-content');
				// init style.
				self.initStyle();
				self.panelTitle.on( 'click', self.action );
			},

		action:
			function(){
				var self = $ ( this );

				// rotate the arrow
				if( self.next().css("display") === "none" && !self.hasClass("rotate")){
					self.siblings( '.acc-title' ).removeClass('rotate');
					self.addClass('rotate');
				} else {
					self.removeClass('rotate');
				}
				// show content
				self.next().slideToggle( self.options.speed )
					.siblings( '.acc-content' ).slideUp( self.options.speed );
			},

		initStyle:
			function(){
				var opts = this.options,
					self = this;
				// give the content it's background color and text color.
				self.panelContent.css({
					"backgroundColor":opts.contentBackground,
					"color":opts.contentTextColor,
					"display":"none"
				});
				// show the first one only.
				$( self.panelContent[0] ).css("display","block");
				// give the title it's background color and text color.
				self.panelTitle.css({
					"backgroundColor":opts.titleBackground,
					"color":opts.titleTextColor
				});
				// did the user choose to shade the container.
				( opts.shaded )  
					? self.$elem.addClass('jqaccordion-shaded') 
					: null;
			}
	}

	$.fn.jqAccordion = function( options ){
		// for each element call this function.
		this.each(function(){
			var accordion = Object.create(Accordion);
			accordion.init( options , this );
		})
	}

	$.fn.options = {
		titleBackground:'#444444',
		titleTextColor:'#fff',
		contentBackground:'#fff',
		contentTextColor:'#000',
		speed:200,
		shaded:true
	}

}(jQuery, window, document))