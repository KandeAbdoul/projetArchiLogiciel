package newsws.ial.metier;

import newsws.ial.entity.Categorie;

import java.util.List;
import java.util.Optional;

public interface CategorieInterface {

    public Categorie addCategorie(Categorie categorie);
    public Optional<Categorie> deleteCategorie(Long id);
    public Categorie updateCategorie(Long id, Categorie categorie);
    public List<Categorie> listAllCategories();
    public Optional<Categorie> categorieById(Long id);
}
