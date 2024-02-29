import { useState } from "react";
import {
  useCreatePlayerMutation,
  useGetPlayersQuery,
} from "../API/playersSlice";

function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPlayer, result] = useCreatePlayerMutation();

  const { data, isLoading, refetch } = useGetPlayersQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    await createPlayer({ name, breed, imageUrl });
    refetch();
  }
  return (
    <>
      <h3>Add a new player</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="player-name"
            id="player-name"
            placeholder="Lucky"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="player-breed"
            id="player-breed"
            placeholder="Dalmatian"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="player-image"
            id="player-image"
            placeholder="https://placedog.net/640/480?random"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default NewPlayerForm;
