import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {

    let minTemp = parseInt(contact.minTemp);
    let maxTemp = parseInt(contact.maxTemp);

  return (
    <tr>
      <td>{contact.date}</td>

      <td style={minTemp <= 3 ? {color: 'blue'} : minTemp >= 30 ? {color: 'red'} : {color: 'black'}}>{minTemp}°</td>

      <td style={maxTemp <= 3 ? {color: 'blue'} : maxTemp >= 30 ? {color: 'red'} : {color: 'black'}}>{maxTemp}°</td>

      <td>{(minTemp+ maxTemp)/2}°</td>

      {/*  Buttons*/}
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}>
            🖊️
        </button>
        <button
            type="button"
            onClick={() => handleDeleteClick(contact.id)}>
            🗑️
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
