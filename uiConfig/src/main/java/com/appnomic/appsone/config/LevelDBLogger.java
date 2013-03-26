package com.appnomic.appsone.config;

import org.iq80.leveldb.Logger;

public class LevelDBLogger implements Logger {
	public void log(String message) {
		System.out.println(message);
	}
}
