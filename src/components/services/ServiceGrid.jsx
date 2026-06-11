import ServiceCard from './ServiceCard';

export default function ServiceGrid({
  services,
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(3,1fr)',
        gap: '20px',
      }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}