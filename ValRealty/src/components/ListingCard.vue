

<template>
  <!--start of listing -->
  <div class="listingCard card">
    <div class="row">
      <div class="col s12 m12">
        <div class="card-image">
          <!-- PUT ANCHOR TAG HERE THAT ROUTES TO INFORMATION PAGE._______________________________ -->
          <img class="listingImage" src="../Images&Icons/binary-Code-Wallpaper.jpeg" />
          <span class="card-title">
            <div class="listingPrice">$590,000</div>
            <div class="listingLocation">Just to show that any city will fit</div>
          </span>
        </div>
      </div>
      <button class="waves-effect waves-light deep-purple darken-3 activator">
        <i>More Information</i>
      </button>
    </div>
    <!-- Start of Main listing Information -->
    <div class="mainInfoContainer">
      <div class="row">
        <div class="listingRooms card-content">5 bds</div>
        <div class="listingHeating card-content">3.5 ba</div>
        <div class="listingSquareFooteage card-content">420sqft</div>
        <div class="listingAddress card-content">1910 7th st</div>
        <div class="listingType card-content">Apartment</div>
        <div class="listingKind card-content">For sale by owner</div>
      </div>
    </div>
    <!-- Start of Quick Listing Information -->
    <div class="card-reveal">
      <!-- Title for card reveal -->
      <span class="card-title grey-text text-darken-4">More Information
        <i class="material-icons right">close</i>
      </span>

      <div class="cardRevealInfoContainer">
        <div class="row">
          <label class="descriptionLabel listingLabels ">Description :</label>
          <div class="listingDescription card-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit.isi dolorem consequuntur rem inventore sit similique itaque.</div>
        </div>

        <div class="row">
          <label class="lotSizeLabel listingLabels ">Lot Size :</label>
          <div class="listingLotSize card-content">2000 sq ft</div>
        </div>

        <div class="row">
          <label class="heatingLabel listingLabels ">Heating System :</label>
          <div class="listingHeating card-content">Forced Air</div>
        </div>

        <div class="row">
          <label class="CoolingLabel listingLabels ">Cooling System :</label>
          <div class="listingCooling card-content">Air Conditioning asdf asdf asdf asd</div>
        </div>

        <div class="row">
          <label class="flooringLabel listingLabels ">Flooring :</label>
          <div class="listingFlooring card-content">Hardwood and carpet mixed</div>
        </div>

        <div class="row">
          <label class="parkingLabel listingLabels ">Parking :</label>
          <div class="listingParking card-content">2 door garage</div>
        </div>

        <div class="row">
          <label class="pricePerSQFTLabel listingLabels ">Price per sq. ft. :</label>
          <div class="listinPricePerSQFT card-content">2000 sq ft</div>
        </div>

        <div class="row">
          <label class="yearBuiltLabel listingLabels ">Year built :</label>
          <div class="listingyearBuilt card-content">1994</div>
        </div>

        <div class="row">
          <label class="ZipCodeLabel listingLabels">ZIP Code :</label>
          <div class="listingZipCode card-content">82070</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListingCard',
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

/* Personal Custom classes */
.border-bottom {
  border-bottom: 2px solid purple;
}

/* Entire card/conatiner */
.card {
  display: inline-block;
  width: 380px;
  height: auto;
  margin: 10px;
  padding: 0px;
  padding-bottom: 5px;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
}
/* Row with all card information */
.row {
  display: inline-table;
  padding: 0;
  margin: 0;
}
/* Main image of listing */
.card-image {
  display: inline-block;
  margin-left: -10px;
  width: 106%;
  height: auto;
}
/* Container for listing location and price displayed on teh image */
.card-image .card-title {
  width: 80%;
  display: inline-grid;
}

/* Price that shows up on Listing Image */
.card-image .listingPrice {
  font-size: 90%;
  margin-left: -10px;
  height: 20px;
}

/* Location that Shows on top of Listing Image */
.card-image .listingLocation {
  display: inline-block;
  width: 100%;
  height: 20px;
  color: white;
  font-size: 65%;
  margin-top: 15px;
  margin-left: -10px;
}

.mainInfoContainer {
  display: inline-block;
  height: auto;
  width: 100%;
}
/* Content below listing Image bds, ba, size, etc. */
.mainInfoContainer .card-content {
  display: inline-block;
  padding: 20px;
  width: auto;
  height: 20px;
  font-size: 90%;
  margin: 0px;
  margin-bottom: -10px;
  color: black;
}

/* Start of car reveal__________________________________________________________________________________________________________________________________ */

/* buttons to reveal extra information on card */
.activator {
  width: 110px;
  height: 30px;
  color: white;
  float: right;
  margin-right: 5px;
  margin-top: -55px;
  border: none;
}

.activator i {
  font-size: 90%;
  display: block;
  width: 142px;
  height: 30px;
  margin-left: -22px;
  margin-top: -1px;
  padding: 5px;
  padding-top: 6px;
}
.activator :hover {
  background-color: purple;
  border: 5px solid purple;
  padding-top: 1px;
}

/* x button to hide card reveal */
.card-reveal .material-icons {
  margin-right: -50px;
}

/* Container for actual extra information displayed on Card Reveal */
cardRevealInfoContainer {
  background-color: grey;
}

.card-reveal .row {
  display: inline-table;
  padding: 0;
  width: 100%;
  height: auto;
  margin: 0;
  border: 3px solid purple;
  border-bottom: none;
  background-color: lightblue;
  /* border-collapse: separate; */
}

.card-reveal .row:last-child {
  border-bottom: 3px solid purple;
}

/* Styling for label with the Card Reveal */
.card-reveal .listingLabels {
  font-size: 100%;
  width: 155px;
  height: 40px;
  color: black;
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  font-style: italic;
}

/* Actual information within card reveal */
.card-reveal .card-content {
  display: inline-block;
  width: 100px;
  height: auto;
  vertical-align: top;
  margin-top: 10px;
  /* margin-left: 30px; */
  min-height: 40px;
  font-size: 90%;
  padding: 0px;
  color: black;
  font-style: italic;
}

/* Title for Card Reveal "More Information" */
/* .card-reveal, */
.card-reveal .card-title {
  font-family: segoe script;
  font-size: 130% !important;
  display: inline-block;
  padding-left: 65px;
  width: 85%;
}
</style>
