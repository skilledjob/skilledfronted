"use client";

import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";
import FormElements from "@/app/components/ui/form-elements";
import { Controller, useForm } from "react-hook-form";

export default function JobPostForm() {
  const {
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      date: "",
      company: "",
      salary: 0,
      image: "",
      createdBy: "", // it should be current user id
      gender: "",
      experience: 0,
      education: "",
      careerLevel: "",
    },
  });

  return (
    <div className="mt-10">
      <form className="space-y-3">
        <div>
          <FormElements.Label withAsterisk>Title</FormElements.Label>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onchange} />
            )}
            rules={{
              required: "Title is required",
            }}
          />
          {errors.title && (
            <FormElements.Error>{errors.title.message}</FormElements.Error>
          )}
        </div>
        <div>
          <FormElements.Label withAsterisk>Description</FormElements.Label>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onChange} />
            )}
            rules={{
              required: "Description is required",
            }}
          />
          {errors.description && (
            <FormElements.Error>
              {errors.description.message}
            </FormElements.Error>
          )}
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full">
            <FormElements.Label withAsterisk>Location</FormElements.Label>
            <Controller
              control={control}
              name="location"
              render={({ field: { onChange, value } }) => (
                <FormElements.Input value={value} onChange={onChange} />
              )}
              rules={{
                required: "Location is required",
              }}
            />
            {errors.location && (
              <FormElements.Error>{errors.location.message}</FormElements.Error>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>Date</FormElements.Label>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  type="date"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: "Date is required",
              }}
            />
            {errors.date && (
              <FormElements.Error>{errors.date.message}</FormElements.Error>
            )}
          </div>
        </div>

        <div>
          <FormElements.Label withAsterisk>Icon</FormElements.Label>
          <Dropzone
            acceptedFileTypes={["jpg", "jpeg", "png"]}
            subTitle="To upload, file size must be under 2MB and allowed file types are (.jpg, .png, .jpeg)"
          />
        </div>
        <div className="flex gap-5 items-center">
          <Button>SAVE</Button>
          <Button variant="denger">CANCEL</Button>
        </div>
      </form>
    </div>
  );
}
