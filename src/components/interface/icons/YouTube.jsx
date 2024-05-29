import Link from "next/link";
import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";

function YouTube() {
  return (
    <>
      <Link href="https://www.youtube.com/">
        <FaYoutubeSquare className="w-8 h-8" />
      </Link>
    </>
  );
}

export default YouTube;
