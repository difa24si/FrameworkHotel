import StarRating from './StarRating';
import { serviceIcons } from './ServiceIcons';
import { categoryColors } from '../data/services';

export default function ServiceTable({ services }) {
  return (
    <div className="card">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Hours</th>
              <th>Rating</th>
              <th>Orders</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((svc) => (
              <tr key={svc.id}>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: svc.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {serviceIcons[svc.icon]}
                    </div>

                    <div>
                      <div style={{ fontWeight: 600 }}>
                        {svc.name}
                      </div>

                      <div
                        style={{
                          fontSize: '11.5px',
                          color: '#9ca3af',
                        }}
                      >
                        {svc.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <span
                    style={{
                      background: svc.bg,
                      color: categoryColors[svc.category],
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 9px',
                      borderRadius: '5px',
                    }}
                  >
                    {svc.category}
                  </span>
                </td>

                <td style={{ fontWeight: 600 }}>
                  {svc.price}
                </td>

                <td>{svc.hours}</td>

                <td>
                  <StarRating rating={svc.rating} />
                </td>

                <td>{svc.orders}</td>

                <td>
                  <span className="badge badge-success">
                    Active
                  </span>
                </td>

                <td>
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                    }}
                  >
                    <button className="btn btn-secondary btn-sm">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Pause
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}