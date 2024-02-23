import ActivityCard from "../Card/Activity Card";

/* eslint-disable react/prop-types */
const ActivityCards = ({ activities }) => {
  return (
    <div>
      <h2>These are the activities created so far:</h2>
      <div>
        {activities?.map((activity) => {
          return <ActivityCard key={activity.id} activity={activity} />;
        })}
      </div>
    </div>
  );
};

export default ActivityCards;
