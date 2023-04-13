<script setup lang="ts">
    import Button from './Button.vue';

    const props = defineProps ({
        image: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="info-card">
        <div class="head">
            <div class="circles-wrap">
                <div class="circle-button"></div>
                <div class="circle-button"></div>
            </div>

            <div class="head-name">
                <p>
                    <slot name="head-text">Head text</slot>
                </p>    
            </div>
        </div>

        <div class="img-wrap">
            <img class="info-img" :style="{ backgroundImage: `url(${image})` }">
        </div>

        <div class="info-desc">
            <h1><slot name="desc-heading">Heading</slot></h1>
            <p><slot name="desc-text">Description</slot></p>
            <Button class="info-button">Read more</Button>
        </div>

    </div>
</template>

<style lang = "scss">
    .info-card {
        border: 4px solid var(--clr-secondary);
        width: 46%;
        box-shadow: 0.75em 0.75em 0px var(--clr-secondary);
        overflow: wrap;
        background-color: var(--clr-primary);

        .head {
            display: flex;
            flex-direction: row;
            border-bottom: 4px solid var(--clr-secondary);
            padding: 1.5em;

            .circles-wrap {
                display: flex;
                flex-direction: row;
                
                .circle-button {
                    width: 1.5em;
                    height: 1.5em;
                    margin-right: 0.5em;
                    border: 4px solid var(--clr-secondary);
                    border-radius: 50%;
                }
            }

            .head-name {
                display: flex;
                flex-direction: row;
                align-content: center;
                justify-content: center;    
                width: 80%;
            }
        }

        .img-wrap {
            aspect-ratio: 4.3 / 1;
            border-bottom: 4px solid var(--clr-secondary);
            background-color: var(--clr-secondary);

            .info-img {
                aspect-ratio: 4.3 / 1;
                overflow: hidden;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 100%;
                vertical-align: middle;
                filter: grayscale(100%) opacity(60%) contrast(100%);
            }
        }

        .info-desc {
            padding: 1.5em;
            margin-top: 1.5em;
            // white-space

            h1 {
                margin-bottom: 0.5em;
            }

            p {
                margin-bottom: 1em;
            }

            .info-button {
                margin-top: 2em;
                margin-bottom: 1em;
            }
        }
    }
</style>