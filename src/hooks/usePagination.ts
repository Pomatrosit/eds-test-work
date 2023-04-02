import React from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activePage = searchParams.get("page") || 1;

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    searchParams.set("page", String(newPage));
    setSearchParams(searchParams);
  };

  return {
    activePage: +activePage,
    handlePageChange,
  };
};

export default usePagination;
