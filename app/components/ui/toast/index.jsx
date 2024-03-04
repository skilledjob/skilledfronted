"use client"

import { useEffect, useState } from 'react';
/**
 * @name useToast
 * @description Custom hook for managing toast notifications.
 *
 * @returns {Object} - Returns an object containing functions and components related to toast notifications.
 */
 /**
   * @name showToast
   * @description Function to display a toast message.
   *
   * @param {string} message - The message to be displayed in the toast.
   * @param {string} type - The type of the toast. Options: "success" or "error".
   */
const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const Toast = () => {
    if (!toast) return null;

    const { message, type } = toast;

    const toastClasses = `fixed z-50  left-1/2 transform -translate-x-1/2 text-xl top-[40px]  m-4 px-4 py-2 rounded ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`;

    return (
      <div className={toastClasses}>
        <p className=''>{message}</p>
      </div>
    );
  };

  return { showToast, Toast };
};

export default useToast;