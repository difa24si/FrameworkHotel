import { useState, useEffect } from 'react';
import TableAdmin from '../components/TableAdmin';
import SearchFilter from '../components/SearchFilter';

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [filterKota, setFilterKota] = useState('Semua');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/wisata.json')
      .then(response => response.json())
      .then(json => {
        setData(json.swalayan);
        setFilteredData(json.swalayan);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  // Filter data
  useEffect(() => {
    let result = data;

    if (search) {
      result = result.filter(item =>
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.lokasi.alamat.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterKategori !== 'Semua') {
      result = result.filter(item => item.kategori === filterKategori);
    }

    if (filterKota !== 'Semua') {
      result = result.filter(item => item.lokasi.kota === filterKota);
    }

    setFilteredData(result);
  }, [search, filterKategori, filterKota, data]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            👨‍💼 Admin Dashboard - Swalayan
          </h1>
          <p className="text-gray-600">Kelola data swalayan dan minimarket</p>
        </div>

        {/* Search & Filter */}
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filterKategori={filterKategori}
          setFilterKategori={setFilterKategori}
          filterKota={filterKota}
          setFilterKota={setFilterKota}
          data={data}
        />

        {/* Table */}
        <TableAdmin data={filteredData} />

        {/* Result Count */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-semibold">
              Total Data: <span className="text-blue-600">{filteredData.length}</span> swalayan
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Export CSV
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                + Tambah Data
              </button>
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Tidak ada hasil</h3>
            <p className="mt-2 text-gray-600">Coba ubah filter pencarian</p>
          </div>
        )}
      </div>
    </div>
  );
}