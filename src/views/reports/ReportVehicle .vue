<template>
  <div class="container">
    <div class="navSearch">
      <div class="navItemLeft">
        <div class="contentLeft">
          <div class="item">
            <select name="rpOpt" @change="changeReport">
              <option
                v-bind:value="listRpOpt.key"
                v-for="listRpOpt in listRpOpts"
                :key="listRpOpt.index"
              >{{listRpOpt.value}}</option>
            </select>
          </div>
          <div class="item">
            <datepicker :format="customFomatter" v-model="startDate" input-class="input"></datepicker>
          </div>
          <div v-if="rpOpt == 'fdtd' " class="item">
            <datepicker :format="customFomatter" v-model="endDate" input-class="input"></datepicker>
          </div>
          <div class="item">
            <button :class="[buttonLoading, 'button']" @click="search">
              <font-awesome-icon :icon="iconSearch" />&nbsp;&nbsp;Search
            </button>
          </div>
        </div>
      </div>

      <div class="navItemRight">
        <div class="contentRight">
          <div class="item">
            <button class="excelColor" @click="exportDoc(1)">
              <font-awesome-icon :icon="iconExcel" />&nbsp;Export EXCEL
            </button>
          </div>
          <div class="item">
            <button class="pdfColor" @click="exportDoc(2)">
              <font-awesome-icon :icon="iconPdf" />&nbsp;Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll">
      <table>
        <thead>
          <tr>
            <th scope="col">{{header.report.vehicleId}}</th>
            <th class="vehicleType" scope="col">{{header.report.vehicleType}}</th>
            <th scope="col" class="r">{{header.report.cntIn}}</th>
            <th scope="col" class="r">{{header.report.cntOut}}</th>
            <th scope="col" class="r">{{header.report.cntAll}}</th>
            <th scope="col" class="r">{{header.report.fees}}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="json_data in json_datas" :key="json_data.index">
            <td scope="row" :data-label="header.report.vehicleId">{{json_data.vehicleId}}</td>
            <td
              class="vehicleType"
              style="font-family: 'Saysettha OT'"
              :data-label="header.report.vehicleType"
            >{{json_data.vehicleType}}</td>
            <td
              class="tdd r"
              :data-label="header.report.cntIn"
            >{{ num(json_data.cntIn).format('0,0') }}</td>
            <td
              class="tdd r"
              :data-label="header.report.cntOut"
            >{{ num(json_data.cntOut).format('0,0') }}</td>
            <td
              class="tdd r"
              :data-label="header.report.cntAll"
            >{{ num(json_data.cntAll).format('0,0') }}</td>
            <td
              class="tdd r"
              :data-label="header.report.fees"
            >{{ num(json_data.fees).format('0,0') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import {
  faSearch,
  faFileExcel,
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import numeral from "numeral";
import jdata from "@/views/data.json";

export default {
  name: "ReportVehicle",
  components: {
    Datepicker,
    FontAwesomeIcon
  },
  data() {
    return {
      header: jdata,
      num: numeral,
      buttonLoading: "",
      isLoading: false,
      isFullPage: true,
      rpOpt: "daily",
      startDate: new Date(),
      endDate: new Date(),
      listRpOpts: [
        {
          key: "daily",
          value: "Daily"
        },
        {
          key: "monthly",
          value: "Monthly"
        },
        {
          key: "yearly",
          value: "Yearly"
        },
        {
          key: "quarter",
          value: "Quarter"
        },
        {
          key: "fdtd",
          value: "From day To day"
        }
      ],
      json_datas: []
    };
  },

  methods: {
    customFomatter(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    changeReport(e) {
      this.rpOpt = e.target.options[e.target.options.selectedIndex].value;
    },
    getData(typeSearch, rptOpt, startDate, endDate) {
      var getStartDate = moment(startDate).format("YYYY-MM-DD");
      var getEndDate = "";
      if (rptOpt == "fdtd") {
        getEndDate = moment(endDate).format("YYYY-MM-DD");
      }
      this.axios
        .get(
          this.$store.getters.apiReport +
            typeSearch +
            "&rptOpt=" +
            rptOpt +
            "&fromDate=" +
            getStartDate +
            "&toDate=" +
            getEndDate
        )
        .then(response => {
          this.json_datas = response.data;
        });
    },
    search() {
      this.getData("vehicle", this.rpOpt, this.startDate, this.endDate);
    },
    exportDoc(e) {
      if (e == 1) {
        location.href = location.href.replace(
          new RegExp("^" + window.location.href),
          `http://${
            location.host
          }/report/excel_vehicle.php?type=vehicle&option=${
            this.rpOpt
          }&from=${moment(this.startDate).format("YYYY-MM-DD")}&to=${moment(
            this.endDate
          ).format("YYYY-MM-DD")}`
        );
      } else {
        location.href = location.href.replace(
          new RegExp("^" + window.location.href),
          `http://${location.host}/report/pdf_vehicle.php?type=vehicle&option=${
            this.rpOpt
          }&from=${moment(this.startDate).format("YYYY-MM-DD")}&to=${moment(
            this.endDate
          ).format("YYYY-MM-DD")}`
        );
      }
    }
  },

  mounted() {
    this.getData("vehicle", this.rpOpt, this.startDate, this.endDate);
  },
  computed: {
    iconSearch() {
      return faSearch;
    },
    iconPdf() {
      return faFilePdf;
    },
    iconExcel() {
      return faFileExcel;
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/fonts/DSDIGI/font.css";
.container {
  font-family: "Saysettha OT";
  padding: 0px 10px 0px 10px;
  @media screen and (min-width: 760px) {
    padding: 0px 15px 0px 15px;
  }
}

@media screen and (min-width: 760px) {
  .scroll {
    height: calc(100vh - 140px);
    overflow-y: scroll;
  }
}

.navSearch {
  display: flex;
  flex-wrap: wrap;
}

.navItemLeft {
  flex: 1 50%;
}

.navItemRight {
  flex: 1 30%;
}

.contentLeft {
  display: flex;
  justify-content: flex-start;
}

.contentRight {
  display: flex;
  justify-content: flex-end;
}

.item {
  padding: 10px;
}

.item:first-of-type {
  padding-left: 0px;
}

.item:last-of-type {
  padding-right: 0px;
}

input[type="text"],
select {
  width: 100%;
  min-width: 150px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0px;
  box-sizing: border-box;
}
input[type="text"] {
  padding: 10px 10px;
}
select {
  cursor: pointer;
  padding: 9px 10px;
}

button {
  width: 100%;
  // min-width: 126.28px;
  color: white;
  background-color: #0c5c81;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 0px;
  cursor: pointer;
}
button:hover {
  -webkit-box-shadow: 0px 0px 5px -1px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 0px 5px -1px rgba(92, 92, 92, 1);
  box-shadow: 0px 0px 5px -1px rgba(92, 92, 92, 1);
}
button.excelColor {
  background-color: #0c8112;
}
button.excelColor:hover {
  background-color: #0f9716;
}

button.pdfColor {
  background-color: #810c0c;
}
button.pdfColor:hover {
  background-color: #970f0f;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  background: rgb(29, 28, 28);
  color: #f7f7f7;
}

table tr {
  border: 1px solid rgb(109, 107, 107);
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th.vehicleType,
table td.vehicleType {
  text-align: left;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6ebcf0;
}

.tdd {
  font-size: 1.2em;
}

.r {
  text-align: right;
}
.l {
  text-align: left;
}

@media screen and (max-width: 950px) {
  .navItemLeft,
  .navItemRight {
    flex: 100%;
  }

  .contentLeft {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .contentRight {
    display: flex;
    justify-content: flex-start;
  }
  .contentRight > .item {
    flex: 1 50%;
    padding-top: 3px;
    padding-bottom: 3px;
  }
}

@media screen and (max-width: 750px) {
  .contentLeft > .item {
    flex: 1 100%;
    padding: 3px 0px 3px 0px;
  }

  table {
    border: 0;
  }

  table thead {
    display: none;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid rgb(109, 107, 107);
    display: block;
    font-size: 0.9em;
    text-align: right;
  }

  table td.vehicleType {
    text-align: right;
  }

  table td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
