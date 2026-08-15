import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Lucia = () => {

 useGSAP(()=>{
   
    const video2=document.querySelector(".nd-video")
 


    
    video2.onloadedmetadata=()=>{
    
        const tl3=gsap.timeline({scrollTrigger:{
            //    markers:true,
             // currentTime:video2.duration,
             //   markers:true,
               trigger:".nd-video",
               start:"top 40%",
               end:"bottom 40%",
               scrub:true
             }})

      tl3.fromTo('.nd-video',
        {   
        currentTime:0,
          opacity:0
        },{
           opacity:1,
          currentTime:video2.duration,
          duration:1,
        })
        .to(video2,{
          opacity:0
        })
      ScrollTrigger.refresh()
      }

})


  return (
    <div className='cont-3 bg-black h-auto w-full'>
      <video className='nd-video w-full h-auto mt-24' muted playsInline preload='auto' src="/videos/output2.mp4"></video>

 <div className="contain-2-childrens-2 w-full flex justify-between">
      <div className="right-2-3 flex flex-col w-[50%] pt-[35vh]">
        <img className='w-[90%] h-[50vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-14 mt-4' src="/images/lucia-1.webp" alt="" srcset="" />
        <img className='w-[50%] h-[55vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[23vw] mt-4' src="/images/lucia-3.webp" alt="" srcset="" />
      </div>
      <div className="left-2-3 flex flex-col items-center gap-4 w-[50%]">
        <h1 className='text-yellow-300 text-7xl font-medium pt-[5vw] uppercase'>Lucia <br /> Caminos</h1>
        <h2 className='w-[46%] text-pink-300 text-4xl pt-5 ml-6'>Lucia's fater taught her to fight as soon as she could walk.</h2>
        <p className='w-[50%] text-white text-lg pt-10 ml-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Consectetur sit ducimus obcaecati porro,
            modi quos atque ipsa, nesciunt eius suscipit
             quis doloribus doloremque at numquam praesentium sunt iste
              voluptatum maiores?</p>
              <img className='w-[55%] 
              h-[45vh] object-cover transition-all 
              duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 mt-[7vh]' src="/images/lucia-2.webp" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Lucia
