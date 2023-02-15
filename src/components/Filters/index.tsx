import { Spinner } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';
import Badge from '../../ui/Badge';
import './filters.scss';

export const Filters = () => {
  const {
    categories,
    filters,
    isLoading,
    isSuccess,
    isError,
    filterClickHandler,
  } = useFilters();

  if (isLoading) {
    return <Spinner animation="border" variant="warning" />;
  }

  if (isError) {
    <div>Filters loading error</div>;
  }

  return (
    <>
      {isSuccess ? (
        categories.map((category) => {
          return (
            <div
              key={`categoryBlock_${category}`}
              className="mb-5 categoryBlock"
            >
              <div className="title">{category}</div>
              <div className="mt-3 d-flex flex-wrap">
                {filters
                  .filter((filter) => filter.categoryName === category)
                  .map((filter) => (
                    <Badge
                      key={`${category}_${filter.id}`}
                      id={filter.id}
                      text={filter.filterName}
                      state={filter.state}
                      onClickHandler={filterClickHandler}
                    />
                  ))}
              </div>
            </div>
          );
        })
      ) : (
        <div>Unexpected result</div>
      )}
    </>
  );
};
