export async function getItems() {
  const request = await fetch("https://e-commerce-de-cafe-i79ph484v-lukaz1802.vercel.app/api/items
  const items = await request.json();
  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
