package com.appnomic.appsone.dashboard.request;

import java.util.Map;

import com.appnomic.appsone.dashboard.request.objects.RequestComponentKpiName;
import com.appnomic.appsone.dashboard.request.objects.RequestNameId;
import com.appnomic.appsone.dashboard.request.objects.RequestWidthHeight;
import com.appnomic.appsone.dashboard.request.objects.RequestZoneName;
import component.ComponentMatrixZonesVO;
import com.google.gson.Gson;

public class RequestHelper {
	
	public static RequestNameId getRequestName(Map<String, String[]> parameters) {
		RequestNameId rn = null;
		String [] keys = parameters.keySet().toArray(new String[parameters.keySet().size()]);
		Gson gson = new Gson();
		
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		rn = gson.fromJson(keys[0], RequestNameId.class);
		return rn;
	}
	
	public static RequestWidthHeight getRequestWidthHeight(Map<String, String[]> parameters) {
		RequestWidthHeight rwh = null;
		String [] keys = parameters.keySet().toArray(new String[parameters.keySet().size()]);
		Gson gson = new Gson();
		
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		rwh = gson.fromJson(keys[0], RequestWidthHeight.class);
		return rwh;
	}

	public static RequestZoneName getRequestZoneName(Map<String, String[]> parameters) {
		RequestZoneName rzn = null;
		String [] keys = parameters.keySet().toArray(new String[parameters.keySet().size()]);
		Gson gson = new Gson();
		
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		rzn = gson.fromJson(keys[0], RequestZoneName.class);
		return rzn;
	}
	
	public static ComponentMatrixZonesVO getRequestZoneInfo(Map<String, String[]> parameters) {
		Gson gson = new Gson();
		String [] keys = parameters.keySet().toArray(new String[parameters.keySet().size()]);
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		ComponentMatrixZonesVO componentMatrixZonesVO = gson.fromJson(keys[0], ComponentMatrixZonesVO.class);
		return componentMatrixZonesVO;
	}
	
	public static RequestComponentKpiName getRequestComponentKpiName(Map<String, String[]> parameters) {
		Gson gson = new Gson();
		String [] keys = parameters.keySet().toArray(new String[parameters.keySet().size()]);
		System.out.println("key = " + keys[0] + " value[0] = " + parameters.get(keys[0])[0]);
		RequestComponentKpiName requestComponentKpiName = gson.fromJson(keys[0], RequestComponentKpiName.class);
		return requestComponentKpiName;
	}
}
