# ResetX

ResetX is a VueJS directive that adds an "X" to input form elements
that, when clicked, clears their value.

## Example Usage
In a Single File Component (SFC):

```vue
<template>
   <input type="text" v-model="myInput" v-reset-x />
</template>

<script>
import ResetX from "@app-nerds/resetx";

export default {
directives: {
   ResetX
   },

   data() {
      return {
         myInput: ""
      }
   }
};
</script>
```

## Project setup
```
npm install
```

### Compiles and minifies for production
```
make
```
