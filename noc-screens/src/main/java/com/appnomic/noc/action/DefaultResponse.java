package com.appnomic.noc.action;

public class DefaultResponse {

	private String id;
	private int type;
	private int [] dimensions;
	private int [] position;
	private String [] custom;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int[] getDimensions() {
		return dimensions;
	}
	public void setDimensions(int[] dimensions) {
		this.dimensions = dimensions;
	}
	public int[] getPosition() {
		return position;
	}
	public void setPosition(int[] position) {
		this.position = position;
	}
	public String[] getCustom() {
		return custom;
	}
	public void setCustom(String[] custom) {
		this.custom = custom;
	}
}
