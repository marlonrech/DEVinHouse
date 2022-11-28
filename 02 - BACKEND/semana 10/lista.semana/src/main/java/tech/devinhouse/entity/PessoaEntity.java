package tech.devinhouse.entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity(name = "pessoas")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class PessoaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotNull
    private String name;


    @NotNull
    private String email;

    @Column(name = "status")
    private Boolean status;
}
