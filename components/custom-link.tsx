import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  firstText: string;
  secondText: string;
}

const CustomLink = ({ href, firstText, secondText }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center border border-primary rounded-full overflow-hidden px-6"
    >
      <span className="anim-text py-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {firstText}
      </span>
      <span className="anim-text absolute top-full py-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {secondText}
      </span>
    </Link>
  );
};

export default CustomLink;
