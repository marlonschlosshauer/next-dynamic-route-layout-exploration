import Link from "next/link";

export interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const isOne = slug[0] === "one";

  return (
    <div>
      <Link href={`/pokemon/${isOne ? "two" : "one"}`}>
        Visit /pokemon/{isOne ? "two" : "one"}
      </Link>
    </div>
  );
}
