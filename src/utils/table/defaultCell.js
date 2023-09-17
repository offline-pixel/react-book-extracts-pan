// DefaultCell.js

const DefaultCell = ({ value, column }) => {
  // Adjust this part to render other types of cells
  return column.Cell ? column.Cell({ value, row: { original: value } }) : value
};

export default DefaultCell;
