import axios from "axios";
const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>Comments for post #{id}</h1>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};
const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

export async function getServerSideProps(context) {
  const { query } = context;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { props: { ...query, comments: data } };
}
export default Post;
