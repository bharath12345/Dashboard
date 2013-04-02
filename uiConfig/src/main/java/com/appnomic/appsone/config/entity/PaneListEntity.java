package com.appnomic.appsone.config.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.appnomic.appsone.common.ActionConstants;

public class PaneListEntity extends AbstractConfigEntity{

    private PaneEntity[] paneList;

    public PaneEntity[] getPaneList() {
        return paneList;
    }

    public void setPaneList(PaneEntity[] paneList) {
        this.paneList = paneList;
    }

    public class PaneEntity {
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

    public static PaneListEntity getDefaultConfig() {
        List<PaneEntity> paneList = new ArrayList<PaneEntity>();

        PaneListEntity tle = new PaneListEntity();

        PaneEntity paneListObj = tle.new PaneEntity();
        paneListObj.setName(ActionConstants.ACCGROUPS.TOPOLOGY.name());
        paneListObj.setUuid(UUID.randomUUID().toString());
        paneListObj.setEnumId(ActionConstants.ACCGROUPS.TOPOLOGY.ordinal());
        paneListObj.setAction("topology/links.action");
        paneList.add(paneListObj);

        paneListObj = tle.new PaneEntity();
        paneListObj.setName(ActionConstants.ACCGROUPS.NOC.name());
        paneListObj.setUuid(UUID.randomUUID().toString());
        paneListObj.setEnumId(ActionConstants.ACCGROUPS.NOC.ordinal());
        paneListObj.setAction("noc/links.action");
        paneList.add(paneListObj);

        paneListObj = tle.new PaneEntity();
        paneListObj.setName(ActionConstants.ACCGROUPS.ANALYTICS.name());
        paneListObj.setUuid(UUID.randomUUID().toString());
        paneListObj.setEnumId(ActionConstants.ACCGROUPS.ANALYTICS.ordinal());
        paneListObj.setAction("analytics/links.action");
        paneList.add(paneListObj);

        paneListObj = tle.new PaneEntity();
        paneListObj.setName(ActionConstants.ACCGROUPS.CUSTOM.name());
        paneListObj.setUuid(UUID.randomUUID().toString());
        paneListObj.setEnumId(ActionConstants.ACCGROUPS.CUSTOM.ordinal());
        paneListObj.setAction("custom/links.action");
        paneList.add(paneListObj);

        paneListObj = tle.new PaneEntity();
        paneListObj.setName(ActionConstants.ACCGROUPS.CONFIG.name());
        paneListObj.setUuid(UUID.randomUUID().toString());
        paneListObj.setEnumId(ActionConstants.ACCGROUPS.CONFIG.ordinal());
        paneListObj.setAction("config/links.action");
        paneList.add(paneListObj);

        tle.setPaneList(paneList.toArray(new PaneEntity[paneList.size()]));
        tle.setUuid(UUID.randomUUID().toString());
        return tle;
    }

}

