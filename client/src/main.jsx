import React from "react";
import ReactDOM from "react-dom/client";
// import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import store from "./store/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="73610947788-bvj67i1cudvafokn3tp58i882oshj58n.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);