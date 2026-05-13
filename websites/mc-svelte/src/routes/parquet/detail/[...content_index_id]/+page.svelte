<script lang="ts">
  //table page
  import { page } from '$app/stores';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type ParquetSectionType } from '../../+layout.svelte';
  import AccordionItem from '$components/Accordion/AccordionItem.svelte';
  import { Accordion } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import { LogDetailQueryService } from '$mc/duckdb/duckdb-file-query.service';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { writable, type Writable } from 'svelte/store';
  import { duckDbFileDetailTableConfig } from '$src/mc/config/duckdb.config';
  import DataSection from '$assets/svg/file_detail_data_section.svg';
  import LogSection from '$assets/svg/file_detail_log_section.svg';
  import { ParquetFileDetailQueryService } from '$src/mc/parquet/parquet-file-query.service';

  const { getSectionData, baseUrl } = getContext(AtomicSection) as any;
  const content_index_id = $page.params.content_index_id;
  const lastSection = getSectionData($page.url.pathname) as ParquetSectionType;
  const items = Array(3);

  let fileDetailQueryService;
  let fileDetailColumnService: Writable<ColumnService>;

  let logDetailQueryService;
  let logDetailColumnService: Writable<ColumnService>;

  if (lastSection) {
    fileDetailQueryService = new ParquetFileDetailQueryService(content_index_id, lastSection.atomic_key, lastSection.atomic_type);
    fileDetailQueryService.columnService.setDefaultConfig(duckDbFileDetailTableConfig);
    fileDetailColumnService = writable(fileDetailQueryService.columnService);

    logDetailQueryService = new LogDetailQueryService(content_index_id);
    logDetailColumnService = writable(logDetailQueryService.columnService);
  }

  onMount(async () => {
    if (!lastSection) {
      await goto(baseUrl);
    }
  });
</script>

{#if lastSection && fileDetailQueryService && $fileDetailColumnService}
  <div class="flex h-full w-full flex-col border-t border-gray-200 bg-white p-4">
    <div class="flex w-full flex-wrap">
      <span class="text-normal text-md mr-4">File Name: {lastSection.file_name}</span>
      <span class="text-normal text-md mr-4">Atomic Key: {lastSection.atomic_key}</span>
      <span class="text-normal text-md mr-4">Atomic Type: {lastSection.atomic_type}</span>
    </div>

    <Accordion multiple flush={true}>
      <AccordionItem bind:open={items[0]}>
        <div slot="header" class="flex flex-row items-center">
          <img src={DataSection} class="h-7 w-7" alt="" />
          <spna class="ml-4">Data Section</spna>
        </div>

        <div class="flex h-[40vh] w-full flex-col border border-gray-300 bg-white">
          <LBDataTable queryService={fileDetailQueryService} bind:columnService={$fileDetailColumnService} defaultClass={'flex h-full w-full flex-col'} />
        </div>
      </AccordionItem>
      <AccordionItem bind:open={items[1]}>
        <div slot="header" class="flex flex-row items-center">
          <img src={LogSection} class="h-7 w-7" alt="" />
          <spna class="ml-4">Log Section</spna>
        </div>

        <div class="flex h-[40vh] w-full flex-col border border-gray-300 bg-white">
          <LBDataTable queryService={logDetailQueryService} bind:columnService={$logDetailColumnService} defaultClass={'flex h-full w-full flex-col'} />
        </div>
      </AccordionItem>
    </Accordion>
  </div>
{/if}
