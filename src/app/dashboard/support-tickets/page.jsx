"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Page() {
  const tickets = [
    {
      id: "12345",
      subject: "Issue with product delivery",
      status: "Open",
      lastUpdated: "2 days ago",
    },
    {
      id: "12346",
      subject: "Billing issue",
      status: "Closed",
      lastUpdated: "1 day ago",
    },
    {
      id: "12347",
      subject: "Account login problem",
      status: "Pending",
      lastUpdated: "3 days ago",
    },
    {
      id: "12348",
      subject: "Refund request",
      status: "Open",
      lastUpdated: "4 days ago",
    },
    {
      id: "12349",
      subject: "Product not received",
      status: "Closed",
      lastUpdated: "5 days ago",
    },
    {
      id: "12350",
      subject: "Incorrect billing amount",
      status: "Pending",
      lastUpdated: "6 days ago",
    },
    {
      id: "12351",
      subject: "Request for product exchange",
      status: "Open",
      lastUpdated: "1 week ago",
    },
    {
      id: "12352",
      subject: "Issue with product warranty",
      status: "Closed",
      lastUpdated: "1 week ago",
    },
    {
      id: "12353",
      subject: "Order cancellation",
      status: "Pending",
      lastUpdated: "8 days ago",
    },
    {
      id: "12354",
      subject: "Technical support needed",
      status: "Open",
      lastUpdated: "9 days ago",
    },
    {
      id: "12355",
      subject: "Inquiry about product features",
      status: "Closed",
      lastUpdated: "10 days ago",
    },
    {
      id: "12356",
      subject: "Shipping delay",
      status: "Pending",
      lastUpdated: "11 days ago",
    },
    {
      id: "12345",
      subject: "Issue with product delivery",
      status: "Open",
      lastUpdated: "2 days ago",
    },
    {
      id: "12346",
      subject: "Billing issue",
      status: "Closed",
      lastUpdated: "1 day ago",
    },
    {
      id: "12347",
      subject: "Account login problem",
      status: "Pending",
      lastUpdated: "3 days ago",
    },
    {
      id: "12348",
      subject: "Refund request",
      status: "Open",
      lastUpdated: "4 days ago",
    },
    {
      id: "12349",
      subject: "Product not received",
      status: "Closed",
      lastUpdated: "5 days ago",
    },
    {
      id: "12350",
      subject: "Incorrect billing amount",
      status: "Pending",
      lastUpdated: "6 days ago",
    },
    {
      id: "12351",
      subject: "Request for product exchange",
      status: "Open",
      lastUpdated: "1 week ago",
    },
    {
      id: "12352",
      subject: "Issue with product warranty",
      status: "Closed",
      lastUpdated: "1 week ago",
    },
    {
      id: "12353",
      subject: "Order cancellation",
      status: "Pending",
      lastUpdated: "8 days ago",
    },
    {
      id: "12354",
      subject: "Technical support needed",
      status: "Open",
      lastUpdated: "9 days ago",
    },
    {
      id: "12355",
      subject: "Inquiry about product features",
      status: "Closed",
      lastUpdated: "10 days ago",
    },
    {
      id: "12356",
      subject: "Shipping delay",
      status: "Pending",
      lastUpdated: "11 days ago",
    },
    {
      id: "12357",
      subject: "Account suspension",
      status: "Open",
      lastUpdated: "12 days ago",
    },
    {
      id: "12358",
      subject: "Broken product received",
      status: "Closed",
      lastUpdated: "13 days ago",
    },
    {
      id: "12359",
      subject: "Cannot track order",
      status: "Pending",
      lastUpdated: "14 days ago",
    },
    {
      id: "12360",
      subject: "Promo code not working",
      status: "Open",
      lastUpdated: "15 days ago",
    },
    {
      id: "12361",
      subject: "Wrong item delivered",
      status: "Closed",
      lastUpdated: "16 days ago",
    },
    {
      id: "12362",
      subject: "Request for invoice",
      status: "Pending",
      lastUpdated: "17 days ago",
    },
    {
      id: "12363",
      subject: "Subscription cancellation",
      status: "Open",
      lastUpdated: "18 days ago",
    },
    {
      id: "12364",
      subject: "Unable to update profile",
      status: "Closed",
      lastUpdated: "19 days ago",
    },
    {
      id: "12365",
      subject: "Payment gateway error",
      status: "Pending",
      lastUpdated: "20 days ago",
    },
    {
      id: "12366",
      subject: "Cannot download invoice",
      status: "Open",
      lastUpdated: "21 days ago",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 8;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const totalTickets = tickets.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Support Tickets</h2>
          <Button size="sm">
            <Link href="/dashboard/support-tickets/create" className="w-full h-full flex justify-center items-center text-center">Create Ticket</Link>
          </Button>
        </div>
        <Table>
          <TableHeader className="bg-[#00aeef]">
            <TableRow>
              <TableHead className="text-white">Ticket ID</TableHead>
              <TableHead className="text-white">Subject</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Last Updated</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #{ticket.id}
                  </Link>
                </TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{ticket.status}</Badge>
                </TableCell>
                <TableCell>{ticket.lastUpdated}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link
                          href={`/dashboard/support-tickets/${ticket.id}`}
                          className="w-full h-full"
                        >
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mx-auto mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
              className="cursor-pointer"
                onClick={() =>
                  setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1))
                }
              />
            </PaginationItem>
            {Array.from({ length: Math.ceil(totalTickets / ticketsPerPage) }).map(
              (item, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => paginate(index + 1)}
                    isActive={index + 1 === currentPage}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
              className="cursor-pointer"
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    prevPage < Math.ceil(totalTickets / ticketsPerPage)
                      ? prevPage + 1
                      : prevPage
                  )
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}
