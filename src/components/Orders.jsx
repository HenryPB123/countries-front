import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder } from "../store/slices/countries/controllersCountries";

const Orders = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");

  function onChangeOrder(e) {
    setOrder(e.target.value);
    dispatch(getOrder(e.target.value));
  }

  return (
    <div>
      <select
        className="buttons"
        value={order}
        onChange={(e) => onChangeOrder(e)}
      >
        <option value="Alphabetic Order">Orden alfabético</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>

      <select
        className="buttons"
        value={order}
        onChange={(e) => onChangeOrder(e)}
      >
        <option value="Population Order">Orden por población</option>

        <option value="max">Max-Min</option>
        <option value="min">Min-Max</option>
      </select>
    </div>
  );
};

export default Orders;
