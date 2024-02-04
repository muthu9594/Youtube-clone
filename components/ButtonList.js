import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Live",
    "Gaming",
    "Music",
    "Live",
    "News",
    "Cricket",
    "All",
    "Live",
    "Gaming",
    "Music",
    "Live",
    "News",
    "Cricket",
  ];
  return (
    <div className="flex">
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
