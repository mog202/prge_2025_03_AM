import React, {useRef, useEffect} from 'react';
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

import OSM from 'ol/source/OSM';
import './MapComponent.css';
import {useGeographic} from 'ol/proj'
import TileWMS from 'ol/source/TileWMS';


function MapComponent() {

    const mapRef = useRef(null);


    useGeographic();

    useEffect(() => {
        const map = new Map(
            {
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:AAL020_zabudowa',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:ABH140_wody',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:AEC015_lasy',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:LAP030',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:LBH140',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:LEC015',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    }),

                    new TileLayer({
                        source: new TileWMS({
                            url: 'http://localhost:9000/geoserver/prge/wms?',
                            params:{
                                'LAYERS': 'prge:PEC015_bud',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                            transition: 0
                        })
                    })

                ],
                view: new View(
                    {
                        center: [21,52.23],zoom:6
                    }
                )
            }

        )
        return () => map.setTarget(null)

    }, []);


    return (
        <div className='mapComponent' ref={mapRef}></div>
    );
}

export default MapComponent;