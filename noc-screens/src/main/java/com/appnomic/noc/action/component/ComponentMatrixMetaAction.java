package com.appnomic.noc.action.component;

import java.util.ArrayList;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.noc.action.AbstractNocAction;

@ParentPackage("json-default")
@Namespace("/component")
public class ComponentMatrixMetaAction extends AbstractNocAction {
	
	public ComponentMatrixMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
	}

	@Action(value="/MatrixMeta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
public String nocAction() {
		return SUCCESS;
	}
}
