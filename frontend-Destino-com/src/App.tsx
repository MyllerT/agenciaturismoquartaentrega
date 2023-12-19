import React, { useState } from 'react';
import { Card } from './components/card/card';
import { ClienteData } from './interface/ClienteData';
import { useClientes } from './hooks/useCliente';
import { CreateModal } from './components/create-modal/create-modal';
import { useClientesMutate } from './hooks/useClienteMutate';

function App() {
  const { data } = useClientes();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mutateCliente = useClientesMutate();

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCreateCliente = async (clienteData: ClienteData) => {
    try {
      await mutateCliente.mutateAsync(clienteData);
      handleOpenModal();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  };

  return (
    <div className="container">
      
      <div className="container">
      <h1>Clientes</h1>
     
    </div>
      <div className="card-grid">
        {data?.map((clienteData) => (
          <Card
            key={clienteData.id}
            title={clienteData.nome}
          />
        ))}
      </div>
      {isModalOpen && (
        <CreateModal
          closeModal={handleOpenModal}
          entityName="cliente"
          mutate={handleCreateCliente}
          isLoading={mutateCliente.isLoading}
          isSuccess={mutateCliente.isSuccess}
        />
      )}
      <button onClick={handleOpenModal}>Novo Cliente</button>
    </div>
  );
}

export default App;
