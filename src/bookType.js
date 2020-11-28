import React from 'react';

function BookType(props){
  return(
    <>
      <label htmlFor = "bookType">Book Type:</label>
      <select name = "bookType" id = "bookType" onChange = {e=>props.handleBookType(e)}>
        <option value = "">No Filter</option>
        <option value = "ebooks">Ebooks</option>
        <option value = "free-ebooks">Free Ebooks</option>
        <option value = "paid-ebooks">Paid Ebooks</option>
      </select>
    </>
  )
}

export default BookType;