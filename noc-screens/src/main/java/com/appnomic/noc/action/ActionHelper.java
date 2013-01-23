package com.appnomic.noc.action;

import java.util.Map;

import com.google.gson.Gson;

public class ActionHelper {
	
	public static RequestNameId getRequestName(Map<String, String[]> parameters) {
		RequestNameId rn = null;
		String [] keys = (String[]) parameters.keySet().toArray();
		Gson gson = new Gson();
		
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		rn = gson.fromJson(keys[0], RequestNameId.class);
		return rn;
	}

}
