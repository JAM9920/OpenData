<template>
    <div class="custom-main--container">
        <div class="custom-card map-header">
            
            <div class="week-days">
                <div :class="['day', {'active': day.long == selectedDay}]" v-for="day in weekDays" :key="day.short" @click="onDayClick(day.long)">
                    {{day.short}}
                </div>
            </div>


            <div class="day-times mb-0">
                <div :class="['time', {'active': time.filter == selectedTime}]" v-for="time in dayTimes" :key="time.filter" @click="onTimeClick(time.filter)">
                    {{time.title}}
                </div>
            </div>
        </div>


        <div class="custom-card map-center p-0">
            <div class="district-maps">
                <div class="row" v-if="dataList">
                    <div class="col-6" v-for="item in dataList" :key="item.id">
                        <div class="district">
                            <div class="district-title">
                                {{item && item.district && item.district.name}}
                            </div>
                            <img :src="item.image" alt="" class="district-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="custom-card map-footer mb-3">

            <div class="map" id="map"></div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.mapRender()
            this.getList()
            this.fetchList()
        },
        data() {
            return {
                imgList: [],
                districtList: [],

                selectedDay: 'Monday',
                selectedTime: "8-10",
                weekDays: [
                    {
                        short: 'Mon',
                        long: 'Monday'
                    },
                    {
                        short: 'Tue',
                        long: 'Tuesday'
                    },
                    {
                        short: 'Wed',
                        long: 'Wednesday'
                    },
                    {
                        short: 'Thu',
                        long: 'Thursday'
                    },
                    {
                        short: 'Fri',
                        long: 'Friday'
                    },
                    {
                        short: 'Sat',
                        long: 'Saturday'
                    },
                    {
                        short: 'Sun',
                        long: 'Sunday'
                    }
                ],
                dayTimes: [
                    {
                        filter: '8-10',
                        title:'8:00 - 10:00'
                    },
                    {
                        filter: '10-12',
                        title: '10:00 - 12:00'
                    },
                    {
                        filter: '12-14',
                        title: '12:00 - 14:00'
                    },
                    {
                        filter: '14-16',
                        title: '14:00 - 16:00'
                    },
                    {
                        filter: '16-18',
                        title: '16:00 - 18:00'
                    },
                    {
                        filter: '18-20',
                        title: '18:00 - 20:00'
                    },
                    {
                        filter: '20-22',
                        title: '20:00 - 22:00'
                    }
                ],
                dataList: []
            }
        },
        computed: {
            imgFilter() {
                return this.imgList.filter(item => (item.period == this.selectedTime && item.day == this.selectedDay))
            }
        },
        methods: {
            fetchList() {
                this.$store.dispatch('getDistrictsData', {day: this.selectedDay, period: this.selectedTime})
                    .then((result) => {
                        this.dataList = result
                    }).catch((err) => {
                        console.log("Districts err", err)
                    });
            },
            // imgFilter(districtId) {
            //     let timeList = this.imgList.filter(item => item.period == this.selectedTime)

            //     let obj = timeList.find(item => item.district.id == districtId)

            //     console.log("Images", timeList, obj)

            //     return obj.image || ''
            // },
            getList() {
                this.$store.dispatch('getDistricts', {})
                    .then((result) => {
                        this.districtList = result
                        // console.log("Districts", result)
                    }).catch((err) => {
                        console.log("Districts err", err)
                    });


                this.$store.dispatch('getDistrictsData', {})
                    .then((result) => {
                        this.imgList = result
                        // console.log("Districts data", result)
                        
                    }).catch((err) => {
                        console.log("Districts err", err)
                    });
            },
            mapRender() {
                ymaps.ready(function () {

                    var map = new ymaps.Map('map', {
                            center: [429.248418, 41.346789],
                            zoom: 15,
                            controls: ['zoomControl']
                        }),
                        objectManager = new ymaps.ObjectManager();
                    let json = {
                        "type": "FeatureCollection",
                        "features": [
                        {
                            "type": "Feature",
                            "id": 2,
                            "geometry": {
                            "coordinates": [
                                [
                                    429.251787,
                                    41.348158
                                ],
                                [
                                    429.247071,
                                    41.347969
                                ],
                                [
                                    429.219512,
                                    41.350139
                                ],
                                [
                                    429.218481,
                                    41.349881
                                ],
                                [
                                    429.193125,
                                    41.325328
                                ]
                            ],
                            "type": "LineString"
                            },
                            "properties": {
                            "name": "Линия 3"
                            }
                        },
                        ]
                    }

                    if(json) {
                        // console.log("object", json)

                        json.features.forEach(function (obj) {
                            // Setting the balloon content.
                            obj.properties.balloonContent = obj.properties.name;
                            // Setting a preset for placemarks with the iconCaption field.
                            if (obj.properties.iconCaption) {
                                obj.options = {
                                    preset: "islands#greenDotIconWithCaption"
                                }
                            }
                        });
                        // Adding JSON object descriptions to the object manager.
                        objectManager.add(json);
                        // Adding objects to the map.
                        map.geoObjects.add(objectManager);
                    }
                        
                });

            },
            onDayClick(long) {
                this.selectedDay = long
                this.fetchList()
            },
            onTimeClick(index) {
                this.selectedTime = index
                this.fetchList()
            }
        },
    }
</script>

<style>

.district-title {
    font-size: 20px;
    margin-bottom: 20px;
}

html{
    background-color: #f1f4f6;
}
    .district {
        min-height: 100px;
        width: 100%;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 10px;

        border: 1px solid rgba(53, 94, 74, 0.125);
    }

    .district-maps .row .col-6:nth-child(3) .district, .district-maps .row .col-6:nth-child(4) .district {
        margin-top: 20px;
    }


    .district-img {
        width: 100%;
        height: 500px;
    }
    

    .custom-card {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(53, 94, 74, 0.125);
        border-radius: 0.25rem; 
    }

    .custom-card.map-center {
        background-color: transparent;
        border: none;
    }

    .custom-card.map-header, .custom-card.map-center, .custom-card.map-footer {
        padding: 40px 100px;
        height: auto;
        margin-bottom: 30px;
    }

    .map-page {
        padding: 30px 80px;
        min-height: 100%;
        height: unset;
    }

    .map {
        width: 100%;
        height: 400px;
        margin: 20px auto 0;
        background-color: aquamarine;
    }

    .week-days, .day-times {
        display: flex;
        width: 100%;

        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .week-days .day {
        width: 80px;
        height: 80px;

        font-size: 20px;
    }

    .day-times .time {
        width: 60px;
        height: 60px;
    }

    .week-days .day, .day-times .time {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f1f1f1;
        text-align: center;

        cursor: pointer;
    }

    .week-days .day.active, .day-times .time.active {
        background-color: #7fffd4;
    }
</style>