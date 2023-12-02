<template>
  <div class="overlay">
    <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  @apply flex justify-center h-full w-full items-center fixed top-0 left-0 bg-black p-4 z-10 ;
}

.wrapper {
    @apply w-[200px] h-[60px] relative z-10;
  }
  
  .circle {
    @apply w-[20px] h-[20px] absolute rounded-full left-[calc(50%-80px)];
    background-color: color-mix(in srgb, #d15143 100%, #227f78 0%);
    transform-origin: 50%;
    animation: bounce .5s alternate infinite ease;
  }
  
  @keyframes bounce {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    
    100% {
      top: 0%;
    }
  }
  
  .circle:nth-child(2) {
    @apply left-[calc(50%-40px)];
    background-color: color-mix(in srgb, #d15143 75%, #227f78 25%);
    animation-delay: .2s;
  }
  
  .circle:nth-child(3) {
    @apply left-[calc(50%)];
    background-color: color-mix(in srgb, #d15143 50%, #227f78 50%);
    animation-delay: .3s;
  }
  .circle:nth-child(4) {
    @apply left-[calc(50%+40px)];
    background-color: color-mix(in srgb, #d15143 25%, #227f78 75%);
    animation-delay: .4s;
  }

  .circle:nth-child(5) {
    @apply left-[calc(50%+80px)];
    background-color: color-mix(in srgb, #d15143 0%, #227f78 100%);
    animation-delay: .5s;
  }

</style>

