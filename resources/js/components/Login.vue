<script>
</script>
<template>
    <div class="container mt-5">
           <h1 class="mb-5">Login</h1>
           <form @submit.prevent="LoginData">
             <div class="form-group">
               <label>Email address</label>
               <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">

             </div>
             <div class="form-group">
               <label>Password</label>
               <input type="password" class="form-control" v-model="user.password" placeholder="Password">
             </div>

             <button type="submit" class="btn btn-primary">Submit</button>
           </form>
    </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Registration',
  setup() {
    const result = ref({});
    const user = ref({
      email: '',
      password: '',
    });

    const loginData = () => {
      axios.post('http://127.0.0.1:8000/api/login', user.value)
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.status === true) {
              alert('Login Successfully');

              this.$router.push({ name: 'HelloWorld' });
            } else {
              alert('Login failed');
            }
          } catch (err) {
            alert('Error, please try again');
          }
        });
    };

    return {
      result,
      user,
      loginData,
    };
  },
};
</script>