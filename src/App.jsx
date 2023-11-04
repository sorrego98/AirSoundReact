import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
//Routes Auth
import Login from './routes/auth/Login';
import Register from "./routes/auth/Register";
//Routes Admin
// import Home from "./routes/admin/Home";
import HomeP from "./routes/admin/HomePrueba";
import Profile from "./routes/admin/Profile";
import Error404 from './routes/Error404';
import Tickets from "./routes/admin/Tickets";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<HomeP />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
