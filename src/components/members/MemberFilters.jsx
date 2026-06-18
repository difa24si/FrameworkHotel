export default function MemberFilters({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div
      className="card"
      style={{
        padding: '14px 20px',
        marginBottom: '20px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      <div
        className="search-bar"
        style={{ flex: 1 }}
      >
        <input
          type="text"
          placeholder="Search member..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {[
        'all',
        'Bronze',
        'Silver',
        'Gold',
        'Platinum',
      ].map((f) => (
        <button
          key={f}
          onClick={() =>
            setFilter(f)
          }
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