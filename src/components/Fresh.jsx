const Fresh = () =>{
   let FreshArray = [
         {id:1,image:"./public/fresh-image.png",title:"No skimpin’ on the chicken!",desc:"Or steak, or fish, or plant protein."},
         {id:2,image:"./public/fresh-image2.png",title:"No commitment whatsoever",desc:"Skipping weeks or cancelling is super easy., or plant protein."},
         {id:3,image:"./public/fresh-image3.png",title:"The most 5-star reviews",desc:"Our huge recipe selection wows week after week."},
         {id:4,image:"./public/fresh-image4.png",title:"Fresh and affordable",desc:"Chef-created deliciousness from $7.49 per meal."},
      ]
   return (
    <>
    <div className="Container">
         <h1 className="text-center mt-[50px] text-[#242424] text-[30px] leader-[38px] font[Inter]">Why HelloFresh?</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-[50px]">
          {FreshArray.map(({ id, image, title, desc }) => {
            return (
              <div key={id} className="text-center">
                <img src={image} alt="" className="mx-auto mb-4" />
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            );
          })}
        </div>
    </div>
    </>
   )
}
export default Fresh