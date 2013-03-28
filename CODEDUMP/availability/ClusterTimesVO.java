package availability;

public class ClusterTimesVO {
	
	private String time;
	private ClusterDataPointVO[] cluster;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public ClusterDataPointVO[] getCluster() {
		return cluster;
	}
	public void setCluster(ClusterDataPointVO[] cluster) {
		this.cluster = cluster;
	}

}
