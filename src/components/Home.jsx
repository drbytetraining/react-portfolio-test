import React from 'react'
import heroImg from '../assets/images/homeImg.png'
import { MdWavingHand } from "react-icons/md";
import { selfExperience } from '../assets/data';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import wave from '../assets/images/illustations/wave(1).svg'
import { AiFillDatabase } from "react-icons/ai";


const Home = () => {
  return (
    <div className='container min-h-screen bg-gradient-to-r from-[#FFE299] via-[#8ECAE6] to-[#FFCF99] w-[100vw] '>
      <div className="sm:flex justify-between items-center newSection overflow-hidden">
        <div className="  ">
          <h1 className='text-[15px] sm:text-[35px] text-[#023047] flex items-center gap-2'><span>Hello </span> <span><MdWavingHand /></span></h1>
          <h3 className='text-[35px] sm:text-[65px] font-[700] text-[#FB8500]'>Muhammad  Awais</h3>
          <p className='text-[12px] sm:text-[25px] text-[#023047]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, pariatur.</p>
          <Link to='/contact' className=''>        <button className='border-y-2 border-[#023047] bg-gradient-to-r from-[#FB8500] via-slate-500 text-white to-[#219EBC] sm:px-2 sm:py-1 px-1 hover:border-x-4 hover:border-y-0 hover:overflow-x-hidden'>Hire Me</button>
          </Link>
        </div>
        <div className="">
          <img src={heroImg} className='' alt="" />
        </div>

      </div>


      <div className="sm:flex justify-around items-center mt-10 sm:mt-24  newSection">
        {
          selfExperience.map(
            exp => (
              <div className='border-2 bg-slate-50 border-slate-200 sm:px-6 sm:py-7 sm:rounded-lg w-[30%] mx-auto mb-7 py-4 rounded-full'>
                <h4 className='text-center text-[20px] sm:text-[30px] text-[#023047] font-[600] flex justify-center items-center'>{exp.num}<FaPlus className='text-[10px] sm:text-[20px]' /></h4>
                <h6 className='text-center text-[15px] sm:text-[20px] text-[#FB8500]'>{exp.title} </h6>
              </div>
            )
          )
        }
      </div>

      <div className="">
        <img src={wave}  alt="" />
        <div className=" bg-[#FFB703] -mt-1 px-[20px] py-10">
          <h2 className='text-6xl font-[800] text-center py-3'>What Can I do For You!</h2>
          <div className="sm:flex justify-center items-center gap-5 space-y-5 sm:space-y-0">
          <div className=" border-2 border-black bg-white px-6 py-5 rounded-3xl shadow-2xl">
                        <h3 className='sm:text-5xl text-3xl font-[600] text-center'>Front End</h3>
            <p className='text-xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              vitae magni explicabo corporis reiciendis aspernatur.</p></div>
          <div className=" border-2 border-black bg-white px-6 py-5 rounded-3xl shadow-2xl ">
            <h3 className='sm:text-5xl  text-3xl font-[600] text-center'>Back End</h3>
            <p className='text-xl text-center' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              vitae magni explicabo corporis reiciendis aspernatur.</p></div>
          </div>
        </div>
      </div>

      <div className="">
       <div className="flex justify-between">
       <h2>
          Featured Projects
        </h2>

        <Link to='portfolio'>
        <h3>View All</h3>
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Home
