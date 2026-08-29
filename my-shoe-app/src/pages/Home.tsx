import shoes from "../database/shoes.json";
import ShoeCard from "../components/ShoeCard";
import type { Shoe } from "../types/shoe";
import { PaginationShoe } from "../components/PaginationShoe";

export default function Home() {
  return (
    <main className="mx-auto px-5 py-8 bg-gray-50">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe as Shoe} />
        ))}

        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe as Shoe} />
        ))}

        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe as Shoe} />
        ))}
      </div>

      <div className=" mt-10 w-full flex items-center justify-center">
        <PaginationShoe />
      </div>
    </main>
  );
}
