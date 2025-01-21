var size = 0;
var placement = 'point';
function categories__2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1 בניה מוגבלת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(240,67,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(174,202,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(132,231,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(54,23,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(133,164,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(224,48,45,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7 מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(130,149,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור חלוקה מחדש':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(105,213,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור לפי סעיף 13 לתוכנית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(56,230,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור מגורים לשמור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(225,169,114,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור מסחרי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(224,31,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור תעסוקה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(170,217,17,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור תעשיה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(223,123,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אזור תעשיה מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(65,182,228,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אחסנה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(86,234,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אלמנט פיתוח לשימור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(28,212,188,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אתר היסטורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(39,120,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אתר לאומי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(232,156,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'אתר עתיקות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,48,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בית קברות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(90,230,130,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בית קברות לשימור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(137,216,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בית קברות עירוני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(31,216,99,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בניה עד 2 קומות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(203,181,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בניה עד 3 קומות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(140,106,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בניה עד 4 קומות+ מסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(175,223,102,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בנין ציבורי בשטח פתוח פרטי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(55,183,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בנין ציבורי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(86,17,234,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בנין ציבורי עם הגבלות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(176,110,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בנין ציבורי- קריית הממשלה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(158,212,49,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'בנין ציבורי+חורשה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(63,98,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'גינון+ הרחבת דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(145,214,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'גלעין הכפר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(13,13,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'גן לאומי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(106,211,90,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'גשר להולכי רגל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(56,240,176,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'גשר להולכי רגל במגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(82,64,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך ו/או טיפול נופי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(226,141,21,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך זמנית  בשפ"צ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(100,216,112,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך זמנית במסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(221,21,151,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך זמנית בתחום שפ"צ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(44,62,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך חדשה/הרחבה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(210,110,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך חדשה/קיימת+עיצוב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(221,155,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך יער':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(129,234,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך כפרית חניה וגינון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(148,238,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך מאושרת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(226,137,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך מאושרת/קיימת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(222,181,99,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך מוצעת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(221,134,81,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך משולבת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(85,202,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך משולבת + שפ"צ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(142,229,101,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך נופית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(155,216,104,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך פרטית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(123,95,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך פרטית עם מעבר לציבור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(219,84,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך קיימת מיוחדת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(204,37,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרך קימת ו/או עיצוב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(204,54,69,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'דרכים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,114,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'הדרכה לבטיחות בדרכים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(201,89,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'הרחבת דרך לחניה ומדרכה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(88,76,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'השלמה למלונאות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(54,214,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'חניה פרטית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(170,203,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'חניה ציבורית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(60,107,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'חניה ציבורית מגוננת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,130,78,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'חניה+ פיתוח גנני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(116,206,136,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'חניון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(57,228,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'טיילת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(145,52,232,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'יעוד עפ תשי 504/2 504/3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(214,130,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'יעוד עפ"י תכנית מאוש':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,84,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'יער':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(192,30,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'יער נטע אדם מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,181,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'יער נטע אדם מתמא 22':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(179,23,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ככר עירונית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(159,207,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'לא ידוע':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(91,231,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'לא מוגדר בתכנית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(172,216,118,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות לבריאו':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(231,98,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות לדת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(136,127,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות לחינוך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(105,208,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות לחרום':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(203,80,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות למינהל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,56,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות לתרבות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(200,102,193,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות ציבור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(191,222,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מבנים ומוסדות ציבור ותחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(32,20,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגבלות בניה ופיתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(138,216,29,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגבלות בניה ופיתוח ב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(173,113,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגוירם, תעסוקה ותייר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(142,106,204,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,201,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 1 להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(196,227,20,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 1 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(218,70,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 2 בשינויים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(128,230,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 2 להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(219,76,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 2 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(174,240,117,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 2 קומות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(214,60,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,28,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 3 להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(96,240,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 3 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(12,179,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 3-4 קומות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(90,207,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 4 להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(206,32,209,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 4 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(217,42,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 5 להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(157,224,105,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 5 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(77,126,205,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 5 מיוחד+דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(30,205,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 6 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(230,182,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 6 מיוחד+דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(130,205,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים 7 מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(33,110,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים א\'':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(204,46,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים א\'2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(55,114,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים א\'3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,209,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ב\'':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(26,238,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ב\'1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(17,206,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ב\'2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(211,39,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ב\'3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(61,226,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ג\'':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(215,132,126,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ג\'1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(112,176,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ג\'2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(91,138,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ג\'3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(124,164,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ד\'':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(229,87,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ד\'1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(52,210,123,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ד\'2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(85,229,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ומבנים ומוסדו':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,204,86,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ומסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(233,97,165,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ומשרדים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(21,218,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ושימור ערכי נוף':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(204,89,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ותחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(80,163,205,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים ותיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(200,62,154,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים כללי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(162,135,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים כפרי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(213,230,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(58,226,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים למוסדות ומגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(233,64,92,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מגורים מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(59,16,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(223,40,92,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד א':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(181,68,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד ב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(224,182,31,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד ומשרדים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(110,211,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד להשלמה וגינון בלבד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(42,213,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד לשימור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(135,232,152,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד עם מסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(104,62,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד, מסחר ו':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,164,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים מיוחד,מסחר ות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(48,60,226,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים צפון תלפיות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,125,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים רב קומות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,88,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים, מסחר ומבנים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(208,237,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים, מסחר ותחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(191,121,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים, מסחר ותיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(126,28,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים, תיירות ומבני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(52,153,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים, תעסוקה ומבני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(185,204,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגורים,מסחר ותעסוקה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(207,185,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מגרש מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(28,205,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מדרחוב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,68,238,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מדרחוב+ רכב בטחון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(213,202,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(102,213,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד + דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(31,204,92,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד + חנויות+ מסעדות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(31,223,133,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד + מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,175,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד פרטי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(184,19,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מוסד צבורי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(91,227,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מחנה צבאי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(203,214,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלאכה זעירה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(217,63,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלונאות (אכסון מלונא':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(66,131,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלונאות ואו מסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(146,116,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלונאות ומגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(101,202,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלונאות מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(240,235,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מלונאות+מסחר+מוסד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(48,229,120,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסוף לאוטובוסים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(230,23,178,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(142,120,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ומבנים ומוסדות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(84,106,234,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ומשרדים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(16,224,189,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(128,192,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(236,179,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותעסוקה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(91,232,239,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותעשיה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(212,212,31,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותעשיה עתירת יד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(222,44,145,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר ותעשיה קלה ומלא':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(220,16,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר מיוחד עם מלאכה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(203,75,226,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר מעל לדרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(24,52,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר עם מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(158,67,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר קמעונאי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,92,193,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר, תיירות ומבנים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(145,224,96,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר, תעסוקה ומבנים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(158,28,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחר, תעסוקה ותיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(229,103,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחרי כללי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,71,80,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחרי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(52,82,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסחרי מיוחד עם מלאכה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(181,240,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסילה ו/או טיפול נופ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(102,239,123,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסילת ברזל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(220,70,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מסילת ברזל מאושרת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,79,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מעבר הולכי רגל במפלס עליון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(44,231,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מעבר פרטי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,193,57,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מעבר ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(99,202,101,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מעבר ציבורי באזור מגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(59,161,204,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מעון עולים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(88,205,103,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מפגש דרך-מסילה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,101,189,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מקומות מיוחדים, מוסדות ומגורים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(93,235,159,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מקוםחניה צבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(152,228,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מרכז תחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(121,196,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'משולב לפתוח למוסד+דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(222,127,105,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'משרדים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(87,174,203,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מתקן הנדסי ואספקת מים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(110,129,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מתקן לטיהור מי שפכין':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(175,59,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מתקני חשמל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(15,18,204,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מתקני תיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(112,212,223,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'מתקנים הנדסיים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(57,209,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'נוף פתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(157,46,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'נוף פתוח+ דרך':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(146,95,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'נושאים עירוניים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(79,229,71,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ספורט ונופש':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(222,23,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'עבודות עפר בשטח פרטי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(52,209,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'עירוני מעורב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(58,207,21,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פארק / גן ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(236,207,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פיתוח גנני מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(130,215,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פיתוח נוף סביב מתקן הנדסי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(61,206,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פס ירק':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(209,206,20,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פסולת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(224,227,131,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פרטי פתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(95,91,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'פתוח ציבורי מיוחד מעל לדרך ציבורית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(128,209,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'קרקע חלקאית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(230,41,157,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'רצועת מסילה / דרך ציבורית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(138,240,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'רצועת תשתיות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(92,238,238,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שביל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(55,232,167,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שביל הולכי רגל+רכב שירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(122,223,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שבילים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(232,59,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ואו גישה לחניה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(23,124,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח חקלאי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(179,210,126,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח חקלאי משולב בנופש':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(235,148,87,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ירק פרטי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(223,150,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח כלל עירוני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(105,221,97,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לבית קברות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(219,59,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לבנין ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(211,201,87,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לגינון ותמרון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(224,73,209,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לגן חיות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(240,19,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לגן לאומי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(229,113,131,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לדיור מוגן':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(206,41,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח להשלמה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(125,239,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לטרמינל':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(167,21,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח למוסד ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(220,97,120,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח למלונאות ומוסד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(207,229,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח למלונות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(200,47,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח למתקני אשפה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(45,233,101,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח למתקנים הנדסיים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(211,221,15,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לנופש וספורט':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(122,52,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לעיצוב נוף':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(220,73,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לשימור ושיקום':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(51,60,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לשימושים ציבוריים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(134,237,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לשמורת נוף':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(120,227,77,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לתחנת דלק':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(74,146,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח לתכנון בעתיד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(232,170,88,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח מרכז תחבורה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(90,218,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח משולב לשפ"צ ולבנין ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(49,200,67,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח מתקני נפט':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(128,177,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח עיצוב נופי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(203,216,121,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פרטי פתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(214,117,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פרטי פתוח מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,119,145,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח למוסד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(96,18,205,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח פרטי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(234,228,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח פרטי-מלון':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(129,127,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח ציבורי גן בוטני':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(112,224,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח ציבורי ללא חובת נטיעה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(206,79,20,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח פתוח+בנין ציבורי':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(100,235,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח צבורי מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(210,106,26,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח צבורי פתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(20,78,238,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ציבורי פתוח':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(94,104,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ציבורי פתוח ומתק':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(59,134,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ציבורי פתוח יעור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(235,104,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ציבורי פתוח ליעור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(216,33,24,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח ציבורי+ מעבר רכב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(22,67,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח שהתכנית אינה חלה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(69,201,161,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטח שוק':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(30,220,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטחים פתוחים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(52,19,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שטחים פתוחים ומבנים':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(205,59,129,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שימוש מעורב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(111,204,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שמורת טבע':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(175,34,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"פ וזיקת הנאה לציבור':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(208,135,45,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"פ לגינון ונטיעות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(208,65,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"צ + מגורים מעליו':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,36,106,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"צ בחסינות הכנסת':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(208,52,143,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"צ לתכנון בעתיד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(79,206,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"צ מיוחד':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(136,59,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'שפ"צ עם הגבלות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(219,87,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תחנת טרנספורמציה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(163,54,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תחנת מוניות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(207,102,158,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תחנת תדלוק':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(187,240,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תחנת תחבורה ציבורית':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(219,163,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תיירות':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(40,234,173,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תע\' עתירת ידע':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(109,70,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תע\' קלה ומלאכה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(228,218,123,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תעסוקה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(230,106,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תעסוקה ומבנים ומוסדו':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(207,157,18,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תעשיה':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(227,126,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תעשיה ומסחר משולב':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(188,140,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,63,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.0771632}),fill: new ol.style.Fill({color: 'rgba(237,119,59,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Descr");
    var labelFont = "13.0px \'Times New Roman\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Descr") !== null) {
        labelText = String(feature.get("Descr"));
    }
    
    var style = categories__2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
