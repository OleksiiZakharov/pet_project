import axios from 'axios';

export const ItemsService = {
  async itemsFetch(page: number, activeFilters: number[]) {
    return await axios.post('/items', { page, activeFilters });
  },
};
