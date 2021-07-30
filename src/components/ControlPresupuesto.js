import React, { Fragment, useState, useEffect } from "react";
import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";
import UseConvertNumbers from "../hooks/useConvertNumbers";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  const [actual, setActual] = useState(0);
  const [sobrante, setSobrante] = useState(0);

  useEffect(() => {
    setActual(presupuesto);
    setSobrante(restante);
  }, [presupuesto, restante]);

  const budget = UseConvertNumbers(actual);
  const remaining = UseConvertNumbers(sobrante);

  return (
    <Fragment>
      <div className="alert alert-primary">Budget: € {budget}</div>
      <div className={revisarPresupuesto(actual, sobrante)}>
        Remaining: € {remaining}
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
