<template>
    <div>
        <nav class="main-nav">
            <div class="nav-wrapper deep-purple darken-1">
                <div class="container">
                    <a href="#!" class="brand-logo">Listing Cards</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="">Listings</a>
                        </li>
                        <li>
                            <a href="">Sold</a>
                        </li>
                        <li>
                            <a href="">Home Decor</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li>
                <a href="">Listings</a>
            </li>
            <li>
                <a href="">Sold</a>
            </li>
            <li>
                <a href="">Home Decor</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'Navbar',
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.main-nav {
  height: 100px !important;
  line-height: 100px !important;
}
</style>
