import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersService } from '../service/filters.service';
import { RootState } from '../store';
import { filtersSet, filtersUpdate } from '../store/slices/filtersSlice';

export const useFilters = () => {
  const dispatch = useDispatch();
  const { categories, filters } = useSelector(
    (state: RootState) => state.filters
  );
  const { isSuccess, isLoading, isError } = useQuery(
    ['filtersRequest'],
    () => FiltersService.filtersFetch(),
    {
      onSuccess: ({ data }) => {
        dispatch(filtersSet(data));
      },
    }
  );
  const filterClickHandler = (id: number): void => {
    if (id <= 0) {
      return;
    }

    dispatch(filtersUpdate(id));
  };

  return {
    categories,
    filters,
    isSuccess,
    isLoading,
    isError,
    filterClickHandler,
  };
};
