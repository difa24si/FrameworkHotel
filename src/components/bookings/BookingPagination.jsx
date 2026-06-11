export default function BookingPagination({
  filtered,
  total,
  page,
  setPage,
}) {
  return (
    <div
      style={{
        padding: '16px 20px',
        borderTop: '1px solid #f3f4f6',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>
        Showing {filtered} of {total} bookings
      </span>

      <div className="pagination">
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`page-btn ${
              page === p ? 'active' : ''
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}