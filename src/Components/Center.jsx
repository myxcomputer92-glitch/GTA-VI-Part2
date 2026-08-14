import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Center = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const video=document.querySelector(".st-video")
    const video2=document.querySelector(".nd-video")
 

const tl=gsap.timeline({scrollTrigger:{
          // markers:true,
          trigger:".st-video",
          start:"30% 20%",
          end:"230% 20%",
          scrub:true,
        }})

    video.onloadedmetadata=()=>{
      tl.fromTo('.st-video',
        {   
          opacity:0,
          currentTime:0,
         },
         {
          opacity:1,
          duration:1,
         currentTime:video.duration,
         }
        )
      tl.to(video,{
        opacity:0,
        duration:0.3
      })
        // .to(video,{
        //   currentTime:video.duration,
        //   // delay:5
        // })
      }


const tl2=gsap.timeline({scrollTrigger:{
    // markers:true,
    trigger:'.st-video',
    start:"380% 50%",
    end:"440% 50%",
    scrub:true
}})

tl2.to(".left-1-3,.right-1-3",{
  y:"-40%"
})


const tl3=gsap.timeline({scrollTrigger:{
          // markers:true,
        // currentTime:video2.duration,
          markers:true,
          trigger:".nd-video",
          start:"460% 40%",
          end:"880% 40%",
          scrub:true
        }})

 video2.onloadedmetadata=()=>{
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
       
      }

  })
  return (
    <div className='cont-3 bg-black h-auto w-full'>
      <video className='st-video w-full h-auto' muted playsInline preload='auto' src="/videos/output1.mp4"></video>
    <div className="contain-2-childrens w-full flex justify-between">
      <div className="left-1-3 flex flex-col items-end gap-4 w-[50%]">
        <h1 className='text-yellow-300 text-7xl font-medium pt-[5vw] uppercase mr-[11vw]'>Jason <br /> Duval</h1>
        <h2 className='w-[46%] text-pink-300 text-4xl mr-[3vw] pt-5'>Jason wants an easy life, but things just keep getting <br /> harder.</h2>
        <p className='w-[50%] text-white text-lg pt-10 mr-[1.2vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Consectetur sit ducimus obcaecati porro,
            modi quos atque ipsa, nesciunt eius suscipit
             quis doloribus doloremque at numquam praesentium sunt iste
              voluptatum maiores?</p>
              <img className='w-[55%] h-[45vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-[4vh]' src="/images/jason-2.webp" alt="" />
      </div>
      <div className="right-1-3 flex flex-col w-[50%]">
        <img className='w-[75%] h-[50vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-4' src="/images/jason-1.webp" alt="" srcset="" />
        <img className='w-[50%] h-[40vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-4' src="/images/jason-3.webp" alt="" srcset="" />
      </div>
    </div>
    
<video className='nd-video w-full h-auto transform translate-y-[-35vh]' muted playsInline preload='auto' src="/videos/output2.mp4"></video>

 <div className="contain-2-childrens-2 w-full flex justify-between">
      <div className="right-2-3 flex flex-col w-[50%] pt-[5vh]">
        <img className='w-[90%] h-[50vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-14 mt-4' src="/images/lucia-1.webp" alt="" srcset="" />
        <img className='w-[50%] h-[55vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[23vw] mt-4' src="/images/lucia-3.webp" alt="" srcset="" />
      </div>
      <div className="left-2-3 flex flex-col items-center gap-4 w-[50%] transition translate-y-[-20vh]">
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

export default Center
