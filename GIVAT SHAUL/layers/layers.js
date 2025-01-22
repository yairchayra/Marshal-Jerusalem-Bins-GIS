ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2039").setExtent([217904.095682, 632671.504001, 218962.227685, 633291.964060]);
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
                popuplayertitle: 'יעודי קרקע',
                interactive: true,
    title: 'יעודי קרקע<br />\
    <img src="styles/legend/_2_0.png" /> 1 בניה מוגבלת<br />\
    <img src="styles/legend/_2_1.png" /> 1 מגורים<br />\
    <img src="styles/legend/_2_2.png" /> 2 מגורים<br />\
    <img src="styles/legend/_2_3.png" /> 4 מגורים<br />\
    <img src="styles/legend/_2_4.png" /> 5 מגורים<br />\
    <img src="styles/legend/_2_5.png" /> 6 מגורים<br />\
    <img src="styles/legend/_2_6.png" /> 7 מגורים<br />\
    <img src="styles/legend/_2_7.png" /> אזור חלוקה מחדש<br />\
    <img src="styles/legend/_2_8.png" /> אזור לפי סעיף 13 לתוכנית<br />\
    <img src="styles/legend/_2_9.png" /> אזור מגורים לשמור<br />\
    <img src="styles/legend/_2_10.png" /> אזור מסחרי<br />\
    <img src="styles/legend/_2_11.png" /> אזור תעסוקה<br />\
    <img src="styles/legend/_2_12.png" /> אזור תעשיה<br />\
    <img src="styles/legend/_2_13.png" /> אזור תעשיה מיוחד<br />\
    <img src="styles/legend/_2_14.png" /> אחסנה<br />\
    <img src="styles/legend/_2_15.png" /> אלמנט פיתוח לשימור<br />\
    <img src="styles/legend/_2_16.png" /> אתר היסטורי<br />\
    <img src="styles/legend/_2_17.png" /> אתר לאומי<br />\
    <img src="styles/legend/_2_18.png" /> אתר עתיקות<br />\
    <img src="styles/legend/_2_19.png" /> בית קברות<br />\
    <img src="styles/legend/_2_20.png" /> בית קברות לשימור<br />\
    <img src="styles/legend/_2_21.png" /> בית קברות עירוני<br />\
    <img src="styles/legend/_2_22.png" /> בניה עד 2 קומות<br />\
    <img src="styles/legend/_2_23.png" /> בניה עד 3 קומות<br />\
    <img src="styles/legend/_2_24.png" /> בניה עד 4 קומות+ מסחר<br />\
    <img src="styles/legend/_2_25.png" /> בנין ציבורי בשטח פתוח פרטי<br />\
    <img src="styles/legend/_2_26.png" /> בנין ציבורי מיוחד<br />\
    <img src="styles/legend/_2_27.png" /> בנין ציבורי עם הגבלות<br />\
    <img src="styles/legend/_2_28.png" /> בנין ציבורי- קריית הממשלה<br />\
    <img src="styles/legend/_2_29.png" /> בנין ציבורי+חורשה<br />\
    <img src="styles/legend/_2_30.png" /> גינון+ הרחבת דרך<br />\
    <img src="styles/legend/_2_31.png" /> גלעין הכפר<br />\
    <img src="styles/legend/_2_32.png" /> גן לאומי<br />\
    <img src="styles/legend/_2_33.png" /> גשר להולכי רגל<br />\
    <img src="styles/legend/_2_34.png" /> גשר להולכי רגל במגורים<br />\
    <img src="styles/legend/_2_35.png" /> דרך ו/או טיפול נופי<br />\
    <img src="styles/legend/_2_36.png" /> דרך זמנית  בשפ"צ<br />\
    <img src="styles/legend/_2_37.png" /> דרך זמנית במסחר<br />\
    <img src="styles/legend/_2_38.png" /> דרך זמנית בתחום שפ"צ<br />\
    <img src="styles/legend/_2_39.png" /> דרך חדשה/הרחבה<br />\
    <img src="styles/legend/_2_40.png" /> דרך חדשה/קיימת+עיצוב<br />\
    <img src="styles/legend/_2_41.png" /> דרך יער<br />\
    <img src="styles/legend/_2_42.png" /> דרך כפרית חניה וגינון<br />\
    <img src="styles/legend/_2_43.png" /> דרך מאושרת<br />\
    <img src="styles/legend/_2_44.png" /> דרך מאושרת/קיימת<br />\
    <img src="styles/legend/_2_45.png" /> דרך מוצעת<br />\
    <img src="styles/legend/_2_46.png" /> דרך משולבת<br />\
    <img src="styles/legend/_2_47.png" /> דרך משולבת + שפ"צ<br />\
    <img src="styles/legend/_2_48.png" /> דרך נופית<br />\
    <img src="styles/legend/_2_49.png" /> דרך פרטית<br />\
    <img src="styles/legend/_2_50.png" /> דרך פרטית עם מעבר לציבור<br />\
    <img src="styles/legend/_2_51.png" /> דרך קיימת מיוחדת<br />\
    <img src="styles/legend/_2_52.png" /> דרך קימת ו/או עיצוב<br />\
    <img src="styles/legend/_2_53.png" /> דרכים<br />\
    <img src="styles/legend/_2_54.png" /> הדרכה לבטיחות בדרכים<br />\
    <img src="styles/legend/_2_55.png" /> הרחבת דרך לחניה ומדרכה<br />\
    <img src="styles/legend/_2_56.png" /> השלמה למלונאות<br />\
    <img src="styles/legend/_2_57.png" /> חניה פרטית<br />\
    <img src="styles/legend/_2_58.png" /> חניה ציבורית<br />\
    <img src="styles/legend/_2_59.png" /> חניה ציבורית מגוננת<br />\
    <img src="styles/legend/_2_60.png" /> חניה+ פיתוח גנני<br />\
    <img src="styles/legend/_2_61.png" /> חניון<br />\
    <img src="styles/legend/_2_62.png" /> טיילת<br />\
    <img src="styles/legend/_2_63.png" /> יעוד עפ תשי 504/2 504/3<br />\
    <img src="styles/legend/_2_64.png" /> יעוד עפ"י תכנית מאוש<br />\
    <img src="styles/legend/_2_65.png" /> יער<br />\
    <img src="styles/legend/_2_66.png" /> יער נטע אדם מיוחד<br />\
    <img src="styles/legend/_2_67.png" /> יער נטע אדם מתמא 22<br />\
    <img src="styles/legend/_2_68.png" /> ככר עירונית<br />\
    <img src="styles/legend/_2_69.png" /> לא ידוע<br />\
    <img src="styles/legend/_2_70.png" /> לא מוגדר בתכנית<br />\
    <img src="styles/legend/_2_71.png" /> מבנים ומוסדות לבריאו<br />\
    <img src="styles/legend/_2_72.png" /> מבנים ומוסדות לדת<br />\
    <img src="styles/legend/_2_73.png" /> מבנים ומוסדות לחינוך<br />\
    <img src="styles/legend/_2_74.png" /> מבנים ומוסדות לחרום<br />\
    <img src="styles/legend/_2_75.png" /> מבנים ומוסדות למינהל<br />\
    <img src="styles/legend/_2_76.png" /> מבנים ומוסדות לתרבות<br />\
    <img src="styles/legend/_2_77.png" /> מבנים ומוסדות ציבור<br />\
    <img src="styles/legend/_2_78.png" /> מבנים ומוסדות ציבור ותחבורה<br />\
    <img src="styles/legend/_2_79.png" /> מגבלות בניה ופיתוח<br />\
    <img src="styles/legend/_2_80.png" /> מגבלות בניה ופיתוח ב<br />\
    <img src="styles/legend/_2_81.png" /> מגוירם, תעסוקה ותייר<br />\
    <img src="styles/legend/_2_82.png" /> מגורים<br />\
    <img src="styles/legend/_2_83.png" /> מגורים 1 להשלמה<br />\
    <img src="styles/legend/_2_84.png" /> מגורים 1 מיוחד<br />\
    <img src="styles/legend/_2_85.png" /> מגורים 2 בשינויים<br />\
    <img src="styles/legend/_2_86.png" /> מגורים 2 להשלמה<br />\
    <img src="styles/legend/_2_87.png" /> מגורים 2 מיוחד<br />\
    <img src="styles/legend/_2_88.png" /> מגורים 2 קומות<br />\
    <img src="styles/legend/_2_89.png" /> מגורים 3<br />\
    <img src="styles/legend/_2_90.png" /> מגורים 3 להשלמה<br />\
    <img src="styles/legend/_2_91.png" /> מגורים 3 מיוחד<br />\
    <img src="styles/legend/_2_92.png" /> מגורים 3-4 קומות<br />\
    <img src="styles/legend/_2_93.png" /> מגורים 4 להשלמה<br />\
    <img src="styles/legend/_2_94.png" /> מגורים 4 מיוחד<br />\
    <img src="styles/legend/_2_95.png" /> מגורים 5 להשלמה<br />\
    <img src="styles/legend/_2_96.png" /> מגורים 5 מיוחד<br />\
    <img src="styles/legend/_2_97.png" /> מגורים 5 מיוחד+דרך<br />\
    <img src="styles/legend/_2_98.png" /> מגורים 6 מיוחד<br />\
    <img src="styles/legend/_2_99.png" /> מגורים 6 מיוחד+דרך<br />\
    <img src="styles/legend/_2_100.png" /> מגורים 7 מיוחד<br />\
    <img src="styles/legend/_2_101.png" /> מגורים א\'<br />\
    <img src="styles/legend/_2_102.png" /> מגורים א\'2<br />\
    <img src="styles/legend/_2_103.png" /> מגורים א\'3<br />\
    <img src="styles/legend/_2_104.png" /> מגורים ב\'<br />\
    <img src="styles/legend/_2_105.png" /> מגורים ב\'1<br />\
    <img src="styles/legend/_2_106.png" /> מגורים ב\'2<br />\
    <img src="styles/legend/_2_107.png" /> מגורים ב\'3<br />\
    <img src="styles/legend/_2_108.png" /> מגורים ג\'<br />\
    <img src="styles/legend/_2_109.png" /> מגורים ג\'1<br />\
    <img src="styles/legend/_2_110.png" /> מגורים ג\'2<br />\
    <img src="styles/legend/_2_111.png" /> מגורים ג\'3<br />\
    <img src="styles/legend/_2_112.png" /> מגורים ד\'<br />\
    <img src="styles/legend/_2_113.png" /> מגורים ד\'1<br />\
    <img src="styles/legend/_2_114.png" /> מגורים ד\'2<br />\
    <img src="styles/legend/_2_115.png" /> מגורים ומבנים ומוסדו<br />\
    <img src="styles/legend/_2_116.png" /> מגורים ומסחר<br />\
    <img src="styles/legend/_2_117.png" /> מגורים ומשרדים<br />\
    <img src="styles/legend/_2_118.png" /> מגורים ושימור ערכי נוף<br />\
    <img src="styles/legend/_2_119.png" /> מגורים ותחבורה<br />\
    <img src="styles/legend/_2_120.png" /> מגורים ותיירות<br />\
    <img src="styles/legend/_2_121.png" /> מגורים כללי<br />\
    <img src="styles/legend/_2_122.png" /> מגורים כפרי<br />\
    <img src="styles/legend/_2_123.png" /> מגורים להשלמה<br />\
    <img src="styles/legend/_2_124.png" /> מגורים למוסדות ומגורים<br />\
    <img src="styles/legend/_2_125.png" /> מגורים מגורים מיוחד<br />\
    <img src="styles/legend/_2_126.png" /> מגורים מיוחד<br />\
    <img src="styles/legend/_2_127.png" /> מגורים מיוחד א<br />\
    <img src="styles/legend/_2_128.png" /> מגורים מיוחד ב<br />\
    <img src="styles/legend/_2_129.png" /> מגורים מיוחד ומשרדים<br />\
    <img src="styles/legend/_2_130.png" /> מגורים מיוחד להשלמה וגינון בלבד<br />\
    <img src="styles/legend/_2_131.png" /> מגורים מיוחד לשימור<br />\
    <img src="styles/legend/_2_132.png" /> מגורים מיוחד עם מסחר<br />\
    <img src="styles/legend/_2_133.png" /> מגורים מיוחד, מסחר ו<br />\
    <img src="styles/legend/_2_134.png" /> מגורים מיוחד,מסחר ות<br />\
    <img src="styles/legend/_2_135.png" /> מגורים צפון תלפיות<br />\
    <img src="styles/legend/_2_136.png" /> מגורים רב קומות<br />\
    <img src="styles/legend/_2_137.png" /> מגורים, מסחר ומבנים<br />\
    <img src="styles/legend/_2_138.png" /> מגורים, מסחר ותחבורה<br />\
    <img src="styles/legend/_2_139.png" /> מגורים, מסחר ותיירות<br />\
    <img src="styles/legend/_2_140.png" /> מגורים, תיירות ומבני<br />\
    <img src="styles/legend/_2_141.png" /> מגורים, תעסוקה ומבני<br />\
    <img src="styles/legend/_2_142.png" /> מגורים,מסחר ותעסוקה<br />\
    <img src="styles/legend/_2_143.png" /> מגרש מיוחד<br />\
    <img src="styles/legend/_2_144.png" /> מדרחוב<br />\
    <img src="styles/legend/_2_145.png" /> מדרחוב+ רכב בטחון<br />\
    <img src="styles/legend/_2_146.png" /> מוסד<br />\
    <img src="styles/legend/_2_147.png" /> מוסד + דרך<br />\
    <img src="styles/legend/_2_148.png" /> מוסד + חנויות+ מסעדות<br />\
    <img src="styles/legend/_2_149.png" /> מוסד + מגורים<br />\
    <img src="styles/legend/_2_150.png" /> מוסד פרטי<br />\
    <img src="styles/legend/_2_151.png" /> מוסד צבורי מיוחד<br />\
    <img src="styles/legend/_2_152.png" /> מחנה צבאי<br />\
    <img src="styles/legend/_2_153.png" /> מלאכה זעירה<br />\
    <img src="styles/legend/_2_154.png" /> מלונאות (אכסון מלונא<br />\
    <img src="styles/legend/_2_155.png" /> מלונאות ואו מסחר<br />\
    <img src="styles/legend/_2_156.png" /> מלונאות ומגורים<br />\
    <img src="styles/legend/_2_157.png" /> מלונאות מיוחד<br />\
    <img src="styles/legend/_2_158.png" /> מלונאות+מסחר+מוסד<br />\
    <img src="styles/legend/_2_159.png" /> מסוף לאוטובוסים<br />\
    <img src="styles/legend/_2_160.png" /> מסחר<br />\
    <img src="styles/legend/_2_161.png" /> מסחר ומבנים ומוסדות<br />\
    <img src="styles/legend/_2_162.png" /> מסחר ומשרדים<br />\
    <img src="styles/legend/_2_163.png" /> מסחר ותחבורה<br />\
    <img src="styles/legend/_2_164.png" /> מסחר ותיירות<br />\
    <img src="styles/legend/_2_165.png" /> מסחר ותעסוקה<br />\
    <img src="styles/legend/_2_166.png" /> מסחר ותעשיה<br />\
    <img src="styles/legend/_2_167.png" /> מסחר ותעשיה עתירת יד<br />\
    <img src="styles/legend/_2_168.png" /> מסחר ותעשיה קלה ומלא<br />\
    <img src="styles/legend/_2_169.png" /> מסחר מיוחד עם מלאכה<br />\
    <img src="styles/legend/_2_170.png" /> מסחר מעל לדרך<br />\
    <img src="styles/legend/_2_171.png" /> מסחר עם מגורים<br />\
    <img src="styles/legend/_2_172.png" /> מסחר קמעונאי<br />\
    <img src="styles/legend/_2_173.png" /> מסחר, תיירות ומבנים<br />\
    <img src="styles/legend/_2_174.png" /> מסחר, תעסוקה ומבנים<br />\
    <img src="styles/legend/_2_175.png" /> מסחר, תעסוקה ותיירות<br />\
    <img src="styles/legend/_2_176.png" /> מסחרי כללי<br />\
    <img src="styles/legend/_2_177.png" /> מסחרי מיוחד<br />\
    <img src="styles/legend/_2_178.png" /> מסחרי מיוחד עם מלאכה<br />\
    <img src="styles/legend/_2_179.png" /> מסילה ו/או טיפול נופ<br />\
    <img src="styles/legend/_2_180.png" /> מסילת ברזל<br />\
    <img src="styles/legend/_2_181.png" /> מסילת ברזל מאושרת<br />\
    <img src="styles/legend/_2_182.png" /> מעבר הולכי רגל במפלס עליון<br />\
    <img src="styles/legend/_2_183.png" /> מעבר פרטי<br />\
    <img src="styles/legend/_2_184.png" /> מעבר ציבורי<br />\
    <img src="styles/legend/_2_185.png" /> מעבר ציבורי באזור מגורים<br />\
    <img src="styles/legend/_2_186.png" /> מעון עולים<br />\
    <img src="styles/legend/_2_187.png" /> מפגש דרך-מסילה<br />\
    <img src="styles/legend/_2_188.png" /> מקומות מיוחדים, מוסדות ומגורים<br />\
    <img src="styles/legend/_2_189.png" /> מקוםחניה צבורי<br />\
    <img src="styles/legend/_2_190.png" /> מרכז תחבורה<br />\
    <img src="styles/legend/_2_191.png" /> משולב לפתוח למוסד+דרך<br />\
    <img src="styles/legend/_2_192.png" /> משרדים<br />\
    <img src="styles/legend/_2_193.png" /> מתקן הנדסי ואספקת מים<br />\
    <img src="styles/legend/_2_194.png" /> מתקן לטיהור מי שפכין<br />\
    <img src="styles/legend/_2_195.png" /> מתקני חשמל<br />\
    <img src="styles/legend/_2_196.png" /> מתקני תיירות<br />\
    <img src="styles/legend/_2_197.png" /> מתקנים הנדסיים<br />\
    <img src="styles/legend/_2_198.png" /> נוף פתוח<br />\
    <img src="styles/legend/_2_199.png" /> נוף פתוח+ דרך<br />\
    <img src="styles/legend/_2_200.png" /> נושאים עירוניים<br />\
    <img src="styles/legend/_2_201.png" /> ספורט ונופש<br />\
    <img src="styles/legend/_2_202.png" /> עבודות עפר בשטח פרטי<br />\
    <img src="styles/legend/_2_203.png" /> עירוני מעורב<br />\
    <img src="styles/legend/_2_204.png" /> פארק / גן ציבורי<br />\
    <img src="styles/legend/_2_205.png" /> פיתוח גנני מיוחד<br />\
    <img src="styles/legend/_2_206.png" /> פיתוח נוף סביב מתקן הנדסי<br />\
    <img src="styles/legend/_2_207.png" /> פס ירק<br />\
    <img src="styles/legend/_2_208.png" /> פסולת<br />\
    <img src="styles/legend/_2_209.png" /> פרטי פתוח<br />\
    <img src="styles/legend/_2_210.png" /> פתוח ציבורי מיוחד מעל לדרך ציבורית<br />\
    <img src="styles/legend/_2_211.png" /> קרקע חלקאית<br />\
    <img src="styles/legend/_2_212.png" /> רצועת מסילה / דרך ציבורית<br />\
    <img src="styles/legend/_2_213.png" /> רצועת תשתיות<br />\
    <img src="styles/legend/_2_214.png" /> שביל<br />\
    <img src="styles/legend/_2_215.png" /> שביל הולכי רגל+רכב שירות<br />\
    <img src="styles/legend/_2_216.png" /> שבילים<br />\
    <img src="styles/legend/_2_217.png" /> שטח ואו גישה לחניה<br />\
    <img src="styles/legend/_2_218.png" /> שטח חקלאי<br />\
    <img src="styles/legend/_2_219.png" /> שטח חקלאי משולב בנופש<br />\
    <img src="styles/legend/_2_220.png" /> שטח ירק פרטי<br />\
    <img src="styles/legend/_2_221.png" /> שטח כלל עירוני<br />\
    <img src="styles/legend/_2_222.png" /> שטח לבית קברות<br />\
    <img src="styles/legend/_2_223.png" /> שטח לבנין ציבורי<br />\
    <img src="styles/legend/_2_224.png" /> שטח לגינון ותמרון<br />\
    <img src="styles/legend/_2_225.png" /> שטח לגן חיות<br />\
    <img src="styles/legend/_2_226.png" /> שטח לגן לאומי<br />\
    <img src="styles/legend/_2_227.png" /> שטח לדיור מוגן<br />\
    <img src="styles/legend/_2_228.png" /> שטח להשלמה<br />\
    <img src="styles/legend/_2_229.png" /> שטח לטרמינל<br />\
    <img src="styles/legend/_2_230.png" /> שטח למוסד ציבורי<br />\
    <img src="styles/legend/_2_231.png" /> שטח למלונאות ומוסד<br />\
    <img src="styles/legend/_2_232.png" /> שטח למלונות<br />\
    <img src="styles/legend/_2_233.png" /> שטח למתקני אשפה<br />\
    <img src="styles/legend/_2_234.png" /> שטח למתקנים הנדסיים<br />\
    <img src="styles/legend/_2_235.png" /> שטח לנופש וספורט<br />\
    <img src="styles/legend/_2_236.png" /> שטח לעיצוב נוף<br />\
    <img src="styles/legend/_2_237.png" /> שטח לשימור ושיקום<br />\
    <img src="styles/legend/_2_238.png" /> שטח לשימושים ציבוריים<br />\
    <img src="styles/legend/_2_239.png" /> שטח לשמורת נוף<br />\
    <img src="styles/legend/_2_240.png" /> שטח לתחנת דלק<br />\
    <img src="styles/legend/_2_241.png" /> שטח לתכנון בעתיד<br />\
    <img src="styles/legend/_2_242.png" /> שטח מרכז תחבורה<br />\
    <img src="styles/legend/_2_243.png" /> שטח משולב לשפ"צ ולבנין ציבורי<br />\
    <img src="styles/legend/_2_244.png" /> שטח מתקני נפט<br />\
    <img src="styles/legend/_2_245.png" /> שטח עיצוב נופי מיוחד<br />\
    <img src="styles/legend/_2_246.png" /> שטח פרטי פתוח<br />\
    <img src="styles/legend/_2_247.png" /> שטח פרטי פתוח מיוחד<br />\
    <img src="styles/legend/_2_248.png" /> שטח פתוח למוסד<br />\
    <img src="styles/legend/_2_249.png" /> שטח פתוח פרטי מיוחד<br />\
    <img src="styles/legend/_2_250.png" /> שטח פתוח פרטי-מלון<br />\
    <img src="styles/legend/_2_251.png" /> שטח פתוח ציבורי גן בוטני<br />\
    <img src="styles/legend/_2_252.png" /> שטח פתוח ציבורי ללא חובת נטיעה<br />\
    <img src="styles/legend/_2_253.png" /> שטח פתוח+בנין ציבורי<br />\
    <img src="styles/legend/_2_254.png" /> שטח צבורי מיוחד<br />\
    <img src="styles/legend/_2_255.png" /> שטח צבורי פתוח<br />\
    <img src="styles/legend/_2_256.png" /> שטח ציבורי פתוח<br />\
    <img src="styles/legend/_2_257.png" /> שטח ציבורי פתוח ומתק<br />\
    <img src="styles/legend/_2_258.png" /> שטח ציבורי פתוח יעור<br />\
    <img src="styles/legend/_2_259.png" /> שטח ציבורי פתוח ליעור<br />\
    <img src="styles/legend/_2_260.png" /> שטח ציבורי+ מעבר רכב<br />\
    <img src="styles/legend/_2_261.png" /> שטח שהתכנית אינה חלה<br />\
    <img src="styles/legend/_2_262.png" /> שטח שוק<br />\
    <img src="styles/legend/_2_263.png" /> שטחים פתוחים<br />\
    <img src="styles/legend/_2_264.png" /> שטחים פתוחים ומבנים<br />\
    <img src="styles/legend/_2_265.png" /> שימוש מעורב<br />\
    <img src="styles/legend/_2_266.png" /> שמורת טבע<br />\
    <img src="styles/legend/_2_267.png" /> שפ"פ וזיקת הנאה לציבור<br />\
    <img src="styles/legend/_2_268.png" /> שפ"פ לגינון ונטיעות<br />\
    <img src="styles/legend/_2_269.png" /> שפ"צ + מגורים מעליו<br />\
    <img src="styles/legend/_2_270.png" /> שפ"צ בחסינות הכנסת<br />\
    <img src="styles/legend/_2_271.png" /> שפ"צ לתכנון בעתיד<br />\
    <img src="styles/legend/_2_272.png" /> שפ"צ מיוחד<br />\
    <img src="styles/legend/_2_273.png" /> שפ"צ עם הגבלות<br />\
    <img src="styles/legend/_2_274.png" /> תחנת טרנספורמציה<br />\
    <img src="styles/legend/_2_275.png" /> תחנת מוניות<br />\
    <img src="styles/legend/_2_276.png" /> תחנת תדלוק<br />\
    <img src="styles/legend/_2_277.png" /> תחנת תחבורה ציבורית<br />\
    <img src="styles/legend/_2_278.png" /> תיירות<br />\
    <img src="styles/legend/_2_279.png" /> תע\' עתירת ידע<br />\
    <img src="styles/legend/_2_280.png" /> תע\' קלה ומלאכה<br />\
    <img src="styles/legend/_2_281.png" /> תעסוקה<br />\
    <img src="styles/legend/_2_282.png" /> תעסוקה ומבנים ומוסדו<br />\
    <img src="styles/legend/_2_283.png" /> תעשיה<br />\
    <img src="styles/legend/_2_284.png" /> תעשיה ומסחר משולב<br />\
    <img src="styles/legend/_2_285.png" /> <br />'
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
                popuplayertitle: 'תאי מים',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> תאי מים'
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
                popuplayertitle: 'קווי מים קיימים',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> קווי מים קיימים'
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
                popuplayertitle: 'קווי מים מתוכננים',
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> קווי מים מתוכננים'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'מיקומי פחים',
                interactive: true,
    title: 'מיקומי פחים<br />\
    <img src="styles/legend/_6_0.png" /> בתחום אחריות תכנית אב לתחבורה<br />\
    <img src="styles/legend/_6_1.png" /> תחנה חדשה<br />\
    <img src="styles/legend/_6_2.png" /> תחנה מבוטלת<br />\
    <img src="styles/legend/_6_3.png" /> תחנה מבוטלת ריבוי תשתיות<br />\
    <img src="styles/legend/_6_4.png" /> <br />'
        });
var format_22125_7 = new ol.format.GeoJSON();
var features_22125_7 = format_22125_7.readFeatures(json_22125_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource_22125_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22125_7.addFeatures(features_22125_7);
var lyr_22125_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22125_7, 
                style: style_22125_7,
                popuplayertitle: 'מיקומים עם קונפליקטים 22.1.25',
                interactive: true,
                title: '<img src="styles/legend/22125_7.png" /> מיקומים עם קונפליקטים 22.1.25'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__3,lyr__4,lyr__5,],
                                fold: "open",
                                title: 'מידע גיחון'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr__2.setVisible(false);lyr__3.setVisible(false);lyr__4.setVisible(false);lyr__5.setVisible(false);lyr__6.setVisible(false);lyr_22125_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr__2,group_,lyr__6,lyr_22125_7];
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TABA': 'TABA', 'MIGRASH': 'MIGRASH', 'YEUD': 'YEUD', 'Descr': 'Descr', 'Shape.STLe': 'Shape.STLe', 'Shape.STAr': 'Shape.STAr', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', 'path': 'path', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr__6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid': 'fid', 'מס_ד': 'מס_ד', 'סטטוס': 'סטטוס', 'כמות_תחנות': 'כמות_תחנות', 'מיקום': 'מיקום', 'כמות_מכולה': 'כמות_מכולה', 'כמות_עגלות': 'כמות_עגלות', 'כמות_טמונים_קיימים': 'כמות_טמונים_קיימים', 'כמות_פחים_מתוכננים': 'כמות_פחים_מתוכננים', 'כמות_טמונים___הכנה': 'כמות_טמונים___הכנה', 'הכנה_לפח': 'הכנה_לפח', 'y': 'y', 'x': 'x', 'הערות': 'הערות', 'תחנות_לאיתור': 'תחנות_לאיתור', 'מס__תחנות_שעודכנו': 'מס__תחנות_שעודכנו', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'חישוב_עדכון_תחנה_לשכר_תכנון', 'תאור_הסבר': 'תאור_הסבר', 'גוש': 'גוש', 'חלקה': 'חלקה', 'ייעודי_קרקע': 'ייעודי_קרקע', 'ייעודי_קרקע_הערות': 'ייעודי_קרקע_הערות', 'בית_משותף': 'בית_משותף', 'בית_משותף_צמוד': 'בית_משותף_צמוד', 'בית_משותף__הערות_': 'בית_משותף__הערות_', 'בית_משותף__לא_ניתן_לביצוע_': 'בית_משותף__לא_ניתן_לביצוע_', 'תנועה': 'תנועה', 'תנועה__עדכון_חדש_': 'תנועה__עדכון_חדש_', 'תכניות_תנועה_מאושרות': 'תכניות_תנועה_מאושרות', 'הערות_תנועה': 'הערות_תנועה', 'התנגדות_תנועה': 'התנגדות_תנועה', 'סטטוטוריקה': 'סטטוטוריקה', 'ריבוי_תשתיות': 'ריבוי_תשתיות', 'תחנות_לאיתור_1': 'תחנות_לאיתור_1', 'הערות_למודד': 'הערות_למודד', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'התייחסות_למדידה_ואיתור_לאחר_בדיקה', 'מדידה': 'מדידה', 'איתור': 'איתור', 'תאריך_קבלת_מדידה_ואיתור': 'תאריך_קבלת_מדידה_ואיתור', });
lyr_22125_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid': 'fid', 'מס_ד': 'מס_ד', 'סטטוס': 'סטטוס', 'כמות_תחנות': 'כמות_תחנות', 'מיקום': 'מיקום', 'כמות_מכולה': 'כמות_מכולה', 'כמות_עגלות': 'כמות_עגלות', 'כמות_טמונים_קיימים': 'כמות_טמונים_קיימים', 'כמות_פחים_מתוכננים': 'כמות_פחים_מתוכננים', 'כמות_טמונים___הכנה': 'כמות_טמונים___הכנה', 'הכנה_לפח': 'הכנה_לפח', 'y': 'y', 'x': 'x', 'הערות': 'הערות', 'תחנות_לאיתור': 'תחנות_לאיתור', 'מס__תחנות_שעודכנו': 'מס__תחנות_שעודכנו', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'חישוב_עדכון_תחנה_לשכר_תכנון', 'תאור_הסבר': 'תאור_הסבר', 'גוש': 'גוש', 'חלקה': 'חלקה', 'ייעודי_קרקע': 'ייעודי_קרקע', 'ייעודי_קרקע_הערות': 'ייעודי_קרקע_הערות', 'בית_משותף': 'בית_משותף', 'בית_משותף_צמוד': 'בית_משותף_צמוד', 'בית_משותף__הערות_': 'בית_משותף__הערות_', 'בית_משותף__לא_ניתן_לביצוע_': 'בית_משותף__לא_ניתן_לביצוע_', 'תנועה': 'תנועה', 'תנועה__עדכון_חדש_': 'תנועה__עדכון_חדש_', 'תכניות_תנועה_מאושרות': 'תכניות_תנועה_מאושרות', 'הערות_תנועה': 'הערות_תנועה', 'התנגדות_תנועה': 'התנגדות_תנועה', 'סטטוטוריקה': 'סטטוטוריקה', 'ריבוי_תשתיות': 'ריבוי_תשתיות', 'תחנות_לאיתור_1': 'תחנות_לאיתור_1', 'הערות_למודד': 'הערות_למודד', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'התייחסות_למדידה_ואיתור_לאחר_בדיקה', 'מדידה': 'מדידה', 'איתור': 'איתור', 'תאריך_קבלת_מדידה_ואיתור': 'תאריך_קבלת_מדידה_ואיתור', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'TABA': 'TextEdit', 'MIGRASH': 'TextEdit', 'YEUD': 'TextEdit', 'Descr': 'TextEdit', 'Shape.STLe': 'TextEdit', 'Shape.STAr': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', 'path': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr__6.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid': 'TextEdit', 'מס_ד': 'TextEdit', 'סטטוס': 'TextEdit', 'כמות_תחנות': 'TextEdit', 'מיקום': 'TextEdit', 'כמות_מכולה': 'TextEdit', 'כמות_עגלות': 'TextEdit', 'כמות_טמונים_קיימים': 'TextEdit', 'כמות_פחים_מתוכננים': 'TextEdit', 'כמות_טמונים___הכנה': 'TextEdit', 'הכנה_לפח': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'הערות': 'TextEdit', 'תחנות_לאיתור': 'TextEdit', 'מס__תחנות_שעודכנו': 'TextEdit', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'TextEdit', 'תאור_הסבר': 'TextEdit', 'גוש': 'TextEdit', 'חלקה': 'TextEdit', 'ייעודי_קרקע': 'TextEdit', 'ייעודי_קרקע_הערות': 'TextEdit', 'בית_משותף': 'TextEdit', 'בית_משותף_צמוד': 'TextEdit', 'בית_משותף__הערות_': 'TextEdit', 'בית_משותף__לא_ניתן_לביצוע_': 'TextEdit', 'תנועה': 'TextEdit', 'תנועה__עדכון_חדש_': 'TextEdit', 'תכניות_תנועה_מאושרות': 'TextEdit', 'הערות_תנועה': 'TextEdit', 'התנגדות_תנועה': 'TextEdit', 'סטטוטוריקה': 'TextEdit', 'ריבוי_תשתיות': 'TextEdit', 'תחנות_לאיתור_1': 'TextEdit', 'הערות_למודד': 'TextEdit', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'TextEdit', 'מדידה': 'TextEdit', 'איתור': 'TextEdit', 'תאריך_קבלת_מדידה_ואיתור': 'TextEdit', });
lyr_22125_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid': 'TextEdit', 'מס_ד': 'TextEdit', 'סטטוס': 'TextEdit', 'כמות_תחנות': 'TextEdit', 'מיקום': 'TextEdit', 'כמות_מכולה': 'TextEdit', 'כמות_עגלות': 'TextEdit', 'כמות_טמונים_קיימים': 'TextEdit', 'כמות_פחים_מתוכננים': 'TextEdit', 'כמות_טמונים___הכנה': 'TextEdit', 'הכנה_לפח': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'הערות': 'TextEdit', 'תחנות_לאיתור': 'TextEdit', 'מס__תחנות_שעודכנו': 'TextEdit', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'TextEdit', 'תאור_הסבר': 'TextEdit', 'גוש': 'TextEdit', 'חלקה': 'TextEdit', 'ייעודי_קרקע': 'TextEdit', 'ייעודי_קרקע_הערות': 'TextEdit', 'בית_משותף': 'TextEdit', 'בית_משותף_צמוד': 'TextEdit', 'בית_משותף__הערות_': 'TextEdit', 'בית_משותף__לא_ניתן_לביצוע_': 'TextEdit', 'תנועה': 'TextEdit', 'תנועה__עדכון_חדש_': 'TextEdit', 'תכניות_תנועה_מאושרות': 'TextEdit', 'הערות_תנועה': 'TextEdit', 'התנגדות_תנועה': 'TextEdit', 'סטטוטוריקה': 'TextEdit', 'ריבוי_תשתיות': 'TextEdit', 'תחנות_לאיתור_1': 'TextEdit', 'הערות_למודד': 'TextEdit', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'TextEdit', 'מדידה': 'TextEdit', 'איתור': 'TextEdit', 'תאריך_קבלת_מדידה_ואיתור': 'TextEdit', });
lyr__2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'TABA': 'header label - visible with data', 'MIGRASH': 'header label - visible with data', 'YEUD': 'header label - visible with data', 'Descr': 'header label - visible with data', 'Shape.STLe': 'header label - visible with data', 'Shape.STAr': 'header label - visible with data', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', 'path': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr__6.set('fieldLabels', {'OBJECTID': 'hidden field', 'fid': 'hidden field', 'מס_ד': 'header label - visible with data', 'סטטוס': 'header label - visible with data', 'כמות_תחנות': 'header label - visible with data', 'מיקום': 'header label - visible with data', 'כמות_מכולה': 'header label - visible with data', 'כמות_עגלות': 'header label - visible with data', 'כמות_טמונים_קיימים': 'header label - visible with data', 'כמות_פחים_מתוכננים': 'header label - visible with data', 'כמות_טמונים___הכנה': 'header label - visible with data', 'הכנה_לפח': 'header label - visible with data', 'y': 'header label - visible with data', 'x': 'header label - visible with data', 'הערות': 'header label - visible with data', 'תחנות_לאיתור': 'header label - visible with data', 'מס__תחנות_שעודכנו': 'header label - visible with data', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'header label - visible with data', 'תאור_הסבר': 'header label - visible with data', 'גוש': 'header label - visible with data', 'חלקה': 'header label - visible with data', 'ייעודי_קרקע': 'header label - visible with data', 'ייעודי_קרקע_הערות': 'header label - visible with data', 'בית_משותף': 'header label - visible with data', 'בית_משותף_צמוד': 'header label - visible with data', 'בית_משותף__הערות_': 'header label - visible with data', 'בית_משותף__לא_ניתן_לביצוע_': 'header label - visible with data', 'תנועה': 'header label - visible with data', 'תנועה__עדכון_חדש_': 'header label - visible with data', 'תכניות_תנועה_מאושרות': 'header label - visible with data', 'הערות_תנועה': 'header label - visible with data', 'התנגדות_תנועה': 'header label - visible with data', 'סטטוטוריקה': 'header label - visible with data', 'ריבוי_תשתיות': 'header label - visible with data', 'תחנות_לאיתור_1': 'header label - visible with data', 'הערות_למודד': 'header label - visible with data', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'header label - visible with data', 'מדידה': 'header label - visible with data', 'איתור': 'header label - visible with data', 'תאריך_קבלת_מדידה_ואיתור': 'header label - visible with data', });
lyr_22125_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'fid': 'hidden field', 'מס_ד': 'header label - visible with data', 'סטטוס': 'header label - visible with data', 'כמות_תחנות': 'header label - visible with data', 'מיקום': 'header label - visible with data', 'כמות_מכולה': 'header label - visible with data', 'כמות_עגלות': 'header label - visible with data', 'כמות_טמונים_קיימים': 'header label - visible with data', 'כמות_פחים_מתוכננים': 'header label - visible with data', 'כמות_טמונים___הכנה': 'header label - visible with data', 'הכנה_לפח': 'header label - visible with data', 'y': 'header label - visible with data', 'x': 'header label - visible with data', 'הערות': 'header label - visible with data', 'תחנות_לאיתור': 'header label - visible with data', 'מס__תחנות_שעודכנו': 'header label - visible with data', 'חישוב_עדכון_תחנה_לשכר_תכנון': 'header label - visible with data', 'תאור_הסבר': 'header label - visible with data', 'גוש': 'header label - visible with data', 'חלקה': 'header label - visible with data', 'ייעודי_קרקע': 'header label - visible with data', 'ייעודי_קרקע_הערות': 'header label - visible with data', 'בית_משותף': 'header label - visible with data', 'בית_משותף_צמוד': 'header label - visible with data', 'בית_משותף__הערות_': 'header label - visible with data', 'בית_משותף__לא_ניתן_לביצוע_': 'header label - visible with data', 'תנועה': 'header label - visible with data', 'תנועה__עדכון_חדש_': 'header label - visible with data', 'תכניות_תנועה_מאושרות': 'header label - visible with data', 'הערות_תנועה': 'header label - visible with data', 'התנגדות_תנועה': 'header label - visible with data', 'סטטוטוריקה': 'header label - visible with data', 'ריבוי_תשתיות': 'header label - visible with data', 'תחנות_לאיתור_1': 'header label - visible with data', 'הערות_למודד': 'header label - visible with data', 'התייחסות_למדידה_ואיתור_לאחר_בדיקה': 'header label - visible with data', 'מדידה': 'header label - visible with data', 'איתור': 'header label - visible with data', 'תאריך_קבלת_מדידה_ואיתור': 'header label - visible with data', });
lyr_22125_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});