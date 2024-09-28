window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const logo = document.getElementById('logo');
  const navLinks = document.querySelectorAll('#nav_links p a');
  const ham = document.querySelector(".hammburger");

  // Check if we are at the top of the page
  if (window.scrollY === 0) {
      // Set background transparent and text color white when at the top
      nav.style.backgroundColor = 'transparent';
      logo.style.color = 'white';
      ham.style.color = 'white';
      navLinks.forEach(link => {
          link.style.color = 'white';
          link.style.borderBottom = 'none'; // Remove border when at the top
          
          // Reset hover effect when at the top (white color)
          link.onmouseover = function() {
              this.style.color = 'white';
          };
          link.onmouseout = function() {
              this.style.color = 'white';
          };
      });
      nav.style.borderBottom = 'none';
  } else {
      // Set background white and text color black when scrolled
      nav.style.backgroundColor = 'white';
      logo.style.color = 'black';
      ham.style.color = '#71383D';
      navLinks.forEach(link => {
          link.style.color = 'black';
          
          // Change color to white on hover when scrolled
          link.onmouseover = function() {
              this.style.color = 'white';
          };
          link.onmouseout = function() {
              this.style.color = 'black';
          };
      });
      
  }
});


const navLinks = document.querySelectorAll('#nav a');

// Add event listeners for mouseover and mouseout
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'white'; // Change text color to white on hover
    });

    link.addEventListener('mouseout', () => {
        // link.style.color = 'black'; // Revert text color to black
        link.style.backgroundColor = ''; // Revert background color
        link.style.padding = ''; // Reset padding
        link.style.borderRadius = ''; // Reset border radius
    });
});


// Initialize the map in the div with the ID 'map1' (inside the .details-map)
var map = L.map('map1').setView([28.7041, 77.1025], 13); // Coordinates for Delhi, India

// Load and display tile layer (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([28.7041, 77.1025]).addTo(map)
    .bindPopup('Our Location')
    .openPopup();

// Alll animatiuons 
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2", 
      start: "top 60%", 
      end: "top 60%", 
      scrub: 1,            
      pin: false,            
      markers:false         
    }
  }); 
let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3", 
      start: "top 60%", 
      end: "top 60%", 
      scrub: 1,            
      pin: false,            
      markers: false         
    }
  }); 
//   let t3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#page5", 
//       start: "top 30%", 
//       end: "top 60%",             
//       pin: true,            
//       markers: false         
//     }
// });
let t7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#team_page1", 
      start: "top 20%", 
      end: "top 60%", 
      scrub: 5,  // Less scrub for smoother control 
      pin: true,   
      markers: false
    }
  });

  // $('#hero_text').textillate({ 
  //   in: { effect: 'rollIn' }
  // });

  tl.from("#service h1",{ 
    opacity:0, 
    duration:0.5, 
    delay:0.3
  })

  tl.from("#box_with_name",{ 
    opacity:0,                                
    duration:3, 
    delay:2
  })
  
  t2.from(".property-image img",{ 
    opacity:0,
    delay:2,
    duration:2
  })


//   t3.from(["#ani1",], {
//     opacity: 0,         // Start with full transparency
//               // Move text from 50px below
//     duration:4,      // Duration for each animation
//         // Stagger animations with a 0.5s delay
//      // Smooth easing function
// });
//   t3.from(["#ani2", "#ani3"], {
//     opacity: 0,         // Start with full transparency
//               // Move text from 50px below
//     duration:5,      // Duration for each animation
//         // Stagger animations with a 0.5s delay
//      // Smooth easing function
// });
//   t3.from(["#ani3"], {
//     opacity: 0,         // Start with full transparency
//                // Move text from 50px below
//          // Duration for each animation
//     duration:3      // Stagger animations with a 0.5s delay
//      // Smooth easing function
// });
  // Then, apply GSAP for other animations (after the textillate animation)

// Alll animatiuons 

// $('#text p').textillate({ in: { effect: 'rollIn' } });
t7.to("#team_page1 h1", { 
    scale: 1.5, 
    color:"black",
    top: "40%", 
    duration: 1.5, 
    ease: "power3.inOut" // Smooth scaling for h1
  },'a')

t7.to("#team_card1", { 
     
    left: "15%", 
    duration: 1, 
    delay: 0.5,  // Reduced delay for quicker response
    ease: "power3.inOut" // Smooth easing
  }, 'a')
  t7.to("#team_card2", { 
    zIndex: 100, 
     
    left: "65%", 
    duration: 1, 
    ease: "power3.inOut" 
  }, 'a') 
  t7.to("#overlay1", { 
     opacity:1,
    ease: "power3.inOut" 
  }, 'a') 


  // Nav [.hammburger]
  document.querySelector(".hammburger").addEventListener('click', function() { 
    document.querySelector("#nav_operation_page").classList.add("show"); 
    document.querySelector(".hammburger").style.display='none'
    console.log("click to hua hai")
});

document.querySelector(".close-btn").addEventListener('click', function() { 
    document.querySelector("#nav_operation_page").classList.remove("show");
    document.querySelector(".hammburger").style.display="initial"
});

document.querySelectorAll("#nav_operation_page a").forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector("#nav_operation_page").classList.remove("show");
    });
});

const paragraph = document.getElementById('logo');

paragraph.addEventListener('click', function() {
    
    location.reload();
});
  

 


