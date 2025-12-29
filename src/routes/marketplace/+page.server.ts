  //export const prerender = true; 
 
 import { getAllItems } from "$server/db";


export async function load() {
  const items = await getAllItems();
 
 
 
  return { items };
}
 
