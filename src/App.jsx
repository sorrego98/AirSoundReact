import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
//Routes Auth
import Login from './routes/auth/Login';
import Register from "./routes/auth/Register";
//Routes Admin
import Home from "./routes/admin/Home";
import Error404 from './routes/Error404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
