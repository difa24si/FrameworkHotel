export default function GuestPagination({
  page,
  setPage,
  filteredCount,
  totalCount,
}) {
  return (
    <div>
      <div style={{ padding: '16px 20px', borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>Showing {filtered.length} of {customers.length} guests</span>
          <div className="pagination">
            {[1, 2, 3].map(p => (
              <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
            ))}
          </div>
        </div>
    </div>
  );
}