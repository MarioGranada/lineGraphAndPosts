import axios from 'axios';

const baseAxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getUsers = () => {
  return baseAxiosInstance.get('/users');
};

export const getAllPosts = () => {
  return baseAxiosInstance.get('/posts');
};

export const getPostsByUserId = userId => {
  return baseAxiosInstance.get('/posts', {
    params: {
      userId
    }
  });
};

export const getCommentsByPostId = postId => {
  return baseAxiosInstance.get('/comments', {
    params: {
      postId
    }
  });
};
