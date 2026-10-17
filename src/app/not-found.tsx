import Link from "next/link";
import { PenTitle, Pencil } from "@/components/ink/Pen";

export default function NotFound() {
  return (
    <div className="ruled grid min-h-[70vh] place-items-center px-4">
      <div className="text-center">
        <PenTitle seed="404" as="h1" className="text-6xl font-bold">
          This river dried up.
        </PenTitle>
        <Pencil className="mt-3">like the Luni in May: the page you wanted isn&apos;t here.</Pencil>
        <Link href="/" className="mt-6 inline-block font-pen text-2xl text-blue-ink underline decoration-wavy underline-offset-4">
          back to the notebook →
        </Link>
      </div>
    </div>
  );
}
