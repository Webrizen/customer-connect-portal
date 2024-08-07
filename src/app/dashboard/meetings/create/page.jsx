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
import { Button, DatePicker, Input, Select, SelectItem, Textarea, TimeInput } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Meetings Details</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-start gap-6">
            <div className="grid gap-3">
              <Input
                id="subject"
                type="text"
                className="w-full"
                variant="underlined"
                label="Title"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <DatePicker
                id="date"
                label="Date"
                variant="underlined"
              />
              <TimeInput
                id="time"
                label="Time"
                variant="underlined"
              />
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
