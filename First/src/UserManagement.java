import java.sql.SQLException;
import java.util.ArrayList;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;

@WebService(serviceName="ServerSoapWs", targetNamespace = "http://127.0.0.1:8585/?wsdl")
public class UserManagement {
	UserDao userdao;
	 
	
	@WebMethod
	@WebResult(name="AjoutUtilisateur")
	public boolean addUser(@WebParam(name="nom") String name,@WebParam(name="prenom") String prenom, @WebParam(name="type") String type, @WebParam(name="password") String password, @WebParam(name="login") String login) {
	 
		try {
			return new UserDao().insertUser(name, prenom, type, login, password);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	 
	
	@WebMethod
	@WebResult(name="SupprimerUtilisateur")
	public boolean deleteUser(@WebParam(name="UserID") int userID) {
		return new UserDao().deleteUser(userID);
	}
	
	 
	
	@WebMethod
	@WebResult(name="modifierUtlisateur")
	public boolean updateUser(UserType updateUserRequest) {
		return new UserDao().updateUser(updateUserRequest);
	}
	 
	
	@WebMethod
	@WebResult(name="RecupererUtilisateur")
	public UserType getUser(@WebParam(name="UserId") int id){
		try {
			return new UserDao().getUserById(id);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return null;
	}

	
	@WebMethod
	@WebResult(name="RecupererUtilisateurParRole")
	public  ArrayList<UserType> getUserByRole(@WebParam(name="role") String role){
		try {
			return new UserDao().getUserByRole(role);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	 
	
	@WebMethod
	@WebResult(name="RecupererUtilisateurs")
	public ArrayList<UserType> getAllUsers() {
	return new UserDao().getAllUsers();
	}
}
