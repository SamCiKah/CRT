const container = document.getElementById('lottie-container');
const magnet = document.getElementById('magnet-container');

//CRT
const animation = lottie.loadAnimation({
  container: container, // The container
  renderer: 'svg',
  loop: false,        // No loop
  autoplay: false,    // No autoplay the animation
  path: '/crt.json', 
});

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
  animation.goToAndStop(12, true);
});


//Movable Div
const movable = document.getElementById('movable');
const contain = document.querySelector('.contain');
let isDragging = false, offsetX = 0, offsetY = 0;

movable.addEventListener('mousedown',
  (e) => {
    isDragging = true;
    offsetX = e.clientX - movable.offsetLeft;
    offsetY = e.clientY - movable.offsetTop;
    movable.style.cursor = 'grabbing';
  });

document.addEventListener('mousemove',
  (e) => {
    if (!isDragging) return;
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    movable.style.left = x+'px';
    movable.style.top = y+'px';
  });

//Get container bounds
const containRect = container.getBoundingClientRect();
const movableRect = movable.getBoundingClientRect();

//Restrict
if (x < 0) x = 0;
if (y < 0) y = 0;
if (x + movableRect > containRect.width) x = containRect.width - movableRect.width;
if (x + movableRect > containRect.height) y = containRect.height - movableRect.height;

document.addEventListener('mouseup', () => {
  isDragging = false;
  movable.style.cursor = 'grab';
});