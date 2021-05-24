<template>
  <nav>
    <div class="header">
      <h1>Envanter</h1>
      <br />
      <hr />
      <br />
      <h4>Envanter Adı: <span id="urun">TEST</span></h4>
    </div>
    <ul>
      <li>
        <router-link to="/">Ana Menu</router-link>
      </li>
      <li>
        <router-link to="/urunler">Ürünler</router-link>
      </li>
      <li>
        <router-link to="/ayarlar">Ayarlar</router-link>
      </li>
      <li>
        <router-link to="/yardim">Yardım</router-link>
      </li>
      <li>
        <router-link to="/hakkinda">Uygulama Hakkında</router-link>
      </li>
    </ul>
    <sub>Bu uygulama Mustafa Değerli tarafından yapılmıştır.</sub>
  </nav>
</template>
<script>
export default {
  name: "Navigasyon",
};
</script>
