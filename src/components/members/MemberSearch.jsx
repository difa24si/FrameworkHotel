export default function MemberSearch({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Cari nama atau email..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      style={{
        width: "300px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    />
  );
}