"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import TextEditor from "@/app/components/ui/text-editor";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Info({ profile }) {
  const [intro, setIntro] = useState("");

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue: setFormValue,
    reset,
  } = useForm({
    defaultValues: {
      intro: "",
      education: {
        title: "",
        year: "",
      },
    },
  });

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (profile?.education) {
      setFormValue("education.title", profile.education.title);
      setFormValue("education.year", profile.education.year);
    }
  }, [profile, setFormValue]);

  /**
   * HANDLERS
   */
  const updateProfileHandler = async data => {
    console.log(data);
  };

  return (
    <div>
      {/* Oerview */}
      <div>
        <h1 className="text-lg font-semibold">Your personal information</h1>
      </div>

      <form onSubmit={handleSubmit(updateProfileHandler)}>
        {/* Description */}
        <div className="pt-10">
          <FormElements.Label>Description</FormElements.Label>
          <Controller
            control={control}
            name="intro"
            render={({ field: { onChange, value } }) => (
              <TextEditor value={value} onChange={onChange} />
            )}
            rules={{ required: "Description is required" }}
          />
          {errors.intro && (
            <FormElements.Error>{errors.intro.message}</FormElements.Error>
          )}
        </div>

        {/* Education */}
        <div className="space-y-3 mt-10">
          <FormElements.Label>Education</FormElements.Label>
          <div>
            <Controller
              control={control}
              name="education.title"
              render={({ field }) => (
                <FormElements.Input {...field} placeholder="Education title" />
              )}
              rules={{ required: "Education title is required" }}
            />
            {errors.education?.title && (
              <FormElements.Error>
                {errors.education.title.message}
              </FormElements.Error>
            )}
          </div>

          <Controller
            control={control}
            name="education.year"
            render={({ field }) => (
              <FormElements.Input
                {...field}
                type="number"
                min="1900"
                max="2099"
                step="1"
                placeholder="Passing year"
              />
            )}
            rules={{ required: "Passing year is required" }}
          />
          {errors.education?.year && (
            <FormElements.Error>
              {errors.education.year.message}
            </FormElements.Error>
          )}
        </div>

        {/* Skills */}
        <div className="mt-10">
          <FormElements.Label>Skills</FormElements.Label>
        </div>

        <div className="flex items-end justify-end">
          <Button type="submit" variant="btnColor">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
