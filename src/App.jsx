import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import HanifProfile from './pages/hanif'
import AlbarProfile from './pages/albar'
import IvanProfile from './pages/ivan'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hanif" element={<HanifProfile />} />
        <Route path="/albar" element={<AlbarProfile />} />
        <Route path="/ivan" element={<IvanProfile />} />
      </Routes>
    </Router>
  )
}

export default App