// components/bookings/BookingPagination.jsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function BookingPagination({
  filtered,
  total,
  page,
  setPage,
}) {
  // Array halaman statis sesuai struktur asli kode lo [1, 2, 3]
  const pages = [1, 2, 3];

  return (
    <div
      style={{
        padding: '16px 20px',
        borderTop: '1px solid #f3f4f6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '14px', color: '#374151' }}>
        Showing {filtered} of {total} bookings
      </span>

      {/* Mengganti tombol manual dengan Shadcn UI Pagination */}
      <div className="pagination">
        <Pagination>
          <PaginationContent style={{ gap: '4px' }}>
            {/* Tombol Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
                className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {/* Iterasi Angka Halaman [1, 2, 3] */}
            {pages.map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(p);
                  }}
                  className="cursor-pointer"
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Tombol Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < pages.length) setPage(page + 1);
                }}
                className={page === pages.length ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}