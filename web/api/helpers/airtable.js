import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID,
);

export const authorTable = base(process.env.AIRTABLE_TABLE_ID);

export async function retrieveAuthor(gitHubUserId) {
  const records = await authorTable
    .select({
      maxRecords: 1,
      filterByFormula: `{GitHub User Id} = '${gitHubUserId}'`,
    })
    .firstPage();
  return records[0] || null;
}