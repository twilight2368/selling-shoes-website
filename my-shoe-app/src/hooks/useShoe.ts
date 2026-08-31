import { useEffect, useState } from "react";
import type { Shoe } from "../types/shoe";
import { getShoes } from "../api/shoeService";

export function useShoes() {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadShoes() {
      try {
        setLoading(true);
        const data = await getShoes();
        setShoes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load shoes");
      } finally {
        setLoading(false);
      }
    }

    loadShoes();
  }, []);

  return {
    shoes,
    loading,
    error,
  };
}
