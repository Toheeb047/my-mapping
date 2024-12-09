import phone  from '../assets/Phone.webp'
const Bill = () => {
  return (
    <div>
      <h1 className="font-extrabold text-5xl mt-40 text-center">
        Download our apps
      </h1>
      <div className="flex justify-center gap-2 mt-6">
        <button className="px-8 py-2 bg-black text-white rounded-full">
          Rides
        </button>
        <button className="px-8 py-2 bg-slate-300 text-white rounded-full">
          Delivery
        </button>
      </div>
      <div className="bg-[#1d965c] text-left mt-5 h-max w-full rounded-lg">
        <h1 className="text-3xl text-left pt-10 pl-40 pr-24 text-white font-bold">
          Request in seconds,
          <br /> in minutes.
        </h1>
        <p className="mt-5 text-xl pr-15 text-white">
          Available for iOS and Android devices.
        </p>
        <button className="px-8  py-2 mt-5 bg-slate-100 font-bold rounded-full">
          Get the app
        </button>
        <div className="flex items-end justify-end -mt-60 gap-5">
          <img
            className="w-[40rem] h-[30rem] rounded-[1.1rem]"
            src={phone}
            alt="phone"
          />
        </div>
      </div>
      <div className=" container-md mt-32 px-6 mb-6 md:mb-12 flex justify-between items-center">
        <h2 className="text-4xl md:text-5xl font-semibold">News and update</h2>
        <div className="">
          <button className="px-8 py-2 bg-slate-200 text-white rounded-full ">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bill
