<template>
  <div class="form-container">
    <div class="form-group" v-if="currentPage === 1">
      <div class="form-main">
        <label for="name">Full Name</label>
          <input
            type="text"
            id="fullname"
            class="form-control"
            @blur="validateName()"
            v-model="formdata.name"
            @input="update('name', $event)"
            v-bind:class="{ 'is-invalid': errors.name }"
          />
        <p class="message">{{ errors.name }}</p>
      </div>
      <div class="form-main">
        <label for="email">Your Email</label>
        <input
          type="text"
          id="email"
          class="form-control"
          @blur="validateEmail()"
          @input="update('email', $event)"
          v-model="formdata.email"
          v-bind:class="{ 'is-invalid': errors.email }"
        />
        <p class="message">{{ errors.email }}</p>
      </div>
    </div>

    <div class="form-group" v-if="currentPage === 2">
      <div class="form-main">
        <label for="company">Your Company Name</label>
        <input
          type="text"
          id="company"
          class="form-control"
          @blur="validateCompany()"
           v-model="formdata.companyname"
          v-bind:class="{ 'is-invalid': errors.companyname }"
          @input="update('companyname', $event)"
        />
        <p class="message">{{ errors.companyname }}</p>
      </div>
      <div class="form-main">
        <label>Number of Employees</label>

        <input
          type="text"
          class="form-control"
          @blur="validateEmployee()"
          v-model="formdata.numberofcompany"
          v-bind:class="{ 'is-invalid': errors.numberofcompany }"
          @input="update('numberofcompany', $event)"
        />
        <p class="message">{{ errors.numberofcompany }}</p>
      </div>
    </div>

    <div class="form-group" v-if="currentPage === 3">
      <div class="form-main">
        <label>From Where did you hear about us</label>
        <select
          id="choice"
          v-model="formdata.selectOption"
          @input="update('selectOption', $event)"
        >
          <option value="frend">Friend</option>
          <option value="facebook">Facebook</option>
          <option value="website">Website</option>
        </select>
        <p class="message"></p>
      </div>
      <div class="form-main">
        <div class="check-term">
          <input type="checkbox" />

          <label for="name">I accept terms & conditions</label>
        </div>
        <p class="message"></p>
      </div>
    </div>
  </div>
  <div class="form-step__btns">
    <div v-if="currentPage === 3">
      <button @click="clickreset" class="btn prev">Reset</button>
      <button class="btn next">Send</button>
    </div>
    <div v-if="currentPage < 3">
      <button @click="clickback" class="btn prev">previous</button>
      <button @click="clicknext" class="btn next">next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "main-form",

  data() {
    return {
      errors: {
        name: "",
        email: "",
        companyname: "",
        numberofcompany: "",
        selectOption: "",
       
      },
      formdata: {
        name: "",
        email: "",
        companyname: "",
        numberofcompany: "",
        selectOption: "",
      
      },
    };
  },
  computed: {
    ...mapState({ currentPage: (state) => state.currentPage }),
    ...mapGetters(["getvalue"]),
    getDataForm() {
      return this.$store.state.formstep.form;
    },
  },
  methods: {
    update(attribute) {
      if (this.errors[attribute]) {
        this.errors[attribute] = "";
      }
    },
    validateName() {
      if (!this.formdata.name) {
        this.errors.name = "The field is required!";
        return false;
      }
      return true;
    },
    validateEmail() {
      if (!this.formdata.email) {
        this.errors.email = "The field is required!";
        return false;
      } else if (
        !/^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.formdata.email)
      ) {
        this.errors.email = "The field must be email!";
        return false;
      }
      return true;
    },

    validateCompany() {
      if (!this.formdata.companyname) {
        this.errors.companyname = "The field is required!";
        return false;
      }
      return true;
    },

    validateEmployee() {
      if (!this.formdata.numberofcompany) {
        this.errors.numberofcompany = "The field is required!";
        return false;
      }else if(!(/^[0-9]/.test(this.formdata.numberofcompany))) {
        this.errors.numberofcompany = "The field must be number!";
        return false;
      }
      return true;
    },

    validateSelect(event) {
      this.formdata.selectOption = event.target.value;

      if (!this.formdata.selectOption || this.formdata.selectOption === "") {
        this.errors.selectOption = "The field is required!";
        return false;
      }
      return true;
    },

    checkForm() {
      if (this.currentPage == 1) {
        if (!this.validateName() || !this.validateEmail()) {
          this.validateName();
          this.validateEmail();
          return false;
        }
      }
      if (this.currentPage == 2) {
        if (!this.validateCompany() || !this.validateEmployee()) {
          this.validateCompany();
          this.validateEmployee();
          return false;
        }
      }
      if (this.currentPage == 3) {
        if (!this.validateSelect()) {
          this.validateSelect();
          return false;
        }
      }

      return true;
    },
    clicknext() {
      if (this.checkForm()) {
        this.$store.dispatch("nextPage");
      }
    },

    clickback() {
      if (this.checkForm()) {
        this.$store.dispatch("backPage");
      }
    },
    clickreset() {
        this.formdata={};
        this.$store.dispatch("backreset");
        
       
      },
    
    clicksend() {
      this.formdata = {};
    },
  }
  
};
</script>

<style>
.form-container {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
  width: 900px;
}
.form-main {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.form-lable {

  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 6px;
}
input {
    color: #586068;
    font-size: 16px;
    height: 36px;
    
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: 3px solid transparent;
    transition: all 0.2s ease;
}
.form-control > label {
  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 6px;
}
label {
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 16px;
}

input[type="text" i] {
  padding: 1px 2px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.form-control.is-invalid {
  border-color: #dc3545;
}
.message {
  color: #dc3545;
}
select {
  color: #586068;
  font-size: 16px;
  width: 100%;
  padding: 10px 36px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
input[type="checkbox"] {
  margin-right: 8px;
}
.form-step__btns {
  margin-top: 50px;
  gap: 36px
}
.btn {
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 42px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.prev {
  background-color: #72e6b1;
}
.next {
  background-color: #1e68cf;
}
.btn:not(:first-child) {
  margin-left: 16px;
}
.btn:hover {
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%), 6px 6px 12px rgb(0 0 0 / 20%);
}
</style>