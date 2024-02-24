import CountryItem from "../CountryItem/CountryItem";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import styles from "./CountryList.module.css";
import { useCities } from "../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, cityObj) => {
    if (!arr.map((el) => el.country).includes(cityObj.country))
      return [...arr, { country: cityObj.country, emoji: cityObj.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
