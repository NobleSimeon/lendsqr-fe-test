export async function getUsers() {
  const response = await fetch("https://run.mocky.io/v3/044a3e86-b14c-4bd0-9b82-0c27e7bd5811", {
    cache: "no-store", // Ensure fresh data is fetched on every request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
