import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar/NavBar';
import Service from '../../service/axios';
import ShortUser from '../../components/ShortUser/ShortUser';
import InputSearch from '../../components/InputSearch/InputSearch';

function Home(props) {
  const [login, setLogin] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [repos, setRepos] = useState([]);
  const [hasUser, setHasUser] = useState(false);
  const [erro, setErro] = useState(false);

  const getDevInfos = () => {
    Service.getDev(props.dev)
      .then(res => {
        setHasUser(true);
        setErro(false);
        setLogin(res.data.login);
        setImageUrl(res.data.avatar_url);
      })
      .catch(erro => {
        setHasUser(false);
        setErro(true);
        console.log("ERRO ", erro)
      });

    Service.getRepos(props.dev)
      .then(res => {
        setErro(false);
        setRepos(res.data);
      })
      .catch(erro => {
        setErro(true);
        console.log("ERRO ", erro)
      });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }} >
      <NavBar />
      <div style={{ marginTop: '6em', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '30%' }} >
        <InputSearch />
        <Button variant="contained" onClick={() => getDevInfos()} ><SearchIcon /></Button>
      </div>
      <div style={{ width: '80%', height: '70%', marginTop: '5%', marginBottom: '5%', marginLeft: '10%' }} >
        {(!hasUser || erro) && <h2>Erro ao procurar usuário</h2>}
        {hasUser && !erro && <ShortUser imagem={imageUrl} name={login} repos={repos} />}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dev: state.reducer.name,
  };
}

export default connect(mapStateToProps)(Home);
