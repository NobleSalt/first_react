import React from "react";

const ListGroup = ({
  genre,
  selectedGenre,
  onSelectGenre,
  valueProperty,
  textProperty,
}) => {
  return (
    <button
      className={
        genre === selectedGenre
          ? "list-group-item list-group-item-action active"
          : "list-group-item list-group-item-action"
      }
      onClick={() => onSelectGenre(genre)}
    >
      {genre[textProperty]}
    </button>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
