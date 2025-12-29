// src/lib/server/db.js
// import type { MarketItem } from '$lib/types/marketplace';
 
 
 

// export async function getAllItems():Promise<MarketItem[]>  {
  
//   const jsonPath = `${process.cwd()}/src/lib/server/data.json`;
//   console.log(jsonPath)
//    const dataFile = Bun.file(jsonPath);
//     const marketPlaceItems = await dataFile.json() as MarketItem[];
 
//      return marketPlaceItems
// } 


 // src/lib/server/db.ts
import type { MarketItem } from '$lib/types/marketplace';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function getAllItems(): Promise<MarketItem[]> {
	const jsonPath = join(process.cwd(), 'src/lib/server/data.json');
	console.log(jsonPath);
	
	const fileContent = await readFile(jsonPath, 'utf-8');
	const marketPlaceItems = JSON.parse(fileContent) as MarketItem[];
	
	return marketPlaceItems;
}