package com.appnomic.appsone.config.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.appnomic.appsone.common.ActionConstants;

public class TabListEntity extends AbstractConfigEntity{

    private TabEntity [] tabList;

    public TabEntity[] getTabList() {
        return tabList;
    }

    public void setTabList(TabEntity[] tabList) {
        this.tabList = tabList;
    }

    public class TabEntity {
        String name;
        String uuid;
        String action;
        int enumId;

        public int getEnumId() {
            return enumId;
        }
        public void setEnumId(int enumId) {
            this.enumId = enumId;
        }
        public String getUuid() {
            return uuid;
        }
        public void setUuid(String uuid) {
            this.uuid = uuid;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getAction() {
            return action;
        }
        public void setAction(String action) {
            this.action = action;
        }
    }

    public static TabListEntity getDefaultConfig() {
        List<TabListEntity.TabEntity> tabList = new ArrayList<TabListEntity.TabEntity>();

        TabListEntity tle = new TabListEntity();

        TabListEntity.TabEntity tabListObj = tle.new TabEntity();
        tabListObj.setName(ActionConstants.ACCGROUPS.TOPOLOGY.name());
        tabListObj.setUuid(UUID.randomUUID().toString());
        tabListObj.setEnumId(ActionConstants.ACCGROUPS.TOPOLOGY.ordinal());
        tabListObj.setAction("topology/pages.action");
        tabList.add(tabListObj);

        tabListObj = tle.new TabEntity();
        tabListObj.setName(ActionConstants.ACCGROUPS.NOC.name());
        tabListObj.setUuid(UUID.randomUUID().toString());
        tabListObj.setEnumId(ActionConstants.ACCGROUPS.NOC.ordinal());
        tabListObj.setAction("noc/pages.action");
        tabList.add(tabListObj);

        tabListObj = tle.new TabEntity();
        tabListObj.setName(ActionConstants.ACCGROUPS.ALERTS.name());
        tabListObj.setUuid(UUID.randomUUID().toString());
        tabListObj.setEnumId(ActionConstants.ACCGROUPS.ALERTS.ordinal());
        tabListObj.setAction("alerts/pages.action");
        tabList.add(tabListObj);

        tabListObj = tle.new TabEntity();
        tabListObj.setName(ActionConstants.ACCGROUPS.CUSTOM.name());
        tabListObj.setUuid(UUID.randomUUID().toString());
        tabListObj.setEnumId(ActionConstants.ACCGROUPS.CUSTOM.ordinal());
        tabListObj.setAction("custom/pages.action");
        tabList.add(tabListObj);

        tabListObj = tle.new TabEntity();
        tabListObj.setName(ActionConstants.ACCGROUPS.CONFIG.name());
        tabListObj.setUuid(UUID.randomUUID().toString());
        tabListObj.setEnumId(ActionConstants.ACCGROUPS.CONFIG.ordinal());
        tabListObj.setAction("config/pages.action");
        tabList.add(tabListObj);

        tle.setTabList(tabList.toArray(new TabListEntity.TabEntity[tabList.size()]));
        return tle;
    }

}

