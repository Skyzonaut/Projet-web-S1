
function hideMenuOnClick() {

    var $footerMenu = document.getElementById("header-menu");
    var isOpen = $footerMenu.classList.contains('slide-in');
    
    $footerMenu.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');

    if ($footerMenu.classList.contains('slide-in')) { 
        $footerMenu.style.visibility = 'visible';
    } else {
        $footerMenu.style.visibility = 'hidden';
    }
}

function onLinkToPresentation(target) {
    if (target === "top") {
        document.getElementById("top").scrollIntoView({behavior: 'smooth'});
    }
    else {
        document.getElementById(target).scrollIntoView({behavior: 'smooth'});
    }
    // will scroll to 4th h3 element
  }