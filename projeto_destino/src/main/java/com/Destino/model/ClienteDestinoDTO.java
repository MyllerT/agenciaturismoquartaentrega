package com.Destino.model;



public class ClienteDestinoDTO {
    private Long clienteId;
    private String clienteNome;
    private String clienteEmail;
    private String clienteTelefone;
    private String clienteCpf;
    private String clienteImgUrl;

    private Long destinoId;
    private String destinoNome;
    private String destinoCheckIn;
    private String destinoCheckOut;

    public ClienteDestinoDTO() {
    }



    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public String getClienteNome() {
        return clienteNome;
    }

    public void setClienteNome(String clienteNome) {
        this.clienteNome = clienteNome;
    }

    public String getClienteEmail() {
        return clienteEmail;
    }

    public void setClienteEmail(String clienteEmail) {
        this.clienteEmail = clienteEmail;
    }

    public String getClienteTelefone() {
        return clienteTelefone;
    }

    public void setClienteTelefone(String clienteTelefone) {
        this.clienteTelefone = clienteTelefone;
    }

    public String getClienteCpf() {
        return clienteCpf;
    }

    public void setClienteCpf(String clienteCpf) {
        this.clienteCpf = clienteCpf;
    }

    public String getClienteImgUrl() {
        return clienteImgUrl;
    }

    public void setClienteImgUrl(String clienteImgUrl) {
        this.clienteImgUrl = clienteImgUrl;
    }

    // Getters and Setters for Destino properties

    public Long getDestinoId() {
        return destinoId;
    }

    public void setDestinoId(Long destinoId) {
        this.destinoId = destinoId;
    }

    public String getDestinoNome() {
        return destinoNome;
    }

    public void setDestinoNome(String destinoNome) {
        this.destinoNome = destinoNome;
    }

    public String getDestinoCheckIn() {
        return destinoCheckIn;
    }

    public void setDestinoCheckIn(String destinoCheckIn) {
        this.destinoCheckIn = destinoCheckIn;
    }

    public String getDestinoCheckOut() {
        return destinoCheckOut;
    }

    public void setDestinoCheckOut(String destinoCheckOut) {
        this.destinoCheckOut = destinoCheckOut;
    }
}
