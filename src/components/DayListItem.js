import React from "react";
import classNames from "classnames";
import "../styles/DayListItem.scss";

export function formatSpots(props) {
  return props.spots === 0 ? (
    <h3>no spots remaining</h3>
  ) : (
    <h3>{props.spots > 1 ? `${props.spots} spots` : "1 spot"} remaining</h3>
  );
}

// to handles behaviour for individual days.
export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });
  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className={"text--regular"}>{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)} </h3>
    </li>
  );
}
