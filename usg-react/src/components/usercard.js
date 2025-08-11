
import React from "react";

function UserCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.firstName} width="50" />
      <h3>{props.firstName} {props.lastName}</h3>
      <p>{props.email} | {props.phone}</p>
    </div>
  );
}

export default UserCard;

