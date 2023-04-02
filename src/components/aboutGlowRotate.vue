<template>
    <v-container class="rounded abtcontentHolder ">
        <h1>
            <p style="font-size:x-large;margin-bottom: auto;">
                Hello there 👋,</p>
            I'm Shailesh !
            <p style="font-size:x-large;display:inline;"> (Shell Raiser)</p>
        </h1>



        <p style="color: black">
        <div class="scrollingList__text">I'm a</div>
        <div class="scrollingList ">
            <ul class="scrollingList__list ">
                <li class="scrollingList__list__item rounded">CyberSec enthusiast</li>
                <li class="scrollingList__list__item rounded">Web dev</li>
                <li class="scrollingList__list__item rounded">Designer</li>
                <li class="scrollingList__list__item rounded">Music Maker</li>
            </ul>
        </div>
        </p>

        <img src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple"
            alt="visitors" />
    </v-container>
</template>
<style scoped>
.abtcontentHolder {
    background: rgba(255, 255, 255, 0.6);
    /* min-width: fit-content; */
    backdrop-filter: blur(5px);
    /* height: max-content; */
}




h1 {
    font-size: xxx-large;
    /* color: rgb(100, 0, 172); */
    color: #55379a;
    /* background-image: -webkit-linear-gradient(0deg, #3f51b5, #9c27b0); */
    /* background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    /* z-index: 1; */
}


.scrollingList {
    overflow: hidden;
    height: 40px;
    margin: 0;
}

.scrollingList__text {
    display: inline;
    float: left;
    /* margin: 0; */
    line-height: 40px;
    padding-right: 3px;
    /* background-color: rgb(255, 255, 255); */
}

.scrollingList__list {
    /* margin: 0; */
    width: max-content;
    padding-left: 3px;
    text-align: left;
    list-style: none;
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.scrollingList__list__item {
    line-height: 38px;
    padding-inline: 3px;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    margin-bottom: 3px;
}

.scrollingList__list__item:nth-child(2n+1) {
    background-color: #9b27b04e;
    text-decoration-color: #65499c;
    /* border-top-style: dashed; */
}

.scrollingList__list__item:nth-child(2n+2) {
    background-color: #3f51b54e;
    text-decoration-color: #3f51b5;
}

@keyframes change {

    0%,
    12% {
        transform: translateY(0);
    }

    25%,
    37% {
        transform: translateY(-25%);
    }

    50%,
    62% {
        transform: translateY(-50%);
    }

    75%,
    87% {
        transform: translateY(-75%);
    }
}
</style>