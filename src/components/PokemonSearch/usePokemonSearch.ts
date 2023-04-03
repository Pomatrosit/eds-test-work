import React from "react";
import { useSearchParams } from "react-router-dom";

const usePokemonSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) searchParams.delete("search");
    else searchParams.set("search", value);
    searchParams.set("page", "1");
    searchParams.set("limit", "10");
    setSearchParams(searchParams);
  };

  return { search, handleSearchChange };
};

export default usePokemonSearch;
