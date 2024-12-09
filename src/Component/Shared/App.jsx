import Card from "../../Component/Shared/Card"
import hummer from "../../assets/Hummer.png";
import delivery from "../../assets/Delivery.png";
import fruit from "../../assets/Fruit.png";
import round from "../../assets/Round.png";
import micro from "../../assets/Micro.png";
import bus from "../../assets/Bus.png";

function App() {
  return (
    <>
      <div className="flex justify-center mt-[2rem]">
        <div className="grid grid-cols-3 gap-3">
          <Card
            Src={hummer}
            Title="Rides"
            Text="Request in seconds,ride in Minutes"
          />
          <Card
            Src={delivery}
            Title="Delivery"
            Text="Your Favourite Food, delivery Fast"
          />
          <Card
            Src={fruit}
            Title="Groceries"
            Text="All the essential whenever, you need them"
          />
          
              <Card
                Src={round}
                Title="Car-Sharing"
                Text="High-quality Car rental Made easy."
              />
              <Card
                Src={micro}
                Title="Micromobility"
                Text="2-wheel ride rental at your fingertips."
              />
              <Card
                Src={bus}
                Title="Business"
                Text="Manage business travel for your team and clients."
              />
        </div>
      </div>
    </>
  );
}

export default App;
