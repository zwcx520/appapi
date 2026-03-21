// 等待页面DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 获取 class 为 num 的元素
  const numEl = document.querySelector('.num')
  // 有这个元素才插入文字
  if (numEl) {
    numEl.innerText = '2002.02.02'
  }
})
