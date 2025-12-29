// src/lib/server/db.js
 import type { MarketItem } from '../src/lib/types/marketplace';
const jsonData:string =  import.meta.dirname  


export async function getAllItems():Promise<MarketItem[]>  {
  
  const jsonPath = `${process.cwd()}/static/data.json`;
  console.log(jsonPath)
   const dataFile = Bun.file(jsonPath);
    const marketPlaceItems = await dataFile.json() as MarketItem[];
 
     return marketPlaceItems
} 


 