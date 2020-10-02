import React from 'react';
import PropTypes from 'prop-types';
const Gasto = ({gasto}) => (
    <l1 className="gastos">
        <p>
            {gasto.name}
            <span className="gasto"> ${gasto.cantidad}</span>
        </p>
    </l1>
)
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;