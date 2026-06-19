import { useState } from 'react';

import PageHeader from '../components/common/PageHeader';

import ServiceSummary from '../components/services/ServiceSummary';
import ServiceFilter from '../components/services/ServiceFilter';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceTable from '../components/services/ServiceTable';

import { services } from '../components/data/services';

export default function Services() {
  const [view, setView] =
    useState('grid');

  const [category, setCategory] =
    useState('all');

  const categories = [
    'all',
    ...new Set(
      services.map(
        (s) => s.category
      )
    ),
  ];

  const filtered =
    category === 'all'
      ? services
      : services.filter(
          (s) =>
            s.category === category
        );

  return (
    <div>
      <PageHeader
        title="Hotel Services"
        subtitle="Manage all hotel amenities and services"
      >
        <button className="btn btn-primary btn-sm">
          Add Service
        </button>
      </PageHeader>

      <ServiceSummary
        services={services}
      />

      <ServiceFilter
        categories={categories}
        category={category}
        setCategory={setCategory}
        view={view}
        setView={setView}
      />

      {view === 'grid' ? (
        <ServiceGrid
          services={filtered}
        />
      ) : (
        <ServiceTable
          services={filtered}
        />
      )}
    </div>
  );
}