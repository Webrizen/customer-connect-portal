"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, DatePicker, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Task Details</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-start gap-6">
            <div className="grid gap-3">
              <Input
                id="title"
                type="text"
                className="w-full"
                variant="underlined"
                label="Title"
              />
            </div>
            <div className="grid gap-3">
              <Textarea
                id="description"
                label="description"
                variant="underlined"
              />
            </div>
            <div className="grid gap-3">
              <DatePicker
                id="deadline"
                label="Deadline"
                variant="underlined"
              />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
              <Select label="Select Priority" variant="underline">
                <SelectItem>Low</SelectItem>
                <SelectItem>Medium</SelectItem>
                <SelectItem>High</SelectItem>
              </Select>
              <Select label="Select Status" variant="underline">
                <SelectItem>Not Started</SelectItem>
                <SelectItem>Ongoing</SelectItem>
                <SelectItem>Completed</SelectItem>
              </Select>
              <Select label="Assigned to" variant="underline">
                <SelectItem>John Doe</SelectItem>
                <SelectItem>Max Dadka</SelectItem>
                <SelectItem>Aksah Bhakta</SelectItem>
              </Select>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Button className="bg-[#00aeef] !text-white rounded hover:backdrop-blur-lg">
                Create
              </Button>
              <Button className="bg-red-50 !text-red-500 rounded hover:backdrop-blur-lg" onClick={() => router.back()}>
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}