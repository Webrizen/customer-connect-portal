import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@nextui-org/react";
import { CalendarIcon, PaperclipIcon } from "lucide-react";
import Link from "next/link";

export default function page({ params }) {
  return (
    <>
      <div className="mt-4 grid gap-4">
        <Card className="relative">
          <CardHeader className="border-b pb-2 mb-4">
            <CardTitle>[#{params.id}] Issue with product functionality</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-yellow-100 text-yellow-600"
                >
                  In Progress
                </Badge>
                <span className="text-muted-foreground">
                  Assigned to: John Doe
                </span>
              </div>
              <div className="flex justify-start flex-wrap gap-2 whitespace-nowrap my-2 items-center text-gray-500 dark:text-gray-400 text-xs">
                    <span>3 days ago</span>
                    <span>•</span>
                    <span className="flex items-center hover:bg-[rgba(0,0,0,0.1)] rounded-xl cursor-pointer">
                    <PaperclipIcon className="h-3 w-3 mr-1" />
                    2 attachments
                    </span>
                  </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I'm having trouble with the product's main functionality. It's not
              working as expected. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
            </p>
          </CardContent>
          <div
                  className="absolute top-0 right-0 p-2 cursor-pointer bg-red-50 hover:bg-red-100 text-red-500 rounded-bl-xl z-50"
                  title="Delete"
                >
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
                <Link
                  href={`/dashboard/support-tickets/${params.id}/edit`}
                  className="absolute top-[48px] right-0 p-2 cursor-pointer bg-blue-50 hover:bg-blue-100 text-[#00aeef] rounded-bl-xl rounded-tl-xl z-50"
                  title="Edit"
                >
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Link>
        </Card>
      </div>
    </>
  );
}
