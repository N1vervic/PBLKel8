import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  // Data anggota tim - SESUAIKAN DENGAN DATA TIM KAMU
const teamMembers = [
  {
    name: 'Muhammad Hanif Farhan',
    route: '/hanif',
    NIM: '253140700111023',
    foto: '/hanif.jpg'
  },
  {
    name: 'Rifqi Ardian',
    route: '/albar',
    kelas: 'Teknik Informatika - B',
    foto: '/foto-rifqi.jpg'
  },
  {
    name: 'Surya Rafliansyah',
    route: '/ivan',
    NIM: '253',
    foto: '/foto-surya.jpg'
  },
]
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Team Profile Project
          </h1>
          <p className="text-xl text-blue-100">
            Universitas Brawijaya - ReactJS & GitHub Project
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row flex-wrap justify-left gap-15">
          {teamMembers.map((member, index) => (
            <Link 
              key={index}
              to={member.route}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Foto Profil */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-left justify-left p-6">
                <img 
                  src={member.foto} 
                  alt={member.name}
                  className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback jika foto tidak ada
                    e.target.src = 'https://via.placeholder.com/150'
                  }}
                />
              </div>

              {/* Info Anggota */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {member.NIM}
                </p>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Lihat Profil →
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            © 2026 - Project ReactJS dengan GitHub Collaboration
          </p>
          <p className="text-white/60 text-xs mt-2">
            Universitas Brawijaya
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage