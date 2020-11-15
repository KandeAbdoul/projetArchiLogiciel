package newsws.ial.metier;

import newsws.ial.dao.CategorieRepository;
import newsws.ial.entity.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieMetier implements CategorieInterface{
    @Autowired
    private CategorieRepository categorieRepository;
    public Categorie addCategorie(Categorie categorie){
        return categorieRepository.save(categorie);
    }
    public Long deleteCategorie(Long id){
        categorieRepository.deleteById(id);
        return id;
    }
    public Categorie updateCategorie(Long id, Categorie categorie){
        Categorie c = new Categorie(categorie.getName());
        c.setCategorieId(id);
        return categorieRepository.save(c);
    }
    public List<Categorie> listAllCategories(){
        return categorieRepository.findAll();
    }
    public Optional<Categorie> categorieById(Long id){
        return categorieRepository.findById(id);
    }
}
