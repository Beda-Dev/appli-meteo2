const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY_API_KEY;


export const RecuperationMeteo = async (ville = "Abidjan") =>{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&APPID=${API_KEY}`);
    const data = await response.json();
    return data;
}
