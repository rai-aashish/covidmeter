<template>
  <div class="contact">
    <h1>Contact Me</h1>

    <div class="contents">
      You can contact me via :

      <form id="contact-form" action="https://formspree.io/f/xoqykebg" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  
</form>
<p>{{status}}</p>

    </div>

    <div class="success-message">
      <h2>Thank you for contacting us ! </h2>
      <p>
        Your mail has been sent. I will contact you ASAP.
        </p>
    </div>

    <div class="fail-message">
      <h2>Something Went wrong</h2>
      <p>
        Unfortunately something went wrong. Please try again. 
        </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status:"",
    };
  },

  methods: {
   
  },

  mounted(){

      var form = document.getElementById("contact-form");
      let self=this;
       async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        console.log(response)
        form.reset()
        self.status = 'Thank you for contaction us!'
      }).catch(error => {
       console.log(error)
       self.status = 'Something went wrong please check details and try again.'
      });
    }
    form.addEventListener("submit", handleSubmit)
  }

};
</script>

<style lang="scss" scoped>
.contact {
  color: $secondary;

  h1 {
    color: $primary;
    text-shadow: 2px 1px 2px rgba(255, 255, 255, 0.9);
  }

  .contents {
    font-size: 15px;
    font-family: "Roboto Condensed", sans-serif;
    margin-top: 10px;
  }
}

.success-message{
  background-color: rgba(190, 243, 190, 0.411);
  color:rgb(9, 158, 9);
  max-width: 500px;
  margin:auto;
  padding-block: 20px;
  border-left:5px solid rgb(9, 158, 9);
}

.fail-message{
    background-color: rgba(255, 255, 255, 0.61);
  color:rgb(211, 46, 46);
  max-width: 500px;
  margin:auto;
  padding-block: 20px;
  border-left:5px solid rgb(211, 46, 46);
}
</style>
