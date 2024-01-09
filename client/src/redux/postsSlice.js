import { createSlice } from '@reduxjs/toolkit'

export const postsSlice= createSlice({
  name: 'posts',
  initialState:[],
  reducers: {
    fetchPosts: (state, action) => {
      return action.payload;
    },
    updatePosted: (state, action) => {
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    likePost: (state, action) => {
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    createPosts: (state, action) => {
      return [...state, action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((post) => post._id !== action.payload);
    },
  },
})
export const{fetchPosts, updatePosted, createPosts, deletePost, likePost}=postsSlice.actions
export default postsSlice.reducer