import { Link } from "react-router-dom";

function NavBar() {
  // TODO better -- not generating new random numbers after we click.
  const id = Math.floor(Math.random() * 5 + 1);
  return (
    <>
      <h2>NavBar component</h2>
      {/* to is the path */}
      <Link to="/">All Players</Link>
      <Link to={`/players/${id}`}>Random Player</Link>
    </>
  );
}
export default NavBar;
