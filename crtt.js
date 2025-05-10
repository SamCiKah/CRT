const container = document.getElementById('lottie-container');

const animation = lottie.loadAnimation({
  container: container, // The container
  renderer: 'svg',
  loop: false,        // Set to false to control frames manually
  autoplay: false,    // Don't autoplay the animation
  path: '/crt.json', // Path to your animation file
});

/*document.addEventListener('mousemove',
    function(event) {
      const percentage = event.clientY / window.innerHeight;
      const frame = percentage * animation.totalFrames;
      animation.goToAndStop(frame, true);
    });*/



//Update animation based on cursor position
container.addEventListener('mousemove', (event) => {
  const rect = container.getBoundingClientRect();
 // const x = event.clientX - rect.right; // X position relative to container
  const y = event.clientY - rect.top;  // Y position relative to container

  // Calculate percentage positions
  //const xPercent = x / rect.width;  // 0 to 1
  const yPercent = y / rect.height; // 0 to 1

  // Determine the frame based on the Y position
  const totalFrames = animation.totalFrames;
  const frame = Math.floor(yPercent * totalFrames);

  // Go to the corresponding frame
  animation.goToAndStop(frame, true);
});
// Reset animation on mouse out
container.addEventListener('mouseleave', () => {
  animation.goToAndStop(0, true);
});

/*const totalFrames = animation.totalFrames;

//Update animation based on cursor position
container.addEventListener('mousemove', (event) => {
  const rect = container.getBoundingClientRect();
  const y = event.clientY - rect.top;  // Y position relative to container

  // Calculate percentage positions
  const yPercent = y / rect.height; // 0 to 1

  // Determine the frame based on the Y position
  const frame = Math.floor(yPercent * totalFrames);
   // Go to the corresponding frame
   animation.goToAndStop(frame, true);
});

// Reset animation on mouse out
container.addEventListener('mouseleave', () => {
  animation.goToAndStop(0, true);
});*/

/*const container = document.getElementById('lottie-container');


// Define how many segments to divide the animation into
const segmentCount = 3; // Adjust based on animation complexity
const totalFrames = animation.totalFrames;
const segmentSize = Math.floor(totalFrames / segmentCount);

let currentSegment = null;

// Function to play the segment
function playSegment(startFrame, endFrame) {
  animation.playSegments([startFrame, endFrame], true);
}

// Mouse move interaction
container.addEventListener('mousemove', (event) => {
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const xPercent = x / rect.width;

  // Determine which segment to play
  const segmentIndex = Math.floor(xPercent * segmentCount);
  const startFrame = segmentIndex * segmentSize;
  const endFrame = startFrame + segmentSize;

  // Only play if it's a new segment
  if (currentSegment !== segmentIndex) {
    playSegment(startFrame, endFrame);
    currentSegment = segmentIndex;
  }
});

// Reset animation when mouse leaves
container.addEventListener('mouseleave', () => {
  playSegment(0, segmentSize); // Reset to first segment
  currentSegment = null;
});*/
