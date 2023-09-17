import React from 'react';
import AuthorBiographyCell from './authorBiographyCell'; // Import AuthorBiographyCell
import DefaultCell from '../../utils/table/defaultCell'; // Import DefaultCell

const TableRow = ({ row, rowIndex, columns, expandedRows, toggleRowExpansion }) => {
  const isExpanded = expandedRows[rowIndex]; // Check if the row is expanded
  
  // Function to render cell content
  const renderCellContent = (column, row) => {
    const cellClasses = []; // Declare cellClasses inside the function
    if (column.accessor === 'authorBiography') { // this need to be robust
      return (
        <td key={column.Header}> 
          <AuthorBiographyCell
            value={row[column.accessor]}
            isExpanded={isExpanded} // Pass the expansion status to the cell
            handleToggleRowExpansion={() => toggleRowExpansion(rowIndex)} // Toggle the expansion for this row
            column={column}
          />
        </td>
      );
    } else {
      if (column.accessor === 'sequence' || column.accessor === 'jacketUrl') { // this need to be robust
        cellClasses.push('position-abs wf100px unset-bottom left-pad0 right-pad0 top-pad0');
      }
      if (column.accessor === 'estimatedReadingTimeMinutes') { // this need to be robust
        cellClasses.push('position-abs wf100px unset-top bottom30px');
      }
      if (column.accessor === 'publicationDate') { // this need to be robust
        cellClasses.push('position-abs wf100px unset-top bottom10px');
      }
      return (
        <td key={column.Header} className={`${cellClasses.join(' ')}`}> 
          <DefaultCell
            value={row[column.accessor]}
            column={column}
            row={row}
          />
        </td>
      );
    }
  };

  return (
    <tr key={rowIndex} className="position-rel">
      {columns.map((column) => (
        renderCellContent(column, row)
      ))}
    </tr>
  );
};

export default TableRow;
