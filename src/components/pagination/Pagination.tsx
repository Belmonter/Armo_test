import React from 'react';
import s from './pagination.module.scss'

interface PaginationProps {
  rowsPerPage: number,
  totalRows: number,
  currentPage: number
  paginate: Function,
}

const styledButton = {
  backgroundColor: 'blue',
  color: 'white',
}

function Pagination({rowsPerPage, totalRows, paginate, currentPage}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.wrapper}>
      {
        pageNumbers.map(num => {
          let currentButton = num === currentPage;
          return (
            <button key={num} className={s.btn} style={currentButton ? styledButton : {}} onClick={() => paginate(num)}>{num}</button>
          )
        })
      }
    </div>
  );
}

export default Pagination;
