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
        try {
            Optional<Article> article = articleRepo.findById(id);
            articleRepo.deleteById(id);
            return article;
        }catch (Exception e){
            System.out.printf("id %d not found",id);
            return null;
        }
    }

    public Article updateArticle(Long id,Article article){
        try {
            Article a = new Article(article.getTitle(),article.getSommaire(),article.getDetail(),article.getCategorie());
            a.setArticleId(id);
            return articleRepo.save(a);
        }catch (Exception e){
            System.out.printf("id %d not found",id);
            return null;
        }
    }

    public List<Article> listArticleByCateg(Long categorieId){
        ArrayList<Article> articles = new ArrayList<>();
        for (Article article:articleRepo.findAll()) {
            if(article.getCategorie().getCategorieId() == categorieId)
                articles.add(article);
        }
        return articles;
    }

    public List<Article> listArticleByCategWithName(String name){
        ArrayList<Article> articles = new ArrayList<>();
        for (Article article:articleRepo.findAll()) {
            if(article.getCategorie().getName().equalsIgnoreCase(name))
                articles.add(article);
        }
        return articles;
    }

    public List<Article> listAllArticle(){
        return articleRepo.findAll();
    }

    public Optional<Article> articleById(Long id){
        return articleRepo.findById(id);
    }


}
