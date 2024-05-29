import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

function Facebook() {
  return (
    <>
      <Link target="blank" href="https://www.facebook.com/profile.php?id=100095476983560&locale=es_LA">
        <FaFacebookSquare className="w-8 h-8" />
      </Link>
    </>
  );
}

export default Facebook;
