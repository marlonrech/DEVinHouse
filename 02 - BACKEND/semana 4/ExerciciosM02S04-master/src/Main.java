public class Main {
    public static void main(String[] args) {
        Aluno aluno = new Aluno("Higor","25","FullStack","24795");
        System.out.println(aluno.getCurso());
        aluno.setCurso("Desenvolvimento");
        System.out.println(aluno.getCurso());
        System.out.println(aluno.obterInformacoes());
        Pessoa mentor = new Mentor("Rafael","36","Java");
        System.out.println(mentor.obterInformacoes());
        Cordenador cord = new Cordenador("Gilson","49",6);
        System.out.println(cord.obterInformacoes());
    }
}