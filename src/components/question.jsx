import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
const Question = () =>{
    const [arrow,SetArrow] = useState(true)
    const changeMode = () =>{
        SetArrow(!arrow)
        if(arrow){
            
            
        }
    }
    let newarr = [
        {id:1,title:"How does HelloFresh’s meal kit delivery service work?",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente error, molestiae adipisci, tenetur minima non corrupti aperiam quisquam consequatur dolorem eos itaque sunt maxime dolores veniam, dolore ipsa iure."},
        {id:2,title:"Which food meal plans & recipes does HelloFresh offer?",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente error, molestiae adipisci, tenetur minima non corrupti aperiam quisquam consequatur dolorem eos itaque sunt maxime dolores veniam, dolore ipsa iure."},
        {id:3,title:"How many times a week does HelloFresh deliver?",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente error, molestiae adipisci, tenetur minima non corrupti aperiam quisquam consequatur dolorem eos itaque sunt maxime dolores veniam, dolore ipsa iure."},
    ]
    return (
        
        <>
        <div className="Container">
            <h1 className="text-center text-[#242424] text-[37px] leader-[48px] mt-[100px] mb-[70px]">More questions?</h1>
            <div>{newarr.map(({id,title,desc},index) =>{
                return (
                    <div className="w-[300px]" key={id}>
                <div className="flex items-center gap-10">
                    <button onClick={changeMode}>
                    {arrow ? <FaArrowAltCircleUp className="w-[50px] h-[50px]"/> : <FaArrowCircleDown className="w-[50px] h-[50px]"/>}
                </button>
                <h1>{title}</h1>
                </div>
                <div className="ml-[89px]">
                    <h1 className={`overflow-hidden ${arrow ? "max-h-[500px] opacity-100 mb-[50px]" : "max-h-0 opacity-0"}`}>
  {desc}
</h1>
                </div>
            </div>
                )
            })}</div>
        </div>
        </>
    )
}
export default Question