$(document).ready(function() {

    //Tubo, Designacion Metrica, Un conductor, dos conductores, tres conductores
    var tabla4Cadena = `Artículo 358 – Tubo conduit metálico (EMT),16,½,104,61,78
Artículo 358 – Tubo conduit metálico (EMT),21,¾,182,106,137
Artículo 358 – Tubo conduit metálico (EMT),27,1,295,172,222
Artículo 358 – Tubo conduit metálico (EMT),35,1 ¼,513,300,387
Artículo 358 – Tubo conduit metálico (EMT),41,1 ½,696,407,526
Artículo 358 – Tubo conduit metálico (EMT),53,2,1147,671,866
Artículo 358 – Tubo conduit metálico (EMT),63,2 ½,2005,1173,1513
Artículo 358 – Tubo conduit metálico (EMT),78,3,3022,1767,2280
Artículo 358 – Tubo conduit metálico (EMT),91,3 ½,3949,2310,2980
Artículo 358 – Tubo conduit metálico (EMT),103,4,5046,2951,3808
Artículo 362 – Tubo conduit metálico (ENT),16,½,84,49,63
Artículo 362 – Tubo conduit metálico (ENT),21,¾,155,91,117
Artículo 362 – Tubo conduit metálico (ENT),27,1,269,157,203
Artículo 362 – Tubo conduit metálico (ENT),35,1 ¼,481,281,363
Artículo 362 – Tubo conduit metálico (ENT),41,1 ½,663,388,500
Artículo 362 – Tubo conduit metálico (ENT),53,2,1095,641,827
Artículo 348 – Tubo conduit metálico flexible (FMC),12,3/8,39,23,30
Artículo 348 – Tubo conduit metálico flexible (FMC),16,½,108,63,81
Artículo 348 – Tubo conduit metálico flexible (FMC),21,¾,182,106,137
Artículo 348 – Tubo conduit metálico flexible (FMC),27,1,279,163,211
Artículo 348 – Tubo conduit metálico flexible (FMC),35,1 ¼,437,256,330
Artículo 348 – Tubo conduit metálico flexible (FMC),41,1 ½,636,372,480
Artículo 348 – Tubo conduit metálico flexible (FMC),53,2,1117,653,843
Artículo 348 – Tubo conduit metálico flexible (FMC),63,2 ½,1678,982,1267
Artículo 348 – Tubo conduit metálico flexible (FMC),78,3,2417,1414,1824
Artículo 348 – Tubo conduit metálico flexible (FMC),91,3 ½,3290,1924,2483
Artículo 348 – Tubo conduit metálico flexible (FMC),103,4,4297,2513,3243
Artículo 342 – Tubo conduit metálico semipesado (IMC),16,½,117,69,89
Artículo 342 – Tubo conduit metálico semipesado (IMC),21,¾,200,117,151
Artículo 342 – Tubo conduit metálico semipesado (IMC),27,1,329,192,248
Artículo 342 – Tubo conduit metálico semipesado (IMC),35,1 ¼,564,330,425
Artículo 342 – Tubo conduit metálico semipesado (IMC),41,1 ½,759,444,573
Artículo 342 – Tubo conduit metálico semipesado (IMC),53,2,1241,726,937
Artículo 342 – Tubo conduit metálico semipesado (IMC),63,2 ½,1753,1026,1323
Artículo 342 – Tubo conduit metálico semipesado (IMC),78,3,2711,1586,2046
Artículo 342 – Tubo conduit metálico semipesado (IMC),91,3 ½,3616,2115,2729
Artículo 342 – Tubo conduit metálico semipesado (IMC),103,4,4624,2705,3490
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),12,3/8,65,38,49
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),16,½,108,63,81
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),21,¾,185,108,140
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),27,1,299,175,226
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),35,1 ¼,522,305,394
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),41,1 ½,676,395,510
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-B*),53,2,1108,648,836
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),12,3_8,66,39,50
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),16,½,107,62,80
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),21,¾,184,107,139
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),27,1,292,171,221
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),35,1¼,513,300,387
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),41,1½,690,403,520
Artículo 356 – Tubo conduit no metálico flexible hermético a los líquidos (LFNC-A*),53,2,1143,669,863
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),12,3/8,65,38,49
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),16,½,108,63,81
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),21,¾,185,108,140
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),27,1,299,175,226
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),35,1¼,522,305,394
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),41,1½,676,395,510
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),53,2,1108,648,836
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),63,2½,1668,976,1259
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),78,3,2559,1497,1931
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),91,3½,3327,1946,2511
Artículo 350 – Tubo conduit metálico flexible hermético a los líquidos (LFMC),103,4,4339,2538,3275
Artículo 344 –Tubo conduit metálico pesado (RMC),16,½,108,63,81
Artículo 344 –Tubo conduit metálico pesado (RMC),21,¾,187,109,141
Artículo 344 –Tubo conduit metálico pesado (RMC),27,1,303,177,229
Artículo 344 –Tubo conduit metálico pesado (RMC),35,1 ¼,522,305,394
Artículo 344 –Tubo conduit metálico pesado (RMC),41,1 ½,707,413,533
Artículo 344 –Tubo conduit metálico pesado (RMC),53,2,1165,681,879
Artículo 344 –Tubo conduit metálico pesado (RMC),63,2 ½,1663,972,1255
Artículo 344 –Tubo conduit metálico pesado (RMC),78,3,2565,1500,1936
Artículo 344 –Tubo conduit metálico pesado (RMC),91,3 ½,3424,2003,2584
Artículo 344 –Tubo conduit metálico pesado (RMC),103,4,4408,2578,3326
Artículo 344 –Tubo conduit metálico pesado (RMC),129,5,6916,4045,5220
Artículo 344 –Tubo conduit metálico pesado (RMC),155,6,9975,5834,7528
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,16,½,75,44,56
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,21,¾,139,82,105
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,27,1,236,138,178
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,35,1¼,424,248,320
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,41,1½,585,342,442
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,53,2,983,575,742
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,63,2½,1410,825,1064
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,78,3,2200,1287,1660
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,91,3½,2972,1738,2243
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,103,4,3852,2253,2907
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,129,5,6105,3571,4607
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,155,6,8752,5119,6605
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,16,½,97,57,74
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,21,¾,173,101,131
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,27,1,284,166,214
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,35,1¼,495,290,374
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,41,1½,679,397,513
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,53,2,1126,658,849
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,63,2½,1605,939,1212
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,78,3,2487,1455,1877
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,91,3½,3327,1946,2511
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,103,4,4288,2508,3237
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,129,5,6756,3952,5099
Artículo 352 – Tubo conduit rígido de PVC Cédula 40,155,6,9770,5714,7373
Artículo 353 – Tubo conduit Conduit HDPE,16,½,97,57,74
Artículo 353 – Tubo conduit Conduit HDPE,21,¾,173,101,131
Artículo 353 – Tubo conduit Conduit HDPE,27,1,284,166,214
Artículo 353 – Tubo conduit Conduit HDPE,35,1¼,495,290,374
Artículo 353 – Tubo conduit Conduit HDPE,41,1½,679,397,513
Artículo 353 – Tubo conduit Conduit HDPE,53,2,1126,658,849
Artículo 353 – Tubo conduit Conduit HDPE,63,2½,1605,939,1212
Artículo 353 – Tubo conduit Conduit HDPE,78,3,2487,1455,1877
Artículo 353 – Tubo conduit Conduit HDPE,91,3½,3327,1946,2511
Artículo 353 – Tubo conduit Conduit HDPE,103,4,4288,2508,3237
Artículo 353 – Tubo conduit Conduit HDPE,129,5,6756,3952,5099
Artículo 353 – Tubo conduit Conduit HDPE,155,6,9770,5714,7373
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,16,½,132,77,100
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,21,¾,222,130,168
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,27,1,370,216,279
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,35,1¼,604,353,456
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,41,1½,795,465,600
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,53,2,1245,728,940
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,63,2½,1863,1090,1406
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,78,3,2799,1637,2112
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,91,3½,3655,2138,2758
Artículo 352 – Tubo conduit rígido de PVC (PVC) Tipo A,103,4,4695,2746,3543
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,53,2,1324,774,999
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,78,3,2979,1743,2248
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,91,3½,3884,2272,2932
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,103,4,4937,2887,3726
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,129,5,7586,4437,5726
Artículo 352 – Tubo conduit rígido de PVC (PVC) Cédula 80,155,6,10776,6303,8133    
`;

//Tipo,tamAWG,Area
var tabla5Cadena = `TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,14,8.968
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,12,11.68
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,10,15.69
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,8,28.19
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,6,46.84
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,4,62.77
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,3,73.16
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,2,86
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1,122.6
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1/0,143.4
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,2/0,169.3
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,3/0,201.1
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,4/0,239.9
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,250,296.5
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,300,340.7
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,350,384.4
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,400,427
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,500,509.7
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,600,627.7
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,700,710.3
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,750,751.7
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,800,791.7
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,900,874.9
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1000,953.8
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1250,1200
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1500,1400
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,1750,1598
TW XF XFF THHW THW THW-2 RHH* RHW* RHW-2*,2000,1795
THHN THWN THWN-2,350,338.2
THHN THWN THWN-2,400,378.3
THHN THWN THWN-2,500,456.3
THHN THWN THWN-2,600,559.7
THHN THWN THWN-2,700,637.9
THHN THWN THWN-2,750,677.2
THHN THWN THWN-2,800,715.2
THHN THWN THWN-2,900,794.3
THHN THWN THWN-2,1000,869.5
XHHW ZW XHHW-2 XHH,14,8.968
XHHW ZW XHHW-2 XHH,12,11.68
XHHW ZW XHHW-2 XHH,10,15.68
XHHW ZW XHHW-2 XHH,8,28.19
XHHW ZW XHHW-2 XHH,6,38.06
XHHW ZW XHHW-2 XHH,4,52.52
XHHW ZW XHHW-2 XHH,3,62.06
XHHW ZW XHHW-2 XHH,2,73.94
XHHW ZW XHHW-2 XHH,1,98.97
XHHW ZW XHHW-2 XHH,1/0,117.7
XHHW ZW XHHW-2 XHH,2/0,141.3
XHHW ZW XHHW-2 XHH,3/0,170.5
XHHW ZW XHHW-2 XHH,4/0,206.3
XHHW ZW XHHW-2 XHH,250,251.9
XHHW ZW XHHW-2 XHH,300,292.6
XHHW ZW XHHW-2 XHH,350,333.3
XHHW ZW XHHW-2 XHH,400,373
XHHW ZW XHHW-2 XHH,500,450.6
XHHW ZW XHHW-2 XHH,600,561.9
XHHW ZW XHHW-2 XHH,700,640.2
XHHW ZW XHHW-2 XHH,750,679.5
XHHW ZW XHHW-2 XHH,800,717.5
XHHW ZW XHHW-2 XHH,900,796.8
XHHW ZW XHHW-2 XHH,1000,872.2
XHHW ZW XHHW-2 XHH,1250,1108
XHHW ZW XHHW-2 XHH,1500,1300
XHHW ZW XHHW-2 XHH,1750,1492
XHHW ZW XHHW-2 XHH,2000,1682
`;

//Tam,Area
    var tabla8Cadena = `18,1.06
16,1.68
14,2.68
12,4.25
10,6.76
8,10.76
6,17.09
4,27.19
3,34.28
2,43.23
1,55.8
1/0,70.41
2/0,88.74
3/0,111.9
4/0,141.1
250,168
300,201
350,235
400,268
500,336
600,404
700,471
750,505
800,538
900,606
1000,673
1250,842
1500,1011
1750,1180
2000,1349
`;

    //Funciones Utiles
    Array.prototype.unique=function(a){
        return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });

    //Variables Globales
    var conteo = 3;
    var tabla4 = dameTabla4( );    
    var tabla5 = dameTabla5( );
    var tabla8 = dameTabla8( );
    
    //Eventos
    let botonAdd = document.getElementById("botonAdd");    
    botonAdd.addEventListener("click", ()=>{agrega( )} );

    $(document).on('click', '.botonCalcular', function(){
        calcularTuberia( ); });

    //Agregamos el evento, es mejor ocupar esta forma para los eventos porque hace que funcione con elemntos creados dinamicamente  
    $(document).on('click', '.iconoRemove', function(){
        this.parentNode.parentNode.remove();
    });

    $(document).on('click', '.checkcaja', function(){
        if( this.checked === true){            
            this.parentNode.querySelector(".listaAislamiento").disabled=true;
            this.parentNode.querySelector(".listaCables").innerText = "" ; //Borramos
            //Agregamos los hijos
            let columncalibreDesnudo = uniqueColumn(tabla8, 0);
            for(let i = 0; i<columncalibreDesnudo.length; i++){
                let crearOption = document.createElement('option');
                crearOption.setAttribute("value", columncalibreDesnudo[i] );
                crearOption.setAttribute("label", columncalibreDesnudo[i] );
                this.parentNode.querySelector(".listaCables").appendChild(crearOption);
            }            
        }else{
            this.parentNode.querySelector(".listaAislamiento").disabled=false;
            actualizaCalibreAislamiento( this );
        }
    });
    
    $(document).on('click', '.listaAislamiento', function(){
        actualizaCalibreAislamiento( this );
    });


    //Agregar Datos
    agrega( );
    agregaListaTubo();

    function actualizaCalibreAislamiento( thisObjeto ){
        let valorAislamiento = thisObjeto.parentNode.querySelector(".listaAislamiento").value; 
        thisObjeto.parentNode.querySelector(".listaCables").innerText = "" ; //Borramos

            //Sacarmos codigo de lista de calibres
            let listaCalibre = [];
            for(let i = 0; i<tabla5.length; i++){
                if( valorAislamiento === tabla5[i][0]){
                    listaCalibre.push(tabla5[i][1]);
                }
            }
            //Ponemos la lista
            for(let i = 0; i<listaCalibre.length; i++){
                let crearOption = document.createElement('option');
                crearOption.setAttribute("value", listaCalibre[i] );
                crearOption.setAttribute("label", listaCalibre[i] );
                thisObjeto.parentNode.querySelector(".listaCables").appendChild(crearOption);
            }
    }
    
    function agregaListaTubo(){        
        let columnCero = uniqueColumn(tabla4, 0);
        let codigohtml = "";
        for(let i=0; i<columnCero.length;i++){
            codigohtml += `<option value="`+columnCero[i]+`">`+columnCero[i]+`</option>`;
        }

        document.getElementById("contenedorListaTubo").innerHTML = `
        <select class="listaTubo" id="listaTubo" name="tubo">`+codigohtml+`</select>`;

        //document.getElementById("contenedorCalculadora").style.width = "1000px";
    }

        

    function agrega( ){        
        //Sacamos codigo de aislamiento lista
        let columnCeroTabla5 = uniqueColumn(tabla5, 0);
        let codigohtmlAislameinto = "";
        for(let i=0; i<columnCeroTabla5.length;i++){
            codigohtmlAislameinto += `<option id="opcionAislamiento" value="`+columnCeroTabla5[i]+`">`+columnCeroTabla5[i]+`</option>`;
        }

        //Sacarmos codigo del primer lista
        let primeroLista = columnCeroTabla5[0];
        listaCalibre = [];
        for(let i=0; i<tabla5.length; i++){
            if( primeroLista === tabla5[i][0]){
                listaCalibre.push(tabla5[i][1]);
            }
        }
        let codigohtmlCalibre = "";
        for(let i=0; i<listaCalibre.length;i++){
            codigohtmlCalibre += `<option value="`+listaCalibre[i]+`">`+listaCalibre[i]+`</option>`;
        }


        var div = document.createElement('div');
        div.setAttribute('class', 'itemCables');
        //Estilo al div de cada Item
       // div.style.width =  `600px`;
    
        div.innerHTML = `
            <div class= "itemCables" id="itemCables">`+
                `<img class="iconoRemove" id="iconoRemove" src="img/logos/remove.png">`+
                `<input type="number" id="numeroItem" class="numeroItem" min="1" max="50" value="1">`+
                `<input class="checkcaja" id="checkcaja" type="checkbox" value="first_checkbox"><label class="laberDesnudo" >Desnudo</label>`+
                `<label class= "textoAislamiento" id="textoAislamiento" for="cars">Aislamiento</label>`+
                `<select class="listaAislamiento" id="listaAislamiento" name="aislamiento">`+codigohtmlAislameinto+`</select>`+
                `<label class= "textoCables" for="cars">Cable</label>`+
                `<select id="listaCables" class= "listaCables" name="cables">`+codigohtmlCalibre+`</select>`+
                `</div>`;
        document.getElementById("contenedorCables").appendChild(div);
        //Estilo
        //document.getElementById("contenedorCables").style.height = "auto";
        //document.getElementById("contenedorCables").style.width = "620px";
        //document.getElementById("contenedorCables").style.padding = "5px";                
    }

    function calcularTuberia( ){
                
        //Guardar la informacion
        let datosCables = [];
        let tipoTubo = document.getElementById("listaTubo").value;
        //Recopilar informacion obtenida
        let childrens = document.getElementById("contenedorCables").children;

        //Suma total de cables 
        let numCablesTotales = 0;

        for(let i=0; i<childrens.length; i++){//Recorrer cada fila Item
            let registros = [];
            let numeroCables = parseInt( childrens[i].querySelector(".numeroItem").value , 10);
            let caja = childrens[i].querySelector(".checkcaja").checked;
            let aislamiento = childrens[i].querySelector(".listaAislamiento").value;
            let calibre = childrens[i].querySelector(".listaCables").value;                        
            registros.push(numeroCables, caja, aislamiento, calibre);
            datosCables.push( registros );

            numCablesTotales += numeroCables;//Cables totales
        }
        //Suma total decables
        let sumaArea = 0;
        console.log("datos= "+ datosCables);//////////////////////////////
        console.log("datos tam= "+ datosCables.length);//////////////////////////////
        for(let i=0; i<datosCables.length; i++){
            sumaArea += buscaAreaCable( datosCables[i] );
        }
        console.log("Area= "+ sumaArea);//////////////////////////////
        sumaArea = sumaArea.toFixed(2);
        //Busqueda de tablas 
        let resultado = buscaTuberia( sumaArea, tipoTubo, numCablesTotales );
        
        if( resultado.length === 2 ){
            //Poner informacion en resultados
            let div = document.createElement('div');
            div.setAttribute('class', 'contenedorResultadosDiv');
            div.setAttribute('id', 'contenedorResultadosDiv');
            div.innerHTML = `
                <table class="tablaResultados" id="tablaResultados">
                    <head><tr class="encabezadoResultados"><th colspan="2">Resultados</th></tr></head>                            
                    <tr id="fila1"><td class="colum1">Area total</td><td>` + sumaArea + ` mm </td></tr>
                    <tr id="fila1"><td class="colum1">Designación Métrica</td><td>` + resultado[0] + ` mm  (`+ resultado[1] +`")  </td></tr>
                </table>`;  
            
            document.getElementById("contenedorResultado").removeChild(document.getElementById("contenedorResultadosDiv"));
            document.getElementById("contenedorResultado").appendChild(div);
        }else{
            if( resultado.length === 3 ){
                //Poner informacion en resultados
                let div = document.createElement('div');
                div.setAttribute('class', 'contenedorResultadosDiv');
                div.setAttribute('id', 'contenedorResultadosDiv');
                div.innerHTML = `
                    <table class="tablaResultados" id="tablaResultados">
                        <head><tr class="encabezadoResultados"><th colspan="2">Resultados</th></tr></head>                            
                        <tr id="fila1"><td class="colum1">Area total</td><td>` + sumaArea + ` mm </td></tr>
                        <tr id="fila1"><td class="colum1">Designación Métrica</td><td> Sobrepasa Area </td></tr>
                        <tr id="fila1"><td colspan="2" class="colum1"> Revisar `+ resultado[2].substring(0,12)+ ` El tamaño métrico maximo es de = `+ resultado[0] + ` mm  (`+ resultado[1] +`")</td></tr>
                    </table>`;  
            
                document.getElementById("contenedorResultado").removeChild(document.getElementById("contenedorResultadosDiv"));
                document.getElementById("contenedorResultado").appendChild(div);
            }
        }

        
    }

    function eliminar( ){
        console.log("hola") 
    }

    function buscaAreaCable( registro ){
        console.log("registro= "+ registro.length);//////////////////////////////
        let numeroCables = registro[0];
        let caja = registro[1];
        let aislamiento = registro[2];
        let calibre = registro[3];

        let sumaArea = 0;

        if( caja === true){//Desnudo
            for(let i = 0; i<tabla8.length; i++){
                if( calibre === tabla8[i][0] ){
                    let area = parseFloat( tabla8[i][1]);
                    sumaArea += numeroCables*area;
                    break;
                }
            }
        }else{// NO Desnudo
            for(let i = 0; i<tabla5.length; i++){
                if( aislamiento === tabla5[i][0] && calibre === tabla5[i][1] ){
                    let area = parseFloat( tabla5[i][2]);
                    sumaArea += numeroCables*area;
                    break;
                }
            }
        }
        console.log("SumaArea Registro= "+ sumaArea);//////////////////////////////
        return sumaArea;
    }

    function buscaTuberia( sumaArea, tipoTubo, numCablesTotales ){

        let columnaNumCables = (numCablesTotales===1)?3:(numCablesTotales===2)?4:5;

        let listaAreas = [];
        for(let i = 0; i<tabla4.length; i++){
            if(tipoTubo === tabla4[i][0] ){
                listaAreas.push(i)
            }      
        }

        let mejor = listaAreas[0];
        let j = 0;
        for( j = 0; j < listaAreas.length; j++){    
            let valorTabla = parseInt( tabla4[ listaAreas[j] ][columnaNumCables] );
            console.log("valor Tabla = " + valorTabla );   
            if(  sumaArea <= valorTabla ){
                mejor = listaAreas[j];
                break;
            }
        }

        //Comprobamos si se pasa de la tabla
        if( j === listaAreas.length){ //Porque recorreo todo el for
            let ultimo = listaAreas.pop( );
            return [ tabla4[ultimo][1] , tabla4[ultimo][2], tipoTubo] //
        }
        return [ tabla4[mejor][1] , tabla4[mejor][2] ];
    }

    function dameTabla4( ){
        let token = "";
        let caracter = "";
        let tabla = [];
        let registro = [];
        for(let i=0; i<tabla4Cadena.length;i++){
            let caracterAscii = tabla4Cadena.charCodeAt(i);
            let caracter = tabla4Cadena[i];
            //alert("caracter= "+ caracter +" CaracterAscii= "+ caracterAscii);
            if( caracterAscii !== 44 && caracterAscii !== 10){
                //if( caracterAscii !== 32)//Para quitar espacios
                    token += caracter;
            }else{ if( caracterAscii === 44 ){
                    //alert("Token= "+ token);
                    registro.push( token );
                    token = "";
                   }else{ if( caracterAscii === 10 ){
                            registro.push( token );
                            token = "";
                            tabla.push( registro );
                            registro = [];
                          }
                   }
            }
        }
        return tabla;
    }

    function dameTabla5( ){
        let token = "";
        let caracter = "";
        let tabla = [];
        let registro = [];
        for(let i=0; i<tabla5Cadena.length;i++){
            let caracterAscii = tabla5Cadena.charCodeAt(i);
            let caracter = tabla5Cadena[i];
            //alert("caracter= "+ caracter +" CaracterAscii= "+ caracterAscii);
            if( caracterAscii !== 44 && caracterAscii !== 10){
                //if( caracterAscii !== 32)//Para quitar espacios
                    token += caracter;
            }else{ if( caracterAscii === 44 ){
                    //alert("Token= "+ token);
                    registro.push( token );
                    token = "";
                   }else{ if( caracterAscii === 10 ){
                            registro.push( token );
                            token = "";
                            tabla.push( registro );
                            registro = [];
                          }
                   }
            }
        }
        return tabla;
    }

    function dameTabla8( ){
        let token = "";
        let caracter = "";
        let tabla = [];
        let registro = [];
        for(let i=0; i<tabla8Cadena.length;i++){
            let caracterAscii = tabla8Cadena.charCodeAt(i);
            let caracter = tabla8Cadena[i];
            //alert("caracter= "+ caracter +" CaracterAscii= "+ caracterAscii);
            if( caracterAscii !== 44 && caracterAscii !== 10){
                //if( caracterAscii !== 32)//Para quitar espacios
                    token += caracter;
            }else{ if( caracterAscii === 44 ){
                    //alert("Token= "+ token);
                    registro.push( token );
                    token = "";
                   }else{ if( caracterAscii === 10 ){
                            registro.push( token );
                            token = "";
                            tabla.push( registro );
                            registro = [];
                          }
                   }
            }
        }
        return tabla;
    }

    function uniqueColumn( tabla, columna ){
        let listaColumna = [];
        for(let i=0; i<tabla.length; i++){
            let fila = tabla[i];
            listaColumna.push( fila[columna] );
        }
        return listaColumna.unique();
    }



});
