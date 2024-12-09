import Rice from "../../assets/Rice.webp";

function BoltButton() {
  return (
    <div className="">
      <h1 className="font-extrabold text-5xl mt-40 text-center">
        Earn money with Bolt
      </h1>
      <div className="flex justify-center gap-2 mt-6">
        <button className="px-8 py-2 bg-slate-800 text-white rounded-full">
          driver
        </button>
        <button className="px-8 py-2 bg-slate-300 text-white rounded-full">
          courier
        </button>
        <button className="px-8 py-2 bg-slate-300 text-white rounded-full">
          Restaurant or store owner
        </button>
        <button className="px-8 py-2 bg-slate-300 text-white rounded-full">
          fleet owner
        </button>
      </div>
      <div className="flex mt-10">
        <img
          className="rounded-3xl"
          src={Rice}
          alt="foot"
          height={300}
          width={400}
        />
        <div className="text-center">
          <h1 className="text-5xl text-extrabold text-center">
            Drive and earn money
          </h1>
          <h2 className="text-2xl text-semi-bold mt-8 ">
            Drive more, earn <br /> more
          </h2>
          <p className="mt-2">
            Our 200+ million riders will Send you plenty of ride <br />
            requests. When demand is high, you can earn even more.
          </p>
          <h2 className="text-2xl text-semi-bold mt-9">Set your schedule</h2>
          <p className="mt-2">
            Drive for as long and as often as you like. Weekdays;
            <br /> weekends; evenings — fit driving around your lifestyle.
          </p> 
          <h2 className="text-2xl text-semi-bold mt-9">Get paid each week</h2>
          <p className="mt-2">
            You’ll receive your earnings at the end of each week —<br />
            no need to wait around for payday.
          </p>
          <div className="mt-8">
            <button className="px-8 py-2 bg-slate-200 text-white rounded-full m">
              Learn more
            </button>
          </div>
          <div className="">
            <h1 className="text-5xl items-center mt-6 font-extrabold">
              Our Services
            </h1>
            <p className="mt-10 flex justify-center items-center gap-3">
              Products and features vary by country. Some features listed here
              may not be available in your app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoltButton;
