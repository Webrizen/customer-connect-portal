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

export default function page() {
  return (
    <>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Billing Details</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-start gap-6">
            <div className="grid gap-3">
              <Input
                id="client"
                type="text"
                className="w-full"
                variant="underlined"
                label="Client Name"
              />
            </div>
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
                id="project-description"
                label="Description"
                variant="underlined"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <DatePicker
              id="deadline"
              label="Last Date For Payment"
              variant="underline"
               />
              <Input 
                id="amount"
                type="number"
                label="Amount"
                variant="underline"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <Button className="bg-[#00aeef] !text-white rounded hover:backdrop-blur-lg">
                Create
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}