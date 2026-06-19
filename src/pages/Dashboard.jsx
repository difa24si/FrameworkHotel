import { orders, revenueByMonth } from '../components/data/orders';
import { customers } from '../components/data/customers';

import PageHeader from '../components/common/PageHeader';

import DashboardActions from '../components/dashboard/DashboardActions';
import KpiCards from '../components/dashboard/KpiCards';
import RevenueChart from '../components/dashboard/RevenueChart';
import RoomStatus from '../components/dashboard/RoomStatus';
import RecentBookings from '../components/dashboard/RecentBookings';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const checkedIn =
    customers.filter(
      c => c.status === 'checked-in'
    ).length;

  const reserved =
    customers.filter(
      c => c.status === 'reserved'
    ).length;

  return (
    <div>
      <PageHeader
        title="Dashboard Overview"
        subtitle="Here's what's happening at Grand Luxe Hotel today."
      >
        <DashboardActions />
      </PageHeader>

      <KpiCards />

      <div
        className="grid-2"
        style={{ marginBottom: '20px' }}
      >
        <RevenueChart
          revenueByMonth={revenueByMonth}
        />

        <RoomStatus />
      </div>

      <RecentActivity />
    </div>
  );
}