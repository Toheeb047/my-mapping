import Landing from "../../Component/Shared/Landing"
import BoltButton from "../../Component/Shared/BoltButton"
import BoltDescription from "../../Component/Shared/BoltDescription"
import App from "../../Component/Shared/App"
import Buiding from "../../Component/Buiding"
import Bill from "../../Component/Bill"
import Profile from "../../Component/Profile"
import Cardprofile from "../../Component/Cardprofile"
import Footer from "../../Component/Footer" 
import Test from "../../Component/Shared/Test"

const Place = () => {
  return (
    <div>
    <Landing />
    <BoltButton />
    <App />
    <BoltDescription />
    <Buiding/>
    <Bill/>
    <Profile/>
    <Cardprofile/>
    <Footer/>
    <Test/>
    </div>
  )
}

export default Place
