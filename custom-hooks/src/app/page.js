"use client"
import useFetch from "./customHook";

export default function Home() {
  const {isLoading, apiData, serverError} = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
    <h1>API Data</h1>
    {isLoading && <p>Loading...</p>}
    {!isLoading && serverError ? 
    (
        <div>
            <p>Server Error</p>
        </div>
    ):
    (
        <ul>
            {apiData ? apiData.map(item => (
                <li key={item.id}>{item.title}</li>
            )):null}
        </ul>
    )

    }
</div>
  );
}
