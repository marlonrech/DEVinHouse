package tech.devinhouse.meurh.controller;

import model.PessoaModel;
import org.springframework.web.bind.annotation.*;
import tech.devinhouse.meurh.service.PessoaService;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    private PessoaService service;

    public  PessoaController(PessoaService service){
        this.service = service;
    }

    @GetMapping()
    public List<PessoaModel> getPessoas(){
        return service.getPessoas();
    }
    @GetMapping("/dependentes")
    public String getDependentes(){
        return "teste dependentes";
    }

    @GetMapping("/{id}")
    public PessoaModel byID(@PathVariable("id") String id) {
        PessoaModel pessoa = new PessoaModel(1L, "pessoa 1", "pessoa@teste");

        return pessoa;
    }

    @PostMapping()
    public void postPessoa(@RequestBody PessoaModel pessoaModel){
        service.addPessoa(pessoaModel);
    }
}
