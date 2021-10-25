import callBaseApi from '../base';

const post = {
  getPost: () =>
    callBaseApi({
      title: 'Post - Get Post',
      method: 'GET',
    }),
  createPost: ({
    username,
    title,
    content,
    created_datetime,
  }: {
    username: string;
    title: string;
    content: string;
    created_datetime: string;
  }) =>
    callBaseApi({
      title: 'Post - Create Post',
      method: 'POST',
      data: {
        username,
        title,
        content,
        created_datetime,
      },
    }),
  editPost: ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
    created_datetime: string;
  }) =>
    callBaseApi({
      title: 'Post - Update Post',
      method: 'PATCH',
      endpoint: `${id}`,
      data: {
        title,
        content,
      },
    }),
  deletePost: ({ id }: { id: number }) =>
    callBaseApi({
      title: 'Post - Delete Post',
      method: 'DELETE',
      endpoint: `${id}`,
    }),
};

export default post;
