const Post = ({ id }) => {
  return <h1>This is the {id} post</h1>;
};

export async function getServerSideProps(context) {
  const { query } = context;
  return { props: query };
}
export default Post;
