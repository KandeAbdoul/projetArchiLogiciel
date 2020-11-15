package newsws.ial.service;

import newsws.ial.entity.Categorie;
import newsws.ial.metier.CategorieMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CategorieService {
    @Autowired
    private CategorieMetier categorieMetier;
    @PostMapping("/categories")
    public Categorie saveCategorie(@RequestBody Categorie categorie){
        return categorieMetier.addCategorie(categorie);
    }
    @GetMapping("/categories")
    public List<Categorie> listAllCategorie(){
        return categorieMetier.listAllCategories();
    }
    @GetMapping("/categories/{id}")
    public Optional<Categorie> categorieOne(@PathVariable Long id){
        return categorieMetier.categorieById(id);
    }
    @DeleteMapping("/categories/{id}")
    public Long deleteCategorie(@PathVariable Long id){
        categorieMetier.deleteCategorie(id);
        return id;
    }
    @PutMapping("/categories/{id}")
    public Categorie updateCategorie(@PathVariable Long id,@RequestBody Categorie categorie){
        return categorieMetier.updateCategorie(id,categorie);
    }


}
