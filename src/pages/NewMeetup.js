import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetup = () => {
  const handleAddMeetup = (meetupData) => {
    fetch('https://react-refresher-2eb39-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  )
}

export default NewMeetup