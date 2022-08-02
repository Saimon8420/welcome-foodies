import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const FoodDetail = () => {
    const { foodId } = useParams();
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [foodId])
    // console.log(foods[0].strInstructions);
    return (
        <div className='bg-lime-300 grid justify-items-center mt-4 p-8 rounded-lg'>
            <h2 className='mb-4 text-2xl font-bold'>Food Details</h2>
            <img className='mb-4 rounded-lg' src={foods[0]?.strMealThumb} alt="" />
            <h3 className='font-bold'>Making Details:<p className='font-normal break-all'>{foods[0]?.strInstructions}</p></h3>
            <a className='mt-4 underline hover:text-red-500' href={`${foods[0]?.strYoutube}`}>Go to Youtube</a>
        </div>
    );
};

export default FoodDetail;