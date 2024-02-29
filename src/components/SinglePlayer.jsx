import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../API/playersSlice";

function SinglePlayer() {
  // useParams returns an object -> so we are deconstructing that object using the key defined in the <Route></Route> and creating a local variable in this component with the same name
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data.player;
  // when we destructure something, we unpack values from arrays, or properties from objectes, into distinct variables
  // id = random number generated in the <NavBar></NavBar>
  return (
    <>
      <h2>Single Player Component</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="single-player">
          <h3>{player.name}</h3>
          <h4>{player.breed}</h4>
          <img src={player.imageUrl} alt={`An image of ${player.name}`} />
          {/* TODO: expand to show more player details */}
        </div>
      )}
    </>
  );
}

export default SinglePlayer;
