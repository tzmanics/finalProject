function init() {
	// SLIDE SHOW PLANS
	// var sections = document.getElementsByTagName('section');
	// for(var i = 0; i < sections.length; i++){
	// 	var section = sections[i];
	// 	section.style.height = window.innerHeight;
	// 	// console.log(window.innerHeight);
	// };

	// apply position to #webDev.project
	var webProjects = document.getElementById('webDev').getElementsByClassName('project');
	for(var i = 0; i < webProjects.length; i++){
		webProjects[i].style.position = "relative";
		webProjects[i].style.display = "none";
	}
	// display the first element
	webProjects[0].style.display = "block";
	// apply position to #mobile.project
	var mobileProjects = document.getElementById('mobile').getElementsByClassName('project');
	for(var i = 0; i < mobileProjects.length; i++){
		mobileProjects[i].style.position = "relative";
		mobileProjects[i].style.display = "none";
	}
	// display the first element
	mobileProjects[0].style.display = "block";

}

window.onload = init;
