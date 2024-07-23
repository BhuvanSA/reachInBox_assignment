import Image from "next/image";
import { ModeToggle } from "./theme-toggler";
import { Mail } from "@/components/mail";

export default function Home() {
  return (
    <>
      <h1>Hello Next</h1>
      <ModeToggle />
      <Mail />
    </>
  );
}
