import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-refresher-2eb39-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup)
        }
        setMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </section>
  );
};

export default AllMeetups;
