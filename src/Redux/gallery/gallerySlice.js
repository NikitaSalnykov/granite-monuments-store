import { createSlice } from '@reduxjs/toolkit';
import {
  createPhoto,
  deletePhoto,
  fetchGallery,
  getPhotoById,
} from './galleryOperation';

const initialProducts = {
  gallery: [],
  isLoading: false,
  error: null,
  isCreated: false,
  selectedPhoto: null,
};

const rejectFunc = (state, action) => {
  return {
    gallery: state.gallery,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    gallery: state.gallery,
    isLoading: true,
    error: null,
  };
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialProducts,
  reducers: {
    resetCreated: (state) => {
      state.isCreated = false;
    },
  },
  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchGallery.pending, pendingFunc);
    builder.addCase(fetchGallery.fulfilled, (_, action) => {
      return {
        gallery: action.payload,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchGallery.rejected, rejectFunc);

    //getById

    builder.addCase(getPhotoById.pending, pendingFunc);
    builder.addCase(getPhotoById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedPhoto: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getPhotoById.rejected, rejectFunc);

    // create

    builder.addCase(createPhoto.pending, pendingFunc);
    builder.addCase(createPhoto.fulfilled, (state, action) => {
      return {
        gallery: [action.payload.data, ...state.gallery],
        isLoading: false,
        error: null,
        isCreated: true,
      };
    });
    builder.addCase(createPhoto.rejected, rejectFunc);

    // delete

    builder.addCase(deletePhoto.pending, pendingFunc);
    builder.addCase(deletePhoto.fulfilled, (state, action) => {
      return {
        gallery: [...state.gallery.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deletePhoto.rejected, rejectFunc);

  },
});

export const galleryReducer = gallerySlice.reducer;
export const { resetCreated } = gallerySlice.actions;
