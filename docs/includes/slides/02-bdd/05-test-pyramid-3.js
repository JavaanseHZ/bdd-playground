var canvasBddTestPyramid3 = document.getElementById('canvasBddTestPyramid3');

svgPolygon(canvasBddTestPyramid3, [[250,10], [170,130], [330,130]], blue, 'E2E', 'black', 45, 250, 90);
svgPolygon(canvasBddTestPyramid3, [[170,140], [330,140], [410,260], [90,260]], blue, 'Integration', 'black', 45, 250, 205);
svgPolygon(canvasBddTestPyramid3, [[90,270], [410,270], [490,390],[10,390]], blue, 'Unit', 'black', 45, 250, 335);

rectangle(canvasBddTestPyramid3, 600, 35, 200, 70, 'black', 'Protractor', 'black');
rectangle(canvasBddTestPyramid3, 600, 165, 200, 70, 'black', 'Spring Test', 'black');
rectangle(canvasBddTestPyramid3, 600, 295, 200, 70, 'black', 'JUnit', 'black');
