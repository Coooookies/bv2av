var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
var tr = {};

for (var i = 0; i < 58; ++i) {
  tr[table[i]] = i;
}

var s = [11, 10, 3, 8, 4, 6, 2, 9, 5, 7];
var xor = 177451812;
var add = 8728348608;

function dec(x) {
  var r = 0;
  for (var i = 0; i < 6; ++i) {
    r += tr[x[s[i]]] * 58 ** i;
  }
  return "av" + String((r - add) ^ xor);
}

function enc(x) {
  var x_ = (x ^ xor) + add;
  var r = ["B", "V", "1", , , "4", , "1", , "7"];

  for (var i = 0; i < 6; ++i) {
    r[s[i]] = table[Math.floor(x_ / 58 ** i) % 58];
  }
  return r.join("");
}

function bv2av() {
  var bvcode = $("#input-bv-un").val();
  if (bvcode == "undefined" || bvcode == null || bvcode == "") {
    return;
  }

  if (bvcode.substr(0, 2) !== "BV" && bvcode.substr(0, 2) !== "bv") {
    bvcode = "BV" + bvcode;
  }

  $("#input-bv-de").val(dec(bvcode.substr(0, 12)));
}

function av2bv() {
  var avcode = $("#input-av-un").val();
  if (avcode == "undefined" || avcode == null || avcode == "") {
    return;
  }
  avcode = avcode.replace(/[^0-9]/gi, "");

  $("#input-av-de").val(enc(avcode));
}

$(function() {

  $("#input-bv-un").bind("keypress", function(event) {
    if (event.keyCode == "13") {
      bv2av();
    }
  });
  $("#input-av-un").bind("keypress", function(event) {
    if (event.keyCode == "13") {
      av2bv();
    }
  });


});
