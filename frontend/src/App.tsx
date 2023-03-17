import "./global.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ThemeProvider from "./Context/Theme"
import Layout from "./pages/Layout"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Layout /> } />
            <Route path='*' element={ <Navigate to='/' />  } />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
