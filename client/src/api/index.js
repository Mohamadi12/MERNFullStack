import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchAllPosts = async () => {
    const {data}=await axios.get(url);
    return data
};

export const createPost = async (values) => {
  const postCreators=await axios.post(url,{...values})
};

export const updatePost = async (id, values) => {
  const updated=await axios.put(`${url}/${id}`,values)
};

export const deletePost =async (id) => {
  const deleted=await axios.delete(`${url}/${id}`);
};

export const likePost =async (id) => {
  const liked=await axios.patch(`${url}/${id}/likePost`);
};
