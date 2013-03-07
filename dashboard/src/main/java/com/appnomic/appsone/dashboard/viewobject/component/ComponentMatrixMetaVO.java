package com.appnomic.appsone.dashboard.viewobject.component;

import com.appnomic.service.ComponentDataService;

public class ComponentMatrixMetaVO {

	private ComponentDataService componentDataService;
	
	ComponentMetaVO [] componentVO;

	public ComponentMetaVO[] getComponentVO() {
		return componentVO;
	}

	public void setComponentVO(ComponentMetaVO[] componentVO) {
		this.componentVO = componentVO;
	}
}
