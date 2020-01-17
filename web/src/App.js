import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
// Componente: bloco isolado de HTML, CSS e JS, o qual n interfere no restande da aplicacao
// Propriedade: Informacoes que o componente pai passa para o componente filho
// Estado : informacoes mantidas pelo componente (Lembrar: imutabilidade)


function App() {

  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude)
        setLongitude(longitude)
      },  
      (err) => {
        console.log(err)
      },
      {
        timeout:30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    console.log(response.data)
  }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={handleAddDev}>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Gihub</label>
                        <input id="github_username" name="github_username" required value={github_username} onChange={e => setGithubusername(e.target.value)}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input id="techs" name="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="number" id="latitude" name="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="number" id="longitude" name="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
              <ul>
                <li className="dev-item">
                  <header>
                    <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes"></img>
                    <div className="user-info">
                      <strong>Diego Fernandes</strong>
                      <span>reactJs, React Native, Node.js</span>
                    </div>
                  </header>
                  <p>
                  CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
                  </p>
                  <a href="https://github.com/diego3g">Acessar perfil no Github</a>
                </li>
                <li className="dev-item">
                  <header>
                    <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes"></img>
                    <div className="user-info">
                      <strong>Diego Fernandes</strong>
                      <span>reactJs, React Native, Node.js</span>
                    </div>
                  </header>
                  <p>
                  CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
                  </p>
                  <a href="https://github.com/diego3g">Acessar perfil no Github</a>
                </li>
                <li className="dev-item">
                  <header>
                    <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes"></img>
                    <div className="user-info">
                      <strong>Diego Fernandes</strong>
                      <span>reactJs, React Native, Node.js</span>
                    </div>
                  </header>
                  <p>
                  CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
                  </p>
                  <a href="https://github.com/diego3g">Acessar perfil no Github</a>
                </li>
                <li className="dev-item">
                  <header>
                    <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes"></img>
                    <div className="user-info">
                      <strong>Diego Fernandes</strong>
                      <span>reactJs, React Native, Node.js</span>
                    </div>
                  </header>
                  <p>
                  CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
                  </p>
                  <a href="https://github.com/diego3g">Acessar perfil no Github</a>
                </li>
              </ul>
            </main>
        </div>
    );
}

export default App;

