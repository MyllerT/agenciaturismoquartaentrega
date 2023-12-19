// components/Card.tsx
import React from 'react';

interface CardProps {
  clienteData: ClienteData;
}

export function Card({ clienteData }: CardProps) {
  const { nome, email, telefone, cpf, imgUrl } = clienteData;

  return (
    <div className="card">
      <img src={imgUrl} alt={nome} />
      <h2>{nome}</h2>
      <p><b>Email:</b> {email}</p>
      <p><b>Telefone:</b> {telefone}</p>
      <p><b>CPF:</b> {cpf}</p>
    </div>
  );
}
