public class Cordenador extends Pessoa{
    private Integer quantidadeCursosCoord;

    public Cordenador(Integer quantidadeCursosCoord) {
        this.quantidadeCursosCoord = quantidadeCursosCoord;
    }

    public Cordenador(String name, String idade, Integer quantidadeCursosCoord) {
        super(name, idade);
        this.quantidadeCursosCoord = quantidadeCursosCoord;
    }

    public Integer getQuantidadeCursosCoord() {
        return quantidadeCursosCoord;
    }

    public void setQuantidadeCursosCoord(Integer quantidadeCursosCoord) {
        this.quantidadeCursosCoord = quantidadeCursosCoord;
    }
    public String obterInformacoes(){
        return getName()+" "+getIdade()+" "+getQuantidadeCursosCoord();
    }
}
