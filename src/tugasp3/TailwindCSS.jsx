import UserForm from "./UserForm";

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center p-6">

      <div className="w-full max-w-lg">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-700 tracking-wide">
            Form Pendaftaran Kesehatan
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Silakan isi data kesehatan pasien dengan lengkap dan benar
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200">

          <UserForm />

        </div>

        {/* FOOTER */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2026 Sistem Pendaftaran Kesehatan
        </div>

      </div>

    </div>
  );
}