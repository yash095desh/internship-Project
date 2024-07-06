"use client";
import React, { useEffect, useState } from "react";
import { Component1 } from "@/components/Component1";
import Component2 from "@/components/Component2";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";

interface IUser {
  name: string;
  email: string;
  phoneNumber: number;
}

export default function page() {
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user: IUser | null =
        localStorage.getItem("userInfo") !== null
          ? JSON.parse(localStorage.getItem("userInfo") || "")
          : null;
      if (!user) {
        router.push("/register");
      }
      setUser(user);
    }
  }, []);

  if (!user) {
    return (
      <div className="flex h-screen w-full items-center justify-around p-10">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#000000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-around p-10">
      <Component2 />
      <Component1 />
    </div>
  );
}
