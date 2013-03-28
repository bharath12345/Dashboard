public class DefaultResponse {

	private int id;
	private String name;
	private int type;
	private int subtype;
	private int [] dimensions;
	private int [] position;
	private String [] custom;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public int getSubtype() {
		return subtype;
	}
	public void setSubtype(int subtype) {
		this.subtype = subtype;
	}
}
