<template>
    <div>
        <h5>API</h5>

        <pre>{{ data }}</pre>

        
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/foo')    
</script>