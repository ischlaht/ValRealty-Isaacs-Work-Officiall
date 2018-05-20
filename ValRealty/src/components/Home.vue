



<template>
	<div class="listingCard horizontal card">
		<div class="card-image">
			<img class="listingImage" src="../Images&Icons/binary-Code-Wallpaper.jpeg" />

			<div class="row">
				<div class="listingPrice">$589,000</div>
				<div class="listingLocation card-content">Rawlins, Wyoming</div>
				<div class="listingRooms card-content">5 bedrooms</div>
				<div class="listingAddress card-content">1910 7th st</div>
				<div class="listingType card-content">Town-House</div>
			</div>
			<!-- <label class="locationLabel listingLabels deep-purple darken-1">Location:</label> -->
			<!-- <label class="addressLabel listingLabels deep-purple darken-1">Address:</label> -->
			<!-- <label class="typeLabel listingLabels deep-purple darken-1">Home-type:</label> -->
			<!-- <label class="RoomsLabel listingLabels deep-purple dar    ken-1">Bedrooms:</label> -->

			<!-- <label class="SquareFootageLabel listingLabels deep-purple darken-1">Size
          <div style="font-size:11px; display: inline-block">(SquareFootage):</div>
        </label> -->

			<div class="row">
				<div class="listingSquareFooteage card-content">420sq ft</div>
				<label class="lotSizeLabel listingLabels deep-purple darken-1">Lot Size:</label>
				<div class="listingLotSize card-content">2000 sq ft</div>
			</div>
		</div>

		<div class="row">
			<label class="heatingLabel listingLabels deep-purple darken-1">Heating System</label>
			<div class="listingHeating card-content">Forced Air</div>
			<label class="heatingLabel listingLabels deep-purple darken-1">Heating System</label>
			<div class="listingHeating card-content">Forced Air</div>
			<label class="CoolingLabel listingLabels deep-purple darken-1">Cooling System:</label>
			<div class="listingCooling card-content">Air Conditioning</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  created(){
    this.msg = 'TEST'
  },
  methods: {

  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  padding: 0;
  margin: 0;
}

.card {
  width: 300px;
  height: 300px;
  background-color: lightpurple;
}

img {
  /* display: inline-block; */
  width: 300px;
  height: 300px;
}

.card-content {
  display: block;
  font-size: 100%;
  width: 200px;
  height: 50px;
  padding-bottom: 15px;
  color: black;
  text-align: center;
}

.listingLabels {
  font-size: 120%;
  width: 200px;
  height: 50px;
  color: black;
  display: block;
  text-align: center;
  padding-top: 10px;
}

label.locationLabel {
  color: black;
  font-size: 120%;
}

/* .listingCard {
      width: 100%;
      height: auto;
      background-color: lightpurple;
    } */
/* Start of Card information



    */
</style>
