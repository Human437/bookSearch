import React from 'react';

function PrintType(props){
  return(
    <>
      <label htmlFor = "printType">Print Type: </label>
      <select name = "printType" id = "printType" onChange = {e=>props.handlePrintType(e)}>
        <option value = "all">All</option>
        <option value = "books">Books</option>
        <option value = "magazines">Magazines</option>
      </select>
    </>
  )
}

export default PrintType;