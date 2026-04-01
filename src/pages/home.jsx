import { useNavigate } from 'react-router-dom'

const members = [
  {
    name: 'Hanif',
    role: 'Mahasiswa Universitas Brawijaya',
    photo: '/hanif.jpeg',
    path: '/hanif',
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Albar',
    role: 'Mahasiswa Universitas Brawijaya',
    photo: '/albar.jpg',
    path: '/albar',
    color: 'from-green-500 to-teal-600',
  },
  {
    name: 'Ivan',
    role: 'Mahasiswa Universitas Brawijaya',
    photo: '/ivan.jpg',
    path: '/ivan',
    color: 'from-orange-500 to-red-600',
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Tim Kami</h1>
      <p className="text-gray-500 mb-10">PBL Kelompok 8 - Universitas Brawijaya</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} onClick={() => navigate(member.path)} />
        ))}
      </div>
    </div>
  )
}

function MemberCard({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`bg-gradient-to-r ${member.color} h-24 flex items-center justify-center`}>
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
        <p className="text-gray-500 text-sm mt-1">{member.role}</p>
        <button className={`mt-4 px-4 py-2 rounded-full text-white text-sm bg-gradient-to-r ${member.color} hover:opacity-90 transition`}>
          Lihat Profil
        </button>
      </div>
    </div>
  )
}

export default Home