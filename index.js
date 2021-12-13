const getApi = async () => {
  const response = await fetch('https://api.covid19api.com/summary');
  return (data = response.json());
};

const casosNuevos = async () => {
    const covid = await getApi(); 
    const searchCountry = covid.Countries.find(country => country.Country === "Uruguay");
      const html = `
        <ul>
          <li>Pais: ${searchCountry.Country}</li>
          <li>Casos nuevos confirmados: ${searchCountry.NewConfirmed}</li>
          <li>Total de casos confirmados: ${searchCountry.TotalConfirmed}</li>
          <li>Fallecimientos confirmados: ${searchCountry.NewDeaths}</li>
          <li>Total de fallecidos confirmados: ${searchCountry.TotalDeaths}</li>
        </ul>
      `;
    console.log(searchCountry)
  
    document.getElementById("conteiner").innerHTML = html;
  }
  casosNuevos();