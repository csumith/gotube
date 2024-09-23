import React from "react";

const CommentsContainer = () => {
  const CommentData = [
    {
      name: "Sumit Chouhan",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Sakshi",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "Rana Chouhan",
              text: "lorem epsium divu kitum ali disum",
              replies: [
                {
                  name: "piyus Chouhan",
                  text: "lorem epsium divu kitum ali disum",
                  replies: [
                    {
                      name: "Sumit Chouhan",
                      text: "lorem epsium divu kitum ali disum",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sumit Chouhan",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "sakshi Chouhan",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "Sumit Chouhan",
              text: "lorem epsium divu kitum ali disum",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Poonam Chouhan",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Sumit Chouhan",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "poonam Chouhan",
              text: "lorem epsium divu kitum ali disum",
              replies: [
                {
                  name: "Anuja",
                  text: "lorem epsium divu kitum ali disum",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shubhangi",
      text: "lorem epsium divu kitum ali disum",
      replies: [],
    },
    {
      name: "pallavi",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Shubhangi",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "pallavi ",
              text: "lorem epsium divu kitum ali disum",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Disha",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Shri",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "Disha",
              text: "lorem epsium divu kitum ali disum",
              replies: [
                {
                  name: "shree",
                  text: "lorem epsium divu kitum ali disum",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Yash Chouhan",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Sumit Chouhan",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "vishu Chouhan",
              text: "lorem epsium divu kitum ali disum",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Salman",
      text: "lorem epsium divu kitum ali disum",
      replies: [
        {
          name: "Saurukh",
          text: "lorem epsium divu kitum ali disum",
          replies: [
            {
              name: "Sumit Chouhan",
              text: "lorem epsium divu kitum ali disum",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    console.log(data);
    return (
      <div className="flex shadow-lg bg-gray-100 p-2 my-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
          alt="user-icon"
          className="h-8"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ">
            <CommentList comments={comment.replies}/>
        </div>
      </div>
    ));
  };
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold ">Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
