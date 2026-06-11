// components/bookings/BookingFilters.jsx
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

export default function BookingFilters({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div
      className="card"
      style={{
        marginBottom: '20px',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* 1. Mengganti input biasa dengan Shadcn UI Input */}
      <div className="search-bar" style={{ flex: 1 }}>
        <Input
          type="text"
          placeholder="Search booking..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>

      {/* 2. Mengganti deretan Button dengan Shadcn UI Select */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '14px', color: '#6b7280' }}>Status:</span>
        <Select value={filter} onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[150px] capitalize">
            <SelectValue placeholder="Pilih Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="capitalize">All</SelectItem>
            <SelectItem value="confirmed" className="capitalize">Confirmed</SelectItem>
            <SelectItem value="pending" className="capitalize">Pending</SelectItem>
            <SelectItem value="completed" className="capitalize">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}