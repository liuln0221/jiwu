<template>
  <div class="property">
    <calculator name="商业贷款计算器" @submit="submit" @reset="reset"></calculator>
    <result ref="result" @reset="reset"></result>
  </div>
</template>

<script src="./property"></script>
