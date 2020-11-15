package newsws.ial.service;

import newsws.ial.entity.Article;
import newsws.ial.metier.ArticleMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleService {
    @Autowired
    private ArticleMetier articleMetier;
    @PostMapping("/articles")
    public Article saveArticle(@RequestBody Article article){
        return articleMetier.addArticle(article);
    }

    @GetMapping("/articles")
    public List<Article> listAllArticle(){
        return articleMetier.listAllArticle();
    }
}
