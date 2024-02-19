import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const lat = searchQuery.get("lat");
  const lng = searchQuery.get("lng");
  return (
    <div className={styles.mapContainer}>
      position: {lat} , {lng}
    </div>
  );
}

export default Map;
