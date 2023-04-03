import { SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const usePageLimit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 10;

  const handleLimitChange = (e: SelectChangeEvent) => {
    searchParams.set("limit", e.target.value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return {
    limit: +limit,
    handleLimitChange,
  };
};

export default usePageLimit;
