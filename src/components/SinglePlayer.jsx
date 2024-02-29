import { useParams } from "react-router-dom";

function SinglePlayer() {
  // useParams returns an object -> so we are deconstructing that object using the key defined in the <Route></Route> and creating a local variable in this component with the same name
  const { id } = useParams();
  // when we destructure something, we unpack values from arrays, or properties from objectes, into distinct variables
  // id = random number generated in the <NavBar></NavBar>
  return (
    <>
      <h2>Single Player Component</h2>
      <h3>Player with id: {id} goes here</h3>
    </>
  );
}

export default SinglePlayer;
