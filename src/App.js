import "./App.css";
import { useState, useEffect } from "react";
import { RecuperationMeteo } from "./fonction/fetchMeteo";
import IconMeteo from "./components/iconMeteo";

function App() {
  const [ville, setVille] = useState("Abidjan");
  const [meteo, setMeteo] = useState(null);
  // console.log(ville);
  // setVille("Yamoussoukro");
  // console.log(ville);

  // const beda = {
  //   nom : "beda",
  //   prenom : "jean",
  //   age : 30,
  //   competance : ["react","nodejs","python"]
  // }

  // console.log(beda.competance[0]);

  useEffect(() => {
    const fetchData = async () => {
      const meteoData = await RecuperationMeteo();
      setMeteo(meteoData);
      console.log(meteoData);
    };
    fetchData();
  }, []);

  const rechercheMeteo = async (villerechercher) => {
    const meteoData = await RecuperationMeteo(villerechercher);
    setMeteo(meteoData);
    console.log(`VILLE RECHERCHER ${villerechercher} `);
    console.log(meteoData);
  };

  const dateActuelle = new Date();
  console.log(dateActuelle);

  return (
    <div className=" bg-white w-[1000px] h-[600px] text-black  grid grid-cols-3 rounded-3xl">
      <div className="text-white flex-col items-start justify-center pt-6 p-2">
        <div className="flex">
          <input
            type="text"
            placeholder="Entrer le nom de la ville"
            className="w-[200px] h-[30px] bg-white rounded-full text-black pl-4"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                rechercheMeteo(e.target.value);
              }
            }}
          />
          <button className="ml-4 w-[40px] h-[40px] bg-gray-500 rounded-full flex items-center justify-center">
            <img src="/marker.png" width={20} height={20} />
          </button>
        </div>
        {meteo && <IconMeteo icon={meteo.weather[0].icon} />}

        {meteo ? <h1 className="text-black  text-center font-italic text-5xl"> {meteo.main.temp} C</h1> : null}
        
        <p className="text-black m-5 text-center"> {dateActuelle.toLocaleDateString('fr-FR', { weekday: 'long' })} , {dateActuelle.getHours()}:{dateActuelle.getMinutes()} </p>
      </div>
      <div className=" bg-[#f7f6f9] col-span-2  border rounded-r-3xl">
        bonjour
      </div>
    </div>
  );
}

export default App;
