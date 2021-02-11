import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardContent, Typography } from '@material-ui/core';

function Repo(props) {
  const [show, setShow] = useState(false);

  const handleExpandClick = () => {
    setShow(!show);
  }

  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '1px', width: '400px' }} >
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
          <p>{props.name}</p>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={show}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={show} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="h3"><b>Linguagem:</b> {props.language}</Typography>
            <Typography component="h3"><b>Descrição:</b> {props.description}</Typography>
            <Typography component="h3"><b>URL:</b> <a href={props.html_url} >{props.html_url}</a></Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}

export default Repo;
