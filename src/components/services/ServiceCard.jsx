import StarRating from './StarRating';
import { categoryColors } from '../data/services';
import { serviceIcons } from './ServiceIcons';

export default function ServiceCard({ service }) {
  return (
    <div
      className="card"
      style={{
        overflow: 'hidden',
        transition: 'all 0.2s',
      }}
    >
      <div
        style={{
          padding: '22px 22px 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: service.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {serviceIcons[service.icon]}
          </div>

          <span
            style={{
              background: service.bg,
              color:
                categoryColors[
                  service.category
                ],
              fontSize: '10.5px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            {service.category}
          </span>
        </div>

        <h3
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '6px',
          }}
        >
          {service.name}
        </h3>

        <p
          style={{
            fontSize: '12.5px',
            color: '#9ca3af',
            lineHeight: 1.5,
            marginBottom: '14px',
          }}
        >
          {service.description}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              'space-between',
            marginBottom: '12px',
          }}
        >
          <StarRating
            rating={service.rating}
          />

          <span
            style={{
              fontSize: '12px',
              color: '#9ca3af',
            }}
          >
            {service.orders} orders
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              'space-between',
            padding: '10px 0',
            borderTop:
              '1px solid #f3f4f6',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#111827',
              }}
            >
              {service.price}
            </div>

            <div
              style={{
                fontSize: '11px',
                color: '#9ca3af',
              }}
            >
              ⏰ {service.hours}
            </div>
          </div>

          <span
            className="badge badge-success"
            style={{
              fontSize: '10.5px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981',
                display: 'inline-block',
                marginRight: '4px',
              }}
            />

            Active
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          borderTop:
            '1px solid #f3f4f6',
        }}
      >
        <button
          className="btn"
          style={{
            flex: 1,
            borderRadius: 0,
            justifyContent: 'center',
            padding: '12px',
            fontSize: '12.5px',
            color: '#6b7280',
          }}
        >
          Manage
        </button>

        <div
          style={{
            width: '1px',
            background: '#f3f4f6',
          }}
        />

        <button
          className="btn"
          style={{
            flex: 1,
            borderRadius: 0,
            justifyContent: 'center',
            padding: '12px',
            fontSize: '12.5px',
            color: '#c9a84c',
            fontWeight: 600,
          }}
        >
          View Orders
        </button>
      </div>
    </div>
  );
}