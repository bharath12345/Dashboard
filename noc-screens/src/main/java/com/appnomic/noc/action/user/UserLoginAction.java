package com.appnomic.noc.action.user;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;


import com.appnomic.domainobject.User;
import com.appnomic.service.impl.UserDataServiceImpl;
import com.appnomic.noc.action.AbstractNocAction;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/user")
public class UserLoginAction extends AbstractNocAction {

    private UserDataServiceImpl userDataServiceImpl;
    private LoginOutput login = new LoginOutput();
    
	@Action(value="/user/UserLogin", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,username,password,userDataServiceImpl",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		
		System.out.println("parameters from sessionaware = " + getParameters());
		LoginInput userlocal = null;
		Gson gson = new Gson();

		Set<String> keys = getParameters().keySet();
		for(String key : keys) {
			System.out.println("key = " + key + " value[0] = " + getParameters().get(key)[0]);
			//userlocal = gson.fromJson(key, LoginInput.class);
		}
		
		/*
		//getSession().put("username", userlocal.getUsername());
		//System.out.println("username from gson = " + userlocal.getUsername() + " p = " + userlocal.getPassword());
		
		if(userDataServiceImpl == null) {
			System.out.println("userDataServiceImpl is NULL");
		}
		
		//List<User> users = userDataServiceImpl.getAllUsers();
		//for(User user : users) {
		//	System.out.println("username = " + user.getUserName());
		//}
		
		login.setType(userlocal.getType());
		login.setUsername(userlocal.getUsername());
		
		if(userDataServiceImpl.authUser(userlocal.getUsername(), userlocal.getPassword())) {
			System.out.println("user "+ userlocal.getUsername() +" authenticated!");
			login.setAuthentication(true);
			return SUCCESS;
		} 
		
		login.setAuthentication(false);		
		System.out.println("user " + userlocal.getPassword() +" auth failed.");*/
		return SUCCESS;
	}

	public LoginOutput getLogin() {
		return login;
	}

	public void setLogin(LoginOutput login) {
		this.login = login;
	}

	public UserDataServiceImpl getUserDataServiceImpl() {
        return userDataServiceImpl;
    }

    public void setUserDataServiceImpl(UserDataServiceImpl userDataServiceImpl) {
        this.userDataServiceImpl = userDataServiceImpl;
    }

	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
