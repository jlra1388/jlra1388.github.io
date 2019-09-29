(function (){

//CREACIÓN DE LA VARIABLE MAP, CLASE OL.MAP - COMPONENTE PRINCIPAL DEL VISOR
var mapa = new L.Map({
    target: 'map',
    

      //ASIGNACIÓN DEL CENTRO DEL GEOVISOR (ORIGEN), DEL ZOOM INICIAL, DEL ZOOM MÁXIMO Y ZOOM MÍNIMO
      center: [14.29500, -87.54096],
      zoom: 12,
      minZoom: 2,
      maxZoom: 20,
      
       

    //CREACIÓN DE LOS CONTROLES POR DEFECTO QUE NOS PROPORCIONA LA BIBLIOTECA DE LEAFLET
		zoomControl: false,
		fullscreenControl: {pseudoFullscreen: false, position: 'topleft'},
             
		
    
    //DEFINICIÓN DE LAS CAPAS BASE Y CAPAS VECTORIAL QUE PODREMOS VISUALIZAR
    layers: [
    

          //CREACIÓN DEL GRUPO DE CAPAS BASE
      new L.layerGroup({
           'title': 'Basemaps',
            layers: [
           
          //ASIGNACIÓN DE LA CAPA BASE QUE TENDRÁ AL INICIARSE EL GEOVISOR
          //SERÁ UN BINGMAP DE TIPO AERIAL CON ETIQUETAS
          new L.tileLayer.bing({
        
          title: 'BingMaps Aereo con etiquetas',
          type: 'base',
          visible: true,
          source: new L.tileLayer.bing({
                bingMapsKey: 'Ag9zhTH0YVq_SspvzfsTYuR7WZqu39-ORW5fj3s5PgyZszHTpaL39NwzuBi8J1oW',
                imagerySet: 'AerialWithLabels'

                })

        }),
          
          //CREACIÓN DE OTRAS CAPAS BASE COMO ALTERNATIVAS A LA QUE SE ASIGNÓ POR DEFECTO
          
          //CAPA BASE DE TIPO TONER
          new L.tileLayer({
             title: 'toner',
             type: 'base',
             visible: false,
             source: new L.StamenTileLayer({
               layer: 'toner'
             })
         }),

          //CAPA BASE DE TIPO OPEN STREET MAP 
          new L.tileLayer({
            title: 'OSM',
            type: 'base',
            visible: false,
            source: L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
		{attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
		id: 'mapbox.streets-satellite', 
		accessToken:'pk.eyJ1Ijoiam9hcXVpbnJleWVzIiwiYSI6ImNrMDV1cW1oeTBmcm0zY3QzZHFtejc4azUifQ.8td0uKuynZHNV8mAqJWcmg',
		maxZoom: 20,
		minZoom: 10,
		keyboard: true
		}),

		}),
		
	  ]
	  
	  })
	  
	  //CREACIÓN DE LA VARIABLE QUE ALMACENA EL CONTROL DE CAPAS QUE SE DESCARGO COMO PLUGIN APARTE 
		L.control.layers(Basemaps).addTo(mapa);
		
		});
/*
      //CREACIÓN DEL GRUPO DE CAPAS VECTORIALES
      new ol.layer.Group({
      title: 'Predios por municipio',
      visible: true,
      
      //DEFINICIÓN DE LAS CAPAS VECTORIALES Y SU ORIGEN
      layers: [
    
          //DEFINICIÓN DE LA CAPA DE PREDIOS DEL MUNICIPIO 0826
          //EN LA FUENTE DE DATOS SE COLOCA EL SERVICIO WMS QUE SE PUBLICÓ EN GEOSERVER
          new ol.layer.Tile({
          title: 'Municipio 0826',
          source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/Francisco_Morazan/wms?service=WMS&version=1.1.0&request=GetMap&layers=Francisco_Morazan:Predios_area_efectiva_2',
          params: {'LAYERS': 'Francisco_Morazan', 'TILED': true},
          serverType: 'geoserver'
     })  
 
}),
          //EJEMPLO DE CÓMO SE INGRESARÍAN OTRAS CAPAS QUE SE TUVIERAN LISTAS
          new ol.layer.Tile({
          title: 'Calquier otro municipio',
          source: new ol.source.TileWMS({
          url: ''
          //params: {'LAYERS': 'Francisco_Morazan', 'TILED': true},
          //serverType: 'geoserver'   
        
      })


   })

  ]

 })

]
  
});


//CREACIÓN DE WIDGETS (ELEMENTOS GRÁFICOS) QUE TENDRÁ EL GEOVISOR

//CREACIÓN DE LA VARIABLE QUE ALMACENA EL CONTROL DE CAPAS QUE SE DESCARGO COMO PLUGIN APARTE 
		var miGrupodeCapas = L.layerGroup ([mapa]).addTo(mapa);
		});

  //CREACIÓN DE LA BARRA DE CONTROL DEL ZOOM
  map.addControl(new ol.control.ZoomSlider());

  //CREACIÓN DE LA ESCALA
  map.addControl(new ol.control.ScaleLine());

  //CREACIÓN DE LA OPCIÓN DE PANTALLA COMPLETA
  map.addControl(new ol.control.FullScreen());

  //CREACIÓN DE LAS COORDENADAS DONDE SE UBICA EL MOUSE
  map.addControl(new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection:'EPSG:4326'
  }));

  //CREACIÓN DEL MAPA MINIATURA DE VISTA GENERAL O UBICACIÓN DEL MAPA
  map.addControl(new ol.control.OverviewMap());

  //CREACIÓN DE LA OPCIÓN DE DAR ZOOM MÁXIMO
  map.addControl(new ol.control.ZoomToExtent({
    'label':"Home",
    extent: [-87,14,-86,16]
    }));

  //CREACIÓN DEL CONTROL DE CAPAS QUE SE DESCARGO COMO PLUGIN APARTE
  map.addControl(layerSwitcher);
  
  //INTRUCCIÓN PARA MOSTRAR EL PANEL DE CAPAS
  layerSwitcher.showPanel();

}
*/
]

})

});
