<template>
    <div class="card" @click="popup = true">
        <p class="card__title">{{ title }}</p>
        <p class="card__desc">{{ desc }}</p>

        <teleport to="#app">
            <div class="overlay" v-if="popup" @click="popup = false">
                <div class="popup-card">    
                    <p class="popup-card__title">{{ title }}</p>
                    <p class="popup-card__desc">{{ desc }}</p>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    props: ['title', 'desc'],
    data: () => ({
        popup: false
    })
}
</script>

<style scoped>
.card {
    padding: 1rem;
    height: 5.6rem;
    border: 1px solid #42b983;
    cursor: pointer;
    overflow: hidden;
}

.card__title {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.card__desc {
    font-size: 0.7rem;
    font-weight: 400;
    height: 1.6rem;
    overflow: hidden;
}

.popup-card {
    padding: 2rem;
    width: 60%;
    height: 60%;
    text-align: left;
    background-color: #fff;
    overflow-y: scroll;
}

.popup-card__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.popup-card__desc {}
</style>
