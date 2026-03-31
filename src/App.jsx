import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import HanifProfile from './pages/hanif'
// Import profil anggota lainnya
// import Anggota2Profile from './pages/Anggota2Profile'
// import Anggota3Profile from './pages/Anggota3Profile'

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Home */}
        <Route path="/" element={<HomePage />} />
        
        {/* Halaman Profil Anggota */}
        <Route path="/hanif" element={<HanifProfile />} />
        {/*<Route path="/anggota2" element={<Anggota2Profile />} />
        <Route path="/anggota3" element={<Anggota3Profile />} />
        Tambahkan route anggota lainnya */}
      </Routes>
    </Router>
  )
}

export default App