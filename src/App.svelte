<script lang="ts">
  import type { FlashCardData, ReaderEvent, UploadEvent } from "./types";

  import { writable } from "svelte/store";
  import { validateFlashCardsFileContent } from "./FlashCardDataError";
  import Card from "./Card.svelte";
  import Dropdown from "./Dropdown.svelte";

  const cards = writable<FlashCardData>([]);
  const reader = new FileReader();
  reader.addEventListener("load", onRead);

  let fileInput: HTMLInputElement = null;

  function onRead(e: ReaderEvent) {
    const data = JSON.parse(e.target.result.toString());
    try {
      validateFlashCardsFileContent(data);
    } catch (e) {
      alert(e.message);
      throw e;
    }
    $cards = data;
  }

  function onUpload(e: UploadEvent) {
    const [upload = null]: File[] = e.target.files;
    if (upload) reader.readAsBinaryString(upload);
    else onClear();
  }

  function onClear() {
    $cards = [];
    fileInput.value = null;
  }
</script>

<header>
  <div>
    <label for="cards">Cards JSON File</label>
    {#if !!fileInput?.value}
      <input
        type="button"
        value="&times;"
        title="clear cards"
        on:click={onClear}
      />
    {/if}
    <input
      bind:this={fileInput}
      type="file"
      accept="application/json"
      id="cards"
      on:change={onUpload}
    />
  </div>
  <Dropdown text="Decks">
    <nav>
      <a href="/vim.json" download="vim.json">Vim</a>
    </nav>
  </Dropdown>
</header>
<hr />
<main>
  {#each $cards as card}
    <Card>
      <h1 slot="header">{card.heading}</h1>
      <dl>
        {#each card.items as { description, answers }}
          <dt>{description}</dt>
          {#each answers as answer}
            <dd><kbd>{answer.join("")}</kbd></dd>
          {/each}
        {/each}
      </dl>
    </Card>
  {/each}
</main>

<style lang="css">
  :root {
    --num-columns: 3;
  }

  :global(*:not(html, body)) {
    font-size: 16px;
    line-height: 16px;
  }

  h1,
  dl {
    padding: 0;
    margin: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main {
    column-count: var(--num-columns);
  }

  @media (max-width: 750px) {
    :root {
      --num-columns: 2;
    }
  }

  @media (max-width: 550px) {
    :root {
      --num-columns: 1;
    }
  }

  :global(main > *) {
    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
    margin-bottom: 1em;
  }

  nav {
    border: 1px solid black;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
</style>
