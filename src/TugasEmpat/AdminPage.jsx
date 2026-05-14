import { useState } from "react";
import swalayanData from "./swalayan.json";

export default function AdminTable() {
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
        <div className="p-8 bg-gray-100 min-h-screen">

            {/* HEADER */}
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                👨‍💼 Admin Data Swalayan
            </h1>

            {/* SEARCH & FILTER */}
            <div className="mb-6 flex gap-4">
                <input
                    type="text"
                    placeholder="Cari swalayan..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded-lg w-1/3"
                />

                <select
                    value={kategori}
                    onChange={(e) => etKategori(e.target.value)}
                    className="border p-2 rounded-lg"
                >
                    {kategoriList.map((kat, index) => (
                        <option key={index} value={kat}>
                            {kat}
                        </option>
                    ))}
                </select>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-200 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-3">No</th>
                            <th className="px-4 py-3">Nama</th>
                            <th className="px-4 py-3">Kategori</th>
                            <th className="px-4 py-3">Kota</th>
                            <th className="px-4 py-3">Rating</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2 font-medium">{item.nama}</td>
                                <td className="px-4 py-2">{item.kategori}</td>
                                <td className="px-4 py-2">{item.lokasi.kota}</td>
                                <td className="px-4 py-2">⭐ {item.rating}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded text-xs ${
                                        item.statusBuka
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}>
                                        {item.statusBuka ? "Buka" : "Tutup"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* NO DATA */}
            {filteredData.length === 0 && (
                <p className="text-center mt-6 text-gray-500">
                    Data tidak ditemukan 😢
                </p>
            )}
        </div>
    );
}