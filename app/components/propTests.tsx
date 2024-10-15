

import Link from "next/link";
import React from "react";




  
  const PropsTest = ({ name, capital, population, flag, website }:{name:string, capital:string, population:string,flag:string, website:string }) => {
      
   return (
    
  
  
      
          <div>
              <h2 className="bg bg-green-50 mt-4 font-bold font-serif text-center ml-10 mr-9">
                  {name}<br />
                  {capital}<br />
                  {population}<br />
                  {flag && <img src={flag} alt={`${name} flag`} />}<br />
                  <Link href={website}>
                      <div className="text-blue-500 underline">{website}</div>
                  </Link>
              </h2>
          </div>
      );
  }
  
  export default PropsTest;
  
