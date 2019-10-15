<template>
<div class="_pel">
    <div class="obj">
        <daily :sumDate="moment(sumDate).format('DD/MM/YYYY')"/>
    </div>
    <div class="obj">
        <monthly :sumDate="moment(sumDate).format('MM/YYYY')"/>
    </div>
    <div class="obj">
        <yearly :sumDate="moment(sumDate).format('YYYY')"/>
    </div>
</div>
</template>

<script>
import Daily from '@/components/inOutSummary/Daily'
import Monthly from '@/components/inOutSummary/Monthly'
import Yearly from '@/components/inOutSummary/Yearly'
import moment from 'moment';
export default {
    components:{
        Daily,
        Monthly,
        Yearly
    },
    data(){
        return{
            moment: moment,
            sumDate: new Date()
        }
    }
}
</script>

<style lang="scss">

</style>
