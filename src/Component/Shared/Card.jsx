

function Card(props) {
  const {Title,Text,Src}=props 
  return (
    <div className=" flex flex-col bg-[#f5f6f7] gap-3 rounded-[1.2rem] pt-2 pl-3">
     <h2 className="">{Title}</h2>
     <p className="">{Text}</p>
     <div className="flex justify-end">
     <img className="w-[10rem]"  src={Src} alt="" />
     </div>
    </div>
  )
}

export default Card
