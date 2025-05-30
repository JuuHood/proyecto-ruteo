import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => axios.get(API_URL);
export const getPostById = (id) => axios.get('${API_URL}/${id}');
export const createPost = (data) => axios.post(API_URL,data);
export const updatePost = (id, data) => axios.put('${API_URL}/${ID}',data);
export const deletePost = (id) => axios.delete('${API_URL}/${id}');


//ver//