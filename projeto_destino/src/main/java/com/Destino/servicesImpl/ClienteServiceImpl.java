package com.Destino.servicesImpl;

import com.Destino.model.Cliente;
import com.Destino.repositories.ClienteRepository;
import com.Destino.services.ClienteService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {


	private final ClienteRepository clienteRepository;

	public ClienteServiceImpl(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}

	@Override
	public List<Cliente> getAllClientes() {
		return clienteRepository.findAll();
	}

	@Override
	public Cliente getClienteById(Long id) {
		return clienteRepository.findById(id).orElse(null);
	}

	@Override
	public Cliente saveCliente(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	@Override
	public Cliente updateCliente(Long id, Cliente clienteAtualizado) {
		Cliente clienteExistente = clienteRepository.findById(id).orElse(null);

		if (clienteExistente != null) {

			clienteExistente.setNome(clienteAtualizado.getNome());
			clienteExistente.setEmail(clienteAtualizado.getEmail());
			clienteExistente.setTelefone(clienteAtualizado.getTelefone());
			clienteExistente.setCpf(clienteAtualizado.getCpf());
			clienteExistente.setImgUrl(clienteAtualizado.getImgUrl());


			return clienteRepository.save(clienteExistente);
		}

		return null;
	}

	@Override
	public void deleteCliente(Long id) {
		clienteRepository.deleteById(id);
	}

	@Override
	public List<Cliente> listarClientes() {
		return null;
	}
}
