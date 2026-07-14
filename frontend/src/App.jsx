import Layout from "./components/layout/Layout";
import Login from "./pages/Login";

import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <Layout />;
}