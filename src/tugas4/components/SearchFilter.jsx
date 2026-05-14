export default function SearchFilter({ search, setSearch, filterKategori, setFilterKategori, filterKota, setFilterKota, data }) {
  // Ambil kategori unik
  const kategoriUnik = ['Semua', ...new Set(data.map(item => item.kategori))];
  
  // Ambil kota unik
  const kotaUnik = ['Semua', ...new Set(data.map(item => item.lokasi.kota))];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            🔍 Cari Swalayan
          </label>
          <input
            type="text"
            placeholder="Ketik nama swalayan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filter Kategori */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            🏪 Kategori
          </label>
          <select
            value={filterKategori}
            onChange={(e) => setFilterKategori(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            {kategoriUnik.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Kota */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📍 Kota
          </label>
          <select
            value={filterKota}
            onChange={(e) => setFilterKota(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            {kotaUnik.map((kota) => (
              <option key={kota} value={kota}>
                {kota}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}