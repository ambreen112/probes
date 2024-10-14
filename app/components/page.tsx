import Link from "next/link";
import React from "react";

type propsType={
    name: string
    capital: string
    population:string
    flag:string
    website:string
  

}

const Display = (props:propsType)=> {
  return(
    
    <div>
        
    <h2 className="bg bg-green-50 mt-4 font-bold font-serif text-center ml-10 mr-9"> {props.name}<br/> {props.capital} <br/> {props.population} <br/>  {props.flag && <img src={props.flag} alt={`${props.flag} flag`} />} <br/><Link href={props.website}>
                    <div className="text-blue-500 underline">{props.website}</div> </Link></h2>
    </div>
  )
}


 export default  Display;