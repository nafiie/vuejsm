<template>
<p>This is the home page</p>

<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
<router-link to="/gallery">Gallery</router-link>
<router-link to="/contact">Contact</router-link>

<button @click="count++">You clicked me {{ count }} times</button>
</template>

<script>
export default {
  data(){
    return {count :0}
  }
}
</script>