<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome back,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  v-model="form.username"
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
                                <div class="divider"/>
                                <!-- <h6 class="mb-0">
                                    No account?
                                    <router-link :to="{ path: '/register'}" class="text-primary">Sign up now</router-link>
                                </h6> -->
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary" size="lg" @click="login">Login to Dashboard</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        <!-- Copyright &copy; Console.uz 2020 -->
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
                username: '',
                password: ''
            },
            loading: false,
            login_is_incorrect: false
        }
    },

    methods: {
        async login() {
            // let t = { data: { ...this.form } };
            // console.log("t:", t);
            this.loading = true;
            // this.$refs.usernameRef.focus();

            let done = await this.$store.dispatch("login", this.form)
                .then((result) => {
                    if(result) this.$router.push({ path: "/" });
                }).catch((err) => {
                    
                });

            // console.log("done", done)
            // if(this.form.username == 'admin' && this.form.password == 'admin')
            //     this.$router.push({ path: "/" });

            // if (done) {
            //     this.$router.push({ path: "/directory" });
            // } else {
            //     this.login_is_incorrect = true;
            // }
        }
    },
}
</script>