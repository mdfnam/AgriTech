async function createPolygon(name, coordinates) {
  const apiUrl = 'http://api.agromonitoring.com/agro/1.0/polygons';
  const apiKey = '6ff052282f3117c04214783293138bfb';

  const body = {
      name: name,
      geo_json: {
          type: 'Feature',
          properties: {},
          geometry: {
              type: 'Polygon',
              coordinates: [coordinates]  // Assuming coordinates is an array of coordinate pairs
          }
      }
  };

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  };

  try {
      const response = await fetch(`${apiUrl}?appid=${apiKey}`, requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Polygon ID:', responseData.id);
      console.log('Polygon Center:', responseData.center);
      console.log('Polygon Area:', responseData.area);
  } catch (error) {
      console.error('Error creating polygon:', error.message);
  }
}

// Example usage
const polygonName = 'Polygon Sample';
const coordinates = [
  [-121.1958, 37.6683],
  [-121.1779, 37.6687],
  [-121.1773, 37.6792],
  [-121.1958, 37.6792],
  [-121.1958, 37.6683]
];

createPolygon(polygonName, coordinates);
