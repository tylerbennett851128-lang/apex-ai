<script lang="ts">
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import { clickOutside } from 'svelte-use-click-outside';
  import { onDestroy, onMount } from 'svelte';
  import type { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
  import { writable, type Writable } from 'svelte/store';
  import { SchemaDataAnnotation } from '$lib/types';
  import SearchBar from '$components/LBSubmit/FormComponents/AttributePicker/SearchBar.svelte';
  import Header from './IdHeader.svelte';
  import IdItem from './IdItem.svelte';
  import IdFormField from './IdFormField.svelte';
  import { browser } from '$app/environment';

  export let cell: LBIdColumn;
  export let classes = '';
  export let open = false;
  export let inlineMode: boolean = false;
  export let forceLoad: boolean = false;
  export let selected: any | any[]; // comes from row_data;
  export let onClose: (selected: string) => void;

  let id = cell.id;
  if (cell.id === 'edit_permission' || cell.id === 'view_permission') {
    id = 'lb_role_id';
  }
  const tableName = id.replace('_id', '');
  let name = `${tableName}_name`;

  let items: Writable<any[]> = writable([]);

  let loading = false;
  let search_val = '';
  let listItems: any[] = [];

  const convertSelectedItems = () => {
    if (selected) {
      if (Array.isArray(selected)) {
        const ids = [];
        let updated = false;

        selected.forEach((element) => {
          if (typeof element === 'object') {
            ids.push(element[id]);

            if (!listItems.find((val) => val.id === element[id] && val.id)) {
              listItems.push(element);
              updated = true;
            }
          } else {
            ids.push(element);
          }
        });

        if (updated) {
          items.set(listItems);
        }

        selected = ids;
      } else if (typeof selected === 'object') {
        if (cell.schemaType === SchemaDataAnnotation.ARRAY) {
          selected = [selected[id]];
        } else {
          selected = selected[id];
        }
      }
    }
  };

  $: {
    selected;
    if (browser) {
      convertSelectedItems();
    }
  }

  $: {
    search_val;

    if ($items) {
      if (search_val !== '') {
        items.set(
          listItems.filter((item) => {
            if (item[name]) {
              return item[name].toLocaleLowerCase().includes(search_val.toLocaleLowerCase());
            }

            return false;
          })
        );
      } else {
        items.set(listItems);
      }
    }
  }

  $: {
    forceLoad;
    {
      if (forceLoad === true) {
        listItems = [];
        items.set(listItems);
        selected = null;
        search_val = '';
        loadInfo();
      }
    }
  }

  const loadInfo = async () => {
    if (cell && loading === false) {
      loading = true;

      if (cell.mapIdToItem && Object.keys(cell.mapIdToItem).length > 0) {
        const keys = Object.keys(cell.mapIdToItem);
        if (keys.length > 0) {
          listItems = [];
          keys.forEach((key) => {
            const item = cell.mapIdToItem[key];
            listItems.push(item);
          });
        }
      } else {
        listItems = await cell.loadIds();
      }

      if (listItems && listItems.length > 0) {
        const firstItem = listItems[0];
        if (!firstItem[name]) {
          if (firstItem['display']) {
            name = 'display';
          } else {
            name = id;
          }
        }
      }

      convertSelectedItems();

      loading = false;
      items.set(listItems);

      forceLoad = false;
    }
  };

  const onRemoveItem = (idToRemove: any) => {
    if (Array.isArray(selected)) {
      selected = selected.filter((element) => element !== idToRemove);
    }
  };

  const onItemSelected = (item: any) => {
    if (selected) {
      if (Array.isArray(selected)) {
        if (selected.find((element) => element === item[id])) {
          onRemoveItem(item[id]);
          return;
        } else {
          selected = [...selected, item[id]];
          return;
        }
      }
    } else {
      if (cell.schemaType === SchemaDataAnnotation.ARRAY) {
        selected = [];
        selected.push(item[id]);
        return;
      }
    }

    selected = item[id];
    open = false;

    if (onClose) {
      onClose(selected);
    }
  };

  const onClickOutside = () => {
    open = false;
  };

  const onToggleOpen = async () => {
    if (!cell.readOnly) {
      open = !open;
      if (open) {
        await loadInfo();
      }
    }
  };

  onMount(async () => {
    await loadInfo();

    if (!selected) {
      if (cell && cell.defaultIdValue) {
        if (listItems && listItems.length > 0) {
          for (let i = 0; i < listItems.length; i++) {
            const item = listItems[i];
            if (item[id] === cell.defaultIdValue.id || item[name] === cell.defaultIdValue.display) {
              onItemSelected(item);
              break;
            }
          }
        }
      }
    }
  });

  onDestroy(() => {
    open = false;
  });
</script>

{#if inlineMode}
  <div class="ag-filter-body-wrapper max-h-[300px] w-[250px] {classes}">
    <div class="relative top-0 h-fit w-full">
      <div class="flex h-8 items-center justify-center px-1 pt-2 pb-1">
        <div class="flex w-full items-center justify-between">
          <span class="ml-2 text-sm font-semibold text-gray-600">{cell.name ? cell.name : 'SELECT'}</span>
        </div>
      </div>

      <LBProgressBar bind:loading />
      <SearchBar bind:search_val />
    </div>

    <div id="richList" class="ag-virtual-list-viewport">
      {#each $items as item}
        <IdItem {id} {name} bind:item bind:selected {onItemSelected} />
      {/each}
    </div>
  </div>
{:else}
  <div class="relative">
    <IdFormField {id} {name} bind:loading bind:selected readOnly={loading || cell.readOnly} bind:listItems {onRemoveItem} {onToggleOpen} />

    {#if open}
      <div class="relative">
        <div class="selector-box-shadow absolute top-0 z-50 mb-4 w-[300px] overflow-hidden rounded border border-gray-400 bg-zinc-100" use:clickOutside={onClickOutside}>
          <Header title={cell ? cell.name : 'SELECT'} onClickClose={onClickOutside} />

          <LBProgressBar bind:loading />
          <SearchBar bind:search_val />

          <div class="max-h-[250px] w-full overflow-auto bg-gray-100">
            {#each $items as item}
              <IdItem {id} {name} bind:item bind:selected {onItemSelected} />
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}
