import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/gallery/`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const getPhotoById = createAsyncThunk(
  'gallery/getPhotoById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/gallery/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createPhoto = createAsyncThunk(
  'gallery/postPhoto',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/gallery', arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deletePhoto = createAsyncThunk(
  'gallery/deletePhoto',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/gallery/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

