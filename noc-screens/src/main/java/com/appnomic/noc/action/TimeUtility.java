package com.appnomic.noc.action;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeUtility {

	public static String[] get5MinStartEnd() {
		return alltime(Calendar.MINUTE, 5);
	}

	public static String[] get30MinStartEnd() {
		return alltime(Calendar.MINUTE, 30);
	}

	public static String[] get1HourStartEnd() {
		return alltime(Calendar.HOUR, 1);
	}

	public static String[] get3HourStartEnd() {
		return alltime(Calendar.HOUR, 3);
	}
	
	public static Date convertGmtToIndiaTimeDate(Calendar gmtTime) {
		gmtTime.set(Calendar.HOUR, gmtTime.get(Calendar.HOUR) - 5);
		gmtTime.set(Calendar.MINUTE, gmtTime.get(Calendar.MINUTE) - 30);
		return gmtTime.getTime();
	}
	
	public static Calendar convertGmtToIndiaTimeCalendar(Calendar gmtTime) {
		gmtTime.set(Calendar.HOUR, gmtTime.get(Calendar.HOUR) - 5);
		gmtTime.set(Calendar.MINUTE, gmtTime.get(Calendar.MINUTE) - 30);
		return gmtTime;
	}

	private static String[] alltime(int field, int delta) {
		Date currentTime = convertGmtToIndiaTimeDate(Calendar.getInstance());
		Calendar previousTime = convertGmtToIndiaTimeCalendar(Calendar.getInstance());
		
		previousTime.set(field, previousTime.get(field) - delta);
		Date oneHourBeforeTime = previousTime.getTime();

		SimpleDateFormat timeFormat = new SimpleDateFormat(
				"yyyy-MM-dd hh:mm:ss");
		String endTime = timeFormat.format(currentTime);
		String startTime = timeFormat.format(oneHourBeforeTime);

		String[] startEndTimes = new String[2];
		startEndTimes[0] = startTime;
		startEndTimes[1] = endTime;
		return startEndTimes;
	}

}
