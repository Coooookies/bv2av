//算法来自知乎大佬 https://www.zhihu.com/question/381784377/answer/1099438784

var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
var tr = {};

for (var i = 0; i < 58; ++i) {
  tr[table[i]] = i;
}

var s = [11, 10, 3, 8, 4, 6, 2, 9, 5, 7];
var xor = 177451812;
var add = 8728348608;

//bv2av
function dec(x) {
  var r = 0;
  for (var i = 0; i < 6; ++i) {
    r += tr[x[s[i]]] * 58 ** i;
  }
  return "av" + String((r - add) ^ xor);
}


//av2bv
function enc(x) {
  var x_ = (x ^ xor) + add;
  var r = ["B", "V", "1", , , "4", , "1", , "7"];

  for (var i = 0; i < 6; ++i) {
    r[s[i]] = table[Math.floor(x_ / 58 ** i) % 58];
  }
  return r.join("");
}
