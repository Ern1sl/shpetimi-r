"use client";
import Link from "next/link";
import { BackArrowIcon } from "../components/icons";

export default function Back() {
  return (
    <div>
      <Link href="/">
        <BackArrowIcon />
      </Link>
    </div>
  );
}
