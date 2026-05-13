<script lang="ts">
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { page } from '$app/stores';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import Tab from '$components/LBTabs/Tab.svelte';
  import TabList from '$components/LBTabs/TabList.svelte';
  import TabPanel from '$components/LBTabs/TabPanel.svelte';
  import Tabs from '$components/LBTabs/Tabs.svelte';
  import { performDefaultValueTableConfig, postingPeriodTableConfig } from '$mc/config';
  import { getContext, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import type { ColumnService } from '$lib/services/column.service';
  import type { QueryService } from '$lib/services/query.service';
  import { PerformPostingPeriodService } from '$mc/perform-settings/postingPeriod';
  import { PerformDefaultValueService } from '$mc/perform-settings/defaultValues';
  import { AttainmentPointScheduleService, AttainmentPointScheduleDataService } from '$mc/perform-settings/attainmentPointSchedule';

  import { SettingsSection } from '../../+layout.svelte';
  const { getPathOrg } = getContext(SettingsSection) as any;

  const node_path: string = $page.params.node_path;
  const lb_domain: string = $page.params.lb_domain;
  const path_org = getPathOrg(node_path);

  let title = '';
  let root = true;
  const defaultValue = new PerformDefaultValueService(node_path, lb_domain);
  const columnDefault: Writable<ColumnService> = writable(defaultValue.columnService);
  const postingPeriod = new PerformPostingPeriodService(node_path);
  const columnPosting: Writable<ColumnService> = writable(postingPeriod.columnService);

  const aPsQueryService = new AttainmentPointScheduleService(path_org);
  const columnAps: Writable<ColumnService> = writable(aPsQueryService.columnService);

  const aPsQueryDataService = new AttainmentPointScheduleDataService();
  const columnDataAps: Writable<ColumnService> = writable(aPsQueryDataService.columnService);

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row.attainment_point_schedule_name) {
      activeTabId = mapTables['acsData'];
      aPsQueryDataService.setApsId(row.attainment_point_schedule_id);
      title = row.attainment_point_schedule_name;
      root = false;
    }
  };
  aPsQueryService.columnService.addDrillColumn(onDrillDownClicked);
  let loading = false;

  const refresh = async () => {
    if (loading === false) {
      loading = true;
      if ($columnDefault) {
        const initial = $columnDefault;
        initial.multiSelect = false;
        await initial.setDefaultConfig(performDefaultValueTableConfig);
        columnDefault.set(initial);
      }

      if ($columnPosting) {
        const initial = $columnPosting;
        initial.multiSelect = false;
        await initial.setDefaultConfig(postingPeriodTableConfig);
        columnPosting.set(initial);
      }
      if ($columnAps) {
        const initial = $columnAps;
        initial.multiSelect = false;
        await initial.init();
        columnAps.set(initial);
      }

      if ($columnDataAps) {
        const initial = $columnDataAps;
        initial.multiSelect = false;
        await initial.init();
        columnDataAps.set(initial);
      }

      loading = false;
    }
  };

  const mapTables: Record<string, QueryService> = {
    default: defaultValue,
    posting: postingPeriod,
    acs: aPsQueryService,
    acsData: aPsQueryDataService
  };

  let activeTabId = mapTables['default'];

  onMount(async () => {
    await refresh();
  });

  const onClickPrev = async () => {
    activeTabId = mapTables['acs'];
    root = true;
  };
</script>

<Tabs>
  <TabList classes="w-full bg-white px-1 pt-1 border border-b-none">
    <Tab selected={activeTabId === mapTables['default']} on:selected={() => (activeTabId = mapTables['default'])}>
      <div class="flex h-full w-full items-center justify-center px-4 py-2 text-sm font-medium">Default Value</div>
    </Tab>

    {#if node_path !== 'Org.National'}
      <Tab selected={activeTabId === mapTables['posting']} on:selected={() => (activeTabId = mapTables['posting'])}>
        <div class="flex h-full w-full items-center justify-center px-4 py-2 text-sm font-medium">Posting Period</div>
      </Tab>
    {/if}
    {#if node_path !== 'Org.National'}
      <Tab selected={activeTabId === mapTables['acs']} on:selected={() => (activeTabId = mapTables['acs'])}>
        <div class="flex h-full w-full items-center justify-center px-4 py-2 text-sm font-medium">Attainment Point Schedule</div>
      </Tab>
    {/if}
  </TabList>

  <TabPanel>
    <LBDataTable bind:queryService={mapTables['default']} bind:columnService={$columnDefault} />
  </TabPanel>

  <TabPanel>
    <LBDataTable bind:queryService={mapTables['posting']} bind:columnService={$columnPosting} />
  </TabPanel>
  <TabPanel>
    {#if activeTabId === mapTables['acsData']}
      <LBBreadcrum bind:root bind:title on:clickPrev={onClickPrev} />
    {/if}
    {#if activeTabId === mapTables['acs']}
      <LBDataTable bind:queryService={mapTables['acs']} bind:columnService={$columnAps} />
    {:else}
      <LBDataTable bind:queryService={mapTables['acsData']} bind:columnService={$columnDataAps} />
    {/if}
  </TabPanel>
</Tabs>
