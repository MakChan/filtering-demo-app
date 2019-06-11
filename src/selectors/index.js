import { createSelector } from "reselect";

const roomSelector = state => Object.values(state.rooms.roomsById);
const getFilters = state => state.rooms.filters;
const getCityList = state => Object.keys(state.rooms.filters.cities);
const getOccupancyList = state => Object.keys(state.rooms.filters.occupancies);

const priceSelector = createSelector(
  [roomSelector, getFilters],
  (rooms, filters) =>
    rooms.filter(
      room =>
        room.rate > filters.priceRange[0] && room.rate < filters.priceRange[1]
    )
);

const areaSelector = createSelector(
  [priceSelector, getFilters],
  (rooms, filters) =>
    rooms.filter(
      room =>
        room.area > filters.areaRange[0] && room.area < filters.areaRange[1]
    )
);

const ratingSelector = createSelector(
  [areaSelector, getFilters],
  (rooms, filters) =>
    rooms.filter(
      room =>
        room.rating > filters.ratingRange[0] &&
        room.rating < filters.ratingRange[1]
    )
);

const getSelectedCities = createSelector(
  [getCityList, getFilters],
  (cities, filters) => cities.filter(city => filters.cities[city])
);

const citiesSelector = createSelector(
  [ratingSelector, getSelectedCities],
  (rooms, cities) => rooms.filter(room => cities.includes(room.city))
);

const getSelectedOccupancy = createSelector(
  [getOccupancyList, getFilters],
  (occupancies, filters) =>
    occupancies.filter(city => filters.occupancies[city])
);

export const filterSelector = createSelector(
  [citiesSelector, getSelectedOccupancy],
  (rooms, occupancies) =>
    rooms.filter(room => occupancies.includes(room.occupancy))
);
