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
	@WebResult(name="ResponseMessage")
	public boolean addUser(@WebParam(name="User") UserType addRequest) {
	 
		try {
			return new UserDao().insertUser(addRequest);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	 
	
	@WebMethod
	@WebResult(name="ResponseMessage")
	public boolean deleteUser(@WebParam(name="UserID") int userID) {
		return new UserDao().deleteUser(userID);
	}
	 
	
	@WebMethod
	@WebResult(name="ResponseMessage")
	public boolean updateUser(UserType updateUserRequest) {
		return new UserDao().updateUser(updateUserRequest);
	}
	 
	
	@WebMethod
	@WebResult(name="User")
	public UserType getUser(@WebParam(name="UserName") int id){
		try {
			return new UserDao().getUserById(id);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	 
	
	@WebMethod
	@WebResult(name="Users")
	public ArrayList<UserType> getAllUsers() {
	return new UserDao().getAllUsers();
	}
}
