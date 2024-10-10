import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // const { user, loginWithRedirect } = useAuth0();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  async function registerUser(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const toastId = toast.loading("Loading...", {
      position: "top-right",
      style: {
        height: "60px",
        width: "200px",
        border: "1px solid gray",
      },
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/user/signup`,
        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");
      toast.success(response.data.message, {
        position: "top-right",
        icon: "🔥",
        style: {
          height: "60px",
          border: "1px solid green",
        },
      });
      toast.dismiss(toastId);
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        toast.error(error.response.data.message, {
          position: "top-right",
          icon: "👏",
          style: {
            height: "60px",
            border: "1px solid red",
          },
        });
      } else {
        toast.error(error.message, {
          position: "top-right",
          icon: "👏",
          style: {
            height: "60px",
            border: "1px solid red",
          },
        });
      }
      toast.dismiss(toastId);
    }
  }

  return (
    <div className="flex justify-center items-center my-20 sm:my-14">
      <div className="w-[260px] sm:w-[400px] lg:w-[500px]">
        <h1
          className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-center font-medium
        my-8"
        >
          Sign up for a free account
        </h1>

        <form onSubmit={registerUser} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-[45px] sm:h-[50px] lg:h-[60px] px-3 bg-black/5 rounded-[5px]"
            required
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-[45px] sm:h-[50px] lg:h-[60px] px-3 bg-black/5 rounded-[5px]"
            autoComplete="current-password"
            required
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <input
            type="submit"
            value="Register"
            className="bg-[#7FA4FF] hover:bg-[#6084df] h-[45px] sm:h-[50px] lg:h-[60px] 
          rounded-[5px] text-center"
          />
        </form>

        <h1 className="text-center my-5">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#7FA4FF] hover:text-[#4762a5]"
          >
            Log in
          </Link>
        </h1>
        <button
          className="h-[45px] sm:h-[50px] lg:h-[60px] border border-black rounded-[5px] w-full flex justify-center items-center
        gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=""
          >
            <g fill="none">
              {" "}
              <path d="M0 0L24 0 24 24 0 24z" />{" "}
              <g>
                <path
                  fill="#FFC107"
                  d="M19.805 8.041H19V8h-9v4h5.652c-.825 2.329-3.04 4-5.652 4-3.314 0-6-2.687-6-6 0-3.314 2.686-6 6-6 1.53 0 2.921.577 3.98 1.52L16.81 2.69C15.023 1.027 12.634 0 10 0 4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z"
                  transform="translate(2 2)"
                />
                <path
                  fill="#FF3D00"
                  d="M1.153 5.346L4.44 7.755C5.328 5.554 7.48 4 10 4c1.53 0 2.921.577 3.98 1.52l2.83-2.829C15.022 1.027 12.633 0 10 0 6.16 0 2.828 2.168 1.153 5.346z"
                  transform="translate(2 2)"
                />
                <path
                  fill="#4CAF50"
                  d="M10 20c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619c-1.037.79-2.305 1.216-3.61 1.215-2.6 0-4.809-1.658-5.64-3.973L1.096 14.54C2.752 17.778 6.113 20 10 20z"
                  transform="translate(2 2)"
                />
                <path
                  fill="#1976D2"
                  d="M19.805 8.041H19V8h-9v4h5.652c-.395 1.108-1.105 2.077-2.044 2.786l.002-.002 3.095 2.62C16.485 17.602 20 15 20 10c0-.67-.069-1.325-.195-1.959z"
                  transform="translate(2 2)"
                />{" "}
              </g>
            </g>
          </svg>
          <span>Google</span>
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default SignIn;

// onClick={() => loginWithRedirect()}
