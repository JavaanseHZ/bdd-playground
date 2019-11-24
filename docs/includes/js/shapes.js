// Functions START
const blue = '#6699CC';
const yellow = '#FFF275';
const orange = '#FF8C42';
const green = '#77A756';
const burgundy = '#A23E48';
const purple ="#4F3C5B"
const transientWhite = '#FFFFFFBB';
const lightBrown = '#9C725C';

const rudimentFont = new FontFace("Rudiment", "url(includes/fonts/Rudiment.woff)", {});

function rectangle (canvas, x, y, w, h, color, text, textcolor){
    var rcC = rough.canvas(canvas);

    rcC.rectangle(x, y, w, h, {
        stroke: color,
        strokeWidth: '5',
        fill: transientWhite,
        fillStyle: 'solid',
        roughness:'2'
    });
    if(text != null) {
        rudimentFont.load().then(function (font) {
            var context = canvas.getContext("2d");
            context.fillStyle = textcolor;
            document.fonts.add(font);
            context.font =  h/2 + 'px Rudiment'
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, (x + (w/2) ), (y + (h/2)));
        });
    }
}

function textOnly (canvas, x, y, text, textcolor, fontsize){
    rudimentFont.load().then(function (font) {
        var context = canvas.getContext("2d");
        context.fillStyle = textcolor;
        document.fonts.add(font);
        context.font =  fontsize + 'px Rudiment'
        context.textAlign = 'left';
        context.textBaseline = 'middle';
        context.fillText(text, x, y);
    });
}

function textOnlyCenter (canvas, x, y, text, textcolor, fontsize){
    rudimentFont.load().then(function (font) {
        var context = canvas.getContext("2d");
        context.fillStyle = textcolor;
        document.fonts.add(font);
        context.font =  fontsize + 'px Rudiment'
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, x, y);
    });
}

function textOnlyRotate (canvas, x, y, text, textcolor, fontsize){
    rudimentFont.load().then(function (font) {
        var context = canvas.getContext("2d");
        document.fonts.add(font);
        context.font =  fontsize + 'px Rudiment'
        context.save();
        context.translate(x, y);
        context.rotate(-90 * Math.PI / 180);
        context.textAlign = "center";
        context.fillStyle = textcolor;
        context.textBaseline = 'middle';
        context.fillText(text, 0, 0);
        context.restore();
    });
}

function rectangleArray (canvas, x, y, w, h, color, fields) {
    var rcC = rough.canvas(canvas);

    rcC.rectangle(x, y, w, h, {
        stroke: color,
        strokeWidth: '5',
        fill: transientWhite,
        fillStyle: 'solid',
        roughness:'2'
    });

    rudimentFont.load().then(function (font) {
        var distance = w/fields.length;
        var pathx = x + distance;
        fields.forEach(element => {

            if(element != fields[fields.length -1]) {
                rcC.polygon([[pathx, y + 4], [pathx, y + h - 4]], {
                    stroke: color,
                    strokeWidth: '4',
                    roughness:'2'
                });

            }
            var context = canvas.getContext("2d");
            context.fillStyle = element[1];
            document.fonts.add(font);
            context.font =  h/2 + 'px Rudiment'
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(element[0], (pathx - (distance/2)), (y + (h/2)));

            pathx = (pathx + distance);
        });
    });

}

function ellipse (canvas, x, y, w, h, color, text, textcolor){
    var rcC = rough.canvas(canvas);

    rcC.ellipse(x + (w/2), y + (h/2), w, h, {
        stroke: color,
        strokeWidth: '5',
        fill: transientWhite,
        fillStyle: 'solid',
        roughness:'1'
    });

    if(text != null) {
        rudimentFont.load().then(function (font) {
            var context = canvas.getContext("2d");
            context.fillStyle = textcolor;
            document.fonts.add(font);
            context.font =  h/2 + 'px Rudiment'
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, (x + (w/2) ), (y + (h/2)));
        });
    }
}

function arrow (canvas, startx, starty, endx, endy, color){
    var deltaY = endy - starty;
    var deltaX = endx - startx;
    var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
    var rad = (angle * Math.PI) / 180

    var rcC = rough.canvas(canvas);

    rcC.polygon([[startx, starty], [endx, endy]], {
        stroke: color,
        strokeWidth: '4',
        roughness:'2'
    });
    if(startx <= endx) {
        var start = Math.PI + rad + 0.5;
        var end = Math.PI + rad - 0.5;
    } else {
        var start =  rad + 0.5;
        var end = rad - 0.5;
    }

    rcC.arc(endx, endy, 70, 70, start, end, true, {
        stroke: color,
        strokeWidth: '4',
        roughness:'1'
    });
}

function svgPath(canvas, svgPath, color) {
  var rcC = rough.canvas(canvas);

  rcC.path(svgPath, {
      stroke: color,
      strokeWidth: '4',
      fill: transientWhite,
      fillStyle: 'solid',
      roughness:'1'
  });
}

function svgPathNoFill(canvas, svgPath, color) {
  var rcC = rough.canvas(canvas);

  rcC.path(svgPath, {
      stroke: color,
      strokeWidth: '4',
      roughness:'2'
  });
}

function svgPathNoStroke(canvas, svgPath, color) {
  var rcC = rough.canvas(canvas);

  rcC.path(svgPath, {
      stroke: color,
      strokeWidth: 0,
      roughness:2,
      fill: color,
      fillStyle: 'solid'
  });
}

function svgPathHachure(canvas, svgPath, color) {
  var rcC = rough.canvas(canvas);

  rcC.path(svgPath, {
      stroke: color,
      strokeWidth: 4,
      roughness: 2,
      hachureAngle: 60,
      hachureGap: 10,
      fillWeight:1,
      fill: color,
      fillStyle: 'hachure'
  });
}

function svgPolygon(canvas, vertices, color, text, textcolor, fontsize, fontXpos, fontYpos){
  var rcC = rough.canvas(canvas);

  rcC.polygon(vertices, {
      stroke: color,
      strokeWidth: '5',
      fill: transientWhite,
      fillStyle: 'solid',
      roughness:'2'
  });
  if(text != null) {
      rudimentFont.load().then(function (font) {
          var context = canvas.getContext("2d");
          context.fillStyle = textcolor;
          document.fonts.add(font);
          context.font =  fontsize + 'px Rudiment'
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(text, fontXpos, fontYpos);
      });
  }

}
// Functions END
