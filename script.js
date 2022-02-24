const shareButton = document.getElementById("share");
const shareSlide = document.getElementById("slide");
const icons= document.getElementById("images");
const word= document.getElementById("word");

shareSlide.style.height="0px";
icons.style.display="none";
word.style.display="none";

shareButton.addEventListener("click",event);

function event() {
if(shareSlide.style.height=="0px" && icons.style.display=="none" && word.style.display=="none") {
				shareSlide.style.height="70px";
      icons.style.display="inline";
      word.style.display="inline";
				}else {
						shareSlide.style.height="0px";
         icons.style.display="none";
         word.style.display="none";		
				}
};
