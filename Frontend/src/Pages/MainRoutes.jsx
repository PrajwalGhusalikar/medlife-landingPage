import React from "react";

import { Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Heading } from "@chakra-ui/react";
import Chatbot from "./Chat";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      {/* <Route
        path="/chat"
        element={
          <PrivateRoute>
            <Chatbot />
          </PrivateRoute>
        }
      /> */}
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<Heading>Page Not Found</Heading>} />
    </Routes>
  );
};

export default MainRoutes;
