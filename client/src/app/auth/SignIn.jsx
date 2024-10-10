import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // const { user, loginWithRedirect } = useAuth0();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const googleSignInSignup = await axios.post(
          `{import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/user/googleSignInAndSignup`,
          {
            email: userInfoResponse.data.email,
          }
        );

        const loginDetails = {
          _id: googleSignInSignup.data._id,
          email: googleSignInSignup.data.email,
          isTrialPlanTaken: googleSignInSignup.data.isTrialPlanTaken,
          plan: googleSignInSignup.data.plan,
          token: googleSignInSignup.data.token,
        };

        console.log(loginDetails)

        localStorage.setItem("LOGINDETAILS", JSON.stringify(loginDetails));

        toast.success(googleSignInSignup.data.message, {
          position: "top-right",
          icon: "🔥",
          style: {
            height: "60px",
            border: "1px solid green",
          },
        });
        navigate("/");

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
      }
    },
  });

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

    const loading = toast.loading("Loading...", {
      position: "top-right",
      style: {
        height: "60px",
        width: "200px",
        border: "1px solid gray",
      },
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/user/signin`,
        {
          email,
          password,
        }
      );

      const loginDetails = {
        _id: response.data._id,
        email: response.data.email,
        isTrialPlanTaken: response.data.isTrialPlanTaken,
        plan: response.data.plan,
        token: response.data.token,
      };

      localStorage.setItem("LOGINDETAILS", JSON.stringify(loginDetails));

      toast.success(response.data.message, {
        position: "top-right",
        icon: "🔥",
        style: {
          height: "60px",
          border: "1px solid green",
        },
      });
      setEmail("");
      setPassword("");
      navigate("/");
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
    }
    toast.dismiss(loading);
  }

  return (
    <div className="flex justify-center items-center my-20 sm:my-14">
      <div className="w-[260px] sm:w-[400px] lg:w-[500px]">
        <h1
          className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-center font-medium
        my-8"
        >
          Log In
        </h1>

        <form onSubmit={registerUser} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-[45px] sm:h-[50px] lg:h-[60px] px-3 bg-black/5 rounded-[5px]"
            required
            autoComplete="email"
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
            value="Login"
            className="bg-[#7FA4FF] hover:bg-[#6084df] h-[45px] sm:h-[50px] lg:h-[60px] 
          rounded-[5px] text-center"
          />
        </form>

        <h1 className="text-center my-5">
          Don&rsquo;t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-[#7FA4FF] hover:text-[#4762a5]"
          >
            Sign Up
          </Link>
        </h1>
        <div>
          <button
            className="w-full py-4 border-[1px] flex justify-center gap-3"
            onClick={googleLogin}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="-0.5 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    {" "}
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SignIn;
