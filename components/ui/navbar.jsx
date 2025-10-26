import { Button } from "./button";
import Link from 'next/link'
export default function Navbar() {
  return (
    <ul className="py-8 flex flex-row justify-center items-center gap-40 fixed w-full mx-auto z-10">
      <img src="/assets/Logo.svg" className="h-12 w-12"></img>
      <Link href="">About</Link>
      <Link href="">How it Works</Link>
      <Link href="">Partners</Link>
      <Link href="">Stories</Link>
      <Button variant="outline">Contact Us</Button>
    </ul>
  );
}
