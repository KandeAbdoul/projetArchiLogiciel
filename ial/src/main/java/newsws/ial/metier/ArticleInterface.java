package newsws.ial.metier;

import newsws.ial.entity.Article;
import newsws.ial.entity.Categorie;

import java.util.List;
import java.util.Optional;

public interface ArticleInterface {

    public Article addArticle(Article article);
    public Optional<Article> deleteArticle(Long id);
    public Article updateArticle(Long id,Article article);
    public List<Article> listArticleByCateg(Categorie categorie);
    public List<Article> listAllArticle();
    public Optional<Article> articleById(Long id);

}
