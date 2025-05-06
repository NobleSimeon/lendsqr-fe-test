export async function getUsers() {
  const response = await fetch("https://run.mocky.io/v3/c570ce27-bed9-42bd-b685-1f4cfd30a0f3", {
    cache: "no-store", // Ensure fresh data is fetched on every request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
