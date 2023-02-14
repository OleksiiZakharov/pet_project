import { createSlice } from '@reduxjs/toolkit';
import { IFilters, IFiltersState } from '../../interface/filtersInterface';

const initialState: IFiltersState = {
  categories: [],
  filters: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersSet: (state, { payload }) => {
      const categories: string[] = [];
      const filters: IFilters[] = [];

      payload.map((filter: IFilters) => {
        if (!categories.includes(filter.categoryName)) {
          categories.push(filter.categoryName);
        }
        filters.push(filter);
        return filter;
      });
      state.categories = categories;
      state.filters = filters;
    },
    filtersUpdate: (state, { payload }) => {
      if (!Number.isInteger(payload)) return state;

      const arrayindex = state.filters.findIndex(
        (filter) => filter.id === payload
      );

      if (arrayindex >= 0) {
        state.filters[arrayindex].state = !state.filters[arrayindex].state;
      }
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { filtersSet, filtersUpdate } = actions;
