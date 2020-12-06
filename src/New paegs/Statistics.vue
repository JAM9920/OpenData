<template>
    <div class="stats--container p-3">
        <b-card title="Average number of cars in Tashkent" class="main-card mb-3">
            <lineeg :data="[330000, 340000, 350000, 380000, 417000]" :color="'#ed0f51'"></lineeg>
        </b-card>
        <b-card title="Average hours of traffic jam in Tashkent" class="main-card mb-3">
            <lineeg :data="[33, 37, 41, 47, 55]" :color="'rgb(159, 213, 224)'"></lineeg>
            <!-- <bar></bar> -->
        </b-card>
        <!-- <div class="row">
            <div class="col-6">
                <b-card title="Average number of cigarettes per month" class="main-card mb-3">
                    <bar></bar>
                </b-card>
            </div>
            <div class="col-6">
                <b-card title="Average litres of alcohol per month" class="main-card mb-3">
                    <radar></radar>
                </b-card>
            </div>
        </div> -->
    </div>
</template>

<script>
    import lineeg from '../DemoPages/Charts/Chartjs/Line'
    import bar from '../DemoPages/Charts/Chartjs/Bar'
    import radar from '../DemoPages/Charts/Chartjs/Radar'
    export default {
        components: {
            lineeg,
            bar,
            radar,
        },
        data: () => ({
            tabDetail: {},
            modal: {},
            form: {
                select: null
            },
            tabs: [
                {
                    tab: 1,
                    icon: 'pe-7s-paint-bucket',
                    title: 'directory'
                },
                {
                    tab: 2,
                    icon: 'pe-7s-bandaid',
                    title: 'directory'
                },
                {
                    tab: 3,
                    icon: 'pe-7s-car',
                    title: 'directory'
                },
                {
                    tab: 4,
                    icon: 'pe-7s-diamond',
                    title: 'directory'
                },
            ],
            tabContent: [
                {
                    tab: 1,
                    title: 'directory'
                },
                {
                    tab: 2,
                    title: 'directory'
                },
                {
                    tab: 3,
                    title: 'directory'
                },
                {
                    tab: 4,
                    title: 'directory'
                },
            ],
            heading: 'Form Controls',
            subheading: 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.',
            icon: 'pe-7s-display1 icon-gradient bg-premium-dark',
        }),
        methods: {
            deleteData() {
                console.log(this.modal)
                this.$bvModal.hide('bv-modal-example')
            }
        },
    }
</script>
