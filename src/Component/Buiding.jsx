import Private from '../assets/Private.webp'

function Buiding() {
  return (
 <div className='flex items-center justify-center mt-40 gap-10'>
<div>
      <img className="w-[40rem] h-[30rem] rounded-[1.1rem]" src={Private} alt="" />
    </div>

<div className='flex flex-col gap-5 items-center mt-20'>
<div className='flex flex-col text-3xl font-bold gap-10  '>
 <div className='w-[27rem] text-center'>
       À propos
</div> 
<p className='mt-3 font-normal'>
 <p className=''>
 <p className='text-[1.2rem] w-[25rem] '>
  Bolt is the first European mobility super-app.
   We’re making cities for people, offering better 
    alternatives for every purpose a private car serves — including ride-hailing, shared cars,
     scooters, and food and grocery delivery. 
</p>
<h1 className='text-[1.3rem] font-bold'>
200+ million
<p className='text-[1.1rem] w-[29rem]'>
customers around the world.
</p>
<h2 className='text-[1.3rem] font-bold'>5 continents</h2>
<p>50+ countries.</p>
</h1> 
<h3 className="text-[1.3rem] font-bold">4.6+ million</h3>
      <p className="text-[1.1rem] w-[28rem]">
      drivers and couriers.
      </p> 
</p>  
</p>  
</div>    
</div>
    </div> 
  )
}

export default Buiding
