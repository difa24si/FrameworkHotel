export default function ServiceFilter({
  categories,
  category,
  setCategory,
  view,
  setView,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent:
          'space-between',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
            className={`btn btn-sm ${
              category === cat
                ? 'btn-primary'
                : 'btn-secondary'
            }`}
          >
            {cat === 'all'
              ? 'All Services'
              : cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '6px',
        }}
      >
        <button
          onClick={() =>
            setView('grid')
          }
        >
          ▦
        </button>

        <button
          onClick={() =>
            setView('list')
          }
        >
          ☰
        </button>
      </div>
    </div>
  );
}