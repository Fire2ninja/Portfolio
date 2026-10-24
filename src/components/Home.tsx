import { Mail } from "lucide-react";
import img from "../assets/71bd0564-f52c-4411-a85f-fe48377c83a5.png";

const stars = [
  { top: "8%", left: "12%", size: 3, delay: "0s" },
  { top: "18%", left: "82%", size: 2, delay: "1.2s" },
  { top: "70%", left: "6%", size: 2, delay: "0.6s" },
  { top: "85%", left: "70%", size: 3, delay: "2s" },
  { top: "40%", left: "95%", size: 2, delay: "1.6s" },
  { top: "92%", left: "30%", size: 2, delay: "0.3s" },
  { top: "4%", left: "55%", size: 2, delay: "2.4s" },
];

const SolarPanel = () => (
  <div className="relative p-1 bg-base-content/20 border-2 border-primary rounded-md shadow-lg">
    <div className="grid grid-cols-2 grid-rows-4 gap-0.5 w-14 h-24 md:w-20 md:h-32">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-gradient-to-br from-indigo-500 to-blue-950 rounded-[2px]" />
      ))}
    </div>
    <div className="pointer-events-none absolute inset-1 rounded-sm bg-gradient-to-tr from-transparent via-white/15 to-transparent" />
  </div>
);

const Strut = () => (
  <div className="flex items-center">
    <div className="w-3 md:w-5 h-1.5 bg-base-content/50" />
    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
    <div className="w-3 md:w-5 h-1.5 bg-base-content/50" />
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:my-32 my-10">
      <div className="flex flex-col justify-end md:justify-start">
        <h1 className="text-5xl md:text-6xl font-bold text-left md:texte-left mt-4 md:mt-0  text-orange-50 ">
          Bonjour, <br /> je suis{" "}
          <span className="text-primary ">Fireninja</span>
        </h1>
        <br />
        <p className="my-4 text-md text-left md:texte-left text-orange-50 ">
          {" "}
          Développeuse jeune et curieuse , codant en react et node.js.
          <br /> contactez moi si vous voulez mes services.
        </p>
        <a href="" className="btn btn-primary md:w-fit">
          <Mail className="w5 h-5" />
          Contacte-moi
        </a>
      </div>
      <div className="relative flex items-center justify-center mx-auto md:mx-0 md:ml-12 shrink-0 w-80 h-72 md:w-[26rem] md:h-96">
        {/* étoiles */}
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-orange-50 animate-twinkle"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
          />
        ))}

        {/* orbite */}
        <div className="absolute w-full h-1/2 rounded-[50%] border-2 border-dashed border-primary/25 -rotate-12" />

        {/* satellite */}
        <div className="animate-float">
          <div className="flex items-center -rotate-12">
            <SolarPanel />
            <Strut />

            {/* corps : la photo */}
            <div className="relative">
              {/* antenne */}
              <div className="absolute left-1/2 -top-10 -translate-x-1/2 flex flex-col items-center">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex w-3 h-3 rounded-full bg-primary" />
                </span>
                <div className="w-0.5 h-7 bg-gradient-to-b from-primary to-base-content/40" />
              </div>

              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl" />
              <img
                src={img}
                alt="Fireninja"
                className="relative w-32 h-32 md:w-44 md:h-44 rotate-12 object-cover rounded-full border-4 border-primary ring-8 ring-base-300 shadow-2xl"
              />
            </div>

            <Strut />
            <SolarPanel />
          </div>
        </div>
      </div>

      <div>
   
    


      </div>
    </div>
  );
};

export default Home;
