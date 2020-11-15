package newsws.ial.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("visit")
public class Visitor extends Utilisateur{
    public Visitor(){
        super();
    }

    public Visitor(String name,String surname,String identifier,String password){
        super(name,surname,identifier,password);
    }
}
