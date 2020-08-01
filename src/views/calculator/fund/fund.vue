<template>
  <div class="fund">
    <calculator name="公积金贷款计算器" @submit="submit" @reset="reset"></calculator>
    <result ref="result" @reset="reset"></result>
  </div>
</template>

<script src="./fund"></script>
