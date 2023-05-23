import React, { useState } from "react";
const Task = () =>{
    const countries = [
        {name: 'India', value: 'IN' , cities : ['Delhi', 'Mumbai']}, 
        {name: 'Pakistan', value: 'PK' , cities : ['Ilahabad', 'Lahore']}, 
        {name: 'Bangladesh', value: 'BD' , cities : ['Dhaka', 'Chattogram']}, 
    ] ;

    const [country, setCountry] = useState(0)
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log('button is clicked');
        const country = e.target.country.value
        console.log(country);

    }
    console.log(country);
    return (
        <>
        

        
    <form action="" onSubmit={handleSubmit}>
    <select className="ml-8 border-2 border-black mt-8"    name="country" id="" onChange={(e)=>{
        setCountry(e.target.value)
        console.log(country);

    }} >


        {
            countries.map((item, index)=>{
                return<option  value={index}>{item.name}</option>

            })
        }
    </select>

    <select name="city" id="" className="ml-8 border-2 border-black" value={countries[country]?.citites}>

        {
            countries[country]?.cities.map((city , index)=>{
                return <option value={city}>
                   {city}
                </option>
            })
        }
    </select> 
        <button type="sbnmit" className="px-4 py-2 bg-pink-600 text-white rounded-lg ml-10" >Submit</button>

    </form>

   
   





        
        </>
    )
}

export default Task;