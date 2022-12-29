public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("Ana",1.70);
        Clinica clinica = new Clinica();
        clinica.nomeDono = "Higor";
        clinica.categorizarClientes(cliente);
        Cliente cliente01 = new Cliente("Maicon", 1.98);
        cliente01.setPeso(85.0);
        clinica.categorizarClientes(cliente01);
        System.out.println(clinica.listaClientes);
        clinica.listaClientes.forEach(
                cliente1 -> System.out.println(cliente1.nome+ " "+(cliente1.IMC()))
        );
        System.out.println(cliente.getPeso());
        System.out.println(cliente.IMC());
        clinica.tratamento(cliente01);
        System.out.println(cliente01.getPeso());
        clinica.tratamento(cliente, 10.0);
        System.out.println(cliente.getPeso());

    }
}