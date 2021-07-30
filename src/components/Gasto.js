import React from "react";
import PropTypes from "prop-types";
import UseConvertNumbers from "../hooks/useConvertNumbers";

const Gasto = ({ gasto }) => {
  const spend = UseConvertNumbers(gasto.cantidad);
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}
        <span className="gasto">€ {spend}</span>
      </p>
    </li>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
