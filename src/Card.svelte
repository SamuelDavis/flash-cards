<article>
  <header><slot name="header" /></header>
  <slot />
</article>

<style lang="css">
  :root {
    --background-color: whitesmoke;

    --header-height: 2em;

    --margin-end: 1em;
    --margin-gap: 1px;
    --margin-color: red;
    --margin-right: 0.25em;

    --line-width: 1px;
    --line-color: blue;
  }

  article {
    min-width: min-content;
    width: fit-content;
    border-radius: 10px;
    /*box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.25);*/
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
    padding-left: calc(var(--margin-end) + var(--margin-right));
    padding-right: var(--margin-right);
    background-color: var(--background-color);
    background-image: /* margin */ linear-gradient(
        to right,
        transparent 0
          calc(
            var(--margin-end) - var(--line-width) * 2 - var(--margin-gap) * 1
          ),
        var(--margin-color)
          calc(
            var(--margin-end) - var(--line-width) * 2 - var(--margin-gap) * 1
          )
          calc(
            var(--margin-end) - var(--line-width) * 1 - var(--margin-gap) * 1
          ),
        transparent
          calc(
            var(--margin-end) - var(--line-width) * 1 - var(--margin-gap) * 1
          )
          calc(
            var(--margin-end) - var(--line-width) * 1 - var(--margin-gap) * 0
          ),
        var(--margin-color)
          calc(
            var(--margin-end) - var(--line-width) * 1 - var(--margin-gap) * 0
          )
          calc(
            var(--margin-end) - var(--line-width) * 0 - var(--margin-gap) * 0
          ),
        transparent
          calc(
            var(--margin-end) - var(--line-width) * 0 - var(--margin-gap) * 0
          )
      ),
      /* header */
        linear-gradient(
          to bottom,
          var(--background-color) 0 var(--header-height),
          transparent var(--header-height)
        ),
      /* lines */
        repeating-linear-gradient(
          to bottom,
          var(--line-color) 0 var(--line-width),
          transparent var(--line-width) 1em
        );
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-height: var(--header-height);
  }
</style>
