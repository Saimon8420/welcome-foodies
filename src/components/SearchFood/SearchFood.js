import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import { Outlet } from 'react-router-dom';
const SearchFood = () => {
    const [text, setText] = useState('');
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [text])
    const foodSearch = e => {
        // const foodVal = evnt.target.value;
        setText(e.target.value);
    }
    return (
        <div className='bg-amber-200 p-8'>
            <h2 className='font-bold'>Search for food</h2>
            <input className='p-2 bg-stone-400 rounded-md' onChange={foodSearch}
                type="search" name="" id="" />
            <br />
            <h4>Total food:{foods.length}</h4>
            <div className='grid grid-cols-3 gap-4 rounded-lg'>
                {
                    foods.map(food => <Foods key={food.idMeal}
                        food={food}
                    ></Foods>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default SearchFood;