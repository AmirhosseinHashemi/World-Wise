import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const lat = searchQuery.get("lat");
  const lng = searchQuery.get("lng");

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      position: {lat} , {lng}
    </div>
  );
}

export default Map;
