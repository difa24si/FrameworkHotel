// components/bookings/BookingTable.jsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

import {
  paymentCfg,
  bookingCfg,
} from './BookingBadges';

export default function BookingTable({ orders }) {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Check-in</TableHead>
            <TableHead>Check-out</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Source</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id}>
              {/* 1. Booking ID dengan styling tetap aman */}
              <TableCell
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: '#6366f1',
                  fontWeight: 600,
                }}
              >
                {o.id}
              </TableCell>

              {/* 2. Menggunakan Shadcn Avatar untuk Guest */}
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Avatar className="h-8 w-8 text-[11px]" style={{ backgroundColor: o.color }}>
                    <AvatarFallback className="text-white bg-opacity-20 font-medium">
                      {o.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span style={{ fontWeight: 600, fontSize: '13px' }}>
                    {o.guestName}
                  </span>
                </div>
              </TableCell>

              {/* 3. Detail Kamar */}
              <TableCell>
                <div style={{ fontWeight: 600, fontSize: '13px' }}>{o.room}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{o.roomType}</div>
              </TableCell>

              <TableCell>{o.checkIn}</TableCell>
              <TableCell>{o.checkOut}</TableCell>
              <TableCell>{o.nights}</TableCell>
              
              <TableCell>
                ${o.amount.toLocaleString()}
              </TableCell>

              {/* Badges bawaan lo dibiarkan aman karena menggunakan class CSS manual */}
              <TableCell>
                <span className={`badge ${paymentCfg[o.paymentStatus]?.cls}`}>
                  {paymentCfg[o.paymentStatus]?.label}
                </span>
              </TableCell>

              <TableCell>
                <span className={`badge ${bookingCfg[o.bookingStatus]?.cls}`}>
                  {bookingCfg[o.bookingStatus]?.label}
                </span>
              </TableCell>

              <TableCell>{o.source}</TableCell>

              {/* 4. Mengganti Buttons dengan DropdownMenu (Action Menu) */}
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 hover:bg-slate-100 rounded-md transition inline-flex items-center justify-center">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                      Delete booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}