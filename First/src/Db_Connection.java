import java.sql.Connection;
import java.sql.DriverManager;
public class Db_Connection {
	public void Db_Connection() {}
	public Connection get_connection(){
		 Connection connection=null;
		try {
		  //Class.forName("com.mysql.jdbc.Driver"); 
		  connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sen_news","root", "");
		  if(connection != null) System.out.println("Connexion effectué");
		} catch (Exception e) {
		  System.out.println(e);
		}
		  return connection;
		}
		
}
