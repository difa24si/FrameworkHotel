import PageHeader from '../components/common/PageHeader';

import RoomStats from '../components/rooms/RoomStats';
import RoomTypes from '../components/rooms/RoomTypes';
import FloorOverview from '../components/rooms/FloorOverview';

import {
  roomTypes,
  floorData,
} from '../data/rooms';

export default function RoomDetails() {
  const totalRooms = roomTypes.reduce(
    (s, r) => s + r.count,
    0
  );

  const totalOccupied = roomTypes.reduce(
    (s, r) => s + r.occupied,
    0
  );

  const totalAvail = roomTypes.reduce(
    (s, r) => s + r.available,
    0
  );

  const occupancyRate = (
    (totalOccupied / totalRooms) *
    100
  ).toFixed(1);

  return (
    <div>
      <PageHeader
        title="Room Details"
        subtitle="Complete overview of all hotel rooms and floor plans"
      >
        <button className="btn btn-secondary btn-sm">
          Floor Plan
        </button>

        <button className="btn btn-primary btn-sm">
          Add Room
        </button>
      </PageHeader>

      <RoomStats
        totalRooms={totalRooms}
        totalOccupied={totalOccupied}
        totalAvail={totalAvail}
        occupancyRate={occupancyRate}
      />

      <RoomTypes
        roomTypes={roomTypes}
      />

      <FloorOverview
        floorData={floorData}
      />
    </div>
  );
}