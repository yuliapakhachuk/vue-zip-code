<script setup>
    const props = defineProps({
        rgn: Object
    })
</script>

<template>
    <div class="card w-75">
        <div class="card-body">
            <h5 class="card-title">
                ZIP-code information
            </h5>
            <p class="card-text">
                State: {{ rgn["state"] }}
            </p>
            <p class="card-text">
                City: {{ rgn["city"] }}
            </p>
            <a href="#" class="btn btn-primary">
                Return to Home Page
            </a>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
