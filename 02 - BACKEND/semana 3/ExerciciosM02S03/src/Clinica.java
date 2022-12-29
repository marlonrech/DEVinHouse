import java.util.ArrayList;
import java.util.List;

public class Clinica {
    String nomeDono;
    List<Cliente> listaClientes = new ArrayList<>();

    public void categorizarClientes(Cliente cliente){
        this.listaClientes.add(cliente);
    }
    public Cliente tratamento(Cliente cliente){
        cliente.setPeso(cliente.getPeso()-5.0);
        return cliente;
    }
    public Cliente tratamento(Cliente cliente, Double numero){
        cliente.setPeso(cliente.getPeso()-numero);
        return cliente;
    }
}
