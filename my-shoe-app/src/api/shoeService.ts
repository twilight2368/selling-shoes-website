import type { Shoe } from "../types/shoe";

const API_URL = import.meta.env.VITE_API_URL + "/api/shoes";

export async function getShoes(): Promise<Shoe[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch shoes");
  }

  const result = await response.json();

  return result.data;
}

export async function getShoeById(id: string): Promise<Shoe> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch shoe");
  }

  const result = await response.json();

  return result.data;
}

export async function createShoe(shoe: Omit<Shoe, "id">): Promise<Shoe> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: shoe,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create shoe");
  }

  const result = await response.json();

  return result.data;
}

export async function updateShoe(
  id: string,
  shoe: Partial<Omit<Shoe, "id">>,
): Promise<Shoe> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: shoe,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update shoe");
  }

  const result = await response.json();

  return result.data;
}

export async function deleteShoe(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete shoe");
  }
}

export async function searchShoes(name: string): Promise<Shoe[]> {
  const params = new URLSearchParams({
    "filters[name][$containsi]": name,
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to search shoes");
  }

  const result = await response.json();

  return result.data;
}
