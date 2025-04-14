import React from "react";
import background from "../assets/img2.png";
import img from "../assets/img.png";
import Layout from "../components/Layout";
import Input from "../components/Input";

const Signup = () => {
  return (
    <Layout bg={`url(${background})`} className="bg-cover bg-center">
      <div className="flex justify-between items-center ">
        <div className="md:w-[40%] w-full  gap-10 flex flex-col justify-center items-center">
          <h1 className="text-[100px] font-bold text-white">SIGNUP</h1>
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" name="password" />
          <div className="flex flex-col gap-4 w-full">
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <p className="self-start">
              Already have an account?{" "}
              <span>
                <a href="/login" className="text-white font-bold">
                  Login
                </a>
              </span>
            </p>
          </div>
          <button className="bg-white  py-2 px-4 rounded hover:opacity-80 transition duration-300 ease-in-out w-[200px] text-[20px] font-bold cursor-pointer">
            Signup
          </button>
        </div>
        <div className="md:flex w-[60%] hidden  justify-center items-center">
          <img src={img} alt="img" className="transform scale-x-[-1]" />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
// Compare this snippet from src/components/Input.jsx:
