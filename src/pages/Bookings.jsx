import { useState } from "react";
import { orders } from "../components/data/orders";

import PageHeader from "../components/common/PageHeader";
import BookingActions from "../components/bookings/BookingActions";
import BookingSummary from "../components/bookings/BookingSummary";
import BookingFilters from "../components/bookings/BookingFilters";
import BookingTable from "../components/bookings/BookingTable";
import BookingPagination from "../components/bookings/BookingPagination";

export default function Bookings() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const totalRevenue = orders
    .filter((order) => order.paymentStatus === "paid")
    .reduce((total, order) => total + order.amount, 0);

  const confirmed = orders.filter(
    (order) => order.bookingStatus === "confirmed"
  ).length;

  const pending = orders.filter(
    (order) => order.bookingStatus === "pending"
  ).length;

  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.guestName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.room
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      order.bookingStatus === filter;

    return matchSearch && matchFilter;
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
        <BookingTable orders={filteredOrders} />

        <BookingPagination
          filtered={filteredOrders.length}
          total={orders.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}