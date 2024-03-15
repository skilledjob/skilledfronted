"use client"
import { Button } from "@/app/components/ui/button";
import useToast from "@/app/components/ui/toast";
import { deletedeJob } from "@/app/lib/jobPost";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import Modal from './../../../../../components/ui/modal/index';

export default function SubJobTable({ jobTableData }) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteJObId, setDeleteJobId] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const { Toast, showToast } = useToast();
  const showDeleteModalHandler = id => {
    setDeleteJobId(id);
    setShowDelete(true);
  };
  const hideDeleteModalHandler = () => {
    setShowDelete(false);
    setDeleteJobId(null);
  };
  const deleteJobHandler = async () => {
    setDeleteLoading(true);
    try {
      const response = await deletedeJob(deleteJObId);
     
      if (response?.success) {
        showToast("Job deleted successfully", "success");
        setDeleteLoading(false);
        hideDeleteModalHandler();
      }

      if (!response?.success) {
        showToast("Error while deleting job", "error");
        setDeleteLoading(false);
      }
    } catch (error) {
      showToast("Error while deleting job", "error");
      setDeleteLoading(false);
      hideDeleteModalHandler();
    }
  };
  return (
    <>
    <Toast/>
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium text-white">
          <tr>
            <th scope="col" className="px-6 py-4">
              No.
            </th>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Icon
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-white/70">
          {jobTableData?.map((jobData, index) => (
            <tr className="border-b" key={jobData.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{jobData.title}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {jobData.description}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Image src={jobData.image} width={42} height={42} alt="Logo" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                <Link href={`jobPost/editJob/${jobData?.slug}`}>
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => showDeleteModalHandler(jobData?.slug)} variant="denger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
            isOpen={showDelete}
            toggleModal={hideDeleteModalHandler}
            title="Delete Category"
            width="600px"
          >
            <div className="p-5 py-20">
              <div className="text-center flex flex-col justify-center items-center">
                <CiCircleInfo className="text-5xl text-slate-200" />
                <h2 className="text-xl text-slate-200">
                  Are you sure you want to delete this job?
                </h2>
                <p className="text-[13px] text-slate-400">
                  Once you delete this Job, it will be gone forever. Please
                  confirm to proceed.
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <Button
                    variant="danger"
                    onClick={() => {
                      // Handle delete action
                      deleteJobHandler();
                    }}
                  >
                    Delete
                  </Button>
                  <Button onClick={hideDeleteModalHandler}>Cancel</Button>
                </div>
              </div>
            </div>
          </Modal>
    </div>
    </>
  );
}
