			var tpj=jQuery;
				//tpj.noConflict();

				jQuery(document).ready(function() {

				if (jQuery.fn.cssOriginal!=undefined)
					jQuery.fn.css = jQuery.fn.cssOriginal;

					jQuery('.fullwidthbanner').revolution(
						{
							delay:9000,
							startwidth:960,
							startheight:500,

							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:3,

							hideThumbs:0,
							navigationType:"bullet",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
							navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
							navigationStyle:"round",				//round,square,navbar

							touchenabled:"on",						// Enable Swipe Function : on/off

							navOffsetHorizontal:0,
							navOffsetVertical:20,

							stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
							stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic



							fullWidth:"on",

							shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

						});




			});
			
			
