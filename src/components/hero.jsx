import React from 'react'
import img from '../assets/dog.jpg'
const Hero = () => {
  return (
    <section className=" bg-[#fff9f6] py-16 px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-btween gap-10">

        {/* left content */}
    <div className=" flex-1">
            <p className=" text-sm text-[#d1733d] font medium mb-2 border-l-4 border-[#d1733d] pl-2">Trusted Pet Care, Tailored With Love</p>
            <h1 className=" text-4xl md:text-5xl font-extrabold leading-tight text-[#1e1e1e]">
                Your <span className=" text-[#ff7d4e]"> Pet </span> Deserves <br />The Best Family.
            </h1>
        <div className=" bg-[#ff7d4e] text-white px-3.5 md:px-6 py-3 rounded-lg font-semibold shadow hover bg-[#e46637] transition">
        <button>
            Make an Appointment
        </button>
        <button>
            Learn More
        </button>
        </div>
    </div>

    {/* right img */}
    <div>
        <img src={img} alt="dog img" /> 
    </div>
    </section>
  );
};

export default Hero;