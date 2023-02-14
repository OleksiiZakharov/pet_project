export interface IFilters {
  id: number;
  categoryName: string;
  filterName: string;
  itemType: string;
  state: boolean;
}

export interface IFiltersState {
  categories: string[];
  filters: IFilters[];
}
