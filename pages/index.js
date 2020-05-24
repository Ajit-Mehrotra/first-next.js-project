import axios from "axios";

const Index = ({ data }) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  // Pass data to the page via props
  console.log(data[0]);

  return { props: { data } };
}

export default Index;
