import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchQuery] = useSearchParams();
  const lat = searchQuery.get("lat");
  const lng = searchQuery.get("lng");

  return [lat, lng];
}
