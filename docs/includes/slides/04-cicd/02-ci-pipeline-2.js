var canvasCiPipeline2 = document.getElementById('canvasCiPipeline2');

svgPolygon(canvasCiPipeline2, [[10,130], [30,180], [10,230], [170,230], [190,180], [170,130]], yellow, 'build', 'black', 40, 110, 180);
svgPolygon(canvasCiPipeline2, [[185,130], [205,180], [185,230], [345,230], [365,180], [345,130]], blue, 'unit-test', 'black', 40, 285, 180);
svgPolygon(canvasCiPipeline2, [[360,130], [380,180], [360,230], [520,230], [540,180], [520,130]], blue, 'int-test', 'black', 40, 460, 180);
svgPolygon(canvasCiPipeline2, [[535,130], [555,180], [535,230], [695,230], [715,180], [695,130]], burgundy, 'report', 'black', 40, 635, 180);
svgPolygon(canvasCiPipeline2, [[710,130], [730,180], [710,230], [870,230], [890,180], [870,130]], yellow, 'image', 'black', 40, 810, 180);

rectangle(canvasCiPipeline2, 700, 10, 100, 70, burgundy, 'Sonar', 'black');
arrow (canvasCiPipeline2, 615, 120, 690, 40, transientWhite);

svgPolygon(canvasCiPipeline2, [[185,250], [205,300], [185,350], [345,350], [365,300], [345,250]], orange, 'bdd-unit', 'black', 40, 285, 300);
svgPolygon(canvasCiPipeline2, [[360,250], [380,300], [360,350], [520,350], [540,300], [520,250]], orange, 'bdd-int', 'black', 40, 460, 300);
svgPolygon(canvasCiPipeline2, [[535,250], [555,300], [535,350], [695,350], [715,300], [695,250]], orange, 'report', 'black', 40, 635, 300);

rectangle(canvasCiPipeline2, 700, 400, 100, 70, orange, 'Allure', 'black');
arrow (canvasCiPipeline2, 615, 360, 690, 435, transientWhite);
