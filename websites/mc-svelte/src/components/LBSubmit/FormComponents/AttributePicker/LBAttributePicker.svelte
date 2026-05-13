<script lang="ts">
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import { onDestroy, onMount } from 'svelte';
  import type { ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
  import { ATTRIBUTE_ARRAY_SCHEMA_TYPES } from '$lib/types';
  import { clickOutside } from 'svelte-use-click-outside';
  import AttributeItem from './AttributeItem.svelte';
  import SearchBar from './SearchBar.svelte';
  import Header from './Header.svelte';
  import FormField from './FormField.svelte';
  import { browser } from '$app/environment';
  import type { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
  import AddNewButton from '../AddNewButton.svelte';
  import AddNewAttribute from './AddNewAttribute.svelte';
  import { isEmpty } from 'lodash-es';

  export let cell: LBAttrColumn;
  export let open = false;
  export let forceLoad: boolean = false;
  export let inlineMode: boolean = false;
  export let classes = '';

  export let selected: any | any[];
  export let placeholder: string = 'Select';
  export let onClose: (selected: string) => void;
  export let enableToAddNew = false;

  let parentItem: ATTRIBUTE_ITEM_TYPE;
  let parentChain: ATTRIBUTE_ITEM_TYPE[] = [];
  let multiSelect = ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(cell.schemaType);

  let loading = false;
  let search_val = '';
  let mapItems: Record<string, ATTRIBUTE_ITEM_TYPE> = {};
  let idField = cell.attributeIdField;
  let readOnly = cell.readOnly;
  let isAddNew = false;

  let keyItemsToDisplay = [];
  const convertSelectedItems = () => {
    if (selected) {
      if (Array.isArray(selected)) {
        let ids = [];

        selected = selected.filter((item) => item !== '' && item !== 'null');
        selected.forEach((element) => {
          const id = typeof element === 'object' ? element[idField] : element;
          ids.push(id);

          if (typeof element === 'object' && !mapItems[id]) {
            mapItems[id] = element;
          }
        });

        selected = ids;
      } else if (typeof selected === 'object') {
        const id = selected[idField];
        if (multiSelect) {
          if (!mapItems[id]) {
            mapItems[id] = selected;
          }
          selected = [idField];
        } else {
          mapItems[id] = selected;
          selected = selected[idField];
        }
      }
    }
  };

  $: {
    cell;
    multiSelect = ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(cell.schemaType) && cell.multiSelectEnabled !== false;
    readOnly = cell.readOnly;
  }

  const isContainSearchVal = (item: ATTRIBUTE_ITEM_TYPE) => {
    if (search_val !== '') {
      let find = false;
      if (item[idField] && typeof item[idField] === 'string') {
        find = item[idField].toLocaleLowerCase().includes(search_val.toLocaleLowerCase());
      }

      if (item.display) {
        find ||= item.display.toLocaleLowerCase().includes(search_val.toLocaleLowerCase());
      }

      return find;
    }

    return true;
  };

  $: {
    search_val;
    keyItemsToDisplay = [];
    const keys = Object.keys(mapItems);
    keys.forEach((key) => {
      if (search_val !== null && isContainSearchVal(mapItems[key])) {
        keyItemsToDisplay.push(key);
      }
    });
  }

  $: {
    forceLoad;
    {
      if (forceLoad === true) {
        isAddNew = false;
        mapItems = {};
        selected = null;
        search_val = '';
        loadInfo();
      }
    }
  }

  $: {
    selected;
    if (browser) {
      convertSelectedItems();
    }
  }

  const loadInfo = async (item: ATTRIBUTE_ITEM_TYPE = null) => {
    if (loading === false) {
      loading = true;
      const listItems = await cell.loadAttributes(item);
      mapItems = {};
      idField = cell.attributeIdField;
      listItems.forEach((element) => (mapItems[element[idField]] = element));

      if (!item) {
        parentChain = [];
        parentItem = null;
      }

      loading = false;
      forceLoad = false;
    }
  };

  const onRemoveItem = (item: any) => {
    if (!readOnly) {
      if (multiSelect) {
        const itemToFind = typeof item === 'object' ? item[idField] : item;
        if (selected && Array.isArray(selected)) {
          if (item) {
            selected = selected.filter((val) => val !== itemToFind);
          }
        }
      }
    }
  };

  const onItemSelected = (item: any) => {
    const itemToFind = typeof item === 'object' ? item[idField] : item;

    if (multiSelect) {
      if (selected && Array.isArray(selected)) {
        const find = selected.find((element) => element === itemToFind);

        if (find) {
          onRemoveItem(item);
          return;
        }
      }

      if (selected) {
        selected = [...selected, itemToFind];
      } else {
        selected = [itemToFind];
      }

      return;
    }

    open = false;
    selected = itemToFind;

    if (onClose) {
      onClose(selected);
    }
  };

  const handleClickChevron = async (item: ATTRIBUTE_ITEM_TYPE) => {
    parentChain = [...parentChain, item];
    parentItem = item;
    await loadInfo(item);
  };

  const onClickPrev = async (item: ATTRIBUTE_ITEM_TYPE) => {
    if (parentChain.includes(item)) {
      parentChain = parentChain.filter((val) => val !== item);
      parentItem = parentChain.length > 0 ? parentChain[parentChain.length - 1] : null;
      await loadInfo(parentItem);
    }
  };

  const onClickOutside = () => {
    open = false;
  };

  const onToggleOpen = async () => {
    if (!readOnly) {
      open = !open;
      if (open) {
        await loadInfo();
      }
    }
  };

  const onAddNewAttribute = async () => {
    isAddNew = true;
  };

  onMount(async () => {
    isAddNew = false;

    if (multiSelect && !selected) selected = [];

    if (inlineMode) {
      await loadInfo();
    } else {
      if (open) {
        await loadInfo();
      }
    }

    if (!selected) {
      if (cell && cell.defaultAttributeValue) {
        if (mapItems) {
          const keys = Object.keys(mapItems);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const item = mapItems[key];
            if (item[idField] === cell.defaultAttributeValue.value) {
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
      <Header bind:cell bind:inlineMode bind:parentItem bind:idField {onClickPrev} onClickClose={() => {}} />
      <LBProgressBar bind:loading />
      <SearchBar bind:search_val />
    </div>

    {#if isAddNew}
      <AddNewAttribute
        bind:selected
        bind:loading
        on:cancel={() => {
          isAddNew = false;
        }}
      />
    {:else}
      <div id="richList" class="ag-virtual-list-viewport max-h-[200px] min-h-[200px]">
        {#if keyItemsToDisplay.length > 0}
          {#each keyItemsToDisplay as key}
            <AttributeItem bind:item={mapItems[key]} bind:selected bind:idField {onItemSelected} {handleClickChevron} />
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
    <FormField bind:selected bind:mapItems bind:readOnly bind:placeholder {onRemoveItem} {onToggleOpen} />
    {#if open}
      <div class="relative z-50">
        <div class="selector-box-shadow absolute top-0 mb-4 w-[300px] overflow-hidden rounded border border-gray-400 bg-zinc-100" use:clickOutside={onClickOutside}>
          <Header bind:cell bind:inlineMode bind:parentItem bind:idField {onClickPrev} onClickClose={onClickOutside} />
          <LBProgressBar bind:loading />
          <SearchBar bind:search_val />

          {#if isAddNew}
            <AddNewAttribute
              bind:selected
              bind:loading
              on:cancel={() => {
                isAddNew = false;
              }}
            />
          {:else}
            <div class="max-h-[250px] w-full overflow-auto bg-gray-100">
              {#if keyItemsToDisplay.length > 0}
                {#each keyItemsToDisplay as key}
                  <AttributeItem bind:item={mapItems[key]} bind:selected bind:idField {onItemSelected} {handleClickChevron} />
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
