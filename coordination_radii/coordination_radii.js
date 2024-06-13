document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById("svg-viewer-img");
  // Set your desired SVG source here
  img.src = "coordination_radii.svg";

  function resizeSVG() {
    const svgViewer = document.getElementById('svg-viewer');
    const svgImg = document.getElementById('svg-viewer-img');
    
    const viewerWidth = svgViewer.clientWidth;
    const viewerHeight = svgViewer.clientHeight;

    svgImg.style.width = viewerWidth + 'px';
    svgImg.style.height = viewerHeight + 'px';
  }

  window.addEventListener('resize', resizeSVG);
  resizeSVG();
});
