
import express from 'express';
import cors from 'cors';

export default {
  server: {
    middlewareMode: 'ssr',
   
    serverMiddleware: [
      
      cors(),
      express(),
    ],
  },
};
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors()); 


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

