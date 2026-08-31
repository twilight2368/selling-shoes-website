import ShoeCard from "../components/ShoeCard";
//import { PaginationShoe } from "../components/PaginationShoe";
import { useShoes } from "../hooks/useShoe";

export default function Home() {
  const { shoes, loading, error } = useShoes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="mx-auto min-h-screen bg-gray-50 px-5 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>

      {/* <div className="mt-10 flex w-full items-center justify-center">
        <PaginationShoe />
      </div> */}
    </main>
  );
}
