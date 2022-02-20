import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

function PersonagemView() {
  const [personagem, setPersonagem] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.disneyapi.dev/characters/${id}`)
      .then((r) => r.json())
      .then((json) => {
        setPersonagem(json);
      });
  }, []);

  if (!personagem) {
    return (
      <div className="carregando">
        <h3>carregando...</h3>
      </div>
    );
  }

  return (
    <div id="personViewMain" >
      <div id="personView" >
        <div id="personViewImg">
          <img src={personagem["imageUrl"]} alt={personagem["name"]} />
        </div>
        <div id="personViewDetail" >
          <h1>
            Personagem <strong>{personagem["name"]}</strong>
          </h1>

          <h2>TVSHOWS: </h2>
          {personagem.tvShows.length <= 0 && <p>Sem Participação...</p>}
          {personagem.tvShows.map((item) => (
            <p key={personagem["_id"]}>{item}</p>
          ))}
          <h2>FILMS: </h2>
          {personagem.films.length <= 0 && <p>Sem Participação...</p>}
          {personagem.films.map((item) => (
            <p key={personagem["_id"]}>{item}</p>
          ))}
          <h2>VIDEOGAMES: </h2>
          {personagem.videoGames.length <= 0 && <p>Sem Participação...</p>}
          {personagem.videoGames.map((item) => (
            <p key={personagem["_id"]}>{item} </p>
          ))}

          <Link to="/">
            <button>VOLTAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonagemView;
