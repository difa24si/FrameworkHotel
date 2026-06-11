import { useState } from 'react';
import { customers } from '../data/customers';

import PageHeader from '../components/common/PageHeader';

import {
  GuestActions,
  GuestSummary,
  GuestFilters,
  GuestTable,
} from '../components/guests';

export default function Guests() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const statusConfig = {
    'checked-in': {
      label: 'Checked In',
      cls: 'badge-success',
    },
    reserved: {
      label: 'Reserved',
      cls: 'badge-warning',
    },
    'checked-out': {
      label: 'Checked Out',
      cls: 'badge-gray',
    },
  };

  const filtered = customers.filter((c) => {
    const matchSearch =
      c.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      c.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      c.room.includes(search);

    const matchFilter =
      filter === 'all' ||
      c.status === filter;

    return (
      matchSearch && matchFilter
    );
  });

  return (
    <div>
      <PageHeader
        title="Guest Management"
        subtitle={`${customers.length} total guests registered`}
      >
        <GuestActions />
      </PageHeader>

      <GuestSummary />

      <GuestFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        statusConfig={statusConfig}
      />

      <GuestTable
        filtered={filtered}
        statusConfig={statusConfig}
      />
    </div>
  );
}