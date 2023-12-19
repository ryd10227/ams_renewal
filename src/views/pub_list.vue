<!--
  (필수 작성) 퍼블리싱된 화면 링크용 목록 화면
  주소는 파일생성시 views/ 를 기준으로 파일의 실제 경로로 자동 생성됨
-->
<template>
  <div class="wrapper">
    <h1>3Team Publishing</h1>

    <table>
      <colgroup>
        <col style="width: 7%" />
        <col style="width: 9%" span="2" />
        <col style="width: 10%" />
        <col style="width: 12%" />
        <col style="width: 15%" />
        <col style="width: 7%" span="2" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Folder</th>
          <th scope="col">1 Depth</th>
          <th scope="col">2 Depth</th>
          <th scope="col">3 Depth</th>
          <th scope="col">4 Depth</th>
          <th scope="col">File name</th>
          <th scope="col">Commit</th>
          <th scope="col">Update</th>
          <th scope="col">memo</th>
        </tr>
      </thead>

      <tbody>

        <tr> <!-- Row -->
          <td>LOG</td> <!-- Folder -->
          <td>로그인</td> <!-- 1 Depth -->
          <td></td> <!-- 2 Depth -->
          <td></td> <!-- 3 Depth -->
          <td></td> <!-- 4 Depth -->
          <td><router-link to="/LOG/LOG1000" target="_blank">LOG1000.vue</router-link></td> <!-- File name -->
          <td class="date"></td> <!-- Commit -->
          <td class="date"></td> <!-- Update -->
          <td></td> <!-- memo -->
        </tr>

        <tr class="line"><td colspan="9"></td></tr> <!-- Folder 나눔 줄 -->

        <tr> <!-- Row -->
          <td>FPW</td> <!-- Folder -->
          <td>비밀번호 찾기</td> <!-- 1 Depth -->
          <td></td> <!-- 2 Depth -->
          <td></td> <!-- 3 Depth -->
          <td></td> <!-- 4 Depth -->
          <td><router-link to="/FPW/FPW1000" target="_blank">FPW1000.vue</router-link></td> <!-- File name -->
          <td class="date"></td> <!-- Commit -->
          <td class="date"></td> <!-- Update -->
          <td></td> <!-- memo -->
        </tr>

        <tr class="line"><td colspan="9"></td></tr> <!-- Folder 나눔 줄 -->

        <tr> <!-- Row -->
          <td>HOM</td> <!-- Folder -->
          <td>홈</td> <!-- 1 Depth -->
          <td></td> <!-- 2 Depth -->
          <td></td> <!-- 3 Depth -->
          <td></td> <!-- 4 Depth -->
          <td><router-link to="/HOM/HOM1000" target="_blank">HOM1000.vue</router-link></td> <!-- File name -->
          <td class="date"></td> <!-- Commit -->
          <td class="date"></td> <!-- Update -->
          <td></td> <!-- memo -->
        </tr>

        <tr class="line"><td colspan="9"></td></tr> <!-- Folder 나눔 줄 -->

        <tr> <!-- Row -->
          <td>LST</td> <!-- Folder -->
          <td>전체</td> <!-- 1 Depth -->
          <td></td> <!-- 2 Depth -->
          <td></td> <!-- 3 Depth -->
          <td></td> <!-- 4 Depth -->
          <td><router-link to="/LST/LST1000" target="_blank">LST1000.vue</router-link></td> <!-- File name -->
          <td class="date"></td> <!-- Commit -->
          <td class="date"></td> <!-- Update -->
          <td></td> <!-- memo -->
        </tr>
        <tr> <!-- Row -->
          <td></td> <!-- Folder -->
          <td></td> <!-- 1 Depth -->
          <td>등록</td> <!-- 2 Depth -->
          <td></td> <!-- 3 Depth -->
          <td></td> <!-- 4 Depth -->
          <td><router-link to="/LST/LST1001" target="_blank">LST1001.vue</router-link></td> <!-- File name -->
          <td class="date"></td> <!-- Commit -->
          <td class="date"></td> <!-- Update -->
          <td></td> <!-- memo -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .wrapper {height: 100%; background-color: #f5f6fa !important; overflow: auto; -webkit-user-select: inherit; user-select: inherit; -webkit-touch-callout: inherit;}
		#app > * {max-width: 100%;}
    .wrapper {padding: 10px;}
    h1, h2 {margin-bottom:20px; text-align:left;}
    h2 {margin-top:25px;}
    a {color:#1376c6;}

    table {background-color: #fff; border:1px solid #502314; counter-reset: num 0;}
    table thead th {height:30px; border:1px solid #502314;}
    table td {padding:5px; border:1px solid #502314;}
    .date {text-align:center;}
    .date + .date {color:#d72300;}
    .line td {padding:1px;}
    .line02 td {padding:30px; font-size:1.2rem !important; color:#fffcf8; background:#ef8c8c;}
    td:last-child {font-size:0.9em;}
    tbody tr:hover {background:#fffcf8;}
    .renew {font-weight: bold; background:#dde2e8;}
    .noti_box {margin:10px 0; padding: 20px; font-weight: 500; background:#fffcf8; border-radius: 20px;}

    .num {display:inline-block; min-width:14px; height:20px; margin-right:3px; padding:0 2px; font-size:.75rem; color:#3ab1fc; text-align:center; vertical-align:middle; line-height:20px; letter-spacing:-1px; background:#f0f0f0; border-radius:2px;}
    .num::before {counter-increment: num 1; content: counter(num); }
</style>
