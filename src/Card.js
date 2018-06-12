import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green div br3 pa3 ma2 grow bw2 shadow-5">
      <h1>RoboFriends</h1>
      <img src="https://robohash.org/test?size=200x200" alt="Robot" />
      <div>
        <h2>John Doe</h2>
        <p>john.doe@gmail.com</p>
      </div>
    </div>
  )
}

export default Card;