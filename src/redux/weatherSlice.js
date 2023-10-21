import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state

const initialState = {
  filter: '',
  cities: [], // Array to store city data
  selectedCity: null, // Store the selected city's weather data
  loading: false,
  error: null,
};

// Define your API base URL

const API_BASE_URL = 'https://api.weatherapi.com/v1';

// Create an async thunk to fetch city weather data

export const fetchCityWeatherAsync = createAsyncThunk(
  'weather/fetchCityWeather',
  async (cityName) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/current.json?key=04933f83120b4ba293a145243231710&q=${cityName}`);
      return response.data;
    } catch (error) {
      throw error.response.data.error.message;
    }
  },
);

export const resetCities = () => (dispatch) => {
  dispatch({ type: 'weather/resetCities' });
}; // New code introduced

// create a slice for weather data
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeatherAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCityWeatherAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCity = action.payload;
        state.cities = [...state.cities, action.payload.location.name];
      })
      .addCase(fetchCityWeatherAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export action creators
export const { setFilter, selectCity } = weatherSlice.actions;

// Export the reducer

export default weatherSlice.reducer;
