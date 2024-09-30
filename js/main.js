import { HtmlLoader } from './loader.js';

const nav = new HtmlLoader();
nav.loadHtml('./comp/navigation.html', 'menu', function() {
    // Add event listener for the menu button after the navigation is loaded
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', showSidebar);
    } else {
        console.error('Menu button not found in the dynamically loaded HTML');
    }
});

let foot = new HtmlLoader();
foot.loadHtml('./comp/footer.html', 'footer'); // This can load without a callback if there's no dynamic interaction

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}




window.onscroll=function(){
    toggleScroll();
}

function toggleScroll() {
    const scrollToTopBtn =document.getElementById("scrollToTopBtn")

    if (window.scrollY > 200) {
        // scrollToTopBtn.style.opacity= '1';
        scrollToTopBtn.classList.add('visible')
    }
    else {
        // scrollToTopBtn.style.opacity= '0';
        scrollToTopBtn.classList.remove('visible')
    }      
}