package com.appnomic.noc.action.user;

import java.util.List;
import java.util.Set;

import com.appnomic.domainobject.User;
import com.appnomic.service.impl.UserDataServiceImpl;
import com.appnomic.noc.action.AbstractNocAction;
import com.google.gson.Gson;
import com.opensymphony.xwork2.Action;

public class UserLoginAction extends AbstractNocAction {

    private UserDataServiceImpl userDataServiceImpl;

	public String execute() {
		System.out.println("parameters = " + getParameters());
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
		return Action.SUCCESS;
	}

    public UserDataServiceImpl getUserDataServiceImpl() {
        return userDataServiceImpl;
    }

    public void setUserDataServiceImpl(UserDataServiceImpl userDataServiceImpl) {
        this.userDataServiceImpl = userDataServiceImpl;
    }

}
