import town from "../../assets/Town.webp";
function BoltDescription() {
  return (
    <>
      <div className="flex justify-center gap-5 items-center mt-20">
        <div className=" flex flex-col text-3xl font-bold gap-5">
         <div className="w-[27rem]">
         Making Cities For People, not Cars
         </div>
          <p className="mt-3 font-normal">
            <p className="">
              <p className="text-[1.2rem] w-[25rem]">
                By sharing our knowledge of the industry and real-time
                data we’re helping to improve our cities.
              </p>
              <h1 className="text-[1.3rem] font-bold">
                Sharing best Practices
              </h1>
              <p className="text-[1.1rem] w-[29rem]">
                We’re able to provide insights that help local authorities
                 make their cities more connected and liveable.
              </p>
            </p>
            <h2 className="text-[1.3rem] font-bold">
              One app, many ways to move
            </h2>
            <p className="text-[1.1rem] w-[27rem]">
              With multiple transport services inside a single app,
              getting around safely, in a more sustainable way, has never
              been easier.
            </p>
            <h3 className="text-[1.3rem] font-bold">Less is more</h3>
            <p className="text-[1.1rem] w-[28rem]">
              Shared transport can transform our cities by lowering 
              emissions, reducing congestion, and the demand for parking
              spaces.
            </p>
            <div className="">
              <button className="px-8 py-2 bg-slate-200 text-white rounded-full m">
                Learn more
              </button>
              <div className=""></div>
            </div>
          </p>
        </div>

        <div>
          <img
            className="w-[40rem]"
            src={town}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default BoltDescription;
