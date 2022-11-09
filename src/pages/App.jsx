import { useState } from "react";
import logo from "../assets/images/Logo.png"
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { Container } from "./styles";
import {api} from "../services/api"


function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {
     
    const {data} = await api.get(`/repos/${currentRepo}`);

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);
      
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }else{
        alert('Repositório já existe na lista')
        return
      }
    }
    alert('Repositório Não encontrado!')
  };

  

  const handleRemoveRepo = (id) => {
    const Newrepos =  repos.filter((repo) => repo.id !== id)
    setRepos( prev => Newrepos)
  }

  return (
    <Container>
      <img src={logo} width={75} height={75} alt="Github Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo =>  <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} /> )}
    </Container> 
  );
}

export default App;
