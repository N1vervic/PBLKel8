import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Home from './pages/home'
import HanifProfile from './pages/hanif'
import AlbarProfile from './pages/albar'
import IvanProfile from './pages/ivan'
=======
import HomePage from './pages/homepage'
import HanifProfile from './pages/hanif'
// Import profil anggota lainnya
// import Anggota2Profile from './pages/Anggota2Profile'
// import Anggota3Profile from './pages/Anggota3Profile'
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/hanif" element={<HanifProfile />} />
        <Route path="/albar" element={<AlbarProfile />} />
        <Route path="/ivan" element={<IvanProfile />} />
=======
        {/* Halaman Home */}
        <Route path="/" element={<HomePage />} />
        
        {/* Halaman Profil Anggota */}
        <Route path="/hanif" element={<HanifProfile />} />
        {/*<Route path="/anggota2" element={<Anggota2Profile />} />
        <Route path="/anggota3" element={<Anggota3Profile />} />
        Tambahkan route anggota lainnya */}
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596
      </Routes>
    </Router>
  )
}

export default App