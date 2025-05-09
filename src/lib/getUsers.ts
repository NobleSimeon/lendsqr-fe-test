export async function getUsers() {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  
  if (!apiToken) {
    throw new Error("API token is not configured");
  }

  const response = await fetch("https://api.json-generator.com/templates/G-R-fMjase-q/data", {
    headers: {
      "Authorization": `Bearer ${apiToken}`
    },
    cache: "no-store", // Ensure fresh data is fetched on every request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
