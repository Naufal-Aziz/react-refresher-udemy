import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      {favoriteCtx.totalFavorites > 0 ? (
        <MeetupList meetups={favoriteCtx.favorites} />
      ) : (
        <p>You don't have any favorites</p>
      )}
    </section>
  );
};

export default Favorites;
