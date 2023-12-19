// components/CreateModal.tsx
import React, { useState, useEffect } from 'react';
import { ClienteData } from '../../interface/ClienteData';
import { useClientes, UseClientesResult } from '../../hooks/useCliente'; // Corrigir o nome do arquivo de importação
import { useClientesMutate } from '../../hooks/useClienteMutate'; // Corrigir o nome do arquivo de importação

import './modal.css';

interface CreateModalProps {
  closeModal(): void;
}

export function CreateModal({ closeModal }: CreateModalProps) {
  const [clienteData, setClienteData] = useState<ClienteData>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    imgUrl: '',
  });

  // Assuming useClientes returns an object of type UseClientesResult
  const { mutate: mutateCliente, isSuccess } = useClientesMutate(); // Corrigir o nome da propriedade

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClienteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (mutateCliente) {
      mutateCliente(clienteData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastrar um novo cliente</h2>
        <form className="input-container">
          <label>
            Nome:
            <input type="text" name="nome" value={clienteData.nome} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={clienteData.email} onChange={handleChange} />
          </label>
          <label>
            Telefone:
            <input type="text" name="telefone" value={clienteData.telefone} onChange={handleChange} />
          </label>
          <label>
            CPF:
            <input type="text" name="cpf" value={clienteData.cpf} onChange={handleChange} />
          </label>
        </form>
        <button onClick={handleSubmit} className="btn-secondary">
          {mutateCliente?.isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}
