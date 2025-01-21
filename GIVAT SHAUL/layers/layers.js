ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2039").setExtent([216693.670592, 632251.127746, 220926.198603, 634732.967984]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'תאי מים',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> תאי מים'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'קווי מים קיימים',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> קווי מים קיימים'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'קווי מים מתוכננים',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> קווי מים מתוכננים'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'מיקומי פחים',
                interactive: true,
    title: 'מיקומי פחים<br />\
    <img src="styles/legend/_5_0.png" /> בתחום אחריות תכנית אב לתחבורה<br />\
    <img src="styles/legend/_5_1.png" /> תחנה חדשה<br />\
    <img src="styles/legend/_5_2.png" /> תחנה מבוטלת<br />\
    <img src="styles/legend/_5_3.png" /> תחנה מבוטלת ריבוי תשתיות<br />\
    <img src="styles/legend/_5_4.png" /> <br />'
        });
var group_ = new ol.layer.Group({
                                layers: [lyr__2,lyr__3,lyr__4,],
                                fold: "open",
                                title: 'מידע גיחון'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr__2.setVisible(false);lyr__3.setVisible(false);lyr__4.setVisible(false);lyr__5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,group_,lyr__5];
lyr__2.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', 'path': 'path', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid': 'fid', 'מס_ד': 'מס_ד', 'סטטוס': 'סטטוס', 'כמות_תחנות': 'כמות_תחנות', 'מיקום': 'מיקום', 'כמות_מכולה': 'כמות_מכולה', 'כמות_עגלות': 'כמות_עגלות', 'כמות_טמונים_קיימים': 'כמות_טמונים_קיימים', 'כמות_פחים_מתוכננים': 'כמות_פחים_מתוכננים', 'כמות_טמונים___הכנה': 'כמות_טמונים___הכנה', 'הכנה_לפח': 'הכנה_לפח', 'y': 'y', 'x': 'x', 'הערות': 'הערות', 'תחנות_לאיתור': 'תחנות_לאיתור', 'מס__תחנות_שעודכנו': 'מס__תחנות_שעודכנו', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'חישוב_עדכון_תחנה_לשכר_תכנון', 'תאור_הסבר': 'תאור_הסבר', 'גוש': 'גוש', 'חלקה': 'חלקה', 'ייעודי_קרקע': 'ייעודי_קרקע', 'ייעודי_קרקע_הערות': 'ייעודי_קרקע_הערות', 'בית_משותף': 'בית_משותף', 'בית_משותף_צמוד': 'בית_משותף_צמוד', 'בית_משותף__הערות_': 'בית_משותף__הערות_', 'בית_משותף__לא_ניתן_לביצוע_': 'בית_משותף__לא_ניתן_לביצוע_', 'תנועה': 'תנועה', 'תנועה__עדכון_חדש_': 'תנועה__עדכון_חדש_', 'תכניות_תנועה_מאושרות': 'תכניות_תנועה_מאושרות', 'הערות_תנועה': 'הערות_תנועה', 'התנגדות_תנועה': 'התנגדות_תנועה', 'סטטוטוריקה': 'סטטוטוריקה', 'ריבוי_תשתיות': 'ריבוי_תשתיות', 'תחנות_לאיתור_1': 'תחנות_לאיתור_1', 'הערות_למודד': 'הערות_למודד', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'התייחסות_למדידה_ואיתור_לאחר_בדיקה', 'מדידה': 'מדידה', 'איתור': 'איתור', 'תאריך_קבלת_מדידה_ואיתור': 'תאריך_קבלת_מדידה_ואיתור', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', 'path': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr__5.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid': 'TextEdit', 'מס_ד': 'TextEdit', 'סטטוס': 'TextEdit', 'כמות_תחנות': 'TextEdit', 'מיקום': 'TextEdit', 'כמות_מכולה': 'TextEdit', 'כמות_עגלות': 'TextEdit', 'כמות_טמונים_קיימים': 'TextEdit', 'כמות_פחים_מתוכננים': 'TextEdit', 'כמות_טמונים___הכנה': 'TextEdit', 'הכנה_לפח': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'הערות': 'TextEdit', 'תחנות_לאיתור': 'TextEdit', 'מס__תחנות_שעודכנו': 'TextEdit', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'TextEdit', 'תאור_הסבר': 'TextEdit', 'גוש': 'TextEdit', 'חלקה': 'TextEdit', 'ייעודי_קרקע': 'TextEdit', 'ייעודי_קרקע_הערות': 'TextEdit', 'בית_משותף': 'TextEdit', 'בית_משותף_צמוד': 'TextEdit', 'בית_משותף__הערות_': 'TextEdit', 'בית_משותף__לא_ניתן_לביצוע_': 'TextEdit', 'תנועה': 'TextEdit', 'תנועה__עדכון_חדש_': 'TextEdit', 'תכניות_תנועה_מאושרות': 'TextEdit', 'הערות_תנועה': 'TextEdit', 'התנגדות_תנועה': 'TextEdit', 'סטטוטוריקה': 'TextEdit', 'ריבוי_תשתיות': 'TextEdit', 'תחנות_לאיתור_1': 'TextEdit', 'הערות_למודד': 'TextEdit', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'TextEdit', 'מדידה': 'TextEdit', 'איתור': 'TextEdit', 'תאריך_קבלת_מדידה_ואיתור': 'TextEdit', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', 'path': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'hidden field', 'fid': 'hidden field', 'מס_ד': 'header label - visible with data', 'סטטוס': 'header label - visible with data', 'כמות_תחנות': 'header label - visible with data', 'מיקום': 'header label - visible with data', 'כמות_מכולה': 'header label - visible with data', 'כמות_עגלות': 'header label - visible with data', 'כמות_טמונים_קיימים': 'header label - visible with data', 'כמות_פחים_מתוכננים': 'header label - visible with data', 'כמות_טמונים___הכנה': 'header label - visible with data', 'הכנה_לפח': 'header label - visible with data', 'y': 'header label - visible with data', 'x': 'header label - visible with data', 'הערות': 'header label - visible with data', 'תחנות_לאיתור': 'header label - visible with data', 'מס__תחנות_שעודכנו': 'header label - visible with data', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'header label - visible with data', 'תאור_הסבר': 'header label - visible with data', 'גוש': 'header label - visible with data', 'חלקה': 'header label - visible with data', 'ייעודי_קרקע': 'header label - visible with data', 'ייעודי_קרקע_הערות': 'header label - visible with data', 'בית_משותף': 'header label - visible with data', 'בית_משותף_צמוד': 'header label - visible with data', 'בית_משותף__הערות_': 'header label - visible with data', 'בית_משותף__לא_ניתן_לביצוע_': 'header label - visible with data', 'תנועה': 'header label - visible with data', 'תנועה__עדכון_חדש_': 'header label - visible with data', 'תכניות_תנועה_מאושרות': 'header label - visible with data', 'הערות_תנועה': 'header label - visible with data', 'התנגדות_תנועה': 'header label - visible with data', 'סטטוטוריקה': 'header label - visible with data', 'ריבוי_תשתיות': 'header label - visible with data', 'תחנות_לאיתור_1': 'header label - visible with data', 'הערות_למודד': 'header label - visible with data', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'header label - visible with data', 'מדידה': 'header label - visible with data', 'איתור': 'header label - visible with data', 'תאריך_קבלת_מדידה_ואיתור': 'header label - visible with data', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});