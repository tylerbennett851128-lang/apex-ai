/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
  return { health: locals.health };
}
