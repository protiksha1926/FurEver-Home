import img from "../assets/dog.jpg";

const Hero = () => {
  return (
    <section className="bg-[#fff9f6] py-16 px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="flex-1">
        <p className="text-sm text-[#d1733d] font-medium mb-4 border-l-4 border-[#d1733d] pl-3">
          Trusted Pet Care, Tailored With Love
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1e1e1e]">
          Your <span className="text-[#ff7d4e]">Pet</span> Deserves
          <br />
          The Best Family.
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-lg">
          Find loving homes, trusted pet care, and compassionate adoption
          services that help every furry friend live a happier life.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-[#ff7d4e] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#e46637] transition duration-300">
            Make an Appointment
          </button>

          <button className="bg-[#1e1e1e] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#333] transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white p-3 rounded-[32px] shadow-2xl">
          <img
            src={img}
            alt="Happy Dogs"
            className="w-full max-w-[650px] h-[380px] object-cover rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;