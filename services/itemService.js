import data from "../pages/api/items.json";

export async function getItems() {
  const items = data;
  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
