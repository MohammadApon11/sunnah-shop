import Image from "next/image";
import React from "react";
import notFoundImg from "@/assets/not-found.jpg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-10 text-center">
      <Image
        src={notFoundImg}
        alt="Not-Found"
        width={600}
        placeholder="blur"
        className="max-w-[600px] h-auto mx-auto p-2 rounded-md"
        sizes="100vw"
      />
      <Link href="/" className="mt-5 mb-2 inline-block">
        <button className="btn btn-primary bg-blue-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
