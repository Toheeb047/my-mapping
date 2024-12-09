import chance from "../assets/Chance.jpg"
import rewards from "../assets/Rewards.jpg"
import safety from "../assets/Safety.jpg"
import Cardprofile from "./Cardprofile";

function Profile() {
   
  return (
    <>
      <div className="flex justify-center mt-[2rem]">
        <div className="grid grid-cols-3 gap-3  text-2xl">
          <Cardprofile
            image={chance}
            className="w-[25rem] h-[15rem] rounded-lg"
            title2="Win up to NGN 2 Millions in the Bolt Don Come Challenge"
            text2="4 Minutes read. 11/26/2024"
            paragraph=""
          />
          <Cardprofile
            image={rewards}
            className="w-[25rem] h-[15rem] rounded-lg"
            title2="Unlock benefits and save money with Bolt Rewards"
            text2="4 min read • 9/4/2024"
          />
          <Cardprofile
            image={safety}
            className="w-[25rem] h-[15rem] rounded-lg"
            title2="Rider Verification launched to increase driver safety"
            text2="4 min read • 8/21/2024"
          />
        </div>
      </div>
    </>
  );
}

export default Profile
