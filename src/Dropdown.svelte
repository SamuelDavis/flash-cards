<script lang="ts">
  export let text: string;

  let el: HTMLDivElement = null;
  let visible = false;

  function onShow() {
    visible = true;
  }

  function onHide(e: Event & { target: HTMLElement }) {
    visible = isElement(el, e.target);
  }

  function isElement(root: Element, check: Element) {
    return (
      root === check ||
      Array.from(root.children).some((child) => isElement(child, check))
    );
  }
</script>

<svelte:window on:click={onHide} />

<div bind:this={el}>
  <button on:click={onShow}>{text}</button>
  {#if visible}
    <aside><slot /></aside>
  {/if}
</div>

<style lang="css">
  div {
    position: relative;
  }

  aside {
    position: absolute;
  }
</style>
