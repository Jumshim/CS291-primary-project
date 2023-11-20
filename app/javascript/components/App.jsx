import React, { useEffect } from "react";
import RouteIndex from "../routes";
import { AuthProvider } from "./AuthProvider";

export default function App(props) {
  return (
    <AuthProvider value={{ token, setToken }}>
      <RouteIndex />
    </AuthProvider>
  );
}
