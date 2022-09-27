import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID,
);

export const authorTable = base(process.env.AIRTABLE_AUTHOR_TABLE_ID);
export const userTable = base(process.env.AIRTABLE_USER_TABLE_ID);
export const subscriberTable = base(process.env.AIRTABLE_SUBSCRIBER_TABLE_ID);

export async function retrieveAuthor(gitHubUserId) {
  const records = await authorTable
    .select({
      maxRecords: 1,
      filterByFormula: `{GitHub User Id} = '${gitHubUserId}'`,
    })
    .firstPage();
  return records[0] || null;
}
