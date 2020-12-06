<template>
    <div>
        <div class="h-100 bg-premium-dark">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h5 class="modal-title">
                                    <h4 class="mt-2">
                                        <div>Welcome,</div>
                                        <span>It only takes a <span class="text-success">few seconds</span> to create your account</span>
                                    </h4>
                                </h5>
                                <div class="divider"/>
                                <div class="row">
                                    <div class="col-6">
                                        <b-form-group id="exampleInputGroup1"
                                                    label-for="exampleInput1">
                                            <b-form-input id="exampleInput1"
                                                        type="text"
                                                        v-model="form.name"
                                                        required
                                                        placeholder="Enter fullname...">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup12"
                                                    label-for="exampleInput12">
                                            <b-form-input id="exampleInput12"
                                                        type="text"
                                                        v-model="form.username"
                                                        required
                                                        placeholder="Enter username...">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup2"
                                                        label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                            type="password"
                                                            v-model="form.password"
                                                            required
                                                            placeholder="Enter password...">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup1"
                                                    label-for="exampleInput1">
                                            <b-form-input id="exampleInput1"
                                                        type="email"
                                                        v-model="form.email"
                                                        required
                                                        placeholder="Enter email...">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup1"
                                                    label-for="exampleInput1">
                                            <b-form-input id="exampleInput1"
                                                        type="text"
                                                        v-model="form.phone_number"
                                                        required
                                                        placeholder="Enter phone number...">
                                            </b-form-input>
                                        </b-form-group>
                                        
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <v-select
                                                placeholder="Region"
                                                class="form-select"
                                                :options="regionList"
                                                v-model="form.region"
                                                label="name"
                                                :reduce="item => item.id"
                                            >
                                                <template slot="no-options">
                                                    <span v-if="!fetching">No match</span>
                                                    <Spinner
                                                        v-else
                                                        :mini="true"
                                                    />
                                                </template>
                                            </v-select>
                                        </div>
                                        <div class="form-group">
                                            <v-select
                                                :disabled="!form.region"
                                                placeholder="City"
                                                class="form-select"
                                                :options="cityByRegion"
                                                v-model="form.city"
                                                label="name"
                                                :reduce="item => item.id"
                                            >
                                                <template slot="no-options">
                                                    <span v-if="!fetching">No match</span>
                                                    <Spinner
                                                        v-else
                                                        :mini="true"
                                                    />
                                                </template>
                                            </v-select>
                                        </div>
                                        <div class="form-group">
                                            <v-select
                                                :disabled="!form.city"
                                                placeholder="District"
                                                class="form-select"
                                                :options="districtByCity"
                                                v-model="form.district"
                                                label="name"
                                                :reduce="item => item.id"
                                            >
                                                <template slot="no-options">
                                                    <span v-if="!fetching">No match</span>
                                                    <Spinner
                                                        v-else
                                                        :mini="true"
                                                    />
                                                </template>
                                            </v-select>
                                        </div>
                                        <div class="form-group">
                                            <v-select
                                                :disabled="!form.district"
                                                placeholder="Streeet"
                                                class="form-select"
                                                :options="streetByDistrict"
                                                v-model="form.street"
                                                label="name"
                                                :reduce="item => item.id"
                                            >
                                                <template slot="no-options">
                                                    <span v-if="!fetching">No match</span>
                                                    <Spinner
                                                        v-else
                                                        :mini="true"
                                                    />
                                                </template>
                                            </v-select>
                                        </div>
                                        <div class="form-group">
                                            <v-select
                                            :disabled="!form.street"
                                            placeholder="Building"
                                            class="form-select"
                                            :options="buildingByStreet"
                                            v-model="form.building"
                                            label="name"
                                            :reduce="item => item.id"
                                        >
                                            <template slot="no-options">
                                                <span v-if="!fetching">No match</span>
                                                <Spinner
                                                    v-else
                                                    :mini="true"
                                                />
                                            </template>
                                        </v-select>
                                        </div>
                                
                                    </div>
                                </div>
                                <div class="form-group">
                                            <div class="row">
                                                <div class="col-2">
                                                    <div class="position-relative form-check">
                                                        <label class="form-check-label" @click="form.gender = 0">
                                                            <input name="radio2" type="radio" class="form-check-input" :checked="form.gender == 0"> 
                                                            Male
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <div class="position-relative form-check">
                                                        <label class="form-check-label" @click="form.gender = 1">
                                                            <input name="radio2" type="radio" class="form-check-input" :checked="form.gender == 1"> 
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                <div class="form-group">
                                    <v-select
                                        placeholder="Habit"
                                        class="form-select"
                                        :options="habitList"
                                        multiple
                                        v-model="form.habits"
                                        label="name"
                                        :reduce="item => item.id"
                                    >
                                        <template slot="no-options">
                                            <span v-if="!fetching">No match</span>
                                            <Spinner
                                                v-else
                                                :mini="true"
                                            />
                                        </template>
                                    </v-select>
                                </div>
                                <div class="form-group">
                                    <v-select
                                        placeholder="Disease"
                                        class="form-select"
                                        :options="diseaseList"
                                        multiple
                                        v-model="form.diseases"
                                        label="name"
                                        :reduce="item => item.id"
                                    >
                                        <template slot="no-options">
                                            <span v-if="!fetching">No match</span>
                                            <Spinner
                                                v-else
                                                :mini="true"
                                            />
                                        </template>
                                    </v-select>
                                </div>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    Already have an account?
                                    <router-link :to="{ path: '/login'}" class="text-primary">Sign in</router-link>
                                </h6>
                            </div>
                            <div class="modal-footer d-block text-center">
                                <b-button 
                                    color="primary" 
                                    class="btn-wide btn-pill btn-shadow btn-hover-shine"
                                    size="lg"
                                    @click="register"
                                >
                                Create Account
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Console.uz 2020
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                username: '',
                password: '',
                email: '',
                gender: 0,
                user_type: 1,
                phone_number: '',
                region: null,
                city: null,
                district: null,
                street: null,
                building: null,
                diseases: [],
                habits: []
            },
            selectedTabList: [],
            creating: false,
            fetching: false,
            buildingList: [],
            streetList: [],
            districtList: [],
            cityList: [],
            regionList: [],
            diseaseList: [],
            habitList: []
        }
    },

    watch: {
        "form.region": {
            handler() {
                this.form.city = null,
                this.form.district = null,
                this.form.street = null,
                this.form.building = null
            },
            immediate: true
        },
        "form.city": {
            handler() {
                // console.log("kirdi")

                this.form.district = null,
                this.form.street = null,
                this.form.building = null
            },
            immediate: true
        },
        "form.district": {
            handler() {
                // console.log("kirdi")

                this.form.street = null,
                this.form.building = null
            },
            immediate: true
        },
        "form.street": {
            handler() {
                // console.log("kirdi")

                this.form.building = null
            },
            immediate: true
        },
    },

    mounted () {
        this.getLists()
    },

    computed: {
        cityByRegion() {
            return this.cityList.filter(item => item.region == this.form.region)
        },
        districtByCity() {
            return this.districtList.filter(item => item.city == this.form.city)
        },
        streetByDistrict() {
            return this.streetList.filter(item => item.district == this.form.district)
        },
        buildingByStreet() {
            return this.buildingList.filter(item => item.street == this.form.street)
        },
        },

    methods: {
        async getLists() {
            const b = await this.$store.dispatch("getBuildings");
            const s = await this.$store.dispatch("getStreets");
            const d = await this.$store.dispatch("getDistricts");
            const c = await this.$store.dispatch("getCities");
            const r = await this.$store.dispatch("getRegions");
            
            const de = await this.$store.dispatch("getDiseases");
            const h = await this.$store.dispatch("getHabits");

            // console.log(b,s,d,c,r)
            if (c && c.results && c.results.length) this.cityList = c.results;
            if (s && s.results && s.results.length) this.streetList = s.results;
            if (r && r.results && r.results.length) this.regionList = r.results;
            if (d && d.results && d.results.length) this.districtList = d.results;
            if (b && b.results && b.results.length) this.buildingList = b.results;
            if (de && de.results && de.results.length) this.diseaseList = de.results;
            if (h && h.results && h.results.length) this.habitList = h.results;
        },
        async register() {
            // console.log(this.modal)
            // if( !this.form.name ) return

            try {
                let formdata = new FormData();

                for (let key in this.form) {
                    if (this.form.hasOwnProperty(key) && key != 'diseases' && key != 'habits') {
                        formdata.append(key, this.form[key]);
                    } else {
                        this.form[key].forEach(element => {
                            formdata.append(key, element)
                        });
                    }
                }

                this.creating = true;
                const res = await this.$store.dispatch('post', {
                    url: '/people/',
                    data: formdata
                });

                if(res) {
                    this.$store.commit("setProfile", res)
                    this.$router.push({ path: this.$route.query.redirect || "/" });
                }

                this.creating = false;

                // this.dev(res);

                // this.fetchData();

            } catch (e) {
                this.creating = false;
                console.log(e)
            }

        },
    },
}
</script>