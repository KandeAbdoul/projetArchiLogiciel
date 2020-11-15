package newsws.ial.metier;

import newsws.ial.dao.ArticleRepository;
import newsws.ial.entity.Article;
import newsws.ial.entity.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleMetier implements ArticleInterface{
    @Autowired
    private ArticleRepository articleRepo;
    public Article addArticle(Article article){
        return articleRepo.save(article);
    }
    public Optional<Article> deleteArticle(Long id){
        Optional<Article> article = articleRepo.findById(id);
        articleRepo.deleteById(id);
        return article;
    }
    public Article updateArticle(Long id,Article article){
        Article a = new Article(article.getTitle(),article.getSommaire(),article.getDetail());
        a.setArticleId(id);
        return articleRepo.save(a);
    }
    public List<Article> listArticleByCateg(Categorie categorie){
        ArrayList<Article> articles = new ArrayList<Article>();
        return articleRepo.findAll();
    }
    public List<Article> listAllArticle(){
        return articleRepo.findAll();
    }
    public Optional<Article> articleById(Long id){
        return articleRepo.findById(id);
    }

}
