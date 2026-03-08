   AOS.init();

 // Subtle parallax on cards image
  const cardsImg = document.getElementById('cardsImg');
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    cardsImg.style.transform = `translate(${dx * 10}px, ${dy * 10}px)`;
  });
  
 
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (touch.clientX - cx) / cx;
    const dy = (touch.clientY - cy) / cy;
    whyImg.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
  }, { passive: true });

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      const tiltX = Math.min(Math.max(e.gamma / 30, -1), 1);
      const tiltY = Math.min(Math.max(e.beta  / 30, -1), 1);
      whyImg.style.transform = `translate(${tiltX * 10}px, ${tiltY * 6}px)`;
    });
  }
 
 
   
 

  