const Header = () =>{
   return (
    <>
    <div className="bg-[url(../public/Background.png)] bg-cover  bg-no-repeat bg-center sm:w-[100%]">
          <div className="flex justify-center text-center">
            <div className="">
            <h1 className="text-[37px] leader-[48px] font-[400] mt-[180px]">Take the stress </h1>
          <h1 className="text-[37px] leader-[48px] font-[400]">out of mealtime</h1>
          <p className="font-[400] text-[20px] leader-[32px] text-[#343434]">America's Most Popular Meal Kit</p>
          <a href="#" className="inline-block p-[15px_40px] bg-[#067A46] mt-[30px] text-[#fff]">View our plans</a>
          <div className="mt-[30px]">
            <img src="./public/button.png" alt=""  className="w-[50px] h-[50px] mt-[210px] m-[auto]"/>
          </div>
          </div>
          </div>
    </div>
    </>
   )
}
export default Header