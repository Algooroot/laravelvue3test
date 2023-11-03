<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const submit = async () => {
      const response = await axios.post('/', {
        email: email.value,
        password: password.value,
      });
      localStorage.setItem('token', response.data.token);
      await router.push({ path: '/' });
    };

    return {
      email,
      password,
      submit,
    };
  },
};
</script>
<template>
    <div class="container mt-5">
           <h1 class="mb-5">Login</h1>
           <form @submit.prevent="submit">
             <div class="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" class="form-control"  v-model="email" placeholder="Enter email">

             </div>
             <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input type="password" class="form-control"  v-model="password" placeholder="Password">
             </div>
             <button type="submit" class="btn btn-primary">Submit</button>
           </form>
    </div>
</template>
