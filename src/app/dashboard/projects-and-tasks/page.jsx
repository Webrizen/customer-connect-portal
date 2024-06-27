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
import { Button, Progress } from "@nextui-org/react";
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
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of the company website with new UI/UX.",
      deadline: "2024-07-30",
      progress: 75,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Develop a new mobile app for online shopping.",
      deadline: "2024-08-15",
      progress: 40,
      status: "In Progress",
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Improve the search engine ranking of the company website.",
      deadline: "2024-07-10",
      progress: 60,
      status: "In Progress",
    },
    {
      id: 4,
      name: "Marketing Campaign",
      description: "Launch a new marketing campaign for the summer season.",
      deadline: "2024-06-30",
      progress: 90,
      status: "Near Completion",
    },
    {
      id: 5,
      name: "Data Migration",
      description: "Migrate all customer data to the new CRM system.",
      deadline: "2024-07-20",
      progress: 50,
      status: "In Progress",
    },
    {
      id: 6,
      name: "New Product Launch",
      description: "Launch the new product line in the market.",
      deadline: "2024-09-01",
      progress: 20,
      status: "Planning",
    },
    {
      id: 7,
      name: "Customer Feedback System",
      description: "Implement a new system to collect customer feedback.",
      deadline: "2024-07-25",
      progress: 70,
      status: "In Progress",
    },
    {
      id: 8,
      name: "Employee Training Program",
      description: "Develop and execute a training program for new employees.",
      deadline: "2024-08-05",
      progress: 30,
      status: "In Progress",
    },
    {
      id: 9,
      name: "Supply Chain Optimization",
      description: "Optimize the supply chain for better efficiency.",
      deadline: "2024-08-30",
      progress: 55,
      status: "In Progress",
    },
    {
      id: 10,
      name: "Content Management System",
      description: "Implement a new CMS for better content management.",
      deadline: "2024-07-18",
      progress: 80,
      status: "In Progress",
    },
    {
      id: 11,
      name: "Customer Portal",
      description: "Build a new customer portal for better user interaction.",
      deadline: "2024-07-10",
      progress: 85,
      status: "Near Completion",
    },
    {
      id: 12,
      name: "Cybersecurity Upgrade",
      description: "Enhance the cybersecurity measures of the company.",
      deadline: "2024-07-25",
      progress: 60,
      status: "In Progress",
    },
    {
      id: 13,
      name: "Market Research",
      description: "Conduct market research for new product ideas.",
      deadline: "2024-08-10",
      progress: 50,
      status: "In Progress",
    },
    {
      id: 14,
      name: "Partnership Expansion",
      description: "Expand partnerships with key stakeholders.",
      deadline: "2024-09-15",
      progress: 35,
      status: "In Progress",
    },
    {
      id: 15,
      name: "Green Initiative",
      description: "Implement eco-friendly practices in the company.",
      deadline: "2024-08-20",
      progress: 45,
      status: "In Progress",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 8;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = projects.slice(indexOfFirstTicket, indexOfLastTicket);

  const totalTickets = projects.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Button size="sm">
            <Link
              href="/dashboard/projects-and-tasks/create-project"
              className="w-full h-full flex justify-center items-center text-center"
            >
              Create Project
            </Link>
          </Button>
        </div>
        <Table>
          <TableHeader className="bg-[#00aeef]">
            <TableRow>
              <TableHead className="text-white">Project ID</TableHead>
              <TableHead className="text-white">Details</TableHead>
              <TableHead className="text-white">Progress</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Deadline</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #{project.id}
                  </Link>
                </TableCell>
                <TableCell className="flex flex-col">
                  <b>{project.name}</b>
                  <span className="text-xs">{project.description}</span>
                </TableCell>
                <TableCell>
                  <Progress
                    size="sm"
                    radius="sm"
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                    label="Completed"
                    value={project.progress}
                    showValueLabel={true}
                  />
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{project.status}</Badge>
                </TableCell>
                <TableCell>{project.deadline}</TableCell>
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
                          href={`/dashboard/projects-and-tasks/projects/${project.id}`}
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
