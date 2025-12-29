// src/lib/server/db.js
import type { MarketItem } from '$lib/types/marketplace';
 
 
 

export async function getAllItems():Promise<MarketItem[]>  {
  
  const jsonPath = `${process.cwd()}/src/lib/server/data.json`;
  console.log(jsonPath)
   const dataFile = Bun.file(jsonPath);
    const marketPlaceItems = await dataFile.json() as MarketItem[];
 
     return marketPlaceItems
} 


 