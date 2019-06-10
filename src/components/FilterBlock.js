import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Slider } from "baseui/slider";
import { StatefulPanel as Panel } from "baseui/accordion";
import { Checkbox } from "baseui/checkbox";

function FilterBlock() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [areaRange, setAreaRange] = useState([0, 3000]);
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
    console.log(priceRange, cities, occupancies);
  }, [priceRange, cities, occupancies]);
  return (
    <>
      <Panel title="Budget">
        <Slider
          value={priceRange}
          max={10000}
          step={500}
          onChange={({ value }) => setPriceRange(value)}
        />
      </Panel>
      <Panel title="City">
        {Object.keys(cities).map(city => (
          <Checkbox
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
          step={50}
          onChange={({ value }) => setAreaRange(value)}
        />
      </Panel>
      <Panel title="Occupancy">
        {Object.keys(occupancies).map(occupancy => (
          <Checkbox
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
      <Panel title="Rating" />
    </>
  );
}

export default connect()(FilterBlock);
