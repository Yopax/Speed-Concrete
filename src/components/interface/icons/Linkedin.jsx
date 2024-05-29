import { FaLinkedin } from "react-icons/fa";
import React from "react";
import Link from "next/link";

function Linkedin() {
  return (
    <>
      <Link target="blank" href="https://www.linkedin.com/in/darli-barreto/">
        <FaLinkedin className="w-8 h-8" />
      </Link>
    </>
  );
}

export default Linkedin;
