import { useState } from 'react';
import { orders } from '../data/orders';

import PageHeader from '../components/common/PageHeader';

import BookingActions from '../components/bookings/BookingActions';
import BookingSummary from '../components/bookings/BookingSummary';
import BookingFilters from '../components/bookings/BookingFilters';
import BookingTable from '../components/bookings/BookingTable';
import BookingPagination from '../components/bookings/BookingPagination';

export default function Bookings() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const totalRevenue = orders
    .filter(o => o.paymentStatus === 'paid')
    .reduce((s, o) => s + o.amount, 0);

  const pending = orders.filter(
    o => o.bookingStatus === 'pending'
  ).length;

  const confirmed = orders.filter(
    o => o.bookingStatus === 'confirmed'
  ).length;

  const filtered = orders.filter(o => {
    const matchS =
      o.guestName.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.room.includes(search);

    const matchF =
      filter === 'all' ||
      o.bookingStatus === filter;

    return matchS && matchF;
  });

  return (
    <div>
      <PageHeader
        title="Booking Management"
        subtitle={`${orders.length} total bookings`}
      >
        <BookingActions />
      </PageHeader>

      <BookingSummary
        totalRevenue={totalRevenue}
        confirmed={confirmed}
        pending={pending}
        totalBookings={orders.length}
      />

      <BookingFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="card">
        <BookingTable
          orders={filtered}
        />

        <BookingPagination
          filtered={filtered.length}
          total={orders.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}