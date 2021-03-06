$(document).ready(function() {        
	
	/* ======= Fullpage.js ======= */ 
	/* Ref: https://github.com/alvarotrigo/fullPage.js */
        
    $('#fullpage').fullpage({
		anchors: ['home', 'benefit1', 'benefit2', 'benefit3', 'download'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'B . Meal', 'B. Task', 'B. Chat', 'Download'],
		resize : false,
		scrollBar: true,
		autoScrolling: false,
		paddingTop: '120px'
		
	});
    

});