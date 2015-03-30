//JS判断访问设备(userAgent)加载不同页面。代码如下：
function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
    var isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
    var bIsIpad = sUserAgent.match(/ipad/i) === "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) === "iphone os";
    var isUnix = (navigator.platform === "X11") && !isWin && !isMac;
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) === "android";
    var bIsCE = sUserAgent.match(/windows ce/i) === "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) === "windows mobile";
    if (isMac)
        return "Mac";
    if (isUnix)
        return "Unix";
    if (isLinux) {
        if (bIsAndroid)
            return "Android";
        else
            return "Linux";
    }
    if(bIsCE || bIsWM){
        return 'wm';
    }

    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K)
            return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 ||
            sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP)
            return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003)
            return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista)
            return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7)
            return "Win7";
        var isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
        if (isWin8)
            return "Win8";
    }
    return "other";
}
//获取浏览器类型和版本
function getBrowser(){
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
    if (sys.ie) return ('ie: ' + sys.ie);
    if (sys.firefox) return ('firefox: ' + sys.firefox);
    if (sys.chrome) return ('chrome: ' + sys.chrome);
    if (sys.opera) return ('opera: ' + sys.opera);
    if (sys.safari) return ('safari: ' + sys.safari);
}
