// ==================== LOADING SCREEN==========================
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            clearInterval(loadingInterval);

            // Hide the loader and show the main content
            loader.style.display = "none";
            mainContent.style.display = "block";
        }
    }, 50); // Adjust this duration for faster/slower loading
});


/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId) =>{
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId)
         
 
    if(toggle && sidebar){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
        })
    }
 }
 showSidebar('header-toggle','sidebar')
 
 /*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar-list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))


/*=============== DARK LIGHT THEME ===============*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-fill'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)   
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';
const headerLogo = document.querySelector('.header-logo img'); // Select the header logo image

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Helper functions to get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill';

// If the user previously chose a theme, apply it
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme);
  
  // Change the logo based on the selected theme
  if (selectedTheme === 'dark') {
    headerLogo.src = 'img/logowhite.png';
  } else {
    headerLogo.src = 'img/logo.png';
  }
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark theme and icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Change the logo based on the theme
    const headerLogo = document.querySelector('.header-logo img');
    if (document.body.classList.contains(darkTheme)) {
        headerLogo.src = 'img/logowhite.png'; // Set to white logo in dark theme
    } else {
        headerLogo.src = 'img/logo.png'; // Set to normal logo in light theme
    }

    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

 


