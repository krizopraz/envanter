<template>
  <div class="content">
    <div class="desc">
      <h2>Ürün Ara yada Ekle</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        molestias reprehenderit voluptatum totam reiciendis repellendus.
      </p>
    </div>
    <br />
    <hr />
    <br />
    <div class="islemler">
      <h3><span>TEST</span> envanterine ait ürünler</h3>
      <div>
        <button>Ekle</button>
      </div>
    </div>
    <table>
      <thead>
        <td>id</td>
        <td>TYPE1</td>
        <td>TYPE2</td>
        <td>TYPE3</td>
        <td>TYPE4</td>
      </thead>
      <tbody>
        <tr>
          <td>BİR ID</td>
          <td>BİR DATA</td>
          <td>İKİ DATA</td>
          <td>UC DATA</td>
          <td>DORT DATA</td>
        </tr>
        <tr>
          <td>BİR ID</td>
          <td>BİR DATA</td>
          <td>İKİ DATA</td>
          <td>UC DATA</td>
          <td>DORT DATA</td>
        </tr>
        <tr>
          <td>BİR ID</td>
          <td>BİR DATA</td>
          <td>İKİ DATA</td>
          <td>UC DATA</td>
          <td>DORT DATA</td>
        </tr>
        <tr>
          <td>BİR ID</td>
          <td>BİR DATA</td>
          <td>İKİ DATA</td>
          <td>UC DATA</td>
          <td>DORT DATA</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$bg-dark: #2d2d2a;
$accent: #4c4c47;
$color: #e5dcc5;
$primary: #848fa5;
$secondary: #c14953;
$warning: #fff07c;
$success: #80ff72;
$error: #fb4b4e;
// -----------------//
.content {
  .islemler {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1em;
    button {
      font-size: 1.2em;
      border: none;
      padding: 0.5em;
      border-radius: 0.3em;
      cursor: pointer;
      color: $color;
      background: $primary;
    }
  }
  padding: 1em;
  table {
    thead {
      background: $color;
      color: $accent;
    }
    text-align: center;
    &,
    td,
    th {
      border: 0.1em solid $color;
    }
    td {
      padding: 0.3em;
    }
    width: 100%;
    border-collapse: collapse;
  }
}
</style>
