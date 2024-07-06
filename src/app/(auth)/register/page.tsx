"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [user, setuser] = useState({ name: "", email: "", phoneNumber: "" });
  const router = useRouter();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setuser((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    if (!user?.name || !user?.email || !user?.phoneNumber) {
      return toast.error("Please fill all Credentials");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("userInfo", JSON.stringify(user));
      setuser({ name: "", email: "", phoneNumber: "" });
      router.push("/");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" max-w-md w-full rounded-lg shadow-lg bg-white flex">
        <form
          className="flex flex-col w-full p-4 loginForm "
          onSubmit={handleSubmit}
        >
          <h1 className=" text-center text-xl font-semibold mb-5">
            Create your Account
          </h1>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              id="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="number"
              placeholder="Phone-Number"
              id="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <button className=" px-4 py-2 rounded-md bg-black text-white hover:opacity-80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
