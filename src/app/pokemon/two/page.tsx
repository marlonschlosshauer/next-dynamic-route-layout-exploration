import { Favorites } from "@/components/Favorites";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Favorites />
      <Link href="/pokemon/one">Visit /pokemon/one</Link>
    </div>
  );
}
