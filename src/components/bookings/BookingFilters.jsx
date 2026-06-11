export default function BookingFilters({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div
      className="card"
      style={{
        marginBottom: '20px',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div
        className="search-bar"
        style={{ flex: 1 }}
      >
        <input
          type="text"
          placeholder="Search booking..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {[
        'all',
        'confirmed',
        'pending',
        'completed',
      ].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`btn btn-sm ${
            filter === f
              ? 'btn-primary'
              : 'btn-secondary'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}