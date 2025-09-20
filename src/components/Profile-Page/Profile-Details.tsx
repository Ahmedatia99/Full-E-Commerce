import { useState } from "react";
import { mockUser } from "../common/mockUser";
import type { UserForm } from "@/types/user_Type";
import AccountSidebar from "./Profile-SideBar";

function AccountCom() {
  const [formData, setFormData] = useState<UserForm>({
    ...mockUser,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
  };

  return (
    <div className="flex md:h-[75vh] justify-center md:flex-row flex-col h-full   ">
      {/* Sidebar */}
      <AccountSidebar />

      {/* Main Content */}
      <main className="flex-1 justify-center items-center    bg-[white] rounded-md shadow-md ">
        <form
          onSubmit={handleSubmit}
          className=" h-full  p-10 flex flex-col justify-center gap-4  w-full"
        >
          <h1 className="text-xl font-semibold text-[#DB4444] ">
            Edit Your Profile
          </h1>
          {/* First Row */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-10 ">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-4 bg-[#F5F5F5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-md px-3 py-4 bg-gray-100"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid sm:grid-cols-2 grid-cols-1   gap-4 sm:gap-10 ">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                disabled
                value={formData.email}
                className="w-full rounded-md px-3 py-4 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-md px-3 py-4 bg-gray-100"
              />
            </div>
          </div>

          {/* Password Section */}
          <h2 className="font-medium text-gray-800 mb-2">Password Changes</h2>
          <div className="space-y-5 mb-6">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-md px-3 py-4 bg-gray-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex sm:justify-end justify-start  space-x-4 flex-wrap gap-3 ">
            <button
              type="button"
              className="px-6 py-4 rounded-md border text-gray-600 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="sm:px-10 px-5 py-4  rounded-md bg-[#DB4444] text-white font-medium hover:bg-red-600 transition cursor-pointer duration-300 "
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AccountCom;
