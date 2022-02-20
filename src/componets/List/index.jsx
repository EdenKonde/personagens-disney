import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

function PersonagensList () {
  const [personagens, setPersonagens] = useState(null);
  const [apiUrl, setApiUrl] = useState("https://api.disneyapi.dev/characters");

  useEffect(() => {
    fetch(apiUrl)
      .then((r) => r.json())
      .then((json) => {
        setPersonagens(json);
        window.scrollTo(0, 0);
      });
    }, [apiUrl]);
    
  if (!personagens) {
    return (
      <div className="carregando">
        <h3>carregando...</h3>
    </div>
    );
  }

  return (
    <div id="personMain">
      <h1 id="titulo">Todos os Personagem da Disney </h1>
      <div id="personList">
        {

          personagens.data.map(( item) => ( 
              <div id="person" key = {item['_id']} >

                <div  id="personImg">
                  <img src={item['imageUrl']} alt={item['name']} />
                </div>

                <div id="nameDetal">

                  <strong>{item['name']}</strong>
                  <Link to = {`/view/${item["_id"]}`} >
                      <button >DETALHES</button>
                  </Link>

                </div>
                
              </div>
            
          ))  
        }
      </div>  
      <div id="controlbutton"> 
          <button  disabled={!personagens['previousPage']} onClick={() => setApiUrl(personagens['previousPage'])}>Página Anterior</button>
    
          <button  onClick={() => setApiUrl(personagens['nextPage'])}>Próxima Página</button>
      </div>
    </div>

  );
};

export default PersonagensList;
