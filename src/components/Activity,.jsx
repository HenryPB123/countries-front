import React from "react";

export default function Activity({
  id,
  name,
  season,
  duration,
  difficulty,
  description,
}) {
  return (
    <div key={id}>
      <div>
        <b>Name: </b> {name[0].toUpperCase() + name.slice(1)}
      </div>
      <div>
        <b>Season: </b>
        {season}
      </div>
      <div>
        <b>Duration: </b>
        {duration}
      </div>
      <div>
        <b>Difficulty: </b>
        {difficulty}
      </div>
      <div>
        <b> Description: </b>
        {description[0].toUpperCase() + description.slice(1)}
      </div>
    </div>
  );
}
