import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function FormKesehatan() {
  const [form, setForm] = useState({
    nama: "",
    keluhan: "",
    umur: "",
    golonganDarah: "",
    jenisKelamin: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    let err = {};

    if (!form.nama) err.nama = "Nama pasien wajib diisi";
    else if (!isNaN(form.nama)) err.nama = "Tidak boleh angka";
    else if (form.nama.length < 3) err.nama = "Minimal 3 karakter";

    if (!form.keluhan) err.keluhan = "Keluhan wajib diisi";
    else if (form.keluhan.length < 5) err.keluhan = "Jelaskan keluhan lebih detail (min. 5 karakter)";

    if (!form.umur) err.umur = "Umur wajib diisi";
    else if (isNaN(form.umur)) err.umur = "Harus berupa angka";
    else if (form.umur < 0) err.umur = "Umur tidak valid";

    if (!form.golonganDarah) err.golonganDarah = "Pilih golongan darah";
    if (!form.jenisKelamin) err.jenisKelamin = "Pilih jenis kelamin";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-pink-200">
      {/* TITLE */}
      <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
        Formulir Rekam Medis
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Nama Pasien"
          type="text"
          value={form.nama}
          onChange={(e) => handleChange("nama", e.target.value)}
          error={errors.nama}
        />

        <InputField
          label="Keluhan Utama"
          type="text"
          value={form.keluhan}
          onChange={(e) => handleChange("keluhan", e.target.value)}
          error={errors.keluhan}
        />

        <InputField
          label="Usia (Tahun)"
          type="text"
          value={form.umur}
          onChange={(e) => handleChange("umur", e.target.value)}
          error={errors.umur}
        />

        <SelectField
          label="Golongan Darah"
          value={form.golonganDarah}
          onChange={(e) => handleChange("golonganDarah", e.target.value)}
          options={["A", "B", "AB", "O"]}
          error={errors.golonganDarah}
        />

        <SelectField
          label="Jenis Kelamin"
          value={form.jenisKelamin}
          onChange={(e) => handleChange("jenisKelamin", e.target.value)}
          options={["Laki-laki", "Perempuan"]}
          error={errors.jenisKelamin}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 transition duration-200 shadow-md shadow-pink-200"
        >
          Simpan Data Kesehatan
        </button>
      </form>

      {/* HASIL */}
      {submitted && (
        <div className="mt-6 p-5 rounded-xl bg-pink-50 border border-pink-200 shadow-inner">
          <h3 className="font-bold text-pink-700 mb-3 border-b border-pink-200 pb-2">
            Data Berhasil Disimpan
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-pink-900"><span className="font-medium">Nama:</span> {form.nama}</p>
            <p className="text-sm text-pink-900"><span className="font-medium">Keluhan:</span> {form.keluhan}</p>
            <p className="text-sm text-pink-900"><span className="font-medium">Umur:</span> {form.umur} Tahun</p>
            <p className="text-sm text-pink-900"><span className="font-medium">Gol. Darah:</span> {form.golonganDarah}</p>
            <p className="text-sm text-pink-900"><span className="font-medium">Gender:</span> {form.jenisKelamin}</p>
          </div>
        </div>
      )}
    </div>
  );
}