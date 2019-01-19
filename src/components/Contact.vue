<template>
  <section class="contact">
    <h1>Let's start with your contact information</h1>
    <div class="contact-unit">
        <label>Name</label> 
        <br />
        <input v-model="name" type="text" placeholder="provide full name here" />
        <p>{{ name }}</p>
    </div>
    <div class="contact-unit">
        <label>E-mail</label> 
        <br />
        <input v-model="email" type="text" placeholder="provide full name here" />
        <p>{{ email }}</p>
    </div>
    <div class="contact-unit">
        <p>Would you like us to contact you direcly?</p>
        <label for='do-contact'>Yes</label> 
        <input id="do-contact" v-model="doContact" type="radio" name="do-contact" value='Yes'/>
        <label for='do-not-contact'>No</label> 
        <input id="do-not-contact" v-model="doContact" type="radio" name="do-contact" value='No'/>
        <p>{{doContact}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  },
  data: function () {
    return {
      name: '',
      email: '',
      doContact: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
