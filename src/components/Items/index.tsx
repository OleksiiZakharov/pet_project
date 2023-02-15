import { useCallback, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useItems } from '../../hooks/useItems';
import { IItem } from '../../interface/itemInterface';
import Card from '../Card';
import Pagination from '../Pagination';

export const Items = () => {
  const [page, setPage] = useState(1);
  const setPageHandler = useCallback((newPage: number): void => {
    setPage(newPage);
  }, []);

  const { isError, isLoading, items, total } = useItems(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Fetching error!!!</div>;
  }

  return (
    <>
      <Row>
        <Col>
          {total > 0 ? (
            <Pagination
              page={page}
              total={total}
              pageChangeHandler={setPageHandler}
            />
          ) : null}
        </Col>
      </Row>
      <Row>
        {items && total > 0 ? (
          items.map((item: IItem, index: number) => {
            return (
              <Col key={`item_${index}`} lg={6} xxl={4}>
                <Card item={item} />
              </Col>
            );
          })
        ) : (
          <Col>No items found</Col>
        )}
      </Row>
    </>
  );
};
