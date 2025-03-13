import { Favorites } from "@/components/Favorites";

export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <h1>Pokemon</h1>
      <Favorites />
      {children}
    </div>
  );
}
