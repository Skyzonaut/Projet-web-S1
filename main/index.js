
function hideMenuOnClick() {

    var $footerMenu = document.getElementById("footer-menu");
    var isOpen = $footerMenu.classList.contains('slide-in');
    
    $footerMenu.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');

    if ($footerMenu.classList.contains('slide-in')) { 
        $footerMenu.style.visibility = 'visible';
    } else {
        $footerMenu.style.visibility = 'hidden';
    }
}
