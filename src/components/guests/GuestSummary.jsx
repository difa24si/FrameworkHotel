import { customers } from '../data/customers';

export default function GuestSummary() {
    const summary = [
        {
            label: 'Checked In',
            count: customers.filter(
                c => c.status === 'checked-in'
            ).length,
            color: '#10b981',
            bg: 'rgba(16,185,129,0.1)',
        },
        {
            label: 'Reserved',
            count: customers.filter(
                c => c.status === 'reserved'
            ).length,
            color: '#f59e0b',
            bg: 'rgba(245,158,11,0.1)',
        },
        {
            label: 'Checked Out',
            count: customers.filter(
                c => c.status === 'checked-out'
            ).length,
            color: '#6b7280',
            bg: 'rgba(107,114,128,0.1)',
        },
    ];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '16px',
                marginBottom: '24px',
            }}
        >
            {summary.map((s) => (
                <div
                    key={s.label}
                    className="card"
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
                        {[
                            { label: 'Checked In', count: customers.filter(c => c.status === 'checked-in').length, color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
                            { label: 'Reserved', count: customers.filter(c => c.status === 'reserved').length, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
                            { label: 'Checked Out', count: customers.filter(c => c.status === 'checked-out').length, color: '#6b7280', bg: 'rgba(107,114,128,0.1)' },
                        ].map(s => (
                            <div key={s.label} className="card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '20px', fontWeight: 800, color: s.color }}>{s.count}</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{s.count}</div>
                                    <div style={{ fontSize: '12.5px', color: '#9ca3af' }}>{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}