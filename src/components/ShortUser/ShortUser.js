import React from 'react';
import Card from '@material-ui/core/Card';

import Repo from '../Repo/Repo';

function ShortUser(props) {
  const renderRepo = (repo) => {
    return <Repo name={repo.name} language={repo.language} html_url={repo.html_url} description={repo.description} />
  }

  return (
    <Card style={{ width: '100%', height: '100%' }} >
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }} >
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '90%' }} >
          <div style={{ width: '100%', height: '80%', margin: '2%' }} >
            <img src={`${props.imagem}`} />
          </div>
          <div style={{ width: '100%', height: '15%' }} >
            <p>{props.name}</p>
          </div>
        </div>
        <div>
          <h3 style={{ display: 'flex', justifyContent: 'center' }} >Repositórios</h3>
          <div style={{ width: '100%', height: '90%', margin: '5%' }} >
            {props.repos.map(renderRepo)}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ShortUser;
