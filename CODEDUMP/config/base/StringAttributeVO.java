package config.base;

public class StringAttributeVO extends AttributeVO {

	String value;
	
	public StringAttributeVO() {
		setType(ConfigType.STRING.name());
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
}
