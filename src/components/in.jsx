import { useState } from "react"

const Ins = () =>{
    const [count,SetCount] = useState(true)
    
    const Show = () =>{
        SetCount(!count)
        console.log(count);
        
    }
  return (
    <>
    <div>
        <button className="bg-green-600 p-20" onClick={Show}>{count ? "gizlet" : "goster"}</button>
        <p className={count ? "block" : "hidden"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nisi dolor pariatur culpa alias, architecto repudiandae provident ad impedit odit delectus aspernatur laborum aut consequuntur tenetur, ex, quam laboriosam fugiat</p>
    </div>
    </>
  )
}
export default Ins
