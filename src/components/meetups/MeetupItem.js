import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup }) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.isFavorite(meetup.id)

  const toggleFavorite = () => {
    if(itemIsFavorite) {
      favoriteCtx.removeFavorite(meetup.id)
    } else {
      favoriteCtx.addFavorite({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      })
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={`${meetup.image}`} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
