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
 




//  /*=============== LINK ACTIVE AND NAVIGATION TO SPECIFIC PAGE ===============*/
// document.addEventListener('DOMContentLoaded', () => {
//   const sidebarLinks = document.querySelectorAll('.sidebar-link'); // Select all sidebar links
//   const mainContent = document.getElementById('main'); // Target the main content area

//   // Function to handle link activation
//   function activateLink(clickedLink) {
//     sidebarLinks.forEach(link => link.classList.remove('active-link')); // Remove 'active-link' from all links
//     clickedLink.classList.add('active-link'); // Add 'active-link' to the clicked link
//   }

//   // Function to load content dynamically
//   const loadPage = async (page) => {
//     try {
//       const response = await fetch(`pages/${page}.html`); // Fetch the corresponding PHP file
//       if (response.ok) {
//         const content = await response.text();
//         mainContent.innerHTML = content; // Load the content into the main area
//       } else {
//         mainContent.innerHTML = `<p>Error loading the page: ${response.statusText}</p>`;
//       }
//     } catch (error) {
//       mainContent.innerHTML = `<p>Error loading the page: ${error.message}</p>`;
//     }
//   };

//   // Event listener for sidebar links
//   sidebarLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent default anchor behavior

//       // Skip "Theme" and "Log Out" buttons
//       if (link.querySelector('span').textContent.trim().toLowerCase() === 'theme' || 
//           link.querySelector('span').textContent.trim().toLowerCase() === 'log out') {
//         return;
//       }

//       // Activate the clicked link
//       activateLink(link);

//       // Get the page name dynamically (from a custom attribute or link text)
//       const page = link.querySelector('span').textContent
//         .toLowerCase()
//         .replace(/\s/g, ''); // Format the link text to match the page name

//       // Load the corresponding page
//       loadPage(page);
//     });
//   });

  // Load the default page (Dashboard) on initial load
//   loadPage('dashboard'); // Default to the dashboard page
// });

/*=============== LINK ACTIVE AND NAVIGATION TO SPECIFIC PAGE ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar-link'); // Select all sidebar links
  const mainContent = document.getElementById('main'); // Target the main content area

  // Function to handle link activation
  function activateLink(clickedLink) {
    sidebarLinks.forEach(link => link.classList.remove('active-link')); // Remove 'active-link' from all links
    clickedLink.classList.add('active-link'); // Add 'active-link' to the clicked link
  }

  // Function to load content dynamically
  const loadPage = async (page) => {
    try {
      const response = await fetch(`pages/${page}.html`); // Fetch the corresponding PHP file
      if (response.ok) {
        const content = await response.text();
        mainContent.innerHTML = content; // Load the content into the main area
      } else {
        mainContent.innerHTML = `<p>Error loading the page: ${response.statusText}</p>`;
      }
    } catch (error) {
      mainContent.innerHTML = `<p>Error loading the page: ${error.message}</p>`;
    }
  };

  // Event listener for sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      // Skip links without the `data-page` attribute
      const page = link.dataset.page; // Get the page name from the `data-page` attribute
      if (!page) {
        return;
      }

      // Activate the clicked link
      activateLink(link);

      // Load the corresponding page
      loadPage(page);
    });
  });

  // Load the default page (e.g., 'dashboard') on initial load
  const defaultPage = sidebarLinks[0]?.dataset.page || 'dashboard'; // Default to 'dashboard' if no `data-page`
  loadPage(defaultPage);
});







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

 


