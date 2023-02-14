import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { ItemsService } from '../service/items.service';
import { RootState } from '../store';

export const useItems = (page: number = 1) => {
  const { filters } = useSelector((state: RootState) => state.filters);
  const activeFilters: number[] = [];
  filters
    .filter((obj) => obj.state === true)
    .map((obj) => activeFilters.push(obj.id));

  const { data, isError, isLoading } = useQuery(
    ['itemsRequest', page, activeFilters],
    () => ItemsService.itemsFetch(page, activeFilters)
  );

  const total = !data?.data.total ? 0 : data.data.total;
  const items = !data?.data.items ? null : data.data.items;

  return { isError, isLoading, total, items };
};
