import javax.xml.ws.Endpoint;
public class Client {
    public static void main(String[] args) {
        Endpoint.publish("http://127.0.0.1:8585/", new UserManagement());
        System.out.println("Serveur tourne sur http://127.0.0.1:8585");
    }
}