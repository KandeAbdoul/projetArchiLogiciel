package newsws.ial.metier;

import newsws.ial.entity.Article;
import newsws.ial.entity.Categorie;

import java.util.List;

public interface ArticleInterface {

    public Article addArticle(Article article);
    public Long deleteArticle(Long id);
    public Article modifyArticle(Long id,Article article);
    public List<Article> listArticleByCateg(Categorie categorie);
    public List<Article> listAllArticle();

}
