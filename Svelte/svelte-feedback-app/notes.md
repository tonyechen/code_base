# This repo follows a simple crash course of Svelte on YouTube
### link: https://www.youtube.com/watch?v=3TVy6GdtNuQ&t=1s
--- 
reactive value: kind of like state in React
```javascript
$: varName = some values that can be changed
```

if-else statements:
```javascript
{#if has homework }
    <h1>Me Sad</h1>
{:else}
    <h1>Me Happy</h1>
{/if}
```

loop:
```javascript
{#each items as item (item.key)} // set a key like for components in React
    <h1></h1>
{/each}
```

## Props:
parent component:
```html
<ChildComponent prop={prop}>
```

child component:
```html
<script>
    export let prop
</script>
```