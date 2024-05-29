import Link from "next/link";
import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";

function YouTube() {
  return (
    <>
      <Link href="https://www.youtube.com/">
        <FaYoutubeSquare className="w-6 h-6" />
      </Link>
    </>
  );
}

export default YouTube;
