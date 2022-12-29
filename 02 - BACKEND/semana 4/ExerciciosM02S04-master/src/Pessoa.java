public class Pessoa {
    private String name;
    private String idade;
    public Pessoa() {
    }

    public Pessoa(String name, String idade) {
        this.name = name;
        this.idade = idade;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getIdade() {
        return idade;
    }
    public String obterInformacoes(){
        return getName()+" "+getIdade();
    }
}
