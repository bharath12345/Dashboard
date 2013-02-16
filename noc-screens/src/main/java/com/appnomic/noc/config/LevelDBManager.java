package com.appnomic.noc.config;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import static org.iq80.leveldb.impl.Iq80DBFactory.factory;

import org.iq80.leveldb.CompressionType;
import org.iq80.leveldb.DB;
import org.iq80.leveldb.Options;

public class LevelDBManager {
	private static final LevelDBManager LEVEL_DB_CONNECTION_MGR = new LevelDBManager();
    
	private static final String DBPATH = "nocConfigDB";
	private DB nocConfigDB = null;
	private static final String characterSetEncoding = "UTF-8";
	
    private LevelDBManager(){
    }

    public static final LevelDBManager getInstance(){
        return LEVEL_DB_CONNECTION_MGR;
    }

    public void init() throws ExceptionInInitializerError{
    	if(nocConfigDB != null) {
    		return;
    	}
    	
        String configDBFilePath = System.getProperty("catalina.base") + File.separator + DBPATH;
        if (configDBFilePath==null){
            throw new ExceptionInInitializerError("Unbale to init Config DB Specified file is NULL; please specify the correct path");
        }
        
        Options options = new Options();
        options.createIfMissing(true);
        options.compressionType(CompressionType.SNAPPY);

        System.out.println("Creating the Configuration DB at " +  configDBFilePath);
        try {
        	nocConfigDB = factory.open(new File(configDBFilePath), options);
        } catch (IOException e) {
            e.printStackTrace(); 
            throw new ExceptionInInitializerError("Unbale to init Config DB Please check log files for more errors");
        }
    }

    public void shutdown(){
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
    	if(key == null) {
    		return null;
    	}
    	if(nocConfigDB == null) {
    		System.out.println("db still null. initialize level db before access");
    	}
    	byte[] keyBytes = key.getBytes(characterSetEncoding);
    	if(keyBytes==null||keyBytes.length==0){
    		System.out.println("unable to get byte array of key = " + key);
    		return null;
    	}
    	byte[] value = nocConfigDB.get(keyBytes);
    	if(value==null||value.length==0){
    		System.out.println("value null for key = " + key);
    		return null;
    	}
    	return asString(value);
    }
    
    private static String asString(byte value[]) {
        if( value == null) {
            return null;
        }
        try {
            return new String(value, characterSetEncoding);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

}
