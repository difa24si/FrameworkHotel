import { useState } from "react";
import swalayanData from "./swalayan.json";

export default function SwalayanList() {
    const [search, setSearch] = useState("");
    const [kategori, setKategori] = useState("Semua");

    const data = swalayanData.swalayan;

    const kategoriList = ["Semua", ...new Set(data.map(item => item.kategori))];

    const filteredData = data.filter(item => {
        const matchSearch =
            item.nama.toLowerCase().includes(search.toLowerCase()) ||
            item.lokasi.alamat.toLowerCase().includes(search.toLowerCase());

        const matchKategori =
            kategori === "Semua" || item.kategori === kategori;

        return matchSearch && matchKategori;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        🛒 Direktori Swalayan
                    </h1>
                    <p className="text-gray-600">
                        Temukan tempat belanja terbaik di sekitarmu
                    </p>
                </div>

                {/* SEARCH & FILTER */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
                    <input
                        type="text"
                        placeholder="Cari swalayan..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border p-3 rounded-xl w-full md:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <select
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="border p-3 rounded-xl w-full md:w-1/4 shadow-sm focus:outline-none"
                    >
                        {kategoriList.map((kat, index) => (
                            <option key={index} value={kat}>
                                {kat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* RESULT COUNT */}
                <div className="mb-6 text-center">
                    <p className="text-gray-700 font-medium">
                        Menampilkan <span className="text-blue-600">{filteredData.length}</span> swalayan
                    </p>
                </div>

                {/* CARD GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            {/* IMAGE */}
                            <img
                                src={item.gambar || "https://via.placeholder.com/400x200"}
                                alt={item.nama}
                                className="w-full h-48 object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800 mb-1">
                                    {item.nama}
                                </h2>

                                <p className="text-sm text-gray-500 mb-2">
                                    {item.kategori}
                                </p>

                                <p className="text-sm text-gray-600 mb-2">
                                    📍 {item.lokasi.kota}
                                </p>

                                <p className="text-sm text-gray-600 mb-2">
                                    ⭐ {item.rating}
                                </p>

                                <span className={`text-xs px-3 py-1 rounded-full ${
                                    item.statusBuka 
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}>
                                    {item.statusBuka ? "Buka" : "Tutup"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* NO DATA */}
                {filteredData.length === 0 && (
                    <div className="text-center mt-12">
                        <p className="text-gray-500 text-lg">
                            Tidak ada swalayan ditemukan 😢
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}