import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Slider } from "baseui/slider";
import { StatefulPanel as Panel } from "baseui/accordion";
import { Checkbox } from "baseui/checkbox";
import { SET_FILTERS } from "../constants/actionTypes";

function FilterBlock() {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [areaRange, setAreaRange] = useState([0, 3000]);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [cities, setCities] = useState({
    Delhi: true,
    Noida: true,
    Gurgaon: true
  });
  const [occupancies, setOccupancies] = useState({
    Single: true,
    Double: true,
    Triple: true
  });

  useEffect(() => {
    dispatch({
      type: SET_FILTERS,
      payload: { priceRange, areaRange, cities, occupancies, ratingRange }
    });
  }, [priceRange, areaRange, ratingRange, cities, occupancies]);

  return (
    <>
      <Panel title="Budget">
        <Slider
          value={priceRange}
          max={10000}
          step={1000}
          onChange={({ value }) => setPriceRange(value)}
        />
      </Panel>
      <Panel title="City">
        {Object.keys(cities).map(city => (
          <Checkbox
            key={city}
            checked={cities[city]}
            onChange={() => setCities({ ...cities, [city]: !cities[city] })}
          >
            {city}
          </Checkbox>
        ))}
      </Panel>
      <Panel title="Area">
        <Slider
          value={areaRange}
          max={3000}
          step={100}
          onChange={({ value }) => setAreaRange(value)}
        />
      </Panel>
      <Panel title="Occupancy">
        {Object.keys(occupancies).map(occupancy => (
          <Checkbox
            key={occupancy}
            checked={occupancies[occupancy]}
            onChange={() =>
              setOccupancies({
                ...occupancies,
                [occupancy]: !occupancies[occupancy]
              })
            }
          >
            {occupancy}
          </Checkbox>
        ))}
      </Panel>
      <Panel title="Rating">
        <Slider
          value={ratingRange}
          max={5}
          step={1}
          onChange={({ value }) => setRatingRange(value)}
        />
      </Panel>
    </>
  );
}

export default FilterBlock;
