import Link from "next/link";

const styles = {
  display: "flex",
  background: "grey",
  justifyContent: "space-between",
  padding: "1rem",
};
const Navbar = () => {
  return (
    <div style={styles}>
      <Link href="/index">
        <a>Homepage</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};
export default Navbar;
