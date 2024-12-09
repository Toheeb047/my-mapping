

function Cardprofile({ title2, text2, image,paragraph,className }) {
  return (
    <div className=" flex flex-col  gap-3 rounded-[1.2rem] pt-2 pl-3">
      <div className="flex flex-col">
        <img className={`${className}`} src={image} alt="" />
        <p>{paragraph}</p>
      </div>
      <h2 className="">{title2}</h2>
      <p className="">{text2}</p>
    </div>
  );
}

export default Cardprofile
