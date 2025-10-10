<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px">
    <h1>Shadcn-Vue Demo</h1>
    <p>This page demonstrates the Shadcn-Vue button component integration.</p>

    <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px">
      <h2>Button Variants</h2>
      <div style="display: flex; gap: 10px; flex-wrap: wrap">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <h2>Button Sizes</h2>
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  </div>
</template>
