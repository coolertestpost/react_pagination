/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import React from 'react';

import { getTotalItems } from '../../utils';

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
  const totalArray = getTotalItems(total, perPage);
  let newPage = currentPage;

  console.log(currentPage);

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          «
        </a>
      </li>
      {totalArray.map((item) => (
        <li
          key={item}
          className={`page-item ${currentPage === item ? 'active' : ''}`}
          onClick={() => {
            if (currentPage !== item) {
              onPageChange(newPage);
            }
          }}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${item}`}
            onClick={(event) => {
              newPage = Number(event.currentTarget.textContent);
            }}
          >
            {item}
          </a>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalArray.length ? 'disabled' : ''}`}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === total ? 'true' : 'false'}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
