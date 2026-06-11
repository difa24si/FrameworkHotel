export const roomTypes = [
  { type: 'Standard Room', count: 20, price: '$120/night', size: '28 m²', beds: '1 Queen', amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'], color: '#6366f1', bg: 'rgba(99,102,241,0.08)', occupied: 12, available: 8 },
  { type: 'Deluxe Room', count: 16, price: '$180/night', size: '36 m²', beds: '1 King', amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Sea View'], color: '#10b981', bg: 'rgba(16,185,129,0.08)', occupied: 10, available: 6 },
  { type: 'Deluxe Suite', count: 14, price: '$280/night', size: '52 m²', beds: '1 King + Sofa', amenities: ['WiFi', 'AC', 'Smart TV', 'Bar', 'Lounge', 'Bathtub'], color: '#c9a84c', bg: 'rgba(201,168,76,0.08)', occupied: 9, available: 5 },
  { type: 'Executive Room', count: 10, price: '$350/night', size: '45 m²', beds: '1 King', amenities: ['WiFi', 'AC', 'Smart TV', 'Bar', 'Work Desk', 'City View'], color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', occupied: 7, available: 3 },
  { type: 'Business Suite', count: 8, price: '$480/night', size: '68 m²', beds: '1 King + Sofa', amenities: ['WiFi', 'AC', 'Smart TV', 'Full Bar', 'Meeting Room', 'Ocean View'], color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', occupied: 5, available: 3 },
  { type: 'Presidential Suite', count: 3, price: '$1,200/night', size: '120 m²', beds: '1 King + 2 Queens', amenities: ['WiFi', 'AC', '4K TV', 'Full Bar', 'Private Dining', 'Butler', 'Ocean View'], color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', occupied: 2, available: 1 },
  { type: 'Royal Suite', count: 1, price: '$2,500/night', size: '250 m²', beds: '2 Kings + 2 Queens', amenities: ['WiFi', 'AC', '4K TV', 'Full Bar', 'Private Pool', 'Chef', 'Panoramic View', 'Helipad'], color: '#ef4444', bg: 'rgba(239,68,68,0.08)', occupied: 1, available: 0 },
];

export const floorData = [
  { floor: 'Floor 1', rooms: 12, occupied: 8, available: 3, cleaning: 1 },
  { floor: 'Floor 2', rooms: 12, occupied: 7, available: 4, cleaning: 1 },
  { floor: 'Floor 3', rooms: 14, occupied: 10, available: 3, cleaning: 1 },
  { floor: 'Floor 4', rooms: 12, occupied: 9, available: 2, cleaning: 1 },
  { floor: 'Floor 5', rooms: 8, occupied: 6, available: 1, cleaning: 1 },
  { floor: 'Floor 6', rooms: 6, occupied: 5, available: 1, cleaning: 0 },
];