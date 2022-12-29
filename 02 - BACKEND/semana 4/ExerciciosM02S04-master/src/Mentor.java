public class Mentor extends Pessoa{
    private String linguagemDeProgramacao;

    public Mentor(String linguagemDeProgramacao) {
        this.linguagemDeProgramacao = linguagemDeProgramacao;
    }
    public Mentor(String name, String idade, String linguagemDeProgramacao) {
        super(name, idade);
        this.linguagemDeProgramacao = linguagemDeProgramacao;
    }
    public String getLinguagemDeProgramacao() {
        return linguagemDeProgramacao;
    }

    public void setLinguagemDeProgramacao(String linguagemDeProgramacao) {
        this.linguagemDeProgramacao = linguagemDeProgramacao;
    }
    public String obterInformacoes(){
        return getName()+" "+getIdade()+" "+getLinguagemDeProgramacao();
    }
}
