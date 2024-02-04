import React from "react";

const commentsData = [
  {
    name: "Mukesh",
    text: "Lorem ipsum sit amet,consectetur adip",
    replies: [],
  },
  {
    name: "Mukesh",
    text: "Lorem ipsum sit amet,consectetur adip",
    replies: [
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [
          {
            name: "Mukesh",
            text: "Lorem ipsum sit amet,consectetur adip",
            replies: [
              {
                name: "Mukesh",
                text: "Lorem ipsum sit amet,consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mukesh",
    text: "Lorem ipsum sit amet,consectetur adip",
    replies: [
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Mukesh",
    text: "Lorem ipsum sit amet,consectetur adip",
    replies: [
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [],
      },
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [],
      },
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Mukesh",
    text: "Lorem ipsum sit amet,consectetur adip",
    replies: [
      {
        name: "Mukesh",
        text: "Lorem ipsum sit amet,consectetur adip",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-smbg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlZkIqki43f4vMGa-DljqZBCOr6D6Cm_l_kDM06YEjL2QWlKZY_glSuSJGybsUIHmdpc&usqp=CAU"
        alt="user"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
