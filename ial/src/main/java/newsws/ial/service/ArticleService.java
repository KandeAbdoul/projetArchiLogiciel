package newsws.ial.service;

import newsws.ial.entity.Article;
import newsws.ial.metier.ArticleMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleService {
    @Autowired
    private ArticleMetier articleMetier;
    @PostMapping("")
    public Article saveArticle(@RequestBody Article article){
        return articleMetier.addArticle(article);
    }

    @GetMapping("")
    public List<Article> listAllArticle(){
        return articleMetier.listAllArticle();
    }
}
