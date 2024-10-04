/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import LoginImg from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { login } = useContext(AuthContext);
  const [inputs, setinputs] = useState({
    username: "",
    password: "",
  });
  const [err, seterr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      seterr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="h-screen bg-[rgb(193,190,255)] flex  items-center justify-center">
      <div className="flex w-[95%] lg:w-1/2 rounded-lg bg-white min-h-[600px] flex-col md:flex-row overflow-hidden shadow-2xl">
        {/* left */}
        <div
          className="flex-1 p-12 flex flex-col gap-8  text-white justify-center"
          style={{
            background: `linear-gradient(rgba(39,11,96,0.7), rgba(39,11,96,0.7)), url(${LoginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl leading-tight font-bold">
            Welcome To MY-STACK
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            error beatae iure pariatur aspernatur dolorum iste voluptatibus
            neque sit, numquam exercitationem maiores fugit reiciendis debitis
            ut, id dolores magnam optio.
          </p>
          <span className="text-sm">Dont you have an Account ?</span>
          <Link to="/register">
            <button className="w-1/2 p-3 bg-white text-purple-500 cursor-pointer hover:scale-105 transition-transform">
              Register
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="flex-1 p-12 flex flex-col gap-8 justify-center">
          <h1 className="text-[#555] text-4xl font-bold">Login</h1>
          <form action="" className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="username"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="outline-none border-b border-gray-500 py-5 px-2.5"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button
              onClick={handleLogin}
              className="w-1/2 p-3 text-white bg-purple-500 cursor-pointer hover:scale-105 transition-transform"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
