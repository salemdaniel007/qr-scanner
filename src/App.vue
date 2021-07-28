<template>
  <div id="app">
    <div class="container">
      <ul id="MiniLeftNav">
        <li>
          <router-link to="/" class="navtext"
            ><i class="fa fa-home fa-3x" style="color:white;"></i>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/history" class="navtext"
            ><i class="fa fa-history fa-3x" style="color:white;"></i>
            <span>History</span>
          </router-link>
        </li>
      </ul>
      <transition name="scale" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Dosis", sans-serif;
  background-color: #cdd8e4;
  background-image: linear-gradient(315deg, #9fbfe0 0%, #d7deec 74%);
  background-attachment: fixed;
  background-size: cover;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#MiniLeftNav {
  position: absolute;
  left: 0;
  bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
}

#MiniLeftNav li {
  list-style: outside none none;
  margin: 20px 0;
  padding: 0;
  width: 48px;
  background-color: transparent;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
#MiniLeftNav li a {
  display: block;
  padding: 7px;
  position: relative;
}

#MiniLeftNav span {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  bottom: 0;
  left: 47px;
  line-height: 38px;
  overflow: hidden;
  padding: 0;
  height: 2.9rem;
  position: absolute;
  white-space: nowrap;
  width: 0;

  /* CSS3 Transition: */
  -webkit-transition: 0.5s;
  /* Future proofing (these do not work yet): */
  -moz-transition: 0.5s;
  transition: 0.5s;
}
#MiniLeftNav a:hover span {
  width: auto;
  color: white;
  font-weight: bold;
  padding: 0 10px;
  margin: 0 10px;
  overflow: visible;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#MiniLeftNav a:hover {
  text-decoration: none;
}
#MiniLeftNav a span {
  background-color: transparent;
  color: #3d4f0c;
}

.container {
  position: relative;
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 2px 16px;
  height: 80vh;
  border-radius: 2rem;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23064e77'/%3E%3Cstop offset='1' stop-color='%230a7dbe'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top left;
  box-shadow: 0 32px 32px 0 rgba(0, 0, 0, 0.1), 200px 50px 100px 50px rgba(0, 0, 0, 0.2);
}

@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1300px)
  and (-webkit-min-device-pixel-ratio: 1) {
  body {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23064e77'/%3E%3Cstop offset='1' stop-color='%230a7dbe'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top left;
  }

  .container {
    background: transparent;
    width: 100%;
    margin: auto;
    height: 100vh;
    border-radius: 0rem;
  }

  #MiniLeftNav {
    position: absolute;
    left: 0;
    top: 0;
    width: 10rem;
    bottom: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 70px;
  }

  #MiniLeftNav span {
    bottom: -30px;
    left: 2px;
    line-height: 38px;
    overflow: visible;
    padding: 0;
    height: 2.9rem;
    position: absolute;
    white-space: nowrap;
    width: 0;
  }
  #MiniLeftNav a span {
    background-color: transparent;
    color: #fff;
  }

  #MiniLeftNav a:hover span {
    padding: 0px;
    margin: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .fa-history {
    display: none;
  }
  .fa-home {
    display: none;
  }
}

@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 768px)
  and (-webkit-min-device-pixel-ratio: 1)  {
  body {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23064e77'/%3E%3Cstop offset='1' stop-color='%230a7dbe'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top left;
  }

  .container {
    background: transparent;
    width: 100%;
    margin: auto;
    height: 100vh;
    border-radius: 0rem;
  }

  #MiniLeftNav {
    position: absolute;
    left: 0;
    top: 0;
    width: 10rem;
    bottom: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 70px;
  }
  #MiniLeftNav span {
    bottom: -30px;
    left: 2px;
    line-height: 38px;
    overflow: visible;
    padding: 0;
    height: 2.9rem;
    position: absolute;
    white-space: nowrap;
    width: 0;
  }
  #MiniLeftNav a span {
    background-color: transparent;
    color: #fff;
  }

  #MiniLeftNav a:hover span {
    padding: 0px;
    margin: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .fa-history {
    display: none;
  }
  .fa-home {
    display: none;
  }
}
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .container {
      align-items: normal;
      position: inherit;
      width: 100%;
      box-shadow: none;
      height: 80vh;
      padding: 60px;
      background-color: #cdd8e4;
      background-image: linear-gradient(315deg, #9fbfe0 0%, #d7deec 74%);
      background-attachment: fixed;
      background-size: cover;
    }

    body {
      background-color: #cdd8e4;
      background-image: linear-gradient(315deg, #9fbfe0 0%, #d7deec 74%);
      background-attachment: fixed;
      background-size: cover;
    }

    #MiniLeftNav a span {
      font-size: 10px;
      margin-bottom: 26px;
    }

   #MiniLeftNav {
      height: 30px;
    }

    #MiniLeftNav a:hover span {
      padding: 0px;
      margin: 0px;
      bottom: -4px;
    }

    #MiniLeftNav a span {
      color: #0a0a0a;
    }
}
</style>
