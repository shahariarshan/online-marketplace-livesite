import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Category";


const Categories = () => {
    const job =useLoaderData()
    const [item,SetItem]=useState(job)
    return (
        <div>
             <div  className="grid grid-cols-1 gap-5 p-5">
                 {
                  item.map(i =><Link to={`/category/${i.type}`} key={i.type}><Category
                    
                     i={i}></Category></Link>)
                  }
                 </div>

                 
        </div>
    );
};

export default Categories;