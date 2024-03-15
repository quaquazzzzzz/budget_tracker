import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const total = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-success p-4'> {/* Geändert zu alert-success */}
            <span>Ausgegeben: €{total}</span>
        </div>
    );
};

export default ExpenseTotal;
