function enable_theatre_mode(){
	var video_container=document.getElementById("video_container");	
	var video=document.getElementById("video");	
	var comic=document.getElementById("comic");		
	var comic_container=document.getElementById("comic_container");		
	var body=document.getElementById("background");	
	var overlay=document.getElementById("overlay");	
		overlay.style.zIndex="3"

		body.style.backgroundColor = "#111111";

		video.style.zIndex = "4";
		video.style.pointerEvents = "auto";		

		comic_container.style.overflow = "initial";
		comic.style.filter="brightness(0.2)"

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
	var video_container=document.getElementById("video_container");	
	var video=document.getElementById("video");	
	var comic=document.getElementById("comic");		
	var comic_container=document.getElementById("comic_container");		
	var body=document.getElementById("background");	
	var overlay=document.getElementById("overlay");	

	overlay.style.zIndex="-1"

	body.style.backgroundColor = "#f7c9bf";

	video.style.zIndex = "1";
	video.style.pointerEvents = "none";		

	comic_container.style.overflow = "hidden";
	comic.style.filter="brightness(1)"

	video_container.style.position="relative";
	video_container.style.zIndex = "2";	
	if(window.innerWidth > window.innerHeight){					
		video_container.style.top="-24vw";
		video_container.style.left="18vw";	
		video_container.style.width="40vw";
		video_container.style.height="22.5vw";	
	}else{
		video_container.style.top="-40vw";
		video_container.style.left="35vw";	
		video_container.style.width="63vw";
		video_container.style.height="36vw";	
	}

}	