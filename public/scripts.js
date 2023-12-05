// public/scripts.js

const sideNav = document.querySelector('.side-nav');
const mainContent = document.querySelector('body');

function toggleSideNav() {
    sideNav.classList.toggle('open');
    mainContent.classList.toggle('open');
}

// You can add more JavaScript functionality here as needed for your project

// public/scripts.js

// Existing code...

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Implement your login logic here
  console.log(`Login: Email - ${email}, Password - ${password}`);
}

function register() {
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Implement your registration logic here
  console.log(`Register: Name - ${name}, Email - ${email}, Password - ${password}`);
}

// You can add more JavaScript functionality here as needed for your project


// public/scripts.js

// Existing code...

function getUserLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showUserLocation, handleLocationError);
  } else {
      alert('Geolocation is not supported by this browser.');
  }
}

function showUserLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const userLocationElement = document.getElementById('userLocation');
  userLocationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function handleLocationError(error) {
  switch (error.code) {
      case error.PERMISSION_DENIED:
          alert('User denied the request for Geolocation.');
          break;
      case error.POSITION_UNAVAILABLE:
          alert('Location information is unavailable.');
          break;
      case error.TIMEOUT:
          alert('The request to get user location timed out.');
          break;
      case error.UNKNOWN_ERROR:
          alert('An unknown error occurred.');
          break;
  }
}

// You can add more JavaScript functionality here as needed for your project

// Example: Fetch weather data and update the dashboard
function fetchWeatherData() {
  // Implement the logic to fetch weather data from your preferred API
  // Update the #weather-summary element with the fetched data
}

// Example: Fetch market price data and update the dashboard
function fetchMarketData() {
  // Implement the logic to fetch market data from your preferred API
  // Update the #market-summary element with the fetched data
}

// Example: Fetch crop recommendations data and update the dashboard
function fetchCropRecommendations() {
  // Implement the logic to fetch crop recommendations from your preferred API
  // Update the #crop-recommendations element with the fetched data
}

// You can call these functions when the dashboard section is loaded or when the user navigates to it

// public/scripts.js

// Existing code...

async function register() {
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Implement logic to send registration data to the server
  const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
  });

  // Handle the server response as needed
  const data = await response.json();
  console.log(data);
}

async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Implement logic to send login data to the server
  const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  // Handle the server response as needed
  const data = await response.json();
  console.log(data);
}

// ... (existing code)


// public/scripts.js

// Existing code...

async function fetchUserData() {
  // Implement logic to fetch user data from the server
  const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Send the authentication token
      },
  });

  // Handle the server response as needed
  const data = await response.json();
  console.log(data);

  // Update the user interface with fetched user data
  document.getElementById('username').textContent = data.name;
  // Include additional updates based on user data
}

async function logout() {
  // Implement logic to log the user out (clear the authentication token, etc.)
  localStorage.removeItem('accessToken');
  // Redirect to the login page or update the UI accordingly
}

// ... (existing code)

// public/scripts.js

// Existing code...

// Example: Fetch crop management tips data and update the crop management section
function fetchCropManagementTips() {
  // Implement the logic to fetch crop management tips data from your preferred API
  // Update the #crop-management-tips element with the fetched data

  // Example using static data
  const cropManagementTipsData = [
      { crop: 'Maize', tip: 'Tip 1 for Maize management.' },
      { crop: 'Rice', tip: 'Tip 1 for Rice management.' },
      { crop: 'Wheat', tip: 'Tip 1 for Wheat management.' },
  ];

  const cropManagementTipsList = document.getElementById('crop-management-tips');
  cropManagementTipsList.innerHTML = '';

  cropManagementTipsData.forEach(({ crop, tip }) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${crop}: ${tip}`;
      cropManagementTipsList.appendChild(listItem);
  });
}

// You can call this function when the crop management section is loaded or when the user navigates to it

// public/scripts.js

// Existing code...

async function saveUserPreferences() {
  const preferredCrops = document.getElementById('preferred-crops').value;
  const preferredRegion = document.getElementById('preferred-region').value;

  // Implement logic to send user preferences data to the server
  const response = await fetch('/api/user/preferences', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ preferredCrops, preferredRegion }),
  });

  // Handle the server response as needed
  const data = await response.json();
  console.log(data);
}

// You can call this function when the user preferences section is submitted or when the user navigates to it

// public/scripts.js

// Existing code...

// Example: Fetch real-time weather data and update the weather section
async function fetchWeatherUpdates() {
  try {
      const response = await fetch('/api/weather');
      const data = await response.json();

      const weatherInfoElement = document.getElementById('weather-info');
      weatherInfoElement.textContent = `Temperature: ${data.temperature}°C, Conditions: ${data.conditions}`;
  } catch (error) {
      console.error('Error fetching weather updates:', error);
      const weatherInfoElement = document.getElementById('weather-info');
      weatherInfoElement.textContent = 'Failed to fetch weather data.';
  }
}

// You can call this function when the weather section is loaded or when the user navigates to it

// Example endpoint to fetch real-time weather updates
app.get('/api/weather', (req, res) => {
  // Implement logic to fetch real-time weather updates from a weather API
  // Respond with the fetched weather data or an error status
});

// Example: Show loading message while fetching weather updates
async function fetchWeatherUpdates() {
  const weatherInfoElement = document.getElementById('weather-info');
  weatherInfoElement.textContent = 'Fetching weather data...';

  try {
      const response = await fetch('/api/weather');
      const data = await response.json();

      weatherInfoElement.textContent = `Temperature: ${data.temperature}°C, Conditions: ${data.conditions}`;
  } catch (error) {
      console.error('Error fetching weather updates:', error);
      weatherInfoElement.textContent = 'Failed to fetch weather data.';
  }
}

// You can call this function when the weather section is loaded or when the user navigates to it

// Example: Handle errors and show appropriate messages
async function fetchWeatherUpdates() {
  const weatherInfoElement = document.getElementById('weather-info');
  weatherInfoElement.textContent = 'Fetching weather data...';

  try {
      const response = await fetch('/api/weather');
      
      if (!response.ok) {
          throw new Error('Failed to fetch weather data. Please try again later.');
      }

      const data = await response.json();

      weatherInfoElement.textContent = `Temperature: ${data.temperature}°C, Conditions: ${data.conditions}`;
  } catch (error) {
      console.error('Error fetching weather updates:', error);
      weatherInfoElement.textContent = error.message || 'Failed to fetch weather data.';
  }
}

// You can call this function when the weather section is loaded or when the user navigates to it

// public/scripts.js

// Existing code...

// Example: Fetch crop yields and update the crop yields section
async function fetchCropYields() {
  const cropYieldsList = document.getElementById('crop-yields-list');
  cropYieldsList.innerHTML = 'Fetching crop yields...';

  try {
      const response = await fetch('/api/crop-yields');
      
      if (!response.ok) {
          throw new Error('Failed to fetch crop yields. Please try again later.');
      }

      const data = await response.json();

      cropYieldsList.innerHTML = '';
      data.forEach(({ crop, yield }) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${crop}: ${yield} tons`;
          cropYieldsList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching crop yields:', error);
      cropYieldsList.innerHTML = error.message || 'Failed to fetch crop yields.';
  }
}

// Example: Fetch crop prices and update the crop prices section
async function fetchCropPrices() {
  const cropPricesList = document.getElementById('crop-prices-list');
  cropPricesList.innerHTML = 'Fetching crop prices...';

  try {
      const response = await fetch('/api/crop-prices');
      
      if (!response.ok) {
          throw new Error('Failed to fetch crop prices. Please try again later.');
      }

      const data = await response.json();

      cropPricesList.innerHTML = '';
      data.forEach(({ crop, price }) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${crop}: $${price}`;
          cropPricesList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching crop prices:', error);
      cropPricesList.innerHTML = error.message || 'Failed to fetch crop prices.';
  }
}

// You can call these functions when the crop yields and prices section is loaded or when the user navigates to it
// dashboard-scripts.js

// Example: Fetch user information and update the dashboard
function fetchUserInfoForDashboard() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
      console.error('User not authenticated. Redirect to login or show error message.');
      // Redirect the user to the login page or show an error message
      return;
  }

  fetch('/api/user-info', {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Access denied. Please check your permissions.');
      }

      return response.json();
  })
  .then(data => {
      const userNameElement = document.getElementById('user-name');
      const userEmailElement = document.getElementById('user-email');

      userNameElement.textContent = `Name: ${data.name}`;
      userEmailElement.textContent = `Email: ${data.email}`;
  })
  .catch(error => {
      console.error('Error fetching user information:', error);
      // Display error message to the user or handle accordingly
  });
}

// Example: Save user preferences for the dashboard
function saveUserPreferencesForDashboard() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
      console.error('User not authenticated. Redirect to login or show error message.');
      // Redirect the user to the login page or show an error message
      return;
  }

  const favoriteCrop = document.getElementById('favorite-crop').value;
  const notificationPreference = document.getElementById('notification-preference').value;

  fetch('/api/save-preferences', {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favoriteCrop, notificationPreference }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to save preferences. Please try again.');
      }

      // Optionally, update UI to indicate successful save
      console.log('User preferences saved successfully');
  })
  .catch(error => {
      console.error('Error saving user preferences:', error);
      // Display error message to the user or handle accordingly
  });
}

// Call fetchUserInfoForDashboard() when the dashboard section is loaded or when the user navigates to it
// Example endpoint for saving user preferences for the dashboard
app.post('/api/dashboard/save-preferences', authenticateUser, (req, res) => {
  const { favoriteCrop, notificationPreference } = req.body;
  // Save user preferences to the database
  // Respond with success or failure status
});
// dashboard-scripts.js

// Example: Fetch user information and update the dashboard
function fetchUserInfoForDashboard() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
      console.error('User not authenticated. Redirect to login or show error message.');
      // Redirect the user to the login page or show an error message
      return;
  }

  fetch('/api/dashboard/user-info', {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Access denied. Please check your permissions.');
      }

      return response.json();
  })
  .then(data => {
      const userNameElement = document.getElementById('user-name');
      const userEmailElement = document.getElementById('user-email');

      userNameElement.textContent = `Name: ${data.name}`;
      userEmailElement.textContent = `Email: ${data.email}`;
  })
  .catch(error => {
      console.error('Error fetching user information:', error);
      // Display error message to the user or handle accordingly
  });
}

// Example: Save user preferences for the dashboard
function saveUserPreferencesForDashboard() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
      console.error('User not authenticated. Redirect to login or show error message.');
      // Redirect the user to the login page or show an error message
      return;
  }

  const favoriteCrop = document.getElementById('favorite-crop').value;
  const notificationPreference = document.getElementById('notification-preference').value;

  fetch('/api/dashboard/save-preferences', {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favoriteCrop, notificationPreference }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to save preferences. Please try again.');
      }

      // Optionally, update UI to indicate successful save
      console.log('User preferences saved successfully');
  })
  .catch(error => {
      console.error('Error saving user preferences:', error);
      // Display error message to the user or handle accordingly
  });
}

// Call fetchUserInfoForDashboard() when the dashboard section is loaded or when the user navigates to it

// Function to navigate to the dashboard
function navigateToDashboard() {
  // Redirect to the dashboard.html or use your preferred method of navigation
  window.location.href = 'dashboard.html';
}