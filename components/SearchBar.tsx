"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isHostNameValid = (host: string) => {
    if (
      host.includes("amazon") ||
      host.includes("amazon.in") ||
      host.includes("amazon.")
    )
      return true;

    return false;
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const url = new URL(searchPrompt);
    const host = url.hostname;
    if (!isHostNameValid(host)) {
      alert("Url is not a valid url");
    }

    try {
      const res = await scrapeAndStoreProduct(searchPrompt);
      console.log("res", res);
    } catch (error) {
      console.log(`Failed to Scrapped in searchBar ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex space-x-3">
      <input
        type="text"
        value={searchPrompt}
        placeholder="Enter product link"
        className="searchbar-input"
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button disabled={isLoading} className="searchbar-btn">
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
