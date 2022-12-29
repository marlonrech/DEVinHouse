package tech.devinhouse.meurh.service;

import model.PessoaModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PessoaService {

    private static List<PessoaModel> pessoaModelList = new ArrayList<PessoaModel>();

    public PessoaService(){
        PessoaModel pessoa = new PessoaModel(1L, "pessoa 1", "pessoa@teste");
        PessoaModel pessoa2 = new PessoaModel(2L, "pessoa 2", "pessoa2@teste");
        pessoaModelList.add(pessoa);
        pessoaModelList.add(pessoa2);
    }

    public List<PessoaModel> getPessoas(){
        return pessoaModelList;
    }
    public void addPessoa(PessoaModel pessoa){
        pessoaModelList.add(pessoa);
    }
}
