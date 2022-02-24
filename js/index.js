// side navbar
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems,{"inDuration":350,"outDuration":350});
});

window.onload=removePreLoader;

// remove preloader
function removePreLoader(){
  document.getElementById("pre-loader").style="transform: translateY(-120vh);";
}
