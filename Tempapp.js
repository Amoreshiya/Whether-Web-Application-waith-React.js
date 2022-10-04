import React, { useEffect, useState } from "react";
import "./css/Style.css";



const  Tempapp = ()=>{

    const[city,setCity]= useState(null)
    const[search,setSearch]= useState("Mumbai" )

    useEffect(()=>{
        const fetchApi = async  ()=>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=78788f0e9b8101513336ca300cb08f44&units=metric`
            
            const response = await fetch(url);
            
            const resJson = await response.json();
            // .then(res => res.json())
            // console.log(resJson)

            setCity(resJson.main)
          
                      

        }

        fetchApi();
    },[search])



    return(

        <>
            <div className="box">                
                <div className="inputData">
                    <input type= "search" 
                        value={search}
                    className="inputFeild " 
                    onChange={(event)=>{setSearch(event.target.value)}} />

                </div>   
                {
                    !city ? (
                        <p>NO Data Found</p>
                    ) : (
                  <div>

                        <div className=" info">                    
                    <h2 className="location">
                    <i className="fa-solid fa-street-view"></i>{search}
                    </h2>

                   {/* it shows temperature data */}
                    <h1 className="temp">
                     {city.temp}°Cel
                    </h1>
                   <h3 className="tempmin_max"> {city.temp_max}°Cel | {city.temp_min}°Cel</h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>

              </div>

                    )
                }





                 {/* <div className=" info">                    
                    <h2 className="location">
                    <i className="fa-solid fa-street-view"></i>{search}
                    </h2> */}

                   {/* it shows temperature data */}
                    {/* <h1 className="temp">
                      5.25
                    </h1>
                   <h3 className="tempmin_max"> 5.25°Cel | Max 5.25°</h3> */}
            {/* </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div> */}

            </div>


            </>



            


               
        
    )
}
export default Tempapp;