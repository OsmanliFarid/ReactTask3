const Navbar = () =>{
    let Links = [
      {id:0,href:"#",title:"Our Plans"},
      {id:0,href:"#",title:"How It Works"},
      {id:0,href:"#",title:"Our Menus"},
      {id:0,href:"#",title:"Gift Cards"},
      {id:0,href:"#",title:"Sustainability"},
      {id:0,href:"#",title:"Thanksgiving Box"},
    ]
 return(
    <>
    <div className="grid grid-cols-[80px_1280px_118px] items-center m-[0px_20px]  h-[80px] ">
        <div className="Logo">
            <img src="./public/logo.png" alt="" />
        </div>
        <div className="font-[Sans] hidden sm:block">
            {Links.map(({id,title,href},index) =>{
                return <a className="ml-3.5 text-[#242424] text-[16px] leading-[24px] font-[600]"key={index} href={href}>{title}</a>
            })}
        </div>
        <div className="LogBtn hidden sm:block">
            <a href="#" className="inline-block border-2 border-[#067A46] p-[6px_35px] text-[#067A46]">Log in</a>
        </div>
    </div>
    </>
 )
}
export default Navbar