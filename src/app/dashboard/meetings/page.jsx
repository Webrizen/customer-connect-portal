"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button, Progress } from "@nextui-org/react";
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

// Sample data for meetings
const meetings = [
  {
    id: 1,
    title: "Project Kickoff",
    date: "2024-07-01",
    time: "10:00 AM",
    attendees: ["Alice", "Bob", "Charlie"],
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Design Review",
    date: "2024-07-05",
    time: "02:00 PM",
    attendees: ["Dave", "Eve", "Frank"],
    status: "Completed",
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: "2024-07-08",
    time: "11:00 AM",
    attendees: ["Grace", "Heidi", "Ivan"],
    status: "Scheduled",
  },
  {
    id: 4,
    title: "Client Presentation",
    date: "2024-07-10",
    time: "03:00 PM",
    attendees: ["Judy", "Mallory", "Niaj"],
    status: "Cancelled",
  },
  {
    id: 5,
    title: "Weekly Sync",
    date: "2024-07-12",
    time: "09:00 AM",
    attendees: ["Olivia", "Peggy", "Sybil"],
    status: "Scheduled",
  },
  {
    id: 6,
    title: "Budget Review",
    date: "2024-07-15",
    time: "01:00 PM",
    attendees: ["Trent", "Victor", "Wendy"],
    status: "Scheduled",
  },
  {
    id: 7,
    title: "Tech Talk",
    date: "2024-07-18",
    time: "04:00 PM",
    attendees: ["Xavier", "Yvonne", "Zane"],
    status: "Completed",
  },
  {
    id: 8,
    title: "Team Building",
    date: "2024-07-20",
    time: "10:00 AM",
    attendees: ["Alice", "Bob", "Charlie"],
    status: "Scheduled",
  },
  {
    id: 9,
    title: "Product Demo",
    date: "2024-07-22",
    time: "02:00 PM",
    attendees: ["Dave", "Eve", "Frank"],
    status: "Cancelled",
  },
  {
    id: 10,
    title: "Strategy Session",
    date: "2024-07-25",
    time: "11:00 AM",
    attendees: ["Grace", "Heidi", "Ivan"],
    status: "Scheduled",
  },
  {
    id: 11,
    title: "Client Feedback",
    date: "2024-07-27",
    time: "03:00 PM",
    attendees: ["Judy", "Mallory", "Niaj"],
    status: "Completed",
  },
  {
    id: 12,
    title: "Quarterly Review",
    date: "2024-07-29",
    time: "09:00 AM",
    attendees: ["Olivia", "Peggy", "Sybil"],
    status: "Scheduled",
  },
  {
    id: 13,
    title: "Marketing Plan",
    date: "2024-08-01",
    time: "01:00 PM",
    attendees: ["Trent", "Victor", "Wendy"],
    status: "Scheduled",
  },
  {
    id: 14,
    title: "Sales Training",
    date: "2024-08-03",
    time: "04:00 PM",
    attendees: ["Xavier", "Yvonne", "Zane"],
    status: "Scheduled",
  },
  {
    id: 15,
    title: "Investor Update",
    date: "2024-08-05",
    time: "10:00 AM",
    attendees: ["Alice", "Bob", "Charlie"],
    status: "Cancelled",
  },
  {
    id: 16,
    title: "Security Briefing",
    date: "2024-08-07",
    time: "02:00 PM",
    attendees: ["Olivia", "Heidi", "Ivan"],
    status: "Scheduled",
  },
  {
    id: 17,
    title: "Product Roadmap",
    date: "2024-08-10",
    time: "11:00 AM",
    attendees: ["Eve", "Mallory", "Victor"],
    status: "Completed",
  },
  {
    id: 18,
    title: "Annual General Meeting",
    date: "2024-08-12",
    time: "03:00 PM",
    attendees: ["Sybil", "Trent", "Grace"],
    status: "Scheduled",
  },
  {
    id: 19,
    title: "Technical Training",
    date: "2024-08-14",
    time: "09:00 AM",
    attendees: ["Frank", "Xavier", "Wendy"],
    status: "Scheduled",
  },
  {
    id: 20,
    title: "Legal Consultation",
    date: "2024-08-16",
    time: "01:00 PM",
    attendees: ["Judy", "Bob", "Zane"],
    status: "Cancelled",
  },
  {
    id: 21,
    title: "HR Meeting",
    date: "2024-08-19",
    time: "04:00 PM",
    attendees: ["Heidi", "Olivia", "Ivan"],
    status: "Completed",
  },
  {
    id: 22,
    title: "Finance Review",
    date: "2024-08-21",
    time: "10:00 AM",
    attendees: ["Peggy", "Charlie", "Sybil"],
    status: "Scheduled",
  },
  {
    id: 23,
    title: "All Hands Meeting",
    date: "2024-08-23",
    time: "02:00 PM",
    attendees: ["Alice", "Eve", "Trent"],
    status: "Scheduled",
  },
  {
    id: 24,
    title: "DevOps Sync",
    date: "2024-08-25",
    time: "11:00 AM",
    attendees: ["Mallory", "Grace", "Frank"],
    status: "Completed",
  },
  {
    id: 25,
    title: "Customer Feedback",
    date: "2024-08-27",
    time: "03:00 PM",
    attendees: ["Wendy", "Victor", "Zane"],
    status: "Cancelled",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 8;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = meetings.slice(indexOfFirstTicket, indexOfLastTicket);

  const totalTickets = meetings.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Meetings</h2>
          <Button size="sm">
            <Link
              href="/dashboard/meetings/create"
              className="w-full h-full flex justify-center items-center text-center"
            >
              Schedule Meeting
            </Link>
          </Button>
        </div>
        <Table>
          <TableHeader className="bg-[#00aeef]">
            <TableRow>
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Time</TableHead>
              <TableHead className="text-white">Attendees</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((meeting) => (
              <TableRow key={meeting.id}>
                <TableCell className="md:whitespace-normal whitespace-nowrap">{meeting.title}</TableCell>
                <TableCell className="md:whitespace-normal whitespace-nowrap">{meeting.date}</TableCell>
                <TableCell className="md:whitespace-normal whitespace-nowrap">{meeting.time}</TableCell>
                <TableCell>{meeting.attendees.join(", ")}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      meeting.status === "Scheduled"
                        ? "bg-blue-50 !text-blue-500"
                        : meeting.status === "Completed"
                        ? "bg-green-50 !text-green-500"
                        : "bg-red-50 !text-red-500"
                    } text-white`}
                  >
                    {meeting.status}
                  </Badge>
                </TableCell>
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
                          href={`/dashboard/meetings/${meeting.id}`}
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
                  setCurrentPage((prevPage) =>
                    prevPage > 1 ? prevPage - 1 : 1
                  )
                }
              />
            </PaginationItem>
            {Array.from({
              length: Math.ceil(totalTickets / ticketsPerPage),
            }).map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => paginate(index + 1)}
                  isActive={index + 1 === currentPage}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
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
