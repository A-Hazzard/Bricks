document.addEventListener('DOMContentLoaded', ()=> {
    
  (function handleNavDropDown(){
   // Select the button inside the .nav-button element
   var navButton = document.querySelector('.nav-button button');
   // Listen for a click event on the selected button
   navButton.addEventListener('click', function() {
       // Select the .nav-dropdown element

       var navDropdown = document.querySelector('.nav-dropdown');
       function preventScroll(e) {
         e.preventDefault();
       }
       
       
       // Toggle the visibility of the .nav-dropdown
       if (navDropdown.style.visibility === 'hidden' || navDropdown.style.visibility === '') {
           navDropdown.style.visibility = 'visible';
           navDropdown.style.opacity = 1;
           navDropdown.style.transform = 'scale(1)';
           // Disable scrolling
           document.body.classList.add('no-scroll');
       } else {
           navDropdown.style.visibility = 'hidden';
           navDropdown.style.opacity = 0;
           navDropdown.style.transform = 'scale(0.75, 0.5625)';
           // Re-enable scrolling
           document.body.classList.remove('no-scroll');
       }
   });
  })();
  (function handleAnimations(){
        var aboutUsDucks = document.querySelectorAll('.MuiPaper-root .animate__animated');
        var tokenomicsDuck = document.querySelectorAll('.MuiStack-root .MuiGrid-root .animate__animated');
        var walletButtons = document.querySelectorAll('.MuiContainer-root .animate__animated');

        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__rubberBand');
                    entry.target.style.opacity = 1;
                    console.log('Element is in viewport');
                } else {
                    entry.target.classList.remove('animate__rubberBand');
                    entry.target.style.opacity = 0; // Optional: Hide the element when it's out of viewport
                    console.log('Element left viewport');
                }
            });
        }

        var observerOptions = {
            root: null, // viewport
            threshold: 0.5 // 50% of the target element visible
        };

        var observer = new IntersectionObserver(handleIntersection, observerOptions);

        aboutUsDucks.forEach(duck => observer.observe(duck));

        tokenomicsDuck.forEach(duck => observer.observe(duck));

        walletButtons.forEach(button => observer.observe(button));
  })();
  (function handleCloseNav(){
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', ()=> {
          document.querySelector('.css-pwxzbm').style.visibility = 'hidden';
          document.querySelector('.css-pwxzbm').style.opacity = 0;
          document.querySelector('.css-pwxzbm').style.transform ='scale(0.75, 0.5625)';
          document.body.classList.remove('no-scroll');
      })
    })

  })();

    // Listen for a click event on each `.about-dropdown-btn` on the ABOUT section
    document.querySelectorAll('.ducks .about-dropdown-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Find the `.information-container` within the same `.ducks` container
        var infoContainer = btn.closest('.ducks').querySelector('.information-container');

        // Check the current class list of the `.information-container`
        if (infoContainer.classList.contains('MuiCollapse-hidden')) {
          // If it has 'MuiCollapse-hidden', we need to show the container
          infoContainer.classList.remove('MuiCollapse-hidden', 'css-a0y2e3');
          infoContainer.classList.add('MuiCollapse-entered', 'css-c4sutr');
        } else {
          // If it does not have 'MuiCollapse-hidden', we hide the container
          infoContainer.classList.remove('MuiCollapse-entered', 'css-c4sutr');
          infoContainer.classList.add('MuiCollapse-hidden', 'css-a0y2e3');
        }
      });
    });

    // Listen for a click event on each `.dropdown-btn` on the HOW TO BUY section
    document.querySelectorAll('.wallets .wallet-container').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Get all the information containers
        var allInfoContainers = document.querySelectorAll('.wallets .information-container');

        // Find the `.information-container` within the same `.wallet-container`
        var infoContainer = btn.closest('.wallet-container').querySelector('.information-container');

        // Hide all other information containers
        allInfoContainers.forEach(function(container) {
          if (container !== infoContainer) {
            container.classList.remove('MuiCollapse-entered', 'css-c4sutr');
            container.classList.add('MuiCollapse-hidden', 'css-a0y2e3');
          }
        });

        // Toggle the current information container
        if (infoContainer.classList.contains('MuiCollapse-hidden')) {
          // If it has 'MuiCollapse-hidden', we need to show the container
          infoContainer.classList.remove('MuiCollapse-hidden', 'css-a0y2e3');
          infoContainer.classList.add('MuiCollapse-entered', 'css-c4sutr');
        } else {
          // If it does not have 'MuiCollapse-hidden', we hide the container
          infoContainer.classList.remove('MuiCollapse-entered', 'css-c4sutr');
          infoContainer.classList.add('MuiCollapse-hidden', 'css-a0y2e3');
        }
      });
    });

    document.querySelectorAll('.second-wallets .wallet-container').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Get all the information containers
        var allInfoContainers = document.querySelectorAll('.wallets .information-container');

        // Find the `.information-container` within the same `.wallet-container`
        var infoContainer = btn.closest('.wallet-container').querySelector('.information-container');

        // Hide all other information containers
        allInfoContainers.forEach(function(container) {
          if (container !== infoContainer) {
            container.classList.remove('MuiCollapse-entered', 'css-c4sutr');
            container.classList.add('MuiCollapse-hidden', 'css-a0y2e3');
          }
        });

        // Toggle the current information container
        if (infoContainer.classList.contains('MuiCollapse-hidden')) {
          // If it has 'MuiCollapse-hidden', we need to show the container
          infoContainer.classList.remove('MuiCollapse-hidden', 'css-a0y2e3');
          infoContainer.classList.add('MuiCollapse-entered', 'css-c4sutr');
        } else {
          // If it does not have 'MuiCollapse-hidden', we hide the container
          infoContainer.classList.remove('MuiCollapse-entered', 'css-c4sutr');
          infoContainer.classList.add('MuiCollapse-hidden', 'css-a0y2e3');
        }
      });
    });
    document.querySelector('.copy-btn').addEventListener('click', function() {
      const textToCopy = document.querySelector('.contact-address').textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
          console.log('Text copied to clipboard');
          alert('Text copied to clipboard');
      }).catch(err => {
          console.error('Failed to copy text: ', err);
      });
    });

});