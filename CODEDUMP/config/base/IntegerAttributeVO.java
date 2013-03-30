package config.base;

public class IntegerAttributeVO extends AttributeVO {

	int value;

	public IntegerAttributeVO() {
		setType(ConfigType.INTEGER.name());
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
	
}
