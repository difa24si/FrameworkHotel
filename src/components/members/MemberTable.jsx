import {
  levelCfg,
  statusCfg,
} from './MemberBadges';

export default function MemberTable({
  filtered,
}) {
  return (
    <div className="card">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>ID</th>
              <th>Phone</th>
              <th>Level</th>
              <th>Points</th>
              <th>Bookings</th>
              <th>Total Spent</th>
              <th>Referral</th>
              <th>City</th>
              <th>Gender</th>
              <th>Join Date</th>
              <th>Last Login</th>
              <th>Source</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((m) => (
              <tr key={m.id}>
                {/* MEMBER */}
                <td>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      className="avatar-placeholder"
                      style={{
                        background: m.color,
                        width: '38px',
                        height: '38px',
                        fontSize: '13px',
                      }}
                    >
                      {m.initials}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: '#111827',
                        }}
                      >
                        {m.name}
                      </div>

                      <div
                        style={{
                          fontSize: '12px',
                          color: '#9ca3af',
                        }}
                      >
                        {m.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* ID */}
                <td
                  style={{
                    fontFamily: 'monospace',
                    color: '#6366f1',
                    fontWeight: 700,
                  }}
                >
                  {m.id}
                </td>

                {/* PHONE */}
                <td>{m.phone}</td>

                {/* LEVEL */}
                <td>
                  <span
                    className={`badge ${
                      levelCfg[m.level]?.cls
                    }`}
                  >
                    {levelCfg[m.level]?.label}
                  </span>
                </td>

                {/* POINTS */}
                <td
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {m.points}
                </td>

                {/* BOOKINGS */}
                <td>{m.totalBookings}</td>

                {/* TOTAL SPENT */}
                <td
                  style={{
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  $
                  {m.totalSpent.toLocaleString()}
                </td>

                {/* REFERRAL */}
                <td>
                  <span
                    style={{
                      fontSize: '12px',
                      background:
                        'rgba(99,102,241,0.1)',
                      color: '#6366f1',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}
                  >
                    {m.referralCode}
                  </span>
                </td>

                {/* CITY */}
                <td>{m.city}</td>

                {/* GENDER */}
                <td>{m.gender}</td>

                {/* JOIN DATE */}
                <td>{m.joinDate}</td>

                {/* LAST LOGIN */}
                <td>{m.lastLogin || '-'}</td>

                {/* SOURCE */}
                <td>{m.source || '-'}</td>

                {/* STATUS */}
                <td>
                  <span
                    className={`badge ${
                      statusCfg[m.status]?.cls
                    }`}
                  >
                    {statusCfg[m.status]?.label}
                  </span>
                </td>

                {/* ACTION */}
                <td>
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                    }}
                  >
                    <button className="btn btn-secondary btn-sm">
                      View
                    </button>

                    <button
                      className="btn btn-sm"
                      style={{
                        background:
                          'rgba(16,185,129,0.1)',
                        color: '#059669',
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm"
                      style={{
                        background:
                          'rgba(239,68,68,0.1)',
                        color: '#dc2626',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid #f3f4f6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            color: '#9ca3af',
          }}
        >
          Showing {filtered.length} members
        </span>

        <div className="pagination">
          <button className="page-btn active">
            1
          </button>
        </div>
      </div>
    </div>
  );
}