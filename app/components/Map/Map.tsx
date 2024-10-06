import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { useUserLocation } from '../../hooks/useUserLocation';

const Map: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
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
  }, [latitude, longitude]);

  return <div id="map" className={styles.map}></div>;
};

export default Map;