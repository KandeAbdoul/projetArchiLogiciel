import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
public class UserDao {
		Db_Connection db = new Db_Connection();
		Connection connection = db.get_connection();
		
		public boolean insertUser(UserType u) throws SQLException {
			String sql = "INSERT INTO utilisateur(type, identifier, name, login, password) VALUES (?, ?, ?, ?, ?)";
			 
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1, u.type);
			statement.setString(2, u.identifier);
			statement.setString(3,  u.name);
			statement.setString(4, u.login);
			statement.setString(5, u.password);
			int rowsInserted = statement.executeUpdate();
			if (rowsInserted > 0) {
			    System.out.println("A new user was inserted successfully!");
			    return true;
			}
			else return false;

		}
		
		public UserType getUserById(int id) throws SQLException {
			UserType u=null;
			try
			{
				String getuser_sql="SELECT user_id, type, identifier, name, login FROM utililisateur WHERE user_id= "+id;
				System.out.println(getuser_sql);
				Statement statement = connection.createStatement();
				ResultSet resultset= statement.executeQuery(getuser_sql);
			 
				while (resultset.next())
				{ 
					u=new UserType();
				System.out.println("type : "+resultset.getInt(1));
					u.user_id = resultset.getInt(1);
					u.type = resultset.getString(2);
					u.identifier = resultset.getString(3);
					u.name = resultset.getString(4);
					u.login = resultset.getString(5);
				break; //As we want to get only one record
				}
			
			}
			catch (SQLException e) {
				e.printStackTrace();
			} 
			return u;
		}
		
		/*
		Supprime un utilisateur
		*/
		public boolean deleteUser(int uid)
		{ 
			boolean ResponseMessage= false;
			try {
			 
			Statement statement = connection.createStatement();
			String delete_sql="DELETE FROM utilisateur WHERE user_id="+uid;
			 
			System.out.println(delete_sql);
			int count=statement.executeUpdate(delete_sql);
			if(count==1)
					ResponseMessage = true;
			System.out.println("Returning response message: "+ResponseMessage);
			return ResponseMessage;
			 
			}
				catch (Exception e) {
				e.printStackTrace();
				return ResponseMessage;
			}
		}
		
		/*
		Modifier information utilisateur
		*/
		 
		public boolean updateUser(UserType u)
		{ 
			boolean ResponseMessage = false;
			try {
			 
				Statement statement = connection.createStatement();
				String update_sql="UPDATE utilisateur SET ";
				if(u.name != null) update_sql += "nom = "+u.name;
				if(u.login != null) update_sql += "login = "+u.login;
				if(u.password != null) update_sql += "password = "+u.password;
				if(u.identifier != null) update_sql += "identifier = "+u.identifier;
				update_sql += " WHERE user_id ='"+u.user_id+"'";
				System.out.println(update_sql);
				int count= statement.executeUpdate(update_sql);
				if (count==1)
					ResponseMessage = true;
				System.out.println("Returning response message: "+ResponseMessage);
				return ResponseMessage;
			 
			}
			catch (Exception e) {
			e.printStackTrace();
			return ResponseMessage;
			}
			finally
			{
			if (connection !=null)
			try {
			connection.close();
			}
			catch (Exception e) {}
			}
		}
		
		/*
		This method returns all users available in the database table
		*/
		public ArrayList<UserType>  getAllUsers()
		{ 
			ArrayList<UserType> users=new ArrayList<UserType>();
			try
			{
			String getalluser_sql="SELECT user_id FROM utilisateur";
			System.out.println(getalluser_sql);
			Statement statement = connection.createStatement();
			ResultSet resultset= statement.executeQuery(getalluser_sql);
			 
			while (resultset.next())
			{ 
				UserType u=new UserType();
				u = this.getUserById(resultset.getInt(1));
				users.add(u);
			}
			return users;
			 
			}
		catch (Exception e) {
		e.printStackTrace();
		 
		return users;
		}
		finally
		{
		if (connection !=null)
		try {
		connection.close();
		}
		catch (Exception e) {}
		}
		}
		
}
