package newsws.ial.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("edit")
public class Editor extends Utilisateur{

    public Editor(){
        super();
    }

    public Editor(String name,String surname,String identifier,String password){
        super(name,surname,identifier,password);
    }

}
