const initState = {
  posts: [
    {
      id: 1,
      title: 'post one',
      content: 'This is post one',
    },
    {
      id: 2,
      title: 'post two',
      content: 'This is post two',
    },
    {
      id: 3,
      title: 'post three',
      content: 'This is post three',
    },
    {
      id: 4,
      title: 'post Four',
      content: 'This is post Four',
    },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      const newPosts = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPosts,
      };
      default:
        return state;
  }
  
};

export default postReducer;
