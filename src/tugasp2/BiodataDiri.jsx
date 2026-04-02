import React from "react";
import "./custom.css";


// Parent
const BiodataDiri = () => {
  return (
    <div className="container">
      <div className="header-card">
        <FotoProfil foto={data.foto} />
        <Nama nama={data.nama} />
        <TentangSaya deskripsi={data.deskripsi} />
      </div>

      <Kontak email={data.email} phone={data.phone} />
      <Pendidikan pendidikan={data.pendidikan} />
      <Keahlian keahlian={data.keahlian} />
      <Pengalaman pengalaman={data.pengalaman} />
      <SosialMedia sosial={data.sosial} />
    </div>
  );
};
const data = {
  nama: "Difa",
  deskripsi:
    "Mahasiswa Sistem Informasi yang berfokus pada pengembangan solusi digital, integrasi sistem, serta analisis data untuk meningkatkan efisiensi bisnis.",
  email: "difa@email.com",
  phone: "08123456789",
  pendidikan: "Sistem Informasi",
  keahlian: [
    "Analisis Sistem",
    "Pengembangan Web (React)",
    "Manajemen Basis Data (MySQL)",
    "UI/UX Design",
  ],
  pengalaman: "Mengerjakan proyek aplikasi web berbasis React dan sistem database sederhana.",
  sosial: {
    github: "github.com/difa",
    linkedin: "linkedin.com/in/difa",
  },
  foto: "/dipa.jpeg",
};

// Child Components
const FotoProfil = ({ foto }) => (
  <div className="foto">
    <img src={foto} alt="Foto Profil" />
  </div>
);

const Nama = ({ nama }) => <h2 className="nama">{nama}</h2>;

const TentangSaya = ({ deskripsi }) => (
  <p className="tentang">{deskripsi}</p>
);

const Card = ({ title, children }) => (
  <div className="card">
    <h4>{title}</h4>
    {children}
  </div>
);

const Kontak = ({ email, phone }) => (
  <Card title="Kontak">
    <p>{email}</p>
    <p>{phone}</p>
  </Card>
);

const Pendidikan = ({ pendidikan }) => (
  <Card title="Pendidikan">
    <p>Program Studi: {pendidikan}</p>
  </Card>
);

const Keahlian = ({ keahlian }) => (
  <Card title="Keahlian">
    <ul>
      {keahlian.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Card>
);

// 🔥 Child tambahan 1
const Pengalaman = ({ pengalaman }) => (
  <Card title="Pengalaman">
    <p>{pengalaman}</p>
  </Card>
);

// 🔥 Child tambahan 2
const SosialMedia = ({ sosial }) => (
  <Card title="Sosial Media">
    <p>GitHub: {sosial.github}</p>
    <p>LinkedIn: {sosial.linkedin}</p>
  </Card>
);



export default BiodataDiri;