import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import { IoIosArrowDown } from "react-icons/io";
import { Product } from '../context/Context';

const Main=()=>{

    const [clicked,isclicked]=useState(false);
    const[value,isValue]=useState('Hide')
    const Hide=()=>{
       if(clicked==false){
        isclicked((prev)=> prev=true);
        isValue((prev)=>prev='Show')
       }
       else{
        isclicked((prev)=> prev=false);
        isValue((prev)=>prev='Hide')
       }
    }
    const {data}=useContext(Product)
    return (
        <div className="">
            <div className="w-screen h-[10vh] px-10  border border-gray-300 flex justify-between items-center ">
            <div className="w-[20vw]  flex justify-between">
              <p className="font-bold">{data.length} items</p>
              <p className="border-b-2  border-gray-300 text-gray-400" id="hide"  onClick={()=>Hide()}>{`${value}`} Filter</p>
            </div>
            <div className="relative inline-block w-48">
                   <select
                      name="filter"
                     id="filter"
                   className="appearance-none w-full px-4 py-2 border border-gray-300 rounded"
                   >
                        <option value="Recommended">Recommended</option>
                           <option value="Newest First">Newest First</option>
                            <option value="Popular">Popular</option>
                    </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                               <IoIosArrowDown />
                           </div>
            </div>

         
            </div>
            <div className={`grid  ${clicked ? "grid-cols-[100vw] relative " : "grid-cols-[20vw_80vw] relative"}`}>
                  { <Sidebar Clicked={clicked} />}
                 <ProductGrid Clicked={clicked} />
             </div>

        </div>
    )
}

export default Main;