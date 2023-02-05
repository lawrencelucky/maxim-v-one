const toggleNav = document.getElementById('mobile-menu-2')
const toggle = document.getElementById('openNav')

const toggleLinks = document.querySelectorAll('.navBlock')


toggle.addEventListener('click', clickNav)
function clickNav() {
    if ( toggleNav.style.display === "block") {
        toggleNav.style.display = "none";
	} else {
        toggleNav.style.display = "block";
	}
  }

   



//   toggleLinks.map((ink)=>{
//     ink.addEventListener('click', function () {
//         toggleNav.style.display = "none";
//         console.log("first")
//   }
//     )
//   })



window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 798px)").matches) {
            toggleNav.style.display = "block";
    } else {
      toggleLinks.style.display = "none"
        for(let i = 0; i < toggleLinks.length; i++){
            console.log(toggleLinks[i])
            toggleLinks[i].addEventListener('click', function () {
                toggleNav.style.display = "none";
                console.log("first")
          })
          }
        toggleNav.style.display = "none";
    }
  })