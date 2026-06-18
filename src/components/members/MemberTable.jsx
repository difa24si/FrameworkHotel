<tbody>
  {filtered.map((m) => (
    <tr key={m.id}>
      <td>{m.name}</td>
      <td>
        <span
          className={`badge ${
            levelCfg[m.level]?.cls
          }`}
        >
          {m.level}
        </span>
      </td>

      <td>{m.points}</td>

      <td>{m.totalBookings}</td>

      <td>
        $
        {m.totalSpent.toLocaleString()}
      </td>

      <td>{m.lastStay}</td>

      <td>
        <span
          className={`badge ${
            statusCfg[m.status]?.cls
          }`}
        >
          {statusCfg[m.status]?.label}
        </span>
      </td>
    </tr>
  ))}
</tbody>