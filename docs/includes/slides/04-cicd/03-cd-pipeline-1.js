var canvasCdPipeline1 = document.getElementById('canvasCdPipeline1');

svgPolygon(canvasCdPipeline1, [[10,130], [30,180], [10,230], [170,230], [190,180], [170,130]], yellow, 'manifest', 'black', 40, 110, 180);
svgPolygon(canvasCdPipeline1, [[185,130], [205,180], [185,230], [345,230], [365,180], [345,130]], yellow, 'deploy', 'black', 40, 285, 180);
svgPolygon(canvasCdPipeline1, [[360,130], [380,180], [360,230], [520,230], [540,180], [520,130]], blue, 'e2e-test', 'black', 40, 460, 180);
svgPolygon(canvasCdPipeline1, [[535,130], [555,180], [535,230], [695,230], [715,180], [695,130]], burgundy, 'report', 'black', 40, 635, 180);
svgPolygon(canvasCdPipeline1, [[710,130], [730,180], [710,230], [870,230], [890,180], [870,130]], yellow, 'deliver', 'black', 40, 810, 180);

rectangle(canvasCdPipeline1, 700, 10, 100, 70, burgundy, '?', 'black');
arrow (canvasCdPipeline1, 615, 120, 690, 40, transientWhite);
