import axios from 'axios';
import { Platform } from 'react-native';

// Use 10.0.2.2 for Android Emulator, localhost for iOS/Web, or your actual local IP
// For physical devices, you MUST use your computer's local network IP (e.g., 192.168.1.x)
const getBaseUrl = () => {
  if (__DEV__) {
    if (Platform.OS === 'android') {
       // Android Emulator loops back to the host machine via 10.0.2.2
      return 'http://10.0.2.2:5222';
    }
    // Web and iOS Simulator
    return 'http://localhost:5222';
  }
  // Production URL
  return 'https://api.getrip.com'; 
};

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor (Attach Auth Tokens Here)
apiClient.interceptors.request.use(
  async (config) => {
    // Example: const token = await SecureStore.getItemAsync('user_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Handle Global Errors like 401 Unauthorized)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Example: If 401, trigger a global logout function or refresh token
    // if (error.response?.status === 401) {
    //   useAuthStore.getState().logout();
    // }
    return Promise.reject(error);
  }
);
