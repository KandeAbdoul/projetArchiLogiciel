package newsws.ial.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("admin")
public class Admin extends Utilisateur{

    public Admin(){
        super();
    }

    public Admin(String name,String surname,String identifier,String password){
        super(name,surname,identifier,password);
    }
}