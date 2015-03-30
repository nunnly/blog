var canvas = document.querySelector("#abc");
var fingerprint = canvas.toDataURL();
var txt = document.querySelector("#txt");
var sys = detectOS();
var browserVersion = getBrowser();
system.value = sys;
browser.value = browserVersion;
txt.innerHTML = fingerprint;