import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HanifProfile from './pages/HanifProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hanif" element={<HanifProfile />} />
        {/* Tambahkan route anggota tim lainnya di sini */}
      </Routes>
    </Router>
  )
}

export default App