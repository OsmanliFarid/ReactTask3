const BoxItems = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2  mt-[100px]  xl:grid-cols-2">
          <div className="flex justify-center">
            <img src="/BoxImage.png" alt="box" className="" />
          </div>

          
          <div className="text-center">
            <h1 className="font-[Inter] font-[400] text-[23px] leader-[32px] text-[#242424] text-center">What’s inside each box?</h1>
            <h1 className="mt-[20px]">✓ Easy-to-follow recipes with clear nutritional info</h1>
            <h1 className="p-[20px_0px_0px_0px]">✓ High-quality ingredients sourced straight from the farm</h1>
            <h1 className="p-[20px_0px]">✓ High-quality ingredients sourced straight from the farm</h1>
            <h1>✓ High-quality ingredients sourced straight from the farm</h1>
            <h1 className="m-[10px_0px] text-[#067A46] underline">
              ✓ Innovative packaging designed to reduce waste
            </h1>
            <a
              href="#"
              className="flex justify-center text-[#fff] items-center mt-[10px] w-[457px] h-[48px] bg-[#067A46] m-[auto]"
            >
              View our plans
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoxItems;
