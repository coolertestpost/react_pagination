/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import React from 'react';

interface Props {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  function getTotalItems(totalElements: number, itemsPerPage: number) {
    const groups = Math.ceil(totalElements / itemsPerPage);
    const result = [];

    for (let i = 1; i <= groups; i++) {
      result.push(i);
    }

    return result;
  }

  const totalArray = getTotalItems(total, perPage);

  console.log(currentPage);

  return (
    <ul className="pagination">
      <li className="page-item disabled">
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled="true"
        >
          «
        </a>
      </li>
      {totalArray.map((item) => (
        <li
          className={`page-item ${currentPage === item ? 'active' : ''}`}
          onClick={() => {
            if (currentPage !== item) {
              onPageChange(currentPage);
            }
          }}
        >
          <a data-cy="pageLink" className="page-link" href={`#${item}`}>{item}</a>
        </li>
      ))}
      <li className="page-item">
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled="false"
        >
          »
        </a>
      </li>
    </ul>
  );
};
