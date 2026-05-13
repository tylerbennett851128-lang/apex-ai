<script lang="ts">
  import { get, writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import LBTableModal from '$components/LBModal/LBTableModal.svelte';
  import Tab from '$components/LBTabs/Tab.svelte';
  import TabList from '$components/LBTabs/TabList.svelte';
  import TabPanel from '$components/LBTabs/TabPanel.svelte';
  import Tabs from '$components/LBTabs/Tabs.svelte';
  import { getContext, onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { UserRoleDetailService, UserIntentDetailService, sidebarService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { ACTION_BAR_EVENT, type QueryService } from '$lib/services/query.service';
  import AssignUsersToRole from '$mc/access-control/assignUsersToRole.svelte';
  import AssignIntentsToRole from '$mc/access-control/assignIntentsToRole.svelte';
  import { intentRoleDetailConfig } from '$mc/config/roleTable.config';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';
  import { RolesSection } from '../+layout.svelte';
  const { getRoleName, baseUrl } = getContext(RolesSection) as any;

  const role_id = $page.params.id;
  const roleName = getRoleName(`${baseUrl}/${role_id}`);

  const users = new UserRoleDetailService(role_id, roleName);
  const columnUsers: Writable<ColumnService> = writable(users.columnService);

  const intents = new UserIntentDetailService(role_id, roleName);
  intents.setDefaultConfig(intentRoleDetailConfig);
  const columnIntents: Writable<ColumnService> = writable(intents.columnService);

  let loading = false;
  let showAssignUsersModal = false;
  let showAssignIntentsModal = false;

  let activeTabId = 'users';

  const refresh = async () => {
    if ($columnUsers) {
      if (loading === false) {
        loading = true;
        initColService(columnUsers);
        initColService(columnIntents);
        loading = false;
      }
    }
  };

  const initColService = async (colStore: Writable<ColumnService>) => {
    const initialCols = get(colStore);
    await initialCols.init();
    colStore.set(initialCols);
  };

  const mapTables: Record<string, QueryService> = {
    users: users,
    intents: intents
  };

  const unsubscribeUsersEvent = mapTables['users'].actionBarEvent.subscribe(async (value) => {
    if (value) {
      if (value.event === ACTION_BAR_EVENT.ADD) {
        showAssignUsersModal = true;
      } else if (value.event === ACTION_BAR_EVENT.CONFIRM_DELETE) {
        const selectedRows = get(mapTables['users'].selectedRows);

        if (selectedRows && selectedRows.length) {
          await mapTables['users'].submit(selectedRows, FORM_TYPE.DELETE);
          sidebarService.update((value) => {
            value.update(false, SUBMIT_STATE.UPDATED, mapTables['users']);
            return value;
          });
        }
      }

      mapTables['users'].actionBarEvent.set(null);
    }
  });

  const unsubscribeIntentsEvent = mapTables['intents'].actionBarEvent.subscribe(async (value) => {
    if (value) {
      if (value.event === ACTION_BAR_EVENT.ADD) {
        showAssignIntentsModal = true;
      } else if (value.event === ACTION_BAR_EVENT.DELETE) {
        const selectedRows = get(mapTables['intents'].selectedRows);
        const idToDelete: string[] = [];

        if (selectedRows && selectedRows.length) {
          selectedRows.forEach((row) => idToDelete.push(row['lb_intent_id']));

          const payload = {
            lb_intent_ids: idToDelete,
            lb_role_id: role_id
          };

          await mapTables['intents'].submit(payload, FORM_TYPE.DELETE);
          sidebarService.update((value) => {
            value.update(false, SUBMIT_STATE.UPDATED, mapTables['intents']);
            return value;
          });
        }
      }

      mapTables['intents'].actionBarEvent.set(null);
    }
  });

  const handleUserAssignment = async (e) => {
    if (e.detail === 'Cancel') {
      showAssignUsersModal = false;
      return;
    } else if (e.detail === 'Submit') {
      showAssignUsersModal = false;
      sidebarService.update((value) => {
        value.open = false;
        value.status = SUBMIT_STATE.UPDATED;
        value.queryService = mapTables['users'];
        return value;
      });
    }
  };

  const handleIntentAssignment = async (e) => {
    if (e.detail === 'Cancel') {
      showAssignIntentsModal = false;
      return;
    } else if (e.detail === 'Submit') {
      showAssignIntentsModal = false;
      sidebarService.update((value) => {
        value.open = false;
        value.status = SUBMIT_STATE.UPDATED;
        value.queryService = mapTables['intents'];
        return value;
      });
    }
  };

  onMount(async () => {
    await refresh();
  });

  onDestroy(() => {
    unsubscribeUsersEvent();
    unsubscribeIntentsEvent();
  });
</script>

<Tabs>
  <TabList rtl={true} classes="w-full bg-white px-1 pt-1 border border-b-none">
    <Tab selected={activeTabId === 'users'} on:selected={() => (activeTabId = 'users')}>
      <div class="flex h-full w-full items-center justify-center px-4 py-2 text-sm font-medium">User Positions</div>
    </Tab>

    <Tab selected={activeTabId === 'intents'} on:selected={() => (activeTabId = 'intents')}>
      <div class="flex h-full w-full items-center justify-center px-4 py-2 text-sm font-medium">Intents</div>
    </Tab>
  </TabList>

  <TabPanel>
    <LBDataTable bind:queryService={mapTables['users']} bind:columnService={$columnUsers} />
  </TabPanel>

  <TabPanel>
    <LBDataTable bind:queryService={mapTables['intents']} bind:columnService={$columnIntents} />
  </TabPanel>
</Tabs>

<LBTableModal bind:showModal={showAssignUsersModal} cssModal={'h-[80vh] md:w-[80vw]'} title={`Assign Users to Role: ${roleName}`}>
  <AssignUsersToRole {role_id} role_name={roleName} on:modalAction={handleUserAssignment} />
</LBTableModal>

<LBTableModal bind:showModal={showAssignIntentsModal} cssModal={'h-[85vh] md:w-[80vw]'} title={`Assign Intents to Role: ${roleName}`}>
  <AssignIntentsToRole {role_id} role_name={roleName} on:modalAction={handleIntentAssignment} />
</LBTableModal>
