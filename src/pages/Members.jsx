import { useState } from 'react';
import { members } from '../components/data/member';

import PageHeader from '../components/common/PageHeader';
import MemberSummary from '../components/members/MemberSummary';
import MemberFilters from '../components/members/MemberFilters';
import MemberTable from '../components/members/MemberTable';
import MemberAnalytics from '../components/members/MemberAnalytics';

export default function Members() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = members.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === 'all' || m.level.toLowerCase() === filter.toLowerCase();

    return matchSearch && matchFilter;
  });

  return (
    <div>
      <PageHeader
        title="Member Management"
        subtitle={`${members.length} registered members`}
      />
<MemberSummary members={members} />

<MemberAnalytics
  members={members}
/>

      <MemberFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <MemberTable
        members={members}
        filtered={filtered}
      />
    </div>
  );
}