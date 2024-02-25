"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import TextEditor from "@/app/components/ui/text-editor";
import { getAllCategories } from "@/app/lib/jobCategories";
import { updateProfile } from "@/app/lib/jobSeeker";
import toast from "cogo-toast";
import { useEffect, useState } from "react";

export default function Info({ profile }) {
  // Local state
  const [categoryOptions, setCategoyOptions] = useState([
    { value: "", label: "" },
  ]);

  // Form State
  const [skills, setSkills] = useState([
    {
      category: { value: "", label: "" },
      yearsOfExperience: null,
    },
  ]);
  const [education, setEducation] = useState({
    title: "",
    year: "",
  });
  const [intro, setIntro] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (profile) {
      setIntro(profile.intro);
      setEducation({
        title: profile.education.title,
        year: profile.education.year,
      });
      if (profile?.skills?.length > 0) {
        setSkills(
          profile?.skills?.map(skill => {
            return {
              category: { value: skill.id, label: skill.name },
              yearsOfExperience: skill.yearsOfExperience,
            };
          })
        );
      } else {
        setSkills([
          {
            category: { value: "", label: "" },
            yearsOfExperience: null,
          },
        ]);
      }
    }
  }, [profile]);

  useEffect(() => {
    fetchCategories();
  }, []);

  /**
   * HANDLERS
   */
  const updateProfileHandler = async e => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      intro: intro,
      education: {
        title: education.title,
        year: education.year,
      },
      skills: skills.map(skill => {
        if (skill.category.value) {
          return {
            jobCategory: skill.category.value,
            yearsOfExperience: parseInt(skill.yearsOfExperience),
          };
        }
      }),
    };

    try {
      const res = await updateProfile(null, payload);
      if (res?.success) {
        setLoading(false);
        toast.success("Profile updated successfully");
      }
      if (!res?.success) {
        setLoading(false);
        toast.error("Profile update failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  // add new skill
  const addSkill = () => {
    const newSkill = {
      category: { value: "", label: "" },
      yearsOfExperience: "",
    };
    setSkills([...skills, newSkill]);
  };

  // remove skills
  const removeSkill = index => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // get all categories
  const fetchCategories = async () => {
    const res = await getAllCategories();
    if (res) {
      const options = res.map(cat => ({ value: cat.id, label: cat.name }));
      setCategoyOptions(options);
    }
  };

  return (
    <div>
      {/* Oerview */}
      <div>
        <h1 className="text-lg font-semibold">Your personal information</h1>
      </div>

      <form onSubmit={updateProfileHandler}>
        {/* Description */}

        <div className="mt-10">
          <FormElements.Label>Overview</FormElements.Label>
          <TextEditor value={intro} onChange={setIntro} defaultValue={intro} />
        </div>

        {/* Education */}

        <div className="space-y-3 mt-10">
          <h2 className="text-2xl">Education</h2>
          <div className="space-y-3">
            <FormElements.Input
              value={education?.title}
              onChange={e => {
                setEducation({ ...education, title: e.target.value });
              }}
              placeholder="Education title"
            />
            <FormElements.Input
              value={education?.year}
              onChange={e => {
                setEducation({ ...education, year: e.target.value });
              }}
              type="number"
              min="1900"
              max="2099"
              step="1"
              placeholder="Passing year"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Your skills</h2>
            <Button variant="text" onClick={addSkill}>
              Add Skill
            </Button>
          </div>

          {skills?.length > 0 &&
            skills.map((skill, index) => (
              <div
                key={index}
                className="space-y-3 bg-secondary py-6 px-6 my-3 rounded"
              >
                <div className="space-y-2">
                  <FormElements.Label>Select Skills</FormElements.Label>
                  <FormElements.SelectV2
                    options={categoryOptions}
                    value={skill?.category?.value}
                    onChange={e => {
                      const newSkills = [...skills];
                      newSkills[index].category = {
                        value: e.target.value,
                        label: e.target.options[e.target.selectedIndex].text,
                      };
                      setSkills(newSkills);
                    }}
                    defaultValue={skill?.category}
                  />
                </div>
                <div className="space-y-2">
                  <FormElements.Label>
                    How much experience you have?
                  </FormElements.Label>
                  <FormElements.Input
                    value={skill?.yearsOfExperience}
                    onChange={e => {
                      const newSkills = [...skills];
                      newSkills[index].yearsOfExperience = e.target.value;
                      setSkills(newSkills);
                    }}
                    type="number"
                  />
                </div>
                <div>
                  <Button
                    onClick={() => {
                      removeSkill(index);
                    }}
                    type="button"
                    variant="none"
                    customClass="text-red-500"
                    disabled={skills.length === 1 ? true : false}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-end justify-end">
          <Button
            type="submit"
            variant="btnColor"
            loading={loading}
            disabled={loading}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
