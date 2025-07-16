"use client";
import SubsTableItem from "@/components/AdminComponents/SubsTableItem";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function page() {
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // GET
  async function fetchEmails() {
    setIsLoading(true);

    const res = await axios.get("/api/email");
    setEmails(res.data.emails);
    setIsLoading(false);
  }

  // DELETE
  async function deleteEmail(mongoId) {
    const res = await axios.delete("/api/email", { params: { id: mongoId } });

    if (res.data.success) {
      toast.success(res.data.msg);
      fetchEmails();
    } else {
      toast.error("Unknown Error, Please try again later");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="  flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl font-bold">ALL SUBSCRIPTIONS</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-[#e9e9e9] scrollbar-hide ">
        <table className="w-full text-sm text">
          <thead className="text-sm text-left  dark:bg-gray-600 bg-[#e9e9e9] uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td className="text-center pt-8" colSpan="4">
                  <FontAwesomeIcon icon={faSpinner} spinPulse />
                </td>
              </tr>
            )}
            {!isLoading &&
              emails.map((email) => (
                <SubsTableItem
                  key={email._id}
                  mongoId={email._id}
                  email={email.email}
                  date={email.date}
                  deleteEmail={deleteEmail}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
