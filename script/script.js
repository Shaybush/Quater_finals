// המבורגר
const bar = document.getElementById("burger");
// התפריט הרגיל
let nav = document.getElementById("navbar");
// התפריט נעלם שגוללים למטה
let prevScrollpos = window.pageYOffset;
// אם המבורגר הופיע
if (bar != null) {
  // תחכה עד שיהיה קליק עליו
  bar.addEventListener("click", () => {
    console.log("click");
    // אחרי שלחצת עליו תוסיף לנאב בר אקטיב
    if(nav.classList.contains("active")){
      nav.classList.remove("active");
    }
    else{
      nav.classList.add("active");
    }
    
  });
  // close.addEventListener("click", () => {
  //   nav.classList.remove("active");
  // });
}
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

