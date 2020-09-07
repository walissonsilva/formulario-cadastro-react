import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "./styles.css";

function Form() {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [news, setNews] = useState(true);
  const [promotions, setPromotions] = useState(true);

  const [CPFError, setCPFError] = useState(false);

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
          id="name"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={name}
          onChange={(event) => {setName(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Sobrenome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={last_name}
          onChange={(event) => {setLastName(event.target.value)}}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          error={CPFError}
          helperText={CPFError && "Deve conter 11 dígitos. Insira apenas os números."}
          value={cpf}
          onBlur={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length !== 11) {
              setCPFError(true);
            } else {
              setCPFError(false);
            }
          }}
          onChange={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length === 11) {
              setCPFError(false);
            }

            setCpf(event.target.value)}
          }
        />

        <div className="checkboxes">
          <FormControlLabel
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Promoções"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="Promoções"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="Novidades"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="Novidades"
          />
        </div>

        <Button className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>

      <p>{name} {last_name}</p>
    </Container>
  );
}

export default Form;
