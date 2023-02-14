import React from 'react';
import ReactPaginate from 'react-paginate';

import './pagination.scss';

interface IProps {
  page: number;
  total: number;
  pageChangeHandler: (page: number) => void;
}

const Pagination = ({ page, total, pageChangeHandler }: IProps) => {
  const pageCount = Math.ceil(total / 6);

  if (pageCount < page) {
    pageChangeHandler(1);
  }

  const paginate = (page: any) => {
    const { selected } = page;
    pageChangeHandler(selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        onPageChange={paginate}
        pageCount={pageCount}
        previousLabel={'Prev'}
        nextLabel={'Next'}
        containerClassName={'pagination'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        forcePage={page - 1}
      />
    </div>
  );
};

export default React.memo(Pagination);
