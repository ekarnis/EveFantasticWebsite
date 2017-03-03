function enable_theatre_mode(){
	var video_container=document.getElementsByClassName("video_container");	
	var video=document.getElementById("video");	
	var comic=document.getElementById("comic");		
	var comic_container=document.getElementById("comic_container");		
	var body=document.getElementById("background");	
	var overlay=document.getElementById("overlay");	
		overlay.style.zIndex="3"

		body.style.backgroundColor = "#111111";

		video.style.zIndex = "4";
		video.style.pointerEvents = "auto";		
		video.style.display = "initial"

		comic_container.style.overflow = "initial";
		comic.style.filter="brightness(0.2)"

		video_container = video_container[0];

		video_container.style.position="absolute";
		video_container.style.zIndex = "4";	
	if(window.innerWidth > window.innerHeight){			
		video_container.style.top="45vw";
		video_container.style.left="18vw";	
		video_container.style.width="64vw";
		video_container.style.height="36vw";	
	}else{
		video_container.style.top="125vw";
		video_container.style.left="3vw";	
		video_container.style.width="94vw";
		video_container.style.height="54vw";
	}
}
function disable_theatre_mode(){
	var video_container=document.getElementsByClassName("video_container");	
	var video=document.getElementById("video");	
	var comic=document.getElementById("comic");		
	var comic_container=document.getElementById("comic_container");		
	var body=document.getElementById("background");	
	var overlay=document.getElementById("overlay");	

	overlay.style.zIndex="-1"

	body.style.backgroundColor = "#f7c9bf";

	video.style.zIndex = "1";
	video.style.pointerEvents = "none";		
	video.style.display = "none"

	comic_container.style.overflow = "hidden";
	comic.style.filter="brightness(1)"

	video_container = video_container[0];

	video_container.style.position="relative";
	video_container.style.zIndex = "2";	
	if(window.innerWidth > window.innerHeight){					
		video_container.style.top="-24vw";
		video_container.style.left="8vw";	
		video_container.style.width="40vw";
		video_container.style.height="22.5vw";	
	}else{
		video_container.style.top="-40vw";
		video_container.style.left="35vw";	
		video_container.style.width="63vw";
		video_container.style.height="36vw";	
	}

}	

function setURLs(){
	next = document.getElementsByClassName("next");
	previous = document.getElementsByClassName("previous");

	current = location.pathname.slice(6,8);
	if(isNaN(current)){
		current = current.substring(1);
	}
	current = parseInt(current);

	if(current == 33) next_link = "comic" + String(current) + ".html";
	else next_link = "comic" + String(current + 1) + ".html";
	previous_link = "comic" + String(current - 1) + ".html";

	for (var i = 0; i < next.length; i++) {
		next[i].href = next_link;
		previous[i].href = previous_link;			
	}
}