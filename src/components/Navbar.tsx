import { Flame } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar p-4">
      <div className="navbar-start">
        <a href="#" 
        className="flex items-center gap-1 font-bold text-3xl md:text-xl text-orange-400">
          <Flame className="mr-2" />
          Fire Ninja
        </a>
      </div>

      <ul className="navbar-center hidden md:flex gap-6 space-x-4">
        <li>
          <a href="#" 
          className="btn btn-sm btn-ghost"

          >
            Accueil
          </a>
        </li>
        <li>
          <a href="#"
          className="btn btn-sm btn-ghost"

          >
            A propos
          </a>
        </li>
        <li>
          <a href="#" 
          className="btn btn-sm btn-ghost"

          >
            Mes expériences
          </a>
        </li>
        <li>
          <a href="#" 
          className="btn btn-sm btn-ghost"

          >
            projets
          </a>
        </li>
      </ul>

      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
