var canvasPitch5 = document.getElementById('canvasPitch5');

rectangle(canvasPitch5, 150, 125, 250, 250, orange, null, null);
rectangle(canvasPitch5, 500, 125, 250, 250, orange, null, null);

svgPathNoFill(canvasPitch5,"M190,250L250,335L360,165", green);
svgPathNoFill(canvasPitch5,"M540,165L710,335", burgundy);
svgPathNoFill(canvasPitch5,"M540,335L710,165", burgundy);
