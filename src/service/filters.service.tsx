import axios from 'axios';

export const FiltersService = {
  async filtersFetch() {
    return await axios.get('/filters');
  },
};
