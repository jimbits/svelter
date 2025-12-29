import { getAllItems } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		// Check if Bun runtime is available
		const runtime = typeof Bun !== 'undefined' ? 'Bun' : 'Node.js';
		const bunVersion = typeof Bun !== 'undefined' ? Bun.version : 'N/A';

		// Test if Bun.file() works by loading the data
		const items = await getAllItems();

		return json({
			success: true,
			runtime: runtime,
			bunVersion: bunVersion,
			message: runtime === 'Bun' 
				? '✅ Bun.file() is working!' 
				: '❌ Running on Node.js, Bun.file() would fail',
			dataLoaded: items.length > 0,
			itemCount: items.length,
			firstItem: items[0] || null,
			allItems: items // Full data from data.json
		});
	} catch (error) {
		return json({
			success: false,
			error: error instanceof Error ? error.message : String(error),
			stack: error instanceof Error ? error.stack : undefined
		}, { status: 500 });
	}
}