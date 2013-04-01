package com.appnomic.appsone.config.entity;

import com.appnomic.appsone.common.ActionConstants;
import java.util.*;

public class LinksListEntity extends AbstractConfigEntity {

    private LinkEntity[] linkEntity;

    public LinkEntity[] getLinkEntity() {
        return linkEntity;
    }

    public void setLinkEntity(LinkEntity[] linkEntity) {
        this.linkEntity = linkEntity;
    }

    public class LinkEntity {

        String name;
        String type;
        int enumId;
        String uuid;

        LinkEntity[] linkList;

        public LinkEntity[] getLinkList() {
            return linkList;
        }

        public void setLinkList(LinkEntity[] linkList) {
            this.linkList = linkList;
        }

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

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static LinksListEntity getDefaultAlertsPageEntity() {
        LinksListEntity aple = new LinksListEntity();
        List<LinkEntity> linkList = new ArrayList<LinkEntity>();

        LinkEntity linkEntity = aple.new LinkEntity();
        linkEntity.setName(ActionConstants.ALERTS.SQL_DB_OUTLIERS.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId( ActionConstants.ALERTS.SQL_DB_OUTLIERS.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        linkList.add(linkEntity);

        aple.setLinkEntity(linkList.toArray(new LinkEntity[linkList.size()]));
        aple.setUuid(UUID.randomUUID().toString());
        return aple;
    }

    public static LinksListEntity getDefaultConfigPageEntity() {
        LinksListEntity cple = new LinksListEntity();

        List<LinkEntity> linkList = new ArrayList<LinkEntity>();

        List<LinkEntity> dashboardList = new ArrayList<LinkEntity>();
        LinkEntity dashboardLinkVO = cple.new LinkEntity();
        dashboardLinkVO.setName(ActionConstants.CONFIG.CONFIG_NOC.name());
        dashboardLinkVO.setUuid(UUID.randomUUID().toString());
        dashboardLinkVO.setEnumId(ActionConstants.CONFIG.CONFIG_NOC.ordinal());
        dashboardLinkVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        linkList.add(dashboardLinkVO);

        LinkEntity linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.APPLICATION_ALERTS.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_ALERTS.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        dashboardList.add(linkListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.TRANSACTION_GRID.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        linkListVO.setEnumId(ActionConstants.CONFIG.TRANSACTION_GRID.ordinal());
        dashboardList.add(linkListVO);

        LinkEntity[] linkEntityList = dashboardList.toArray(new LinkEntity[dashboardList.size()]);
        dashboardLinkVO.setLinkList(linkEntityList);

        // // Topology List

        List<LinkEntity> topoList = new ArrayList<LinkEntity>();
        LinkEntity topoListVO = cple.new LinkEntity();
        topoListVO.setName(ActionConstants.CONFIG.CONFIG_TOPOLOGY.name());
        topoListVO.setUuid(UUID.randomUUID().toString());
        topoListVO.setEnumId(ActionConstants.CONFIG.CONFIG_TOPOLOGY.ordinal());
        topoListVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        linkList.add(topoListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.APPLICATION_TAGS.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_TAGS.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(linkListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.APPLICATION_LAYERS.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_LAYERS.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(linkListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.APPLICATION_TOPOLOGY.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_TOPOLOGY.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(linkListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.LAYER_TRANSITIONS.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.LAYER_TRANSITIONS.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(linkListVO);

        linkListVO = cple.new LinkEntity();
        linkListVO.setName(ActionConstants.CONFIG.COMPONENT_TOPOLOGY.name());
        linkListVO.setUuid(UUID.randomUUID().toString());
        linkListVO.setEnumId(ActionConstants.CONFIG.COMPONENT_TOPOLOGY.ordinal());
        linkListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(linkListVO);

        linkEntityList = topoList.toArray(new LinkEntity[topoList.size()]);
        topoListVO.setLinkList(linkEntityList);

        ////////

        cple.setLinkEntity(linkList.toArray(new LinkEntity[linkList.size()]));
        cple.setUuid(UUID.randomUUID().toString());
        return cple;
    }

    public static LinksListEntity getDefaultTopologyPageEntity() {
        LinksListEntity tple = new LinksListEntity();
        List<LinkEntity> linkList = new ArrayList<LinkEntity>();

        LinkEntity linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.TOPOLOGY.SAMPLE_TOPOLOGY.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.TOPOLOGY.SAMPLE_TOPOLOGY.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.TOPOLOGY.name());
        linkList.add(linkEntity);

        linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.TOPOLOGY.LAYERONE.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.TOPOLOGY.LAYERONE.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.TOPOLOGY.name());
        linkList.add(linkEntity);

        tple.setLinkEntity(linkList.toArray(new LinkEntity[linkList.size()]));
        tple.setUuid(UUID.randomUUID().toString());
        return tple;
    }

    public static LinksListEntity getDefaultCustomPageEntity() {
        LinksListEntity tple = new LinksListEntity();
        List<LinkEntity> linkList = new ArrayList<LinkEntity>();

        LinkEntity linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.CUSTOM.CUSTOM_LAYOUTS.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.CUSTOM.CUSTOM_LAYOUTS.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        linkList.add(linkEntity);

        linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.CUSTOM.CUSTOM_VIEWS.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.CUSTOM.CUSTOM_VIEWS.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        linkList.add(linkEntity);

        tple.setLinkEntity(linkList.toArray(new LinkEntity[linkList.size()]));
        tple.setUuid(UUID.randomUUID().toString());
        return tple;
    }

    public static LinksListEntity getDefaultNocPageEntity() {
        LinksListEntity tple = new LinksListEntity();
        List<LinkEntity> linkList = new ArrayList<LinkEntity>();

        LinkEntity linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.NOC.APPLICATION_ALERTS.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.NOC.APPLICATION_ALERTS.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        linkList.add(linkEntity);

        linkEntity = tple.new LinkEntity();
        linkEntity.setName(ActionConstants.NOC.TRANSACTION_GRID.name());
        linkEntity.setUuid(UUID.randomUUID().toString());
        linkEntity.setEnumId(ActionConstants.NOC.TRANSACTION_GRID.ordinal());
        linkEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        linkList.add(linkEntity);

        tple.setLinkEntity(linkList.toArray(new LinkEntity[linkList.size()]));
        tple.setUuid(UUID.randomUUID().toString());
        return tple;
    }

}