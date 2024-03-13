"use client";
import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import Link from "next/link";
import { Button } from "./../../../../components/ui/button/index";
import Image from "next/image";
import Modal from "./../../../../components/ui/modal/index";
import useToast from "@/app/components/ui/toast";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { deleteJobCategory } from "@/app/lib/jobCategories";

export default function Category({ categoridata }) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  const { Toast, showToast } = useToast();

  const showDeleteModalHandler = id => {
    setDeleteCategoryId(id);
    setShowDelete(true);
  };

  const hideDeleteModalHandler = () => {
    setShowDelete(false);
    setDeleteCategoryId(null);
  };

  // Delete category
  const deleteCategoryHandler = async () => {
    setDeleteLoading(true);
    try {
      const response = await deleteJobCategory(deleteCategoryId);
      // console.log(response, "response ");
      if (response?.success) {
        showToast("Category deleted successfully", "success");
        setDeleteLoading(false);
        hideDeleteModalHandler();
      }

      if (!response?.success) {
        showToast("Error while deleting Category", "error");
        setDeleteLoading(false);
      }
    } catch (error) {
      showToast("Error while deleting Category", "error");
      setDeleteLoading(false);
      hideDeleteModalHandler();
    }
  };

  return (
    <>
      <Toast />
      <div className="flex flex-col w-full">
        <div className="mt-16 w-full mr-5 p-5 bg-secondary rounded-md">
          <div className="flex items-center justify-between w-full">
            <SubHeader className="text-white">Job Category</SubHeader>
            <Link href="add-blog">
              <Button>Add More</Button>
            </Link>
          </div>
          {categoridata?.length > 0 ? (
            categoridata?.map((category, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-primary p-5 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={category?.image}
                        width={72}
                        height={72}
                        alt="logo"
                      />
                    </div>
                    <div>
                      <h1 className="text-white text-xl font-semibold">
                        {category?.name}
                      </h1>
                      <p className="text-white/70 text-base">
                        {category?.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button>Edit</Button>
                    <Button
                      variant="danger"
                      onClick={() => showDeleteModalHandler(category?.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data available</p>
          )}
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
                  Are you sure you want to delete this category?
                </h2>
                <p className="text-[13px] text-slate-400">
                  Once you delete this category, it will be gone forever. Please
                  confirm to proceed.
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <Button
                    variant="danger"
                    onClick={() => {
                      // Handle delete action
                      deleteCategoryHandler();
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
      </div>
    </>
  );
}
