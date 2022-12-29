public class Aluno extends Pessoa{
    private String curso;
    private String matricula;

    public Aluno(String curso, String matricula) {
        this.curso = curso;
        this.matricula = matricula;
    }

    public Aluno(String name, String idade, String curso, String matricula) {
        super(name, idade);
        this.curso = curso;
        this.matricula = matricula;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getMatricula() {
        return matricula;
    }
    public String obterInformacoes(){
        return getName()+" "+getIdade()+" "+getCurso()+" "+getMatricula();
    }
}
