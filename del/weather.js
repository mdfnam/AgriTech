// Define the function to get weather forecast
async function getWeatherForecast(lat, lon, apiKey) {
  // Construct the API URL
  const url = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
      // Make the API call
      const response = await fetch(url);

      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data
      const data = await response.json();

      // Log the data to the console
      console.log(data);

      // You can now work with the data
      // For example, let's log the main weather details of the first forecast entry
      if (data.length > 0) {
          const firstForecast = data[0];
          console.log(`Temperature: ${firstForecast.main.temp}K`);
          console.log(`Weather: ${firstForecast.weather[0].description}`);
      }
  } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching the weather data:', error);
  }
}

// Example usage:
// Replace 'YOUR_API_KEY' with your actual API key from Agromonitoring
const apiKey = '6ff052282f3117c04214783293138bfb';
const lat = 25.5941; // Latitude of the location
const lon = 85.1376; // Longitude of the location

// Call the function to get weather forecast
getWeatherForecast(lat, lon, apiKey);
