import React, { useState, useEffect } from 'react';
import {
  getPostsByUserId,
  getCommentsByPostId,
  getAllPosts
} from '../../shared/services/PostsAPI/PostAPI';
import DataTable from '../../shared/components/DataTable/DataTable';

const PostsContainer = () => {
  const [postsState, setPostsState] = useState([]);
  const [postIdState, setPostIdState] = useState(null);
  const [userIdState, setUserIdState] = useState(null);
  const [postsByUserState, setPostsByUserState] = useState([]);
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    getAllPosts().then(({ data }) => {
      setPostsState(data);
    });
  }, []);

  useEffect(() => {
    if (userIdState) {
      getPostsByUserId(userIdState).then(({ data }) => {
        setPostsByUserState(data);
      });
    } else {
      setPostsByUserState([]);
    }
  }, [userIdState]);

  useEffect(() => {
    if (postIdState) {
      getCommentsByPostId(postIdState).then(({ data }) => {
        setCommentsState(data);
      });
    } else {
      setPostsByUserState([]);
    }
  }, [postIdState]);

  const postColumns = [
    {
      dataField: 'userId',
      text: 'User Id',
      formatter: cell => (
        <span
          onClick={() => {
            setUserIdState(cell);
          }}
        >
          {cell}
        </span>
      )
    },
    {
      dataField: 'id',
      text: 'Post Id',
      formatter: cell => (
        <span
          onClick={() => {
            setPostIdState(cell);
          }}
        >
          {cell}
        </span>
      )
    },
    {
      dataField: 'title',
      text: 'Title'
    },
    {
      dataField: 'body',
      text: 'Body'
    }
  ];

  const commentsColumns = [
    {
      dataField: 'postId',
      text: 'Post Id'
    },
    {
      dataField: 'id',
      text: 'Comment Id'
    },
    {
      dataField: 'name',
      text: 'Name and Email',
      formatter: (cell, row) => (
        <span>
          {cell} <br /> {row.email}
        </span>
      )
    },
    {
      dataField: 'body',
      text: 'Comment Body'
    }
  ];

  return (
    <div className="post-container">
      <DataTable keyField="id" data={postsState} columns={postColumns} />
      {userIdState && (
        <DataTable
          keyField="id"
          data={postsByUserState}
          columns={postColumns}
        />
      )}
      {postIdState && (
        <DataTable
          keyField="id"
          data={commentsState}
          columns={commentsColumns}
        />
      )}
    </div>
  );
};

export default PostsContainer;
