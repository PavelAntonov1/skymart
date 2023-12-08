const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // earth radius in kilometers

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // distance in kilometers

  return distance;
};

export const findClosestStore = (userCoordinates, stores) => {
  return stores.reduce(
    (acc, store) => {
      const distance = calculateDistance(
        userCoordinates.lat,
        userCoordinates.long,
        store.geolocation.lat,
        store.geolocation.long
      );

      if (distance < acc.distance) {
        return {
          store,
          distance,
        };
      }

      return acc;
    },
    { store: stores[0], distance: Infinity }
  ).store;
};
