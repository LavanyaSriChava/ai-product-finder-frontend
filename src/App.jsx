import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Wishlist from "./pages/Wishlist/Wishlist";
import History from "./pages/History/History";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./components/AdminRoute";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

<Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist />
    </ProtectedRoute>
  }
/>
<Route
  path="*"
  element={<NotFound />}
/>
<Route
  path="/dashboard"
  element={
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;