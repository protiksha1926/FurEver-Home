import React from "react";
import img from "../assets/About.png";
export const AboutUs = () => {
  return (
    <section className=" bg-[#fdf7f2] py-20 px-6 md:px-14">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text section */}
        <div className="flex-1">
          <h2 className=" text-4xl font-bold text-[#5a3b1f] mb-6">About Scooby</h2>
          <p>
            At <span className="font-semibold">Scooby</span> we believe that pets aren't just animals — they're family.
            That's why we built a platform that delivers trusted, loving, and
            professional pet care services to your doorstep.
          </p>
          <p className=" text-[#7d5b40] text-base">
            Whether it's a grooming session, a vet consultation, or simply a
            delicious treat — we ensure your pet gets the best. Founded by true
            animal lovers, our mission is to make every pet feel healthy, happy,
            and loved.
          </p>
        </div>
        {/* Image section */}
        <div className=" flex-1">
          <img src={img} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
