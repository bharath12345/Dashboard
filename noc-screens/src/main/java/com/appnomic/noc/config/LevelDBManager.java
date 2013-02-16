package com.appnomic.noc.config;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import static org.iq80.leveldb.impl.Iq80DBFactory.factory;

import org.iq80.leveldb.*;


public class LevelDBManager {
	private static final LevelDBManager LEVEL_DB_CONNECTION_MGR = new LevelDBManager();
	private static final String DBPATH = "nocConfigDB";
	private DB nocConfigDB;
	private static final String characterSetEncoding = "UTF-8";
	private LevelDBLogger logger = new LevelDBLogger();

	private LevelDBManager() {
		init();
	}

	public static final LevelDBManager getInstance() {
		return LEVEL_DB_CONNECTION_MGR;
	}

	public void init() throws ExceptionInInitializerError {
		String configDBFilePath = System.getProperty("catalina.base")
				+ File.separator + DBPATH;
		if (configDBFilePath == null) {
			throw new ExceptionInInitializerError(
					"Unbale to init Config DB Specified file is NULL; please specify the correct path");
		}

		Options options = new Options();
		options.createIfMissing(true);
		options.compressionType(CompressionType.SNAPPY);
		options.logger(logger);
		options.cacheSize(10 * 1048576); // 10MB cache

		System.out.println("Creating the Configuration DB at "
				+ configDBFilePath);
		try {
			nocConfigDB = factory.open(new File(configDBFilePath), options);
		} catch (IOException e) {
			e.printStackTrace();
			throw new ExceptionInInitializerError(
					"Unbale to init Config DB Please check log files for more errors");
		}
	}

	public void shutdown() {
		try {
			nocConfigDB.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void write(final String key, final String val) {
		nocConfigDB.put(key.getBytes(), val.getBytes());
	}

	public String read(final String key) throws UnsupportedEncodingException {
		if (key == null) {
			return null;
		}
		if (nocConfigDB == null) {
			System.out.println("db still null. initialize level db before access");
		}
		byte[] keyBytes = key.getBytes(characterSetEncoding);
		if (keyBytes == null || keyBytes.length == 0) {
			System.out.println("unable to get byte array of key = " + key);
			return null;
		}
		byte[] value = nocConfigDB.get(keyBytes);
		if (value == null || value.length == 0) {
			System.out.println("value null for key = " + key);
			return null;
		}
		return asString(value);
	}

	private String asString(byte value[]) {
		if (value == null) {
			return null;
		}
		try {
			return new String(value, characterSetEncoding);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}

	public Map<String, String> getAllKeyValues() {
		DBIterator iterator = null;
		Map<String, String> levelDbMap = new HashMap<String, String>();
		try {
			iterator = nocConfigDB.iterator();
			for (iterator.seekToFirst(); iterator.hasNext(); iterator.next()) {
				String key = asString(iterator.peekNext().getKey());
				String value = asString(iterator.peekNext().getValue());
				System.out.println(key + " = " + value);
				levelDbMap.put(key, value);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// Make sure you close the iterator to avoid resource leaks.
			try {
				iterator.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return levelDbMap;
	}

}