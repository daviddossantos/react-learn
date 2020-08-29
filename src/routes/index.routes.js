import React from "react";

import { useAuth } from "../contexts/AuthProvider";
import Loading from "../pages/components/loading/Loading";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return <AppRoutes />;
}
