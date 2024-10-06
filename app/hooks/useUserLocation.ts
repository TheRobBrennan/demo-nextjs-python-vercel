import { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

const DEFAULT_LOCATION: Location = {
  latitude: 0,
  longitude: 0,
};

export const useUserLocation = () => {
  const [location, setLocation] = useState<Location>(() => {
    const savedLocation = localStorage.getItem('userLocation');
    console.log('Initial location:', savedLocation);
    return savedLocation ? JSON.parse(savedLocation) : DEFAULT_LOCATION;
  });

  useEffect(() => {
    console.log('useUserLocation effect running');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Geolocation success:', position);
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(newLocation);
          localStorage.setItem('userLocation', JSON.stringify(newLocation));
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return location;
};