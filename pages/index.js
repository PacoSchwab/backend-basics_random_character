import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character`, fetcher);
  if (isLoading) return "Loading...";

  console.log(data);

  return (
    <div style={{ backgroundColor: "lavenderblush" }}>
      <h1 style={{ boxShadow: "10px 5px 5px red", fontFamily: "fantasy" }}>
        {data.firstName}, {data.lastName}
      </h1>
      <ul
        style={{
          listStyle: "none",
          backgroundColor: "hotpink",
          opacity: "80%",
          borderRadius: "5%",
          boxShadow: "10px 5px 5px purple",
          fontFamily: "fantasy",
        }}
      >
        <li>{data.twitter}</li>
        <li>{data.geohash}</li>
        <li>{data.gender}</li>
        <li>{data.avatar}</li>
        <li>{data.animal}</li>
        <li>{data.birthday}</li>
      </ul>
      ;
    </div>
  );
}
