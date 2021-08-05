import React from "react";
import Link from "next/link";

export default function NavBarLink({ link }) {
  return (
    <li className="nav-bar__link">
      <Link href={link.url}>
        <a>{link.title}</a>
      </Link>
    </li>
  );
}
