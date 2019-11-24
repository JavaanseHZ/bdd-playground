var canvasBddTestPyramid2 = document.getElementById('canvasBddTestPyramid2');

svgPolygon(canvasBddTestPyramid2, [[650,10], [570,130], [730,130]], blue, 'E2E', 'black', 45, 650, 90);
svgPolygon(canvasBddTestPyramid2, [[570,140], [730,140], [810,260], [490,260]], blue, 'Integration', 'black', 45, 650, 205);
svgPolygon(canvasBddTestPyramid2, [[490,270], [810,270], [890,390],[410,390]], blue, 'Unit', 'black', 45, 650, 335);

svgPolygon(canvasBddTestPyramid2, [[70,10], [100,60], [130,10],[130,340],[100,390],[70,340]], 'black', 'Unit', 'black', 45, 650, 335);
textOnlyRotate(canvasBddTestPyramid2, 100, 200, 'faster', 'black', 45);
svgPolygon(canvasBddTestPyramid2, [[170,10], [200,60], [230,10],[230,340],[200,390],[170,340]], 'black', 'Unit', 'black', 45, 650, 335);
textOnlyRotate(canvasBddTestPyramid2, 200, 200, 'simpler', 'black', 45);
svgPolygon(canvasBddTestPyramid2, [[270,10], [300,60], [330,10],[330,340],[300,390],[270,340]], 'black', 'Unit', 'black', 45, 650, 335);
textOnlyRotate(canvasBddTestPyramid2, 300, 200, 'more exact', 'black', 45);
