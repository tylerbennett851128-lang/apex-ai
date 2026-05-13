<script lang="ts">
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import { clickOutside } from 'svelte-use-click-outside';
  import { onDestroy, onMount } from 'svelte';
  import upDownArrow from '$assets/svg/up-down-arrow.svg';
  import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
  import { writable, type Writable } from 'svelte/store';
  import SchemaIdItem from './SchemaIdItem.svelte';
  import SearchBar from '$components/LBSubmit/FormComponents/AttributePicker/SearchBar.svelte';
  import Header from './IdHeader.svelte';
  import AddNewButton from '../AddNewButton.svelte';
  import AddNewID from './AddNewID.svelte';
  import { isEmpty } from 'lodash-es';
  export let cell: LBSchemaIdColumn;
  export let classes = '';
  export let open = false;
  export let selected: any; // comes from row_data;
  export let inlineMode: boolean = false;
  export let forceLoad: boolean = false;
  export let onClose: (selected: string) => void;
  export let enableToAddNew = true;

  const id = cell.id;
  let name = 'display';
  const alias = 'lb_column';

  let items: Writable<any[]> = writable([]);

  let loading = false;
  let search_val = '';
  let listItems: any[] = [];
  let isAddNew = false;

  $: {
    search_val;

    if ($items) {
      if (search_val !== '') {
        items.set(
          listItems.filter((item) => {
            let find = false;
            if (item[name]) {
              find = item[name].toLocaleLowerCase().includes(search_val.toLocaleLowerCase());
            }

            if (item[alias]) {
              find ||= item[alias].toLocaleLowerCase().includes(search_val.toLocaleLowerCase());
            }
            return find;
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
        isAddNew = false;
        items.set(listItems);
        selected = null;
        search_val = '';
        loadInfo();
      }
    }
  }

  const onAddNewAttribute = async () => {
    isAddNew = true;
  };

  const loadInfo = async () => {
    if (loading === false) {
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
          name = 'lb_column';
        }
      }

      loading = false;
      items.set(listItems);
      forceLoad = false;
    }
  };

  const getSelectedItemName = () => {
    const selectedItem = listItems.find((element) => element[id] === selected);
    return selectedItem ? selectedItem[name] : 'Select';
  };

  const onItemSelected = (item: any) => {
    open = false;
    selected = item[id];

    if (onClose) {
      onClose(selected);
    }
  };

  const toggleOpen = async () => {
    if (!cell.readOnly) {
      open = !open;
      if (open) {
        await loadInfo();
      }
    }
  };

  const onClickOutside = () => {
    open = false;
  };

  onMount(async () => {
    isAddNew = false;
    await loadInfo();
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

    {#if isAddNew}
      <AddNewID
        bind:selected
        bind:loading
        on:cancel={() => {
          isAddNew = false;
        }}
      />
    {:else}
      <div id="richList" class="ag-virtual-list-viewport">
        {#if $items.length > 0}
          {#each $items as item}
            <SchemaIdItem {id} {name} {alias} bind:item bind:selected {onItemSelected} />
          {/each}
        {:else if enableToAddNew && !isEmpty(search_val)}
          <div class="flex w-full items-center px-4 py-2">
            <AddNewButton on:addNew={onAddNewAttribute} />
          </div>
        {/if}
      </div>
    {/if}
  </div>
{:else}
  <div class="relative">
    <div class="flex h-10 w-full flex-row overflow-hidden rounded border border-gray-400 py-2 pl-3 pr-10 text-sm shadow-sm {cell.readOnly || loading ? 'bg-[#f2f2f2]' : 'bg-white hover:cursor-pointer'} {classes}" on:click|stopPropagation={toggleOpen}>
      <div class="flex h-full items-center overflow-hidden">
        <span>{selected && listItems.length > 0 ? getSelectedItemName() : 'Select'}</span>
      </div>

      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <img src={upDownArrow} class="h-5 w-5" alt="" />
      </div>
    </div>

    {#if open}
      <div class="relative">
        <div class="selector-box-shadow absolute top-0 z-50 mb-4 w-[300px] overflow-hidden rounded border border-gray-400 bg-zinc-100" use:clickOutside={onClickOutside}>
          <Header title={cell ? cell.name : 'SELECT'} onClickClose={onClickOutside} />
          <LBProgressBar bind:loading />
          <SearchBar bind:search_val />

          {#if isAddNew}
            <AddNewID
              bind:selected
              bind:loading
              on:cancel={() => {
                isAddNew = false;
              }}
            />
          {:else}
            <div class="max-h-[250px] w-full overflow-auto bg-gray-100">
              {#if $items.length > 0}
                {#each $items as item}
                  <SchemaIdItem {id} {name} {alias} bind:item bind:selected {onItemSelected} />
                {/each}
              {:else if enableToAddNew && !isEmpty(search_val)}
                <div class="flex w-full items-center px-4 py-2">
                  <AddNewButton on:addNew={onAddNewAttribute} />
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
{/if}
