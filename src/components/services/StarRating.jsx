export default function StarRating({ rating }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3px',
      }}
    >
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill={
            s <= Math.floor(rating)
              ? '#c9a84c'
              : '#e5e7eb'
          }
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
        </svg>
      ))}

      <span
        style={{
          fontSize: '11px',
          color: '#6b7280',
          marginLeft: '3px',
        }}
      >
        {rating}
      </span>
    </div>
  );
}