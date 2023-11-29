<template>
  <div class="overlay">
    <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  @apply flex justify-center h-full w-full items-center fixed top-0 left-0 bg-black bg-opacity-90 p-4;
}

.wrapper {
    @apply w-[200px] h-[60px] relative z-[1];
  }
  
  .circle {
    @apply w-[20px] h-[20px] absolute rounded-full bg-[var(--g-blue)] left-[calc(50%-60px)];
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
    @apply bg-[var(--g-red)] left-[calc(50%-20px)];
    animation-delay: .2s;
  }
  
  .circle:nth-child(3) {
    @apply bg-[var(--g-yellow)] left-[calc(50%+20px)];
    animation-delay: .3s;
  }
  .circle:nth-child(4) {
    @apply bg-[var(--g-green)] left-[calc(50%+60px)];
    animation-delay: .4s;
  }
  
  .shadow {
    @apply w-[20px] h-[4px] absolute rounded-full blur-[1px] z-[-1] top-[62px] left-[calc(50%-60px)];
    background-color: rgba(85, 85, 85, 0.9);
    transform-origin: 50%;
    animation: shadow046 .5s alternate infinite ease;
  }
  
  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }
  
    40% {
      transform: scaleX(1);
      opacity: .7;
    }
  
    100% {
      transform: scaleX(.2);
      opacity: .4;
    }
  }
  
  .shadow:nth-child(5) {
    @apply left-[calc(50%-20px)];
    animation-delay: .2s
  }
  
  .shadow:nth-child(6) {
    @apply left-[calc(50%+20px)];
    animation-delay: .3s;
  }
  .shadow:nth-child(7) {
    @apply left-[calc(50%+60px)];
    animation-delay: .4s;
  }

</style>

