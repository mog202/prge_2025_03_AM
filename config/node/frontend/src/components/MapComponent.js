import React, { useRef, useEffect, useState } from 'react';

import Button from "@mui/material/Button";
// import RoomIcon from '@mui/icons-material/Room';

import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

import OSM from 'ol/source/OSM';
import './MapComponent.css';

import { useGeographic } from 'ol/proj';

import TileWMS from 'ol/source/TileWMS';

import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

import Point from "ol/geom/Point";
import Feature from "ol/Feature";

function MapComponent() {

    const [toggleMarkerButton, setToggleMarkerButton] = useState(false);

    const mapRef = useRef(null);

    const handleMarkerButtonClick = () => {
        setToggleMarkerButton(!toggleMarkerButton);
        console.log(!toggleMarkerButton);
    };

    useGeographic();

    useEffect(() => {

        const markerSource = new VectorSource();

        const markerLayer = new VectorLayer({
            source: markerSource
        });

        const map = new Map({
            target: mapRef.current,

            layers: [

                new TileLayer({
                    source: new OSM(),
                }),

                markerLayer,

                new TileLayer({
                    source: new TileWMS({
                        url: 'http://localhost:9000/geoserver/prge/wms?',
                        params: {
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
                        params: {
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
                        params: {
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
                        params: {
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
                        params: {
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
                        params: {
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
                        params: {
                            'LAYERS': 'prge:PEC015_bud',
                            'TILED': true
                        },
                        serverType: 'geoserver',
                        transition: 0
                    })
                })

            ],

            view: new View({
                center: [21, 52.23],
                zoom: 6
            })
        });

        map.on("click", function (event) {

            if (!toggleMarkerButton) return;
            markerSource.clear();
            const coordinates = event.coordinate;

            const marker = new Feature({
                geometry: new Point(coordinates)
            });

            markerSource.addFeature(marker);

        });

        return () => map.setTarget(null);

    }, [toggleMarkerButton]);

    return (
        <>
            <div
                className='mapComponent'
                ref={mapRef}
            ></div>

            <Button
                variant="contained"
                // startIcon={<RoomIcon />}
                sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 1000
                }}
                onClick={handleMarkerButtonClick}
            >
                Marker
            </Button>
        </>
    );
}

export default MapComponent;