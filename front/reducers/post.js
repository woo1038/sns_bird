export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "hello",
      },
      content: "첫번쨰 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "world",
          },
          content: "연습하기 좋네유",
        },
        {
          User: {
            nickname: "world",
          },
          content: "빨리끝내야쥬",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "hello",
  },
  Images: [],
  Comments: [],
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(2);
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
