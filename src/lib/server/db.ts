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
// src/lib/server/db.ts
import type { MarketItem } from '$lib/types/marketplace';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export async function getAllItems(): Promise<MarketItem[]> {
	// Get the directory of THIS file
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	
	// Read data.json from the same directory
	const jsonPath = join(__dirname, 'data.json');
	console.log('Reading from:', jsonPath);
	
	const fileContent = await readFile(jsonPath, 'utf-8');
	const marketPlaceItems = JSON.parse(fileContent) as MarketItem[];
	
	return marketPlaceItems;
}