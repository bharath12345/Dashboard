package com.appnomic.appsone.dashboard.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.dashboard.action.ActionConstants;
import com.appnomic.appsone.dashboard.action.noc.AbstractNocAction;
import com.appnomic.appsone.dashboard.config.AlertGridConfigManager;
import com.appnomic.appsone.dashboard.config.ConfigType;
import com.appnomic.appsone.dashboard.config.LevelDBManager;
import com.appnomic.appsone.dashboard.config.attribute.*;
import com.appnomic.appsone.dashboard.config.entity.AlertGridEntity;
import com.appnomic.appsone.dashboard.viewobject.config.AlertGridConfigVO;
import com.appnomic.appsone.dashboard.viewobject.config.PageListVO;
import com.appnomic.appsone.dashboard.viewobject.config.TabListVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/utility")
public class UtilityAction extends AbstractNocAction {

	private TabListVO [] tabListVO;
	private Map<String, String[]> param;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public TabListVO[] getTabListVO() {
		return tabListVO;
	}

	public void setTabListVO(TabListVO[] tabListVO) {
		this.tabListVO = tabListVO;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	@Action(value="/dashboard/panes", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String allconfig() {
		param = getParameters();
		
		List<TabListVO> tabList = new ArrayList<TabListVO>();
		
		TabListVO tabListObj = new TabListVO();
		tabListObj.setName("topology");
		tabListObj.setLabel("Topology Views");
		tabListObj.setId(0);
		tabListObj.setAction("topology/topology.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("noc");
		tabListObj.setLabel("Command Center Screens");
		tabListObj.setId(1);
		tabListObj.setAction("noc/pages.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("alerts");
		tabListObj.setLabel("Alerts");
		tabListObj.setId(2);
		tabListObj.setAction("dashboard/alerts.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("configurableDashboard");
		tabListObj.setLabel("Configurable Dashboards");
		tabListObj.setId(3);
		tabListObj.setAction("dashboard/configurableDashboard.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("config");
		tabListObj.setLabel("Configuration");
		tabListObj.setId(4);
		tabListObj.setAction("config/pages.action");
		tabList.add(tabListObj);
		
		tabListVO = tabList.toArray(new TabListVO[tabList.size()]);
		
		return SUCCESS;
	}
}
