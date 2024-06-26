"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { createDataSource, CreateDataSource } from "@/lib/actions/data-sources";
import { useActionState } from "react";

export const CreateDataSourceForm = () => {
  return (
    <form action={createDataSource}>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Data Source Name"
        />
      </div>
      <Button variant="secondary" className="shadow-none mt-2" type="submit">
        Create
      </Button>
    </form>
  );
};
