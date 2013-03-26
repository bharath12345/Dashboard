package com.appnomic.appsone.dashboard.viewobject.topology;

public class LayerVO {
	String layertype;
	LayerValueVO [] layer;
	public LayerValueVO[] getLayer() {
		return layer;
	}
	public void setLayer(LayerValueVO[] layer) {
		this.layer = layer;
	}
	public String getLayertype() {
		return layertype;
	}
	public void setLayertype(String layertype) {
		this.layertype = layertype;
	}	
}
