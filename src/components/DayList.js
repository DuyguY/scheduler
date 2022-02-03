import React from "react";
import DayListItem from "./DayListItem";

//to renders a collection of individual day items for selection
export default function DayList(props) {
  const { days, value, onChange } = props;
  const parsedDayListItem = days.map((item, index) => (
    <DayListItem
      key={index}
      name={item.name}
      spots={item.spots}
      selected={item.name === props.value}
      setDay={props.onChange}
    />
  ));

  return <ul>{parsedDayListItem}</ul>;
}
