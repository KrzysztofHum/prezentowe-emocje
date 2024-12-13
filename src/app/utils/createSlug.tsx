export function createSlug(title: string) {
  return title
    .toLowerCase() // Zamiana na małe litery
    .replace(/[^a-z0-9\s]/g, "") // Usunięcie znaków specjalnych
    .replace(/\s+/g, "-") // Zamiana spacji na myślniki
    .trim(); // Usunięcie zbędnych spacji na początku i końcu
}
