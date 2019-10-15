<template>
    <div class="hms">
        <div class="huri">
            <div class="hbls" v-if="nav == true">
                <div class="dt">
                    {{ date }}
                </div>
                <div class="tt">
                    {{ time }}
                </div>
            </div>
            <div class="hsdl">
                <div class="pne">{{data.name}}</div>
            </div>
        </div>
        <div class="_spt">
            <div class="_jsdf">
                <div class="navbar">
                <router-link :to="navbar.home">{{navbar.home}}</router-link>
                <div class="dropdown" v-if="ip != '10.0.2.250' && ip != 'www.bcel.com.la'">
                    <button class="dropbtn">Report
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <router-link :to="navbar.report.passenger">{{navbar.report.passenger}}</router-link>
                        <router-link :to="navbar.report.vehicle">{{navbar.report.vehicle}}</router-link>
                    </div>
                </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/views/data.json'
export default {
    data(){
        return{
            ip: location.host,
            data: data.projectName,
            date: '',
            time: '',
            navbar:{
                home: 'Dashboard',
                report: {
                    passenger: 'Passenger',
                    vehicle: 'Vehicle'
                }
            },
            nav: true
        }
    },
    mounted(){
        window.addEventListener("resize", () => {
            if (window.innerWidth < 900) {
               this.nav = false
            } else {
                this.nav = true
            }
        });
        if (window.innerWidth < 900) {
            this.nav = false
        } else {
            this.nav = true
        }
    },
    created(){
        this.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        setInterval(() => {
            this.startTime()
        }, 1000);
    },
    methods:{
        startTime() {
            var today = new Date()
            var h = today.getHours()
            var m = today.getMinutes()
            var s = today.getSeconds()
            h = this.checkTime(h)
            m = this.checkTime(m)
            s = this.checkTime(s)
            this.time = h + ":" + m + ":" + s
        },
        checkTime(i) {
            if (i < 10) {i = "0" + i}
            return i
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/header/header.scss";
</style>
