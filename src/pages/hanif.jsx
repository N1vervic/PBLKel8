import React from 'react'

function HanifProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Header dengan Foto */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
          <div className="text-center">
            <img 
              src="/hanif.jpg" 
              alt="Foto Profil" 
              className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover shadow-lg"
            />
            <h1 className="text-3xl font-bold text-white mt-4">Muhammad Hanif Farhan</h1>
            <p className="text-blue-100">Mahasiswa Universitas Brawijaya</p>
          </div>
        </div>

        {/* Konten Profil */}
        <div className="p-8">
          {/* Info Pribadi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-gray-600 text-sm font-semibold">T2E</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-semibold">Teknologi Informasi</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <p className="text-gray-600 text-sm font-semibold">Malang, Jawa Timur, Indonesia</p>
=======
              <p className="text-gray-600 text-sm font-semibold">Kelas T2E</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-semibold">Program Studi D3 Teknologi Informasi</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <p className="text-gray-600 text-sm font-semibold">Domisili Banjarmasin</p>
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596
            </div>
=======
              <p className="text-gray-600 text-sm font-semibold">Kelas T2E</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-semibold">Program Studi D3 Teknologi Informasi</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <p className="text-gray-600 text-sm font-semibold">Domisili Banjarmasin</p>
            </div>
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596
            <br></br>
            <br></br>
          </div>

          {/* Tentang Diri */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Diri</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {/* TULIS DESKRIPSI MINIMAL 100 KATA DI SINI */}
              Halo! Perkenalkan nama saya Muhammad Hanif Farhan. Saya adalah seorang mahasiswa 
              di Universitas Brawijaya yang sedang menempuh pendidikan di jurusan Teknologi Informasi. 
              Saya memiliki ketertarikan yang besar dalam bidang teknologi, khususnya dalam 
              pengembangan web dan aplikasi. 
              
              Selama perkuliahan, saya aktif mengikuti berbagai kegiatan akademik maupun 
              non-akademik yang membantu mengembangkan soft skill dan hard skill saya. 
              Saya senang belajar hal-hal baru dan selalu berusaha untuk berkembang menjadi 
              pribadi yang lebih baik.
              
<<<<<<< HEAD
<<<<<<< HEAD
              Di waktu luang, saya menikmati waktu luang saya bermain game dan membaca buku. Saya percaya bahwa dengan belajar 
=======
              Di waktu luang, saya menikmati bermain game dan membaca. Saya percaya bahwa dengan belajar 
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596
=======
              Di waktu luang, saya menikmati bermain game dan membaca. Saya percaya bahwa dengan belajar 
>>>>>>> 01dcf7a1977bc2f4fb2408d40e6957059b722596
              dan berlatih secara konsisten, saya dapat mencapai cita-cita saya di masa depan. 
              Saya juga senang berkolaborasi dengan orang lain dan bekerja dalam tim untuk 
              menciptakan sesuatu yang bermanfaat.
              
              Terima kasih telah mengunjungi profil saya!
            </p>
            <br></br>
            <br></br>
            <br></br>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">© 2026 - Project ReactJS dengan GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HanifProfile