import { useState } from "react";

export const usePagination = () => {
  const [itemsPerPage, setItemsPerPage] = useState("10");

  return { itemsPerPage, setItemsPerPage };
};
