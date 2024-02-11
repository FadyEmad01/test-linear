gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin, ScrollTrigger, Flip);
gsap.registerPlugin(ScrollTrigger);

if ( window.innerWidth > 1023 ) {
    gsap.to('.rotate-on-scroll', {
    rotationX: 360, // Rotate around X-axis by 180 degrees

    ease: 'none', // Use linear easing
    scrollTrigger: {
      scrub: true, // Scrub the animation to match the scroll
      start: '40px bottom', // Start the animation when the top of the element hits the top of the viewport
      end: '230px top', // End the animation when the top of the element hits the top of the viewport
      invalidateOnRefresh: true, // Recalculate on page refresh
    }
})
};

// Get the video element
let video = document.getElementsByClassName('myVideo');

// Function to toggle video mute state
function toggleMute(i) {
    if (video[i].muted) {
      // If video is currently muted, unmute it
      video[i].muted = false;
    } else {
      // If video is not muted, mute it
      video[i].muted = true;
    }
  }

// Add event listener to video element to call toggleMute function when clicked
