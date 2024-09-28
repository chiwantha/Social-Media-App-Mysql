import registerImg from "../../assets/images/register.jpg";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="h-screen bg-[rgb(193,190,255)] flex  items-center justify-center">
      <div className="flex w-[95%] lg:w-1/2 rounded-lg bg-white min-h-[600px] flex-col md:flex-row-reverse overflow-hidden shadow-2xl">
        {/* left */}
        <div
          className="flex-1 p-12 flex flex-col gap-8  text-white justify-center"
          style={{
            background: `linear-gradient(rgba(39,11,96,0.8), rgba(39,11,96,0.8)), url(${registerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl leading-tight font-bold">
            MY-STACK <span className="text-purple-300">BLOGS</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            error beatae iure pariatur aspernatur dolorum iste voluptatibus
            neque sit, numquam exercitationem maiores fugit reiciendis debitis
            ut, id dolores magnam optio.
          </p>
          <span className="text-sm">Do you have an Account ?</span>
          <Link to="/login">
            <button className="w-1/2 p-3 bg-white text-purple-500 cursor-pointer hover:scale-105 transition-transform">
              Login
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="flex-1 p-12 flex flex-col gap-8 justify-center">
          <h1 className="text-[#555] text-4xl font-bold">Register</h1>
          <form action="" className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="username"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
            />
            <input
              type="email"
              placeholder="email"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
            />
            <input
              type="password"
              placeholder="password"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
            />
            <input
              type="text"
              placeholder="name"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
            />
            <button className="w-1/2 p-3 text-white bg-purple-500 cursor-pointer hover:scale-105 transition-transform">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
