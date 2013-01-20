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
//import com.opensymphony.xwork2.Action;

@ParentPackage("json-default")
@Namespace("/user")
public class UserLoginAction extends AbstractNocAction {

    private UserDataServiceImpl userDataServiceImpl;
    
    private String username;
    private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Action(value="/user/UserLogin", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,username,password",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		System.out.println("parameters from json mapping, user = " + username + " pass = " + password);
		
		System.out.println("parameters from sessionaware = " + getParameters());
		UserLocal userlocal = null;
		Gson gson = new Gson();

		Set<String> keys = getParameters().keySet();
		for(String key : keys) {
			System.out.println("key = " + key + " value[0] = " + getParameters().get(key)[0]);
			userlocal = gson.fromJson(key, UserLocal.class);
		}
		
		getSession().put("username", userlocal.getUsername());
		System.out.println("username from gson = " + userlocal.getUsername());
		
		List<User> users = userDataServiceImpl.getAllUsers();
		for(User user : users) {
			System.out.println("username = " + user.getUserName());
		}
		
		if(userDataServiceImpl.authUser(userlocal.getUsername(), userlocal.getPassword())) {
			System.out.println("user "+ userlocal.getUsername() +" authenticated!");
		} else {
			System.out.println("user " + userlocal.getPassword() +" auth failed.");
		}
		return "success";
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
