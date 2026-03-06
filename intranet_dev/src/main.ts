import './main.scss'



const header = document.getElementById("header");
const footer = document.getElementById("footer");

// Function to load the nav HTML into the page
async function loadGlobalNav() {
  try {
    const response = await fetch('/src/components/mainNav/mainNav.html');
    if (!response.ok) throw new Error(`Failed to load nav: ${response.statusText}`);
    const navHTML = await response.text();

    // Insert at the top of the body
    // document.body.insertAdjacentHTML('afterbegin', navHTML);

    if (header) {
      header.innerHTML = navHTML;
    }
    
  } catch (err) {
    console.error(err);
  }
}

loadGlobalNav();
