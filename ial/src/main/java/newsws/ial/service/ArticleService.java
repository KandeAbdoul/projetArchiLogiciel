package newsws.ial.service;

import newsws.ial.entity.Article;
import newsws.ial.entity.Categorie;
import newsws.ial.metier.ArticleMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ArticleService {
    @Autowired
    private ArticleMetier articleMetier;
    @PostMapping("/articles")
    public Article saveArticle(@RequestBody Article article){
        return articleMetier.addArticle(article);
    }

    @DeleteMapping("/articles/{id}")
    public Optional<Article> deleteArticle(@PathVariable Long id){
        return articleMetier.deleteArticle(id);
    }
    @PutMapping("/articles/{id}")
    public Article updateArticle(@PathVariable Long id,@RequestBody Article article){
        return articleMetier.updateArticle(id,article);
    }
    @GetMapping("/articles/categorie/{id}")
    public List<Article> listArticleByCateg(@PathVariable Long id){
        return articleMetier.listArticleByCateg(id);
    }
    @GetMapping("/articles")
    public List<Article> listAllArticle(){
        return articleMetier.listAllArticle();
    }
}
