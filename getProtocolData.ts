import * as fs from 'fs';
import data, { Protocol } from '../defillama-server/defi/src/protocols/data';
import data2 from '../defillama-server/defi/src/protocols/data2';
import data3 from '../defillama-server/defi/src/protocols/data3';

// Convert the list of dictionaries to JSON format
const mergedList: Protocol[] = Array.from(new Set([...data, ...data2, ...data3]));
const jsonData = JSON.stringify(mergedList, null, 2);

// Define the file path
const filePath = 'adapters.json';

// Write the JSON data to a file
fs.writeFileSync(filePath, jsonData);

console.log('Data saved to adapters.json');