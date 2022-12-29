import org.w3c.dom.ls.LSOutput;

import java.util.function.DoubleConsumer;

public class Cliente {
    private Double peso;
    Double altura;
    String nome;
    Integer idade;
    public Cliente(){
        peso = 100.0;
    }
    public Cliente(String nome,Double altura){
        this();
        this.altura = altura;
        this.nome = nome;
    }
    public Double getPeso(){
        return peso;
    }
    public void setPeso(double peso){
        this.peso = peso;
    }
    public  Double  IMC(){
        return peso/(altura*altura);
    }


}
