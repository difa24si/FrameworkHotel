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
        padding: '16px',
        marginBottom: '20px',
        display: 'flex',
        gap: '12px',
      }}
    >
      <input
        type="text"
        placeholder="Search by name, email, member ID..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          flex: 1,
          padding: '10px 14px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
        }}
      />

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          padding: '10px 14px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
        }}
      >
        <option value="all">
          All Levels
        </option>

        <option value="Bronze">
          Bronze
        </option>

        <option value="Silver">
          Silver
        </option>

        <option value="Gold">
          Gold
        </option>

        <option value="Platinum">
          Platinum
        </option>
      </select>

      <button className="btn btn-primary">
        Export
      </button>
    </div>
  );
}