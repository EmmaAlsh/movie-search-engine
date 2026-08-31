export default async (req) => {
  const apiKey = process.env.TMDB_API_KEY;

  console.log("TMDB_API_KEY existe:", !!apiKey);
  console.log("TMDB_API_KEY length:", apiKey?.length);

  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");

  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Error al consultar TMDB" }), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
