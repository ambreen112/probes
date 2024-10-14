import Link from "next/link";
import React from "react";
import propTypes from "prop-types";

type propTypes={
    name: any;
    capital:any;
    population:any;
    flag:any;
    website:any
}

const Display = ({name, capital, population, flag, website}:propTypes)=>{


  return(
    
    <div>
        
    <h2 className="bg bg-green-50 mt-4 font-bold font-serif text-center ml-10 mr-9"> {name}<br/>{capital} <br/> {population} <br/>  {flag && <img src={flag} alt={`${flag} flag`} />} <br/><Link href={website}>
                    <div className="text-blue-500 underline">{website}</div> </Link></h2>
    </div>
  )
}

 export default  Display;