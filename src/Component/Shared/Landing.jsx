import Bolt from "../../assets/Bolt.webp";
const Landing = () => {
  return (
    <>
      <div className="background w-screen h-screen pl-[7rem] pt-[4rem]">
        {/* <div className="services"> */}
        {/* <nav className="flex justify-between  px-[5rem] py-[1rem] w-full"> */}
        <div className="flex">
          <div className=" w-[20%]">
            <img src={Bolt} alt="" className="w-[2.5rem]" />
          </div>

          {/* <img src={Bolt} alt="" className="w-[2.5rem]" /> */}
          <div className="w-[80%]">
            <ul className="flex justify-items-end space-x-10 font-medium">
              <li className="text-white">Data</li>
              <li className="text-white">Packages & Plan</li>
              <li className="text-white">Business</li>
              <li className="text-white">Digital Services</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Get Help</li>
            </ul>
          </div>
        </div>
        {/* </nav> */}
        <div className="flex justify-center">
          {/* <div className="background w-screen h-screen pl-[7rem] pt-[6rem]"> */}
          <h1 className="text-5xl text-white font-bold">
            Go wherever,
            <br />
            whenever
          </h1>
          <div className="mt-8">
            <p className="text-2xl text-white font-semibold">
              Bolt is the all-in-one mobility app. Get picked up by a <br />
              top-rated driver in minutes and enjoy a comfortable ride <br />
              to wherever you re going; or skip the traffic entirely on <br />
              one of our industry-leading scooters.{" "}
            </p>
            <div className="flex justify-items-center mt-8 ">
              <button className="px-8 py-2 bg-green-500 text-white rounded-full">
                Get the app
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Landing;
