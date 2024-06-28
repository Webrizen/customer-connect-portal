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

// Sample data for billings
const billings = [
  { id: 1, client: "Client A", title: "Website Design", description: "Redesign corporate website", amount: 1500, date: "2024-06-15", status: "Paid" },
  { id: 2, client: "Client B", title: "Mobile App Development", description: "Develop e-commerce app", amount: 3000, date: "2024-06-18", status: "Pending" },
  { id: 3, client: "Client C", title: "SEO Optimization", description: "SEO services for website", amount: 800, date: "2024-06-20", status: "Paid" },
  { id: 4, client: "Client D", title: "Social Media Marketing", description: "Manage social media campaigns", amount: 1200, date: "2024-06-22", status: "Overdue" },
  { id: 5, client: "Client E", title: "Content Creation", description: "Create blog content", amount: 500, date: "2024-06-25", status: "Paid" },
  { id: 6, client: "Client F", title: "Graphic Design", description: "Design marketing materials", amount: 700, date: "2024-06-28", status: "Pending" },
  { id: 7, client: "Client G", title: "Consulting", description: "Business strategy consulting", amount: 2000, date: "2024-07-01", status: "Paid" },
  { id: 8, client: "Client H", title: "Software Development", description: "Develop custom software", amount: 5000, date: "2024-07-05", status: "Overdue" },
  { id: 9, client: "Client I", title: "Email Marketing", description: "Email campaign management", amount: 600, date: "2024-07-08", status: "Pending" },
  { id: 10, client: "Client J", title: "Video Production", description: "Produce promotional videos", amount: 2500, date: "2024-07-10", status: "Paid" },
  { id: 11, client: "Client K", title: "Web Hosting", description: "Website hosting services", amount: 300, date: "2024-07-12", status: "Pending" },
  { id: 12, client: "Client L", title: "Cybersecurity", description: "Implement security measures", amount: 1800, date: "2024-07-15", status: "Overdue" },
  { id: 13, client: "Client M", title: "Market Research", description: "Conduct market research", amount: 1000, date: "2024-07-18", status: "Paid" },
  { id: 14, client: "Client N", title: "IT Support", description: "Technical support services", amount: 1500, date: "2024-07-20", status: "Pending" },
  { id: 15, client: "Client O", title: "Brand Strategy", description: "Develop brand strategy", amount: 2200, date: "2024-07-23", status: "Paid" },
  { id: 16, client: "Client P", title: "App Maintenance", description: "Maintain mobile app", amount: 900, date: "2024-07-25", status: "Pending" },
  { id: 17, client: "Client Q", title: "CRM Implementation", description: "Implement CRM system", amount: 3000, date: "2024-07-27", status: "Overdue" },
  { id: 18, client: "Client R", title: "Photography", description: "Professional photography services", amount: 1200, date: "2024-07-30", status: "Paid" },
  { id: 19, client: "Client S", title: "Event Planning", description: "Plan corporate event", amount: 2500, date: "2024-08-02", status: "Pending" },
  { id: 20, client: "Client T", title: "Training Sessions", description: "Conduct training workshops", amount: 1700, date: "2024-08-05", status: "Paid" },
  { id: 21, client: "Client U", title: "Cloud Services", description: "Cloud computing solutions", amount: 2700, date: "2024-08-08", status: "Overdue" },
  { id: 22, client: "Client V", title: "Animation", description: "Create animated videos", amount: 2300, date: "2024-08-10", status: "Paid" },
  { id: 23, client: "Client W", title: "Public Relations", description: "Manage PR campaigns", amount: 1600, date: "2024-08-12", status: "Pending" },
  { id: 24, client: "Client X", title: "Legal Services", description: "Legal advisory services", amount: 3400, date: "2024-08-15", status: "Paid" },
  { id: 25, client: "Client Y", title: "Translation Services", description: "Translate documents", amount: 800, date: "2024-08-18", status: "Overdue" },
];

export default function page() {
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 8;
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = billings.slice(indexOfFirstTicket, indexOfLastTicket);
  
    const totalTickets = billings.length;
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Billings</h2>
          <Button size="sm">
            <Link
              href="/dashboard/billings/create"
              className="w-full h-full flex justify-center items-center text-center"
            >
              Create Billing
            </Link>
          </Button>
        </div>
        <Table>
        <TableHeader className="bg-[#00aeef]">
            <TableRow>
              <TableHead className="text-white">Client</TableHead>
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((billing) => (
              <TableRow key={billing.id}>
                <TableCell>{billing.client}</TableCell>
                <TableCell>{billing.title}</TableCell>
                <TableCell>{billing.description}</TableCell>
                <TableCell>${billing.amount}</TableCell>
                <TableCell>{billing.date}</TableCell>
                <TableCell>
                  <Badge className={`${
                    billing.status === "Paid" ? "bg-green-500" : 
                    billing.status === "Pending" ? "bg-yellow-500" : 
                    "bg-red-500"
                  } text-white`}>{billing.status}</Badge>
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
                          href={`/dashboard/meetings/${billing.id}`}
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