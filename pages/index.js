import axios from "axios";
import Link from "next/link";
const Index = ({ data }) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
