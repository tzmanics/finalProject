function init() {
	// SLIDE SHOW PLANS
	// var sections = document.getElementsByTagName('section');
	// for(var i = 0; i < sections.length; i++){
	// 	var section = sections[i];
	// 	section.style.height = window.innerHeight;
	// 	// console.log(window.innerHeight);
	// };

	// apply position to #webDev.project
	(function webSlides(){
		var webProjects = document.getElementById('webDev').getElementsByClassName('project');
		for(var i = 0; i < webProjects.length; i++){
			webProjects[i].style.position = "relative";
			webProjects[i].style.display = "none";
		};
		// display the first element
		webProjects[0].style.display = "block";
		// prev slide
		var i = 0;
		var prevButton = document.createElement("BUTTON");
		prevButton.className = "prevButton";
		document.getElementById('webDev').appendChild(prevButton);
		prevButton.addEventListener('click', function(){
			(function prevSlide(){
				if( i > 0){
					webProjects[i].style.display = "none";
					webProjects[i-1].style.display = "block";
					return i = i -1;
				}else{
					webProjects[0].style.display = "none";
					webProjects[webProjects.length-1].style.display = "block";
					return i = webProjects.length-1;
				};
			})();
		});
		//next slide
		var nextButton = document.createElement("BUTTON");
		nextButton.className = "nextButton";
		document.getElementById('webDev').appendChild(nextButton);
		nextButton.addEventListener('click', function(){
			(function nextSlide(){
				if( i < webProjects.length-1){
					webProjects[i].style.display = "none";
					webProjects[i+1].style.display = "block";
					return i = i +1;
				}else{
					webProjects[i].style.display = "none";
					webProjects[0].style.display = "block";
					return i = 0;
				};
			})();
		});
	})();
	// apply position to #mobile.project
	(function mobileSlides(){
		var mobileProjects = document.getElementById('mobile').getElementsByClassName('project');
		for(var i = 0; i < mobileProjects.length; i++){
			mobileProjects[i].style.position = "relative";
			mobileProjects[i].style.display = "none";
		}
		// display the first element
		mobileProjects[0].style.display = "block";
		//prev slide
		var i = 0;
		var mobPrevButton = document.createElement("BUTTON");
		mobPrevButton.className = "prevButton";
		document.getElementById('mobile').appendChild(mobPrevButton);
		mobPrevButton.addEventListener('click', function(){
			(function prevSlide(){
				if( i > 0){
					mobileProjects[i].style.display = "none";
					mobileProjects[i-1].style.display = "block";
					return i = i -1;
				}else{
					mobileProjects[0].style.display = "none";
					mobileProjects[mobileProjects.length-1].style.display = "block";
					return i = mobileProjects.length-1;
				};
			})();
		});
		//next slide
		var mobNextButton = document.createElement("BUTTON");
		mobNextButton.className = "nextButton";
		document.getElementById('mobile').appendChild(mobNextButton);
		mobNextButton.addEventListener('click', function(){
			(function nextSlide(){
				if( i < mobileProjects.length-1){
					mobileProjects[i].style.display = "none";
					mobileProjects[i+1].style.display = "block";
					return i = i +1;
				}else{
					mobileProjects[i].style.display = "none";
					mobileProjects[0].style.display = "block";
					return i = 0;
				};
			})();
		});
	})();

	// navigation
	var navElems = document.getElementsByTagName('li');
	for(var i = 0; i < navElems.length; i++){
		navElems[i].style.display = "none";
	}
	var burger = document.getElementById('hamburger');
	burger.addEventListener('click', function(){
		if(navElems[0].style.display == "none"){
			for(var i = 0; i < navElems.length; i++){
				navElems[i].style.display = "block";
			}
		} else {
			for(var i = 0; i < navElems.length; i++){
				navElems[i].style.display = "none";
			}
		}
	});

	// instagram feed
	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'tzmPort',
        clientId: 'eee84c858ca9456ebe21b2d4dfc8f4ea',
        sortBy: 'random',
        resolution: 'low_resolution'
    });
    feed.run();
    
    // adjust screen size when window resize
    function resize(){
    	var sections = document.getElementsByClassName('project');
    	var height = window.innerHeight;
    	for(var i = 0; i < sections.length; i++){
    		sections[i].style.height = height -10 + "px";
    		alert("change");
    	}
    }
    resize();
    window.onresize = resize();
	


}

window.onload = init;
