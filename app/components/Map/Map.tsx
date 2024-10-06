import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { useUserLocation } from '../../hooks/useUserLocation';
import MapIcon from './MapIcon';

const Map: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const circleRef = useRef<L.Circle | null>(null);
 
  const { latitude, longitude } = useUserLocation();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([latitude, longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([latitude, longitude], 13);
    }

    if (!markerRef.current && mapRef.current) {
      markerRef.current = L.marker([latitude, longitude], { icon: MapIcon })
        .addTo(mapRef.current)
        .bindPopup("You are here!")
        .openPopup();
    }

    if (!circleRef.current && mapRef.current) {
      circleRef.current = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 500
      }).addTo(mapRef.current);
    } else if (circleRef.current) {
      circleRef.current.setLatLng([latitude, longitude]);
    }
    
  }, [latitude, longitude]);

  return <div id="map" data-testid="map-container" className={styles.map}></div>;
};

export default Map;