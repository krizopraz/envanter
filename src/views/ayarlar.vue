<template>
  <div class="content">
    <div class="desc">
      <h2>Ayarlar</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea veniam
        ratione quisquam labore, distinctio nostrum ipsa voluptatem magni fuga.
      </p>
    </div>
    <br />
    <hr />
    <br />
    <div class="envantersec">
      <h1>Seçili Envanter: <span>BULUNAMADI</span></h1>
      <span class="info">
        Envanteri eklemek/değiştirmek için renkli yazının üstüne çift tıklayın
        !</span
      >
    </div>
    <br />
    <hr />
    <br />
    <div class="settings">
      <div class="kategoriler">
        <h2>Kategoriler:</h2>
        <transition-group name="fade">
          <div :key="'item'" class="kategori">
            <span>KATEGORİ ADI</span> : <span> GİRİŞ TÜRÜ</span>
          </div>
          <div :key="'item1'" class="kategori">
            <span>KATEGORİ ADI</span> : <span> GİRİŞ TÜRÜ</span>
          </div>
          <div :key="'item2'" class="kategori">
            <span>KATEGORİ ADI</span> : <span> GİRİŞ TÜRÜ</span>
          </div>
          <div :key="'item3'" class="kategori">
            <span>KATEGORİ ADI</span> : <span> GİRİŞ TÜRÜ</span>
          </div>
        </transition-group>
      </div>
      <form @submit.prevent="" class="form">
        <h2>Kategori Ekle:</h2>
        <label for="kategori-adi">Kategori Adı</label>
        <input type="text" id="kategori-adi" name="kategori-adi" />
        <label for="giris-turu">Giriş Türü</label>
        <select name="giris-turu" id="giris-turu">
          <option value="yazi">Yazı</option>
          <option value="sayi">Sayı</option>
          <option value="bool">Evet/Hayır</option>
          <option value="dosya">Resim</option>
        </select>
        <button type="submit">Ekle</button>
      </form>
    </div>
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
//---------------------//
.content {
  padding: 1em;
}
.envantersec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  h1 {
    span {
      color: $error;
      cursor: copy;
    }
  }
  .info {
    cursor: help;
  }
  span.info::before {
    content: ">";
    margin-right: 0.5em;
  }
}
.settings {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2em;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  .kategoriler {
    border: $color 0.2em solid;
    padding: 1em;
    border-radius: 0.5em;
    display: grid;
    overflow: auto;
    .kategori {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      span {
        color: $secondary;
        &:first-child {
          color: $primary;
        }
      }
    }
  }
  .form {
    border: $color 0.2em solid;
    padding: 1em;
    border-radius: 0.5em;
    display: grid;
    label {
      text-align: left;
    }
    input,
    select,
    button {
      margin-bottom: 1em;
      font-size: 1em;
      height: 1.8em;
    }
    input,
    select {
      color: $color;
      padding: 0.2em;
      background: transparent;
      border: 0.2em solid;
      border-radius: 1em;
      option {
        border-radius: 1em 1em 0 0;
        background: $color;
        color: $bg-dark;
      }
    }
    select:focus {
      border-radius: 1em 1em 0 0;
    }
    button {
      cursor: pointer;
      background: $color;
      color: $accent;
      border: solid 0.2em transparent;
      text-decoration: solid underline;
      border-radius: 1em;
      transition: all 0.1s ease;
      &:hover {
        transform: translateY(-0.3em);
      }
    }
  }
}

// Transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
