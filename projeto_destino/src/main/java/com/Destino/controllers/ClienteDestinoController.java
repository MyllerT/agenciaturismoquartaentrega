package com.Destino.controllers;


import com.Destino.model.ClienteDestinoDTO;
import com.Destino.model.Cliente;
import com.Destino.model.Destino;
import com.Destino.services.ClienteService;
import com.Destino.services.DestinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/clienteDestino")
@CrossOrigin(origins = "http://localhost:5173")
public class ClienteDestinoController {


    @Autowired
    private ClienteService clienteService;

    @Autowired
    private DestinoService destinoService;

    @GetMapping("/listarClientesDestinos")
    public List<ClienteDestinoDTO> listarClientesDestinos() {
        List<Cliente> clientes = clienteService.listarClientes();
        return clientes.stream()
                .map(this::converterParaDTO)
                .collect(Collectors.toList());
    }

    private ClienteDestinoDTO converterParaDTO(Cliente cliente) {
        ClienteDestinoDTO dto = new ClienteDestinoDTO();
        dto.setClienteId(cliente.getId());
        dto.setClienteNome(cliente.getNome());
        dto.setClienteEmail(cliente.getEmail());
        dto.setClienteTelefone(cliente.getTelefone());
        dto.setClienteCpf(cliente.getCpf());
        dto.setClienteImgUrl(cliente.getImgUrl());

        Destino ultimoDestino = destinoService.obterUltimoDestinoPorCliente(cliente);
        if (ultimoDestino != null) {
            dto.setDestinoId(ultimoDestino.getId());
            dto.setDestinoNome(ultimoDestino.getNome());
            dto.setDestinoCheckIn(ultimoDestino.getCheckIn());
            dto.setDestinoCheckOut(ultimoDestino.getCheckOut());
        }

        return dto;
    }
}
