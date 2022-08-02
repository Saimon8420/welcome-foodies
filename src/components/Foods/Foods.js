import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    const { strMeal, strMealThumb, idMeal } = food;
    // console.log(food.idMeal);
    return (
        <div className='bg-slate-300 rounded-lg p-2'>
            <img className='md:w-auto md:h-auto sm:w-auto sm:h-auto rounded-lg' src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            {
                <Link className='underline hover:text-red-600' to={`/search/${idMeal}`}>More Details</Link>
            }
        </div>
    );
};

export default Foods;