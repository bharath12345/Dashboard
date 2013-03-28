package com.appnomic.appsone.config.entity;

import com.appnomic.appsone.common.ActionConstants;
import java.util.*;

public class PageListEntity extends AbstractConfigEntity {

    private PageEntity[] pageEntity;

    public PageEntity[] getPageEntity() {
        return pageEntity;
    }

    public void setPageEntity(PageEntity[] pageEntity) {
        this.pageEntity = pageEntity;
    }

    public class PageEntity {

        String name;
        String type;
        int enumId;
        String uuid;

        PageEntity[] pageList;

        public PageEntity[] getPageList() {
            return pageList;
        }

        public void setPageList(PageEntity[] pageList) {
            this.pageList = pageList;
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

    public static PageListEntity getDefaultAlertsPageEntity() {
        PageListEntity aple = new PageListEntity();
        List<PageListEntity.PageEntity> pageList = new ArrayList<PageListEntity.PageEntity>();

        PageListEntity.PageEntity pageEntity = aple.new PageEntity();
        pageEntity.setName(ActionConstants.ALERTS.SAMPLE_ALERTS.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId( ActionConstants.ALERTS.SAMPLE_ALERTS.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        pageList.add(pageEntity);

        aple.setPageEntity(pageList.toArray(new PageListEntity.PageEntity[pageList.size()]));
        return aple;
    }

    public static PageListEntity getDefaultConfigPageEntity() {
        PageListEntity cple = new PageListEntity();

        List<PageListEntity.PageEntity> pageList = new ArrayList<PageListEntity.PageEntity>();

        List<PageListEntity.PageEntity> dashboardList = new ArrayList<PageListEntity.PageEntity>();
        PageListEntity.PageEntity dashboardPageVO = cple.new PageEntity();
        dashboardPageVO.setName(ActionConstants.CONFIG.CONFIG_NOC.name());
        dashboardPageVO.setUuid(UUID.randomUUID().toString());
        dashboardPageVO.setEnumId(ActionConstants.CONFIG.CONFIG_NOC.ordinal());
        dashboardPageVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        pageList.add(dashboardPageVO);

        PageListEntity.PageEntity pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.APPLICATION_ALERTS.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_ALERTS.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        dashboardList.add(pageListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.TRANSACTION_GRID.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        pageListVO.setEnumId(ActionConstants.CONFIG.TRANSACTION_GRID.ordinal());
        dashboardList.add(pageListVO);

        PageListEntity.PageEntity[] pageEntityList = dashboardList.toArray(new PageListEntity.PageEntity[dashboardList.size()]);
        dashboardPageVO.setPageList(pageEntityList);

        // // Topology List

        List<PageListEntity.PageEntity> topoList = new ArrayList<PageListEntity.PageEntity>();
        PageListEntity.PageEntity topoListVO = cple.new PageEntity();
        topoListVO.setName(ActionConstants.CONFIG.CONFIG_TOPOLOGY.name());
        topoListVO.setUuid(UUID.randomUUID().toString());
        topoListVO.setEnumId(ActionConstants.CONFIG.CONFIG_TOPOLOGY.ordinal());
        topoListVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        pageList.add(topoListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.APPLICATION_TAGS.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_TAGS.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(pageListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.APPLICATION_LAYERS.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_LAYERS.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(pageListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.APPLICATION_TOPOLOGY.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.APPLICATION_TOPOLOGY.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(pageListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.LAYER_TRANSITIONS.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.LAYER_TRANSITIONS.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(pageListVO);

        pageListVO = cple.new PageEntity();
        pageListVO.setName(ActionConstants.CONFIG.COMPONENT_TOPOLOGY.name());
        pageListVO.setUuid(UUID.randomUUID().toString());
        pageListVO.setEnumId(ActionConstants.CONFIG.COMPONENT_TOPOLOGY.ordinal());
        pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
        topoList.add(pageListVO);

        pageEntityList = topoList.toArray(new PageListEntity.PageEntity[topoList.size()]);
        topoListVO.setPageList(pageEntityList);

        ////////

        cple.setPageEntity(pageList.toArray(new PageListEntity.PageEntity[pageList.size()]));
        return cple;
    }

    public static PageListEntity getDefaultTopologyPageEntity() {
        PageListEntity tple = new PageListEntity();
        List<PageListEntity.PageEntity> pageList = new ArrayList<PageListEntity.PageEntity>();

        PageListEntity.PageEntity pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.TOPOLOGY.SAMPLE_TOPOLOGY.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.TOPOLOGY.SAMPLE_TOPOLOGY.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.TOPOLOGY.name());
        pageList.add(pageEntity);

        pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.TOPOLOGY.LAYERONE.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.TOPOLOGY.LAYERONE.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.TOPOLOGY.name());
        pageList.add(pageEntity);

        tple.setPageEntity(pageList.toArray(new PageListEntity.PageEntity[pageList.size()]));
        return tple;
    }

    public static PageListEntity getDefaultCustomPageEntity() {
        PageListEntity tple = new PageListEntity();
        List<PageListEntity.PageEntity> pageList = new ArrayList<PageListEntity.PageEntity>();

        PageListEntity.PageEntity pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.CUSTOM.CUSTOM_LAYOUTS.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.CUSTOM.CUSTOM_LAYOUTS.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        pageList.add(pageEntity);

        pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.CUSTOM.CUSTOM_VIEWS.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.CUSTOM.CUSTOM_VIEWS.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
        pageList.add(pageEntity);

        tple.setPageEntity(pageList.toArray(new PageListEntity.PageEntity[pageList.size()]));
        return tple;
    }

    public static PageListEntity getDefaultNocPageEntity() {
        PageListEntity tple = new PageListEntity();
        List<PageListEntity.PageEntity> pageList = new ArrayList<PageListEntity.PageEntity>();

        PageListEntity.PageEntity pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.NOC.APPLICATION_ALERTS.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.NOC.APPLICATION_ALERTS.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        pageList.add(pageEntity);

        pageEntity = tple.new PageEntity();
        pageEntity.setName(ActionConstants.NOC.TRANSACTION_GRID.name());
        pageEntity.setUuid(UUID.randomUUID().toString());
        pageEntity.setEnumId(ActionConstants.NOC.TRANSACTION_GRID.ordinal());
        pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
        pageList.add(pageEntity);

        tple.setPageEntity(pageList.toArray(new PageListEntity.PageEntity[pageList.size()]));
        return tple;
    }

}