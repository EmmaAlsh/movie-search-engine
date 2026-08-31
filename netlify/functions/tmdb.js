export default async (req) => {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");

  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`
    : "https://api.themoviedb.org/3/movie/popular";

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

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
