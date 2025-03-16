// api.js
const API_BASE_URL = "https://healthcare-server.onrender.com"; // Your live Render URL

// User Login
export async function loginUser(credentials) {
  const response = await fetch(`${API_BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  });
  return response.json();
}

// User Registration
export async function registerUser(data) {
  const response = await fetch(`${API_BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Example: Get User Profile (Protected Route)
export async function getUserProfile(token) {
  const response = await fetch(`${API_BASE_URL}/api/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response.json();
}
