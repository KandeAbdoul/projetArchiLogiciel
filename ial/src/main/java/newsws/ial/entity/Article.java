package newsws.ial.entity;


import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Article implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long articleId;
    private String title;
    private String sommaire;
    private String detail;
    @ManyToOne
    @JoinColumn(name="categorieId")
    private Categorie categorie;

    public Article(){}

    public Article(String title,String sommaire, String detail){
        this.title = title;
        this.sommaire = sommaire;
        this.detail = detail;
    }
    public Article(String title,String sommaire, String detail,Categorie categorie){
        this.title = title;
        this.sommaire = sommaire;
        this.detail = detail;
        this.categorie = categorie;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Long getArticleId() {
        return articleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSommaire() {
        return sommaire;
    }

    public void setSommaire(String sommaire) {
        this.sommaire = sommaire;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }
}
