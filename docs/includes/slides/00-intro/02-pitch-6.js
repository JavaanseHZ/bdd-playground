var canvasPitch6 = document.getElementById('canvasPitch6');

rectangle(canvasPitch6, 150, 60, 600, 380, orange, null, null);
rectangle(canvasPitch6, 150, 60, 600, 380, orange, null, null);

rectangleFillHatchure(canvasPitch6, 200, 100, 50, 300, green);
rectangleFillHatchure(canvasPitch6, 270, 310, 50, 90, blue);
rectangleFillHatchure(canvasPitch6, 340, 220, 50, 180, burgundy);

svgArcHachure(canvasPitch6, 590, 250, 230, 230, Math.PI/3, Math.PI*1.5, green);
svgArcHachure(canvasPitch6, 590, 250, 230, 230, 0, Math.PI/3, burgundy);
svgArcHachure(canvasPitch6, 590, 250, 230, 230, Math.PI*1.5, Math.PI*2, blue);
