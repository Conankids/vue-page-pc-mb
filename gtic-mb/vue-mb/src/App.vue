<template>
  <div id="app" v-cloak>
    <MyHeader/>
    <Home/>
    <AboutGtic/>
    <PendingSpeakers/>
    <GticAwards/>
    <Park/>
    <EventRegistration/>
    <ConfrenceVenue/>
    <!--<PreviousGtic/>-->
    <Host/>
    <ContactUs/>
    <Footer/>
    <Menu/>
    <Register/>
  </div>
</template>

<script>
  import MyHeader from './components/my_header'
  import Home from './components/home'
  import Register from './components/register'
  import AboutGtic from './components/about_gtic'
  import PendingSpeakers from './components/pending_speakers'
  import GticAwards from './components/gtic_awards'
  import Park from './components/park'
  import EventRegistration from './components/event_registration'
  import ConfrenceVenue from './components/confrenece_venue'
  import PreviousGtic from './components/previous_gtic'
  import Host from './components/host'
  import ContactUs from './components/contact_us'
  import Footer from './components/footer'
  import Menu from './components/menu'

  export default {
    name: 'App',
    components: {
      MyHeader,
      Home,
      Register,
      AboutGtic,
      PendingSpeakers,
      GticAwards,
      Park,
      EventRegistration,
      ConfrenceVenue,
      PreviousGtic,
      Host,
      ContactUs,
      Footer,
      Menu
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #060E19;
  }
  ul,
  li {
    list-style: none;
  }
  .none{
    display: none;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  body {
    background-color: #001231;
    font-family: 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif, "Open Sans";
  }
  [v-cloak]{
    height: 100%;
    display: none;
  }
</style>
