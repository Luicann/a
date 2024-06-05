
var SITE_XTHOST = "https://wormatefriendsturkey.com";

window.detectLog = null;

const _wrmxt = {

  BETAisSkinCustom(input) {

    var templateStartAlphaRegex = /[a-zA-Z]/;

    return "string" === typeof input && templateStartAlphaRegex.test(input);

  },

  testSkinCustom : function(value) {

    return _wrmxt.BETAisSkinCustom(value) ? 34 || 33 : value;

  },

  testSkinMod : function(a22) {

    return 399 <= a22 && 999 > a22;

  },

  testWear : function(canCreateDiscussions) {

    return 399 <= canCreateDiscussions && 999 > canCreateDiscussions;

  },

  isNumberValid : function(id) {

    return "" !== id && null !== id && void 0 !== id && !isNaN(id);

  },

  validInput : function(e) {

    if (!_wrmxt.testSkinMod(e) && !_wrmxt.BETAisSkinCustom(e)) {

      return e;

    }

    try {

      let duration = $("#inputReplaceSkin").val();

      return encodeURI(_wrmxt.isNumberValid(duration) ? duration : 35);

    } catch (q) {

      return encodeURI(35);

    }

  },

  aload : false,

  aId : 0

};



var inputReplaceSkin = localStorage.getItem('inputReplaceSkin');



var PilotoAutomatico = null;

var isPlaying = false;

var pwrups = {};

window.keyMove = 81;

var theoEvents = {

    'eventoPrincipal': null,

    joystick: {

            positionMode: "L",

            checked: !0,

            size: 90,

            mode: "dynamic",

            position: {

                left: "110px",

                bottom: "110px"

            },

            color: "#FFEB3B",

            pxy: 110

        },

}

var theoKzObjects = {
    FB_UserID: "",
    smoothCamera: .5,
    eat_animation: .0025,
    flag: "https://i.imgur.com/EkbSd65.png",
    PortionSize: localStorage.PotenciadorSize || 2,
    PortionAura: localStorage.PotenciadorAura || 1.2,
    PortionTransparent: .8,
    FoodTransparent: .3,
    ModeStremer: false,
    arrow: false,
    KeyCodeRespawn: localStorage.KeyRespawn || 82,
    KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
    AbilityZ: false,
    FoodShadow: localStorage.ComidaShadow || 2,
    FoodSize: localStorage.ComidaSize || 2,
    headshot: 0,
    visibleSkin: [],
    pL: [],
    gamePad: theoEvents.joystick,
    mobile: !1,
    loading: false,
    kill: 0,
    totalKills: 0,
    totalHeadshots: 0,
    adblock: false,
    CLIENTE_ADMIN: 1,
    CLIENTE_ACTIVO: 3,
    CLIENTE_INACTIVO: 4,
}

saveGameLocal = localStorage.getItem("SaveGameXT");

    if (saveGameLocal && "null" !== saveGameLocal) {

        let t = JSON.parse(saveGameLocal);

        for (let e in t)

            theoKzObjects[e] = t[e]

}

theoKzObjects.loading = true;



const PhoneChecked = function() {

  let k = false;

  theoKzObjects.mobile = false;

  var q = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(q) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(q.substr(0, 

  4))) {

    /** @type {boolean} */

    theoKzObjects.mobile = true;

    k = true;

  }

  return k;

};

const RechekingPhone = function() {

  let check = false;

  var q = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(q) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(q.substr(0, 

  4))) {

    /** @type {boolean} */

    check = true;

  }

  return check;

};

const loadJoy = function(found) {

  let q;

  try {

    console.log(found);

    return theoKzObjects.gamePad || (theoKzObjects.gamePad = theoEvents.joystick), RechekingPhone() && (found || theoKzObjects.gamePad.checked) && (q = nipplejs.create(theoKzObjects.gamePad), q.on("move", function(canCreateDiscussions, obj) {

      /** @type {number} */

      theoEvents.eventoPrincipal.sk = obj.angle.radian <= Math.PI ? -1 * obj.angle.radian : Math.PI - (obj.angle.radian - Math.PI);

      console.log(obj);

    })), q;

  } catch (jiveUser) {

    console.log(jiveUser);

  }

};





let clientes = {
    clientesVencidos: [],
    clientesActivos: []
};

let servers = {
    Api_listServer: []
};



async function loadUsers() {
    try {
        const response = await fetch("https://wormatefriendsturkey.com/api/users.php");
        const data = await response.json();

        if (data.success) {
            clientes.clientesActivos = data.Users;
        } else {
            throw new Error(data.error || "Error loading clients");
        }
    } catch (error) {
        console.error("An error occurred while loading clients: " + error);
        clientes = { clientesVencidos: [], clientesActivos: [] };
        alert("An error occurred while loading clients");
    }
}

async function loadServers() {
    try {
        const response = await fetch("https://wormatefriendsturkey.com/api/server.php");
        const data = await response.json();

        if (data.success) {
            servers.Api_listServer = data.servers;
        } else {
            throw new Error(data.error || "Error loading servers");
        }
    } catch (error) {
        console.error("An error occurred while loading servers: " + error);
        servers = { Api_listServer: [] };
        alert("An error occurred while loading the servers");
    }
}



loadUsers();
loadServers();
//loadSkins();









$(".store-view-cont").append('<div id="idReplaceSkin"></div>');

var StoreSkinID = $("#idReplaceSkin");

const ctx = {

    fontStyle: {

        name:  new PIXI.TextStyle({

            fill : "#FFFF00",

            fontSize : 11,

            lineJoin : "round",

            stroke : "#EFFA45",

            fontFamily: "vuonghiep",

            fontWeight : "bold"

            

          }),

        blanco: new PIXI.TextStyle({

            align : "center",

            fill : "#FFF",

            fontSize : 12,

            lineJoin : "round",

            stroke : "#FFF",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontWeight : "bold",

            wordWrap : true

          }),

          morado: new PIXI.TextStyle({

            align : "center",

            fill : "#FFFF00",

            fontSize : 10,

            lineJoin : "round",

            stroke : "#FAA845",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontFamily : "vuonghiep",

            fontWeight : "bold",

            wordWrap : true

          }),

          morado1: new PIXI.TextStyle({

            align : "center",

            fill : "#FFF",

            fontSize : 10,

            lineJoin : "round",

            stroke : "#FAA845",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontFamily : "vuonghiep",

            fontWeight : "bold",

            wordWrap : true

          }),

          amarillo: new PIXI.TextStyle({

            align : "center",

            fill : "#FFFF00",

            fontSize : 10,

            lineJoin : "round",

            stroke : "#FAA845",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontFamily : "vuonghiep",

            fontWeight : "bold",

            wordWrap : true

          }),

          amarillo1: new PIXI.TextStyle({

            align : "center",

            fill : "#FFF",

            fontSize : 10,

            lineJoin : "round",

            stroke : "#FAA845",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontFamily : "vuonghiep",

            fontWeight : "bold",

            wordWrap : true

          }),

        keysColor:  new PIXI.TextStyle({

            align : "center",

            fill : "#fff009",

            fontSize : 10,

            lineJoin : "round",

            stroke : "#fff009",

            strokeThickness : 1,

            whiteSpace : "normal",

            fontWeight : "bold",

            fontFamily : "vuonghiep",

            wordWrap : true

          }),

    }

};

ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");

ctx.clock.width = 100;

ctx.clock.height = 100; 

ctx.clock.x = -50;

ctx.clock.y = -50; 



ctx.hoisinhnhanh = PIXI.Sprite.fromImage("https://i.imgur.com/QZfm7vv.png");

ctx.hoisinhnhanh.width = 23;

ctx.hoisinhnhanh.height = 23; 

ctx.hoisinhnhanh.x = -50;

ctx.hoisinhnhanh.y = 7; 



ctx.quaytron = PIXI.Sprite.fromImage("https://i.imgur.com/a7lVOy5.png");

ctx.quaytron.width = 23;

ctx.quaytron.height = 23; 

ctx.quaytron.x = -80;

ctx.quaytron.y = 7; 



ctx.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");



ctx.top10sv.height = 25;

ctx.top10sv.width = 100; 

ctx.top10sv.x = 60;

ctx.top10sv.y = 22; 



 /*server ADI */

ctx.value_server = new PIXI.Text("YILDOUPDATE", ctx.fontStyle.name);

ctx.value_server.x = 20;

ctx.value_server.y = 4;









// ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);

// ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);

// ctx.value2_hs = new PIXI.Text("0", ctx.fontStyle.amarillo1);

// ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);

// ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);

// ctx.value2_kill = new PIXI.Text("0", ctx.fontStyle.morado1);





// ctx.label_hs.x = 65;

// ctx.label_hs.y = 106;

// ctx.label_kill.x = 10;

// ctx.label_kill.y = 106;

// ctx.value1_hs.x = 65;

// ctx.value1_hs.y = 122;

// ctx.value1_kill.x = 10;

// ctx.value1_kill.y = 122;

// ctx.value2_hs.x = 65;

// ctx.value2_hs.y = 139;

// ctx.value2_kill.x = 10;

// ctx.value2_kill.y = 139;



//if (!theoKzObjects.SaveGameXT) {

    //ctx.value2_hs.alpha = 0;

    //ctx.value2_kill.alpha = 0;

//}



// ctx.containerCountInfo.addChild(ctx.label_hs);

// ctx.containerCountInfo.addChild(ctx.value1_hs);

// ctx.containerCountInfo.addChild(ctx.value2_hs);

// ctx.containerCountInfo.addChild(ctx.label_kill);

// ctx.containerCountInfo.addChild(ctx.value1_kill);

// ctx.containerCountInfo.addChild(ctx.value2_kill);









ctx.containerCountInfo = new PIXI.Container;

ctx.containerCountInfo.x = -45;

ctx.containerCountInfo.y = -5;

ctx.containerCountInfo.addChild(ctx.value_server);



ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");

ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");



ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);



ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);

ctx.containerImgS.anchor.set(0.5);

ctx.containerImgS.x = 0;

ctx.containerImgS.y = 10;

ctx.containerImgS.width = 25;

ctx.containerImgS.height = 20;

ctx.borderImg =  new PIXI.Sprite(ctx.borderurl);

ctx.borderImg.anchor.set(0.5);

ctx.borderImg.x = -2;

ctx.borderImg.y = 78;

ctx.borderImg.width = 110;

ctx.borderImg.height = 60;

ctx.setServer = function(name) {

    ctx.value_server.text = name || "WFC"

};

 ctx.setCountGame = function(killHTML, headShotHTML, totalKills, totalHeadshots) {

  //if (!theoKzObjects.SaveGameXT) {

  //  ctx.value2_hs.alpha = 0;

  //  ctx.value2_kill.alpha = 0;

  //}



  ctx.value1_hs.text = headShotHTML;

  ctx.value2_hs.text = totalHeadshots;

  ctx.value1_kill.text = killHTML;

  ctx.value2_kill.text = totalKills;

  

  

  

  

  





};

"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {

    return typeof t

} : function (t) {

    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t

},

GoogleAuth;

window.addEventListener("load", function () {

function isBrowserCompatible() {

    return function (t, i, n) {

        function o(t, i) {

            return (void 0 === t ? "undefined" : _typeof(t)) === i

        }



        function e() {

            return "function" != typeof i.createElement ? i.createElement(arguments[0]) : p ? i.createElementNS.call(i, "http://www.w3.org/2000/svg", arguments[0]) : i.createElement.apply(i, arguments)

        }

        var s = [],

            h = [],

            r = {

                _version: "3.3.1",

                _config: {

                    classPrefix: "",

                    enableClasses: !0,

                    enableJSClass: !0,

                    usePrefixes: !0

                },

                _q: [],

                on: function (t, i) {

                    var n = this;

                    setTimeout(function () {

                        i(n[t])

                    }, 0)

                },

                addTest: function (t, i, n) {

                    h.push({

                        name: t,

                        fn: i,

                        options: n

                    })

                },

                addAsyncTest: function (t) {

                    h.push({

                        name: null,

                        fn: t

                    })

                }

            },

            a = function () {};

        a.prototype = r, a = new a;

        var f = !1;

        try {

            f = "WebSocket" in t && 2 === t.WebSocket.CLOSING

        } catch (t) {}

        a.addTest("websockets", f);

        var c = i.documentElement,

            p = "svg" === c.nodeName.toLowerCase();

        a.addTest("canvas", function () {

                var t = e("canvas");

                return !(!t.getContext || !t.getContext("2d"))

            }), a.addTest("canvastext", function () {

                return !1 !== a.canvas && "function" == typeof e("canvas").getContext("2d").fillText

            }),

            function () {

                var t, i, n, e, r, f, c;

                for (var p in h)

                    if (h.hasOwnProperty(p)) {

                        if (t = [], i = h[p], i.name && (t.push(i.name.toLowerCase()), i.options && i.options.aliases && i.options.aliases.length))

                            for (n = 0; n < i.options.aliases.length; n++) t.push(i.options.aliases[n].toLowerCase());

                        for (e = o(i.fn, "function") ? i.fn() : i.fn, r = 0; r < t.length; r++) f = t[r], c = f.split("."), 1 === c.length ? a[c[0]] = e : (!a[c[0]] || a[c[0]] instanceof Boolean || (a[c[0]] = new Boolean(a[c[0]])), a[c[0]][c[1]] = e), s.push((e ? "" : "no-") + c.join("-"))

                    }

            }(),

            function (t) {

                var i = c.className,

                    n = a._config.classPrefix || "";

                if (p && (i = i.baseVal), a._config.enableJSClass) {

                    var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");

                    i = i.replace(o, "$1" + n + "js$2")

                }

                a._config.enableClasses && (i += " " + n + t.join(" " + n), p ? c.className.baseVal = i : c.className = i)

            }(s), delete r.addTest, delete r.addAsyncTest;

        for (var u = 0; u < a._q.length; u++) a._q[u]();

        t.Modernizr = a

    }(window, document), Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext

}

 



if (document.getElementById("game-wrap").style.display = "block", !isBrowserCompatible()) return void(document.getElementById("error-view").style.display = "block");

! function () {

    function getApp() {

        return _anApp

    }

    var $C = {},

        $V = {},

        $F = {};

    $F.a = {

        b: atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8="),

        c: atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw=="),

        d: "/images/linelogo-xmas2023.png",

        e: "/images/guest-avatar-xmas2023.png",

        f: "/images/confetti-xmas2023.png",

        g: "/images/bg-event-pattern-xmas2023.png"

    }, $F.a.i = function () {

        var t = window.I18N_LANG;

        return t || (t = "en"), t

    }(), $F.a.j = function () {

        var t = void 0;

        switch ($F.a.i) {

        case "uk":

            t = "uk_UA";

            break;

        case "de":

            t = "de_DE";

            break;

        case "fr":

            t = "fr_FR";

            break;

        case "es":

            t = "es_ES";

            break;

        default:

            t = "en_US"

        }

        return t

    }(), moment.locale($F.a.j);

    var _anApp = void 0,

        POGL = function () {

            var p = eval(atob("UElYSQ==")),

                bm = p[atob("QkxFTkRfTU9ERVM=")],

                wm = p[atob("V1JBUF9NT0RFUw==")],

                result = {};

            return result.k = p[atob("Q29udGFpbmVy")], result.l = p[atob("QmFzZVRleHR1cmU=")], result.m = p[atob("VGV4dHVyZQ==")], result.n = p[atob("UmVuZGVyZXI=")], result.o = p[atob("R3JhcGhpY3M=")], result.p = p[atob("U2hhZGVy")], result.q = p[atob("UmVjdGFuZ2xl")], result.r = p[atob("U3ByaXRl")], result.s = p[atob("VGV4dA==")], result.t = p[atob("R2VvbWV0cnk=")], result.u = p[atob("TWVzaA==")], result.v = {

                z: bm[atob("QURE")],

                A: bm[atob("U0NSRUVO")],

                B: bm[atob("TVVMVElQTFk=")]

            }, result.C = {

                D: wm[atob("UkVQRUFU")]

            }, result

        }();

    $V.F = 2 * Math.PI, $V.G = Math.PI, $F.H = function (t) {

            return window.I18N_MESSAGES[t]

        }, $F.I = function (t) {

            return t[$F.a.i] ? t[$F.a.i] : t.en ? t.en : t.x

        }, $F.J = function (t) {

            var i = (Math.floor(t) % 60).toString(),

                n = (Math.floor(t / 60) % 60).toString(),

                o = (Math.floor(t / 3600) % 24).toString(),

                e = Math.floor(t / 86400).toString(),

                s = $F.H("util.time.days"),

                h = $F.H("util.time.hours"),

                r = $F.H("util.time.min"),

                a = $F.H("util.time.sec");

            return e > 0 ? e + " " + s + " " + o + " " + h + " " + n + " " + r + " " + i + " " + a : o > 0 ? o + " " + h + " " + n + " " + r + " " + i + " " + a : n > 0 ? n + " " + r + " " + i + " " + a : i + " " + a

        }, $F.K = function (t) {

            return t.includes("href") ? t.replaceAll("href", 'target="_black" href') : t

        }, $F.L = function (t, i, n) {

            var o = document.createElement("script"),

                e = !0;

            void 0 !== i && null !== i && (void 0 !== i.id && (o.id = i.id), void 0 !== i.async && i.async && (o.async = "async"), void 0 !== i.defer && i.defer && (o.defer = "defer"), void 0 !== i.crossorigin && (o.crossorigin = i.crossorigin)), o.type = "text/javascript", o.src = t, n && (o.onload = o.onreadystatechange = function () {

                e = !1;

                try {

                    n()

                } catch (t) {}

                o.onload = o.onreadystatechange = null

            }), (document.head || document.getElementsByTagName("head")[0]).appendChild(o)

        }, $F.M = function (t, i) {

            var n = i;

            return n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.parent = t, n

        }, $F.N = function (t) {

            return t %= $V.F, t < 0 ? t + $V.F : t

        }, $F.O = function (t, i, n) {

            return $F.P(n, t, i)

        }, $F.P = function (t, i, n) {

            return t > n ? n : t < i ? i : Number.isFinite(t) ? t : .5 * (i + n)

        }, $F.Q = function (t, i, n, o) {

            return i > t ? Math.min(i, t + n * o) : Math.max(i, t - n * o)

        }, $F.R = function (t, i, n, o, e) {

            return i + (t - i) * Math.pow(1 - o, n / e)

        }, $F.S = function (t, i, n) {

            return t - (t - i) * n

        }, $F.T = function (t, i, n, o) {

            var e = n,

                s = i,

                h = i + o;

            if (null == t) throw new TypeError("this is null or not defined");

            var r = t.length >>> 0,

                a = e >> 0,

                f = a < 0 ? Math.max(r + a, 0) : Math.min(a, r),

                c = s >> 0,

                p = c < 0 ? Math.max(r + c, 0) : Math.min(c, r),

                u = void 0 === h ? r : h >> 0,

                l = u < 0 ? Math.max(r + u, 0) : Math.min(u, r),

                d = Math.min(l - p, r - f),

                $ = 1;

            for (p < f && f < p + d && ($ = -1, p += d - 1, f += d - 1); d > 0;) p in t ? t[f] = t[p] : delete t[f], p += $, f += $, d--;

            return t

        }, $F.U = function (t) {

            null != t.parent && t.parent.removeChild(t)

        }, $F.V = function (t, i) {

            return t + (i - t) * Math.random()

        }, $F.W = function (t) {

            return t[parseInt(Math.random() * t.length)]

        }, $F.X = function () {

            return Math.random().toString(36).substring(2, 15)

        }, $F.Y = function (t, i, n) {

            var o = (1 - Math.abs(2 * n - 1)) * i,

                e = o * (1 - Math.abs(t / 60 % 2 - 1)),

                s = n - o / 2;

            return 0 <= t && t < 60 ? [s + o, s + e, s + 0] : 60 <= t && t < 120 ? [s + e, s + o, s + 0] : 120 <= t && t < 180 ? [s + 0, s + o, s + e] : 180 <= t && t < 240 ? [s + 0, s + e, s + o] : 240 <= t && t < 300 ? [s + e, s + 0, s + o] : [s + o, s + 0, s + e]

        }, $F.Z = function (t, i, n) {

            $.get(t).fail(i).done(n)

        }, $F.$ = function (t, i, n, o) {

            $.ajax({

                type: "GET",

                url: t,

                xhrFields: {

                    responseType: "arraybuffer",

                    onprogress: function (t) {

                        t.lengthComputable && o(t.loaded / t.total * 100)

                    }

                }

            }).fail(i).done(n)

        }, $F._ = function (t, i) {

            for (var n in t) t.hasOwnProperty(n) && i(n, t[n])

        }, $F.aa = function (t) {

            for (var i = t.length - 1; i > 0; i--) {

                var n = Math.floor(Math.random() * (i + 1)),

                    o = t[i];

                t[i] = t[n], t[n] = o

            }

            return t

        },

        function () {

            var t = "Z2V0",

                i = "=",

                n = t + "SW50",

                o = t + "RmxvYXQ",

                e = atob(n + "OA=="),

                s = atob(n + "MTY" + i),

                h = atob(n + "MzI" + i),

                r = atob(o + "zMg=="),

                a = atob(o + "2NA==");

            DataView.prototype.ba = function (t) {

                return this[e](t)

            }, DataView.prototype.ca = function (t) {

                return this[s](t)

            }, DataView.prototype.da = function (t) {

                return this[h](t)

            }, DataView.prototype.ea = function (t) {

                return this[r](t)

            }, DataView.prototype.fa = function (t) {

                return this[a](t)

            }

        }(), $F.ga = function () {

            function t() {

                $("#adbl-1").text($F.H("index.game.antiadblocker.msg1")), $("#adbl-2").text($F.H("index.game.antiadblocker.msg2")), $("#adbl-3").text($F.H("index.game.antiadblocker.msg3")), $("#adbl-4").text($F.H("index.game.antiadblocker.msg4").replace("{0}", 10)), $("#adbl-continue span").text($F.H("index.game.antiadblocker.continue")), $("#adbl-continue").hide(), $("#" + e).fadeIn(500);

                for (var t = 10, i = 0; i < 10; i++) setTimeout(function () {

                    if (t--, $("#adbl-4").text($F.H("index.game.antiadblocker.msg4").replace("{0}", t)), 0 === t) {

                        try {

                            ga("send", "event", "antiadblocker", window.runtimeHash + "_complete")

                        } catch (t) {}

                        $("#adbl-continue").fadeIn(200)

                    }

                }, 1e3 * (i + 1))

            }

            var i = !1,

                n = function () {},

                o = {},

                e = "JDHnkHtYwyXyVgG9";

            return $("#adbl-continue").click(function () {

                $("#" + e).fadeOut(500), n(!1)

            }), o.ha = function (t) {

                if (n = t, !i) try {

                    aiptag.cmd.player.push(function () {

                        aiptag.adplayer = new aipPlayer({

                            AD_WIDTH: 960,

                            AD_HEIGHT: 540,

                            AD_FULLSCREEN: !0,

                            AD_CENTERPLAYER: !1,

                            LOADING_TEXT: "loading advertisement",

                            PREROLL_ELEM: function () {

                                return document.getElementById("1eaom01c3pxu9wd3")

                            },

                            AIP_COMPLETE: function (t) {

                                n(!0), $("#1eaom01c3pxu9wd3").hide(), $("#" + e).hide();

                                try {

                                    ga("send", "event", "preroll", window.runtimeHash + "_complete")

                                } catch (t) {}

                            },

                            AIP_REMOVE: function () {}

                        })

                    }), i = !0

                } catch (t) {}

            }, o.ia = function () {

                if (void 0 !== aiptag.adplayer) {

                    try {

                        ga("send", "event", "preroll", window.runtimeHash + "_request")

                    } catch (t) {}

                    $("#1eaom01c3pxu9wd3").show(), aiptag.cmd.player.push(function () {

                        aiptag.adplayer.startPreRoll()

                    })

                } else {

                    try {

                        ga("send", "event", "antiadblocker", window.runtimeHash + "_start")

                    } catch (t) {}

                    t()

                }

            }, o

        }, $F.ja = function (t, i) {

            var n = $("#" + t),

                o = i,

                e = {},

                s = !1;

            return e.ha = function () {

                if (!s) {

                    n.empty(), n.append("<div id='" + o + "'></div>");

                    try {

                        try {

                            ga("send", "event", "banner", window.runtimeHash + "_display")

                        } catch (t) {}

                        aiptag.cmd.display.push(function () {

                            aipDisplayTag.display(o)

                        }), s = !0

                    } catch (t) {}

                }

            }, e.ka = function () {

                try {

                    try {

                        ga("send", "event", "banner", window.runtimeHash + "_refresh")

                    } catch (t) {}

                    aiptag.cmd.display.push(function () {

                        aipDisplayTag.display(o)

                    })

                } catch (t) {}

            }, e

        }, $C.la = function () {

            function t(t, i, n, o, e, s, h, r, a, f) {

                this.ma = t, this.na = i, this.oa = null, this.pa = !1, this.qa = n, this.ra = o, this.sa = e, this.ta = s, this.ua = h || (a || e) / 2, this.va = r || (f || s) / 2, this.wa = a || e, this.xa = f || s, this.ya = .5 - (this.ua - .5 * this.wa) / this.sa, this.za = .5 - (this.va - .5 * this.xa) / this.ta, this.Aa = this.sa / this.wa, this.Ba = this.ta / this.xa

            }

            return t.Ca = function () {

                return new t("", null, 0, 0, 0, 0, 0, 0, 0, 0)

            }, t.Da = function (i, n, o) {

                return new t(i, n, o.x, o.y, o.w, o.h, o.px, o.py, o.pw, o.ph)

            }, t.prototype.Ea = function () {

                return this.pa ? this.oa : (null != this.na && (this.oa = new POGL.m(this.na, new POGL.q(this.qa, this.ra, this.sa, this.ta))), this.pa = !0, this.oa)

            }, t.prototype.Fa = function () {

                null != this.oa && this.oa.destroy()

            }, t

        }(), $C.Ga = function () {

            function t(t, i, n, o, e, s, h, r, a, f, c, p, u, l, d, $, g, C) {

                this.Ha = t, this.Ia = i, this.Ja = n, this.Ka = o, this.La = e, this.Ma = s, this.Na = h, this.Oa = r, this.Pa = a, this.Qa = f, this.Ra = c, this.Sa = p, this.Ta = u, this.Ua = l, this.Va = d, this.Wa = $, this.Xa = g, this.Ya = C

            }

            return t.prototype.Fa = function () {

                for (var t = 0; t < this.Ha.length; t++) this.Ha[t].dispose(), this.Ha[t].destroy();

                this.Ha = [];

                for (var i = 0; i < this.Ia.length; i++) this.Ia[i].Fa();

                this.Ia = []

            }, t.Ca = function () {

                var i = new t.Za($C._a.$a, $C._a.$a),

                    n = new t.ab("#ffffff", [$C._a.$a], [$C._a.$a]);

                return new t([], [], {}, i, {}, new t.bb($C._a.$a), {}, n, {}, new t.cb("", n, i), {}, new t.db([$C._a.$a]), {}, new t.db([$C._a.$a]), {}, new t.db([$C._a.$a]), {}, new t.db([$C._a.$a]))

            }, t.eb = function (i, n, o, e) {

                var s = new t.Za($C._a.$a, $C._a.$a),

                    h = new t.ab("#ffffff", [i], [n]);

                return new t([], [], {}, s, {}, new t.bb($C._a.$a), {}, h, {}, new t.cb("", h, s), {}, new t.db([o]), {}, new t.db([e]), {}, new t.db([$C._a.$a]), {}, new t.db([$C._a.$a]))

            }, t.fb = function (i, n, o, e) {

                var s = {};

                $F._(i.colorDict, function (t, i) {

                    s[t] = "#" + i

                });

                for (var h = {}, r = 0; r < i.skinArrayDict.length; r++) {

                    var a = i.skinArrayDict[r];

                    h[a.id] = new t.ab(s[a.prime], a.base.map(function (t) {

                        return n[t]

                    }), a.glow.map(function (t) {

                        return n[t]

                    }))

                }

                var f = void 0,

                    c = i.skinUnknown;

                f = new t.ab(s[c.prime], c.base.map(function (t) {

                    return n[t]

                }), c.glow.map(function (t) {

                    return n[t]

                }));

                var p = {};

                $F._(i.eyesDict, function (i, o) {

                    var e = parseInt(i);

                    p[e] = new t.db(o.base.map(function (t) {

                        return n[t.region]

                    }))

                });

                var u = new t.db(i.eyesUnknown.base.map(function (t) {

                        return n[t.region]

                    })),

                    l = {};

                $F._(i.mouthDict, function (i, o) {

                    var e = parseInt(i);

                    l[e] = new t.db(o.base.map(function (t) {

                        return n[t.region]

                    }))

                });

                var d = new t.db(i.mouthUnknown.base.map(function (t) {

                        return n[t.region]

                    })),

                    $ = {};

                $F._(i.hatDict, function (i, o) {

                    var e = parseInt(i);

                    $[e] = new t.db(o.base.map(function (t) {

                        return n[t.region]

                    }))

                });

                var g = new t.db(i.hatUnknown.base.map(function (t) {

                        return n[t.region]

                    })),

                    C = {};

                $F._(i.glassesDict, function (i, o) {

                    var e = parseInt(i);

                    C[e] = new t.db(o.base.map(function (t) {

                        return n[t.region]

                    }))

                });

                var m = new t.db(i.glassesUnknown.base.map(function (t) {

                        return n[t.region]

                    })),

                    v = {};

                $F._(i.portionDict, function (i, o) {

                    i = parseInt(i), v[i] = new t.Za(n[o.base], n[o.glow])

                });

                var k = void 0,

                    b = i.portionUnknown;

                k = new t.Za(n[b.base], n[b.glow]);

                var y = {};

                $F._(i.abilityDict, function (i, o) {

                    i = parseInt(i), y[i] = new t.bb(n[o.base])

                });

                var j = void 0,

                    w = i.abilityUnknown;

                j = new t.bb(n[w.base]);

                var O = {};

                $F._(i.teamDict, function (i, o) {

                    i = parseInt(i), O[i] = new t.cb(o.title, new t.ab(s[o.skin.prime], null, o.skin.glow.map(function (t) {

                        return n[t]

                    })), new t.Za(null, n[o.portion.glow]))

                });

                var F = new t.cb({}, f, k);

                return new t(o, e, v, k, y, j, h, f, O, F, p, u, l, d, $, g, C, m)

            }, t.prototype.gb = function (t) {

                for (var i = $F.aa(Object.keys(this.Na)).slice(0, t), n = $F.aa(Object.keys(this.Ra)).slice(0, t), o = $F.aa(Object.keys(this.Ta)).slice(0, t), e = $F.aa(Object.keys(this.Va)).slice(0, t), s = $F.aa(Object.keys(this.Xa)).slice(0, t), h = [], r = 0; r < t; r++) {

                    var a = i.length > 0 ? i[r % i.length] : 0,

                        f = n.length > 0 ? n[r % n.length] : 0,

                        c = o.length > 0 ? o[r % o.length] : 0,

                        p = e.length > 0 ? e[r % e.length] : 0,

                        u = s.length > 0 ? s[r % s.length] : 0;

                    h.push(new $C.hb(a, f, c, p, u))

                }

                return h

            }, t.prototype.ib = function (t) {

                return this.Na.hasOwnProperty(t) ? this.Na[t] : this.Oa

            }, t.prototype.jb = function (t) {

                return this.Pa.hasOwnProperty(t) ? this.Pa[t] : this.Qa

            }, t.prototype.kb = function (t) {

                return this.Ra.hasOwnProperty(t) ? this.Ra[t] : this.Sa

            }, t.prototype.lb = function (t) {

                return this.Ta.hasOwnProperty(t) ? this.Ta[t] : this.Ua

            }, t.prototype.mb = function (t) {

                return this.Xa.hasOwnProperty(t) ? this.Xa[t] : this.Ya

            }, t.prototype.nb = function (t) {

                return this.Va.hasOwnProperty(t) ? this.Va[t] : this.Wa

            }, t.prototype.ob = function (t) {

                return this.Ja.hasOwnProperty(t) ? this.Ja[t] : this.Ka

            }, t.prototype.pb = function (t) {

                return this.La.hasOwnProperty(t) ? this.La[t] : this.Ma

            }, t.cb = function () {

                function t(t, i, n) {

                    this.qb = t, this.rb = i, this.sb = n

                }

                return t

            }(), t.ab = function () {

                function t(t, i, n) {

                    this.tb = t, this.ub = i, this.vb = n

                }

                return t

            }(), t.db = function () {

                function t(t) {

                    this.ub = t

                }

                return t

            }(), t.Za = function () {

                function t(t, i) {

                    this.ub = t, this.vb = i

                }

                return t

            }(), t.bb = function () {

                function t(t) {

                    this.ub = t

                }

                return t

            }(), t

        }(), $C._a = function () {

            function t() {

                var t = POGL.l.from("/images/wear-ability.png");

                this.wb = new $C.la("magnet_ability", t, 158, 86, 67, 124, 148, 63.5, 128, 128), this.xb = new $C.la("velocity_ability", t, 158, 4, 87, 74, 203, 63.5, 128, 128), this.yb = new $C.la("flex_ability", t, 4, 4, 146, 146, 63.5, 63.5, 128, 128);

                var i = POGL.l.from("/images/def-look.png"),

                    n = new $C.la("def_eyes", i, 0, 0, 42, 80, 75, 64, 128, 128),

                    o = new $C.la("def_mouth", i, 46, 0, 20, 48, 109, 63, 128, 128),

                    e = new $C.la("def_skin_glow", i, 70, 0, 32, 32, 0, 0, 0, 0),

                    s = new $C.la("def_skin_base", i, 46, 52, 64, 64, 0, 0, 0, 0),

                    h = $C.Ga.eb(s, e, n, o);

                this.zb = new $C.Ab({}, h), this.Bb = -1e4, this.Cb = -1e4, this.Db = function () {

                    var t = window.document.createElement("canvas");

                    return t.width = 80, t.height = 80, {

                        Eb: t,

                        Fb: t.getContext("2d"),

                        oa: new POGL.m(POGL.l.from(t))

                    }

                }(), this.Gb = null, this.Hb = []

            }

            return t.$a = $C.la.Ca(), t.prototype.ha = function () {}, t.prototype.Ib = function (t, i, n) {

                var o = this,

                    e = this.zb.Jb();

                if (e > 0 && Date.now() - this.Bb < 12e5) return void(null != t && t());

                if (null != this.Gb && !this.Gb.Kb()) {

                    if (Date.now() - this.Bb < 3e5) return void(null != t && t());

                    this.Gb.Lb(), this.Gb = null

                }

                var s = new $C.Mb(e);

                s.Nb(function (t, i) {

                    s === o.Gb && null != n && n(t, i)

                }), s.Ob(function (t) {

                    s === o.Gb && null != i && i(t)

                }), s.Pb(function () {

                    s === o.Gb && null != i && i(new Error)

                }), s.Qb(function () {

                    s === o.Gb && null != t && t()

                }), s.Rb(function (i) {

                    if (s === o.Gb) return o.Cb = Date.now(), o.Gb = null, o.zb = i, o.Sb(), null != t && t(), void o.Tb();

                    try {

                        i.Ub().Fa()

                    } catch (t) {}

                }), s.Vb(), this.Bb = Date.now(), this.Gb = s

            }, t.prototype.Sb = function () {}, t.prototype.Wb = function () {

                return this.zb.Jb() > 0

            }, t.prototype.Xb = function () {

                return this.zb.Yb()

            }, t.prototype.Zb = function () {

                return this.Db

            }, t.prototype.$b = function (t) {

                this.Hb.push(t)

            }, t.prototype.Tb = function () {

                for (var t = 0; t < this.Hb.length; t++) this.Hb[t]()

            }, t.prototype.Ub = function () {

                return this.zb.Ub()

            }, t

        }(), $C._b = function () {

            function t(t) {

                this.ac = t

            }

            return t.prototype.bc = function (t) {

                return this.ac[t]

            }, t.cc = function () {

                function i() {

                    this.dc = []

                }

                return i.prototype.ec = function (i, n) {

                    for (var o = 0; o < this.dc.length; o++)

                        if (this.dc[o].fc === i) throw new Error;

                    return this.dc.push(new t.gc(i, n)), this

                }, i.prototype.hc = function () {

                    for (var i = 0, n = 0; n < this.dc.length; n++) i += this.dc[n].ic;

                    for (var o = {}, e = 0, s = 0; s < this.dc.length; s++) {

                        var h = this.dc[s];

                        h.ic = h.ic / i, h.jc = e, h.kc = e + h.ic, e = h.kc, o[h.fc] = h

                    }

                    return new t(o)

                }, i

            }(), t.gc = function () {

                function t(t, i) {

                    this.fc = t, this.ic = i, this.jc = 0, this.kc = 0

                }

                return t.prototype.lc = function (t) {

                    return this.jc + (this.kc - this.jc) * t

                }, t

            }(), t

        }(), $C.mc = function () {

            function t() {

                this.nc = new POGL.k, this.nc.sortableChildren = !0, this.oc = new v, this.oc.zIndex = i * (2 * (n + 1) + 1 + 3), this.pc = 0, this.qc = new Array(n), this.qc[0] = this.rc(0, new $C.sc, new $C.sc);

                for (var t = 1; t < n; t++) this.qc[t] = this.rc(t, new $C.sc, new $C.sc);

                this.tc = 0, this.uc = 0, this.vc = 0

            }

            var i = .001,

                n = 797,

                o = .1 * Math.PI,

                e = -.06640625,

                s = .84375,

                h = .2578125,

                r = -.03515625,

                a = -.0625,

                f = .5625,

                c = 3 * e + s,

                p = h - 3 * e,

                u = e + r,

                l = .375,

                d = .75,

                $ = a + a,

                g = 3 * r + h,

                C = s - 3 * r,

                m = r + e;

            t.wc = n, t.prototype.rc = function (t, o, e) {

                var s = new k(o, e);

                return o.xc.zIndex = i * (2 * (n - t) + 1 + 3), e.xc.zIndex = i * (2 * (n - t) - 2 + 3), s

            }, t.prototype.yc = function (t, i, n, o, e, s, h, r) {

                var a = n.ub,

                    f = t === $C.Ac.zc ? i.rb.vb : n.vb;

                if (a.length > 0 && f.length > 0)

                    for (var c = 0; c < this.qc.length; c++) this.qc[c].Cc.Bc(a[c % a.length]), this.qc[c].Dc.Bc(f[c % f.length]), this.qc[c].Cc.Ec(r), this.qc[c].Dc.Ec(r);

                this.oc.yc(o, e, s, h)

            };

            var v = function () {

                var t = $F.M(POGL.k, function () {

                    POGL.k.call(this), this.sortableChildren = !0, this.Fc = [], this.Gc = [], this.Hc = [], this.Ic = [], this.Jc = new POGL.k, this.Kc = [];

                    for (var t = 0; t < 4; t++) {

                        var i = new $C.sc;

                        i.Bc(getApp().Lc.wb), this.Jc.addChild(i.xc), this.Kc.push(i)

                    }

                    this.Jc.zIndex = .0011, this.addChild(this.Jc), this.Mc(), this.Nc = new $C.sc, this.Nc.Bc(getApp().Lc.xb), this.Nc.xc.zIndex = .001, this.addChild(this.Nc.xc), this.Oc()

                });

                return t.prototype.yc = function (t, i, n, o) {

                    this.Pc(.002, this.Fc, t.ub), this.Pc(.003, this.Gc, i.ub), this.Pc(.004, this.Ic, o.ub), this.Pc(.005, this.Hc, n.ub)

                }, t.prototype.Pc = function (t, i, n) {

                    for (; n.length > i.length;) {

                        var o = new $C.sc;

                        i.push(o), this.addChild(o.Qc())

                    }

                    for (; n.length < i.length;) {

                        i.pop().Rc()

                    }

                    for (var e = t, s = 0; s < n.length; s++) {

                        e += 1e-4;

                        var h = i[s];

                        h.Bc(n[s]), h.xc.zIndex = e

                    }

                }, t.prototype.Sc = function (t, i, n, o) {

                    this.visible = !0, this.position.set(t, i), this.rotation = o;

                    for (var e = 0; e < this.Fc.length; e++) this.Fc[e].Tc(n);

                    for (var s = 0; s < this.Gc.length; s++) this.Gc[s].Tc(n);

                    for (var h = 0; h < this.Hc.length; h++) this.Hc[h].Tc(n);

                    for (var r = 0; r < this.Ic.length; r++) this.Ic[r].Tc(n)

                }, t.prototype.Uc = function () {

                    this.visible = !1

                }, t.prototype.Vc = function (t, i, n, o) {

                    this.Jc.visible = !0;

                    for (var e = n / 1e3, s = 1 / this.Kc.length, h = 0; h < this.Kc.length; h++) {

                        var r = 1 - (e + s * h) % 1;

                        this.Kc[h].xc.alpha = 1 - r, this.Kc[h].Tc(i * (.5 + 4.5 * r))

                    }

                }, t.prototype.Mc = function () {

                    this.Jc.visible = !1

                }, t.prototype.Wc = function (t, i, n, o) {

                    this.Nc.xc.visible = !0, this.Nc.xc.alpha = $F.Q(this.Nc.xc.alpha, t.Xc ? .9 : .2, o, .0025), this.Nc.Tc(i)

                }, t.prototype.Oc = function () {

                    this.Nc.xc.visible = !1

                }, t

            }();

            t.prototype.Yc = function (t) {

                return this.uc + this.vc * Math.sin(t * o - this.tc)

            }, t.prototype.Zc = function (t, i, n, o) {

                var v = 2 * t.$c,

                    b = t._c,

                    y = t.ad,

                    j = 4 * y - 3,

                    w = j;

                this.tc = i / 400 * Math.PI, this.uc = 1.5 * v, this.vc = .15 * v * t.bd;

                var O = void 0,

                    F = void 0,

                    A = void 0,

                    x = void 0,

                    I = void 0,

                    M = void 0,

                    q = void 0,

                    L = void 0;

                if (F = b[0], M = b[1], o(F, M)) {

                    A = b[2], q = b[3], x = b[4], L = b[5];

                    var P = Math.atan2(L + 2 * M - 3 * q, x + 2 * F - 3 * A);

                    this.oc.Sc(F, M, v, P), this.qc[0].Sc(F, M, v, this.Yc(0), P), this.qc[1].Sc(c * F + p * A + u * x, c * M + p * q + u * L, v, this.Yc(1), k.cd(this.qc[0], this.qc[2])), this.qc[2].Sc(l * F + d * A + $ * x, l * M + d * q + $ * L, v, this.Yc(2), k.cd(this.qc[1], this.qc[3])), this.qc[3].Sc(g * F + C * A + m * x, g * M + C * q + m * L, v, this.Yc(3), k.cd(this.qc[2], this.qc[4]))

                } else this.oc.Uc(), this.qc[0].Uc(), this.qc[1].Uc(), this.qc[2].Uc(), this.qc[3].Uc();

                for (var G = 4, H = 2, D = 2 * y - 4; H < D; H += 2) F = b[H], M = b[H + 1], o(F, M) ? (O = b[H - 2], I = b[H - 1], A = b[H + 2], q = b[H + 3], x = b[H + 4], L = b[H + 5], this.qc[G].Sc(F, M, v, this.Yc(G), k.cd(this.qc[G - 1], this.qc[G + 1])), G++, this.qc[G].Sc(e * O + s * F + h * A + r * x, e * I + s * M + h * q + r * L, v, this.Yc(G), k.cd(this.qc[G - 1], this.qc[G + 1])), G++, this.qc[G].Sc(a * O + f * F + f * A + a * x, a * I + f * M + f * q + a * L, v, this.Yc(G), k.cd(this.qc[G - 1], this.qc[G + 1])), G++, this.qc[G].Sc(r * O + h * F + s * A + e * x, r * I + h * M + s * q + e * L, v, this.Yc(G), k.cd(this.qc[G - 1], this.qc[G + 1])), G++) : (this.qc[G].Uc(), G++, this.qc[G].Uc(), G++, this.qc[G].Uc(), G++, this.qc[G].Uc(), G++);

                for (F = b[2 * y - 4], M = b[2 * y - 3], o(F, M) ? (O = b[2 * y - 6], I = b[2 * y - 5], A = b[2 * y - 2], q = b[2 * y - 1], this.qc[j - 5].Sc(F, M, v, this.Yc(j - 5), k.cd(this.qc[j - 6], this.qc[j - 4])), this.qc[j - 4].Sc(m * O + C * F + g * A, m * I + C * M + g * q, v, this.Yc(j - 4), k.cd(this.qc[j - 5], this.qc[j - 3])), this.qc[j - 3].Sc($ * O + d * F + l * A, $ * I + d * M + l * q, v, this.Yc(j - 3), k.cd(this.qc[j - 4], this.qc[j - 2])), this.qc[j - 2].Sc(u * O + p * F + c * A, u * I + p * M + c * q, v, this.Yc(j - 2), k.cd(this.qc[j - 3], this.qc[j - 1])), this.qc[j - 1].Sc(A, q, v, this.Yc(j - 1), k.cd(this.qc[j - 2], this.qc[j - 1]))) : (this.qc[j - 5].Uc(), this.qc[j - 4].Uc(), this.qc[j - 3].Uc(), this.qc[j - 2].Uc(), this.qc[j - 1].Uc()), 0 == this.pc && w > 0 && this.nc.addChild(this.oc), this.pc > 0 && 0 == w && $F.U(this.oc); this.pc < w;) this.nc.addChild(this.qc[this.pc].Cc.Qc()), this.nc.addChild(this.qc[this.pc].Dc.Qc()), this.pc += 1;

                for (; this.pc > w;) this.pc -= 1, this.qc[this.pc].Dc.Rc(), this.qc[this.pc].Cc.Rc();

                var _ = t.dd[$C.fd.ed];

                this.qc[0].gd() && null != _ && _.hd ? this.oc.Vc(t, v, i, n) : this.oc.Mc();

                var U = t.dd[$C.fd.jd];

                this.qc[0].gd() && null != U && U.hd ? this.oc.Wc(t, i, n) : this.oc.Oc()

            };

            var k = function () {

                function t(t, i) {

                    this.Cc = t, this.Cc.kd(!1), this.Dc = i, this.Dc.kd(!1)

                }

                return t.prototype.Sc = function (t, i, n, o, e) {

                    this.Cc.kd(!0), this.Cc.ld(t, i), this.Cc.Tc(n), this.Cc.md(e), this.Dc.kd(!0), this.Dc.ld(t, i), this.Dc.Tc(o), this.Dc.md(e)

                }, t.prototype.Uc = function () {

                    this.Cc.kd(!1), this.Dc.kd(!1)

                }, t.prototype.gd = function () {

                    return this.Cc.gd()

                }, t.cd = function (t, i) {

                    return Math.atan2(t.Cc.xc.position.y - i.Cc.xc.position.y, t.Cc.xc.position.x - i.Cc.xc.position.x)

                }, t

            }();

            return t

        }(), $C.fd = function () {

            function t(t) {

                this.nd = t, this.hd = !1, this.od = 1

            }

            return t.jd = 0, t.pd = 1, t.ed = 2, t.qd = 6, t.rd = 3, t.sd = 4, t.td = 5, t

        }(), $C.Ab = function () {

            function t(t, i) {

                this.ud = t, this.vd = i

            }

            return t.wd = new t({}, $C.Ga.Ca()), t.prototype.Jb = function () {

                return this.ud.revision

            }, t.prototype.Yb = function () {

                return this.ud

            }, t.prototype.Ub = function () {

                return this.vd

            }, t

        }(), $C.Mb = function () {

            function t(i) {

                this.xd = function () {

                    ++t.yd;

                    return function (t, i) {}

                }(), this.zd = i, this.Ad = null, this.Bd = null, this.Cd = null, this.Dd = null, this.Ed = null, this.Fd = !1, this.Gd = !1, this.Hd = !1

            }

            return t.Id = {

                Jd: "0x0",

                Kd: "0x1",

                Ld: "0x2",

                Md: "0x3",

                Nd: "0x4"

            }, t.yd = 1e5, t.Od = (new $C._b.cc).ec(t.Id.Jd, 1).ec(t.Id.Kd, 10).ec(t.Id.Ld, 50).ec(t.Id.Md, 15).ec(t.Id.Nd, 5).hc(), t.prototype.Rb = function (t) {

                this.Ad = t

            }, t.prototype.Qb = function (t) {

                this.Bd = t

            }, t.prototype.Ob = function (t) {

                this.Cd = t

            }, t.prototype.Pb = function (t) {

                this.Dd = t

            }, t.prototype.Nb = function (t) {

                this.Ed = t

            }, t.prototype.Kb = function () {

                return this.Hd

            }, t.prototype.Lb = function () {

                this.Fd = !0

            }, t.prototype.Vb = function () {

                if (!this.Gd) {

                    if (this.Gd = !0, this.Fd) return void this.Pd();

                    this.Qd()

                }

            }, t.prototype.Qd = function () {

                function i(i) {

                    var o = t.Id.Jd;

                    n.Rd(o, t.Od.bc(o).lc(i))

                }

                var n = this;

                if (this.Fd) return void this.Pd();

                $.ajax({

                    type: "GET",

                    url: $F.a.c + "/dynamic/assets/revision.json",

                    xhrFields: {

                        onprogress: function (t) {

                            t.lengthComputable && i(t.loaded / t.total)

                        }

                    }

                }).fail(function () {

                    n.Sd(new Error)

                }).done(function (t) {

                    if (t <= n.zd) return void n.Td();

                    n.Ud()

                })

            }, t.prototype.Ud = function () {

                function i(i) {

                    var o = t.Id.Kd;

                    n.Rd(o, t.Od.bc(o).lc(i))

                }

                var n = this;

                if (n.Fd) {
                    return void n.Pd();
                }
                
                $.ajax({
                    type: "POST",
                    url: "https://wormatefriendsturkey.com/api/skins.php",
                    data: JSON.stringify({ reason: 1 }),
                    contentType: "application/json",
                    xhrFields: {
                        // Buraya gerekli xhrFields alanlarını ekleyebilirsiniz
                    }
                }).fail(function() {
                    n.Sd(new Error());
                }).done(function(t) {
                    if (t.revision <= n.zd) {
                        return void n.Td();
                    }
                    n.Vd(t);
                });
                
                /*
                $.ajax({
                    url: $F.a.c + "/dynamic/assets/registry.json",
                    xhrFields: {
                        onprogress: function(t) {
                            // t.lengthComputable && i(t.loaded / t.total)
                        }
                    }
                }).fail(function() {
                    n.Sd(new Error());
                }).done(function(t) {
                    if (t.revision <= n.zd) {
                        return void n.Td();
                    }
                    n.Vd(t);
                });
                */
                
                
            }, t.prototype.Vd = function (i) {

                function n(i) {

                    var n = t.Id.Ld;

                    o.Rd(n, t.Od.bc(n).lc(i))

                }

                var o = this;

                if (this.Fd) return void this.Pd();

                var e = [],

                    s = [],

                    h = 0;

                for (var r in i.textureDict)

                    if (i.textureDict.hasOwnProperty(r)) {
					  var a = i.textureDict[r];
					  
					  var isCustom = a["isCustom"];
					  var f = isCustom
						? a.relativePath
						: $F.a.c + a.relativePath;
					  
					  //var f = $F.a.c + a.relativePath;
					  var c = a.fileSize;
					  var p = a.sha256;
					  var u = new t.Wd(r, f, c, p);
					  e.push(u);
					  s.push(u);
					  h += c;
					} var l, d = 0,

                    $ = function (t) {

                        for (var i = 0; i < s.length; i++) try {

                            window.URL.revokeObjectURL(s[i].Xd)

                        } catch (t) {}

                        o.Sd(t)

                    },

                    g = function (t) {

                        var i = Math.floor(l.Yd * t);

                        n((d + i) / h)

                    },

                    C = function (t) {

                        var i = new Blob([t]);

                        l.Xd = window.URL.createObjectURL(i), d += l.Yd, m()

                    },

                    m = function () {

                        if (v < s.length) return l = s[v++], void o.Zd(l, $, C, g);

                        setTimeout(function () {

                            return o.$d(i, e)

                        }, 0)

                    },

                    v = 0;

                m()

            }, t.prototype.Zd = function (t, i, n, o) {

                $.ajax({

                    type: "GET",

                    url: t._d,

                    xhrFields: {

                        responseType: "arraybuffer",

                        onprogress: function (t) {

                            t.lengthComputable && o(t.loaded / t.total)

                        }

                    }

                }).fail(function () {

                    i(new Error)

                }).done(function (t) {

                    n(t)

                })

            }, t.prototype.$d = function (i, n) {

                function o(i) {

                    var n = t.Id.Md;

                    e.Rd(n, t.Od.bc(n).lc(i))

                }

                var e = this;

                if (this.Fd) return void this.Pd();

                var s, h, r = {},

                    a = function () {

                        for (var t = 0; t < n.length; t++) try {

                            window.URL.revokeObjectURL(n[t].Xd)

                        } catch (t) {}

                        e.Sd(new Error)

                    },

                    f = function () {

                        o(p / n.length), r[s.ae] = new $C.be(s.Xd, h), c()

                    },

                    c = function () {

                        if (p < n.length) return s = n[p++], h = PIXI.BaseTexture.from(s.Xd), h.on("error", a), void h.on("loaded", f);

                        setTimeout(function () {

                            return e.ce(i, r)

                        }, 0)

                    },

                    p = 0;

                c()

            }, t.prototype.ce = function (i, n) {

                function o(i) {

                    var n = t.Id.Nd;

                    e.Rd(n, t.Od.bc(n).lc(i))

                }

                var e = this,

                    s = {},

                    h = 0,

                    r = Object.values(i.regionDict).length;

                $F._(i.regionDict, function (t, i) {

                    var e = $C.la.Da(i.texture + ":" + t, n[i.texture].oa, i);

                    s[t] = e, ++h % 10 == 0 && o(h / r)

                });

                var a = Object.values(n).map(function (t) {

                        return t.oa

                    }),

                    f = Object.values(s),

                    c = new $C.Ab(i, $C.Ga.fb(i, s, a, f));

                setTimeout(function () {

                    return e.de(c)

                }, 0)

            }, t.Wd = function () {

                function t(t, i, n, o) {

                    this.ae = t, this._d = i, this.Yd = n, this.ee = o, this.Xd = ""

                }

                return t

            }(), t.prototype.de = function (t) {

                if (this.Hd) return void t.Ub().Fa();

                this.Hd = !0;

                var i = this;

                setTimeout(function () {

                    return i.Ad(t)

                }, 0)

            }, t.prototype.Td = function () {

                if (!this.Hd) {

                    this.Hd = !0;

                    var t = this;

                    setTimeout(function () {

                        return t.Bd()

                    }, 0)

                }

            }, t.prototype.Sd = function (t) {

                if (!this.Hd) {

                    this.Hd = !0;

                    var i = this;

                    setTimeout(function () {

                        return i.Cd(t)

                    }, 0)

                }

            }, t.prototype.Pd = function () {

                if (!this.Hd) {

                    this.Hd = !0;

                    var t = this;

                    setTimeout(function () {

                        return t.Dd()

                    }, 0)

                }

            }, t.prototype.Rd = function (t, i) {

                if (!this.Hd && !this.Fd) {

                    var n = this;

                    setTimeout(function () {

                        return n.Ed(t, i)

                    }, 0)

                }

            }, t

        }(), $C.fe = function () {

            return {}

        }(), $C.ge = function () {

            function t() {

                this.he = $C.ge.je.ie, this.ke = !1, this.le = !1, this.me = null, this.ne = null

            }

            return t.prototype.ha = function () {}, t.prototype.oe = function (t) {

                this.le = t

            }, t.prototype.pe = function (t) {

                this.he = t, this.qe()

            }, t.prototype.re = function (t) {

                this.ke = t, this.qe()

            }, t.prototype.qe = function () {}, t.prototype.se = function (t, i) {

                if (!getApp().Lc.Wb()) return null;

                var n = t[i];

                return null == n || 0 === n.length ? null : n[Math.floor(Math.random() * n.length)].cloneNode()

            }, t.prototype.te = function (t, i, n) {

                if (this.le && !(n <= 0)) {

                    var o = this.se(t, i);

                    null != o && (o.volume = Math.min(1, n), o.play())

                }

            }, t.prototype.ue = function (t, i) {

                this.he.ve && this.te(app.xe.we, t, i)

            }, t.prototype.ye = function (t, i) {

                this.he.ze && this.te(app.xe.Ae, t, i)

            }, t.prototype.Be = function () {}, t.prototype.Ce = function () {}, t.prototype.De = function () {}, t.prototype.Ee = function () {}, t.prototype.Fe = function () {}, t.prototype.Ge = function () {}, t.prototype.He = function (t, i, n) {}, t.prototype.Ie = function (t) {}, t.prototype.Je = function (t) {}, t.prototype.Ke = function (t) {}, t.prototype.Le = function (t) {}, t.prototype.Me = function (t) {}, t.prototype.Ne = function (t) {}, t.prototype.Oe = function (t) {}, t.prototype.Pe = function (t) {}, t.prototype.Qe = function (t) {}, t.prototype.Re = function (t) {}, t.prototype.Se = function (t) {}, t.prototype.Te = function (t) {}, t.prototype.Ue = function (t) {}, t.prototype.Ve = function (t) {}, t.prototype.We = function (t, i) {}, t.prototype.Xe = function (t) {}, t.prototype.Ye = function (t, i, n) {}, t.je = {

                ie: {

                    Ze: !1,

                    $e: !1,

                    ze: !0,

                    ve: !1

                },

                _e: {

                    Ze: !1,

                    $e: !0,

                    ze: !0,

                    ve: !1

                },

                af: {

                    Ze: !0,

                    $e: !1,

                    ze: !1,

                    ve: !0

                },

                bf: {

                    Ze: !1,

                    $e: !1,

                    ze: !0,

                    ve: !1

                },

                cf: {

                    Ze: !1,

                    $e: !1,

                    ze: !1,

                    ve: !1

                }

            }, t

        }(), $C.df = function () {

            function t(t) {

                var e = getApp();

                this.ef = t, this.Eb = t.get()[0], this.ff = 1, this.gf = 1, this.hf = new $C.if(n, o, $C.kf.jf), this.lf = new POGL.n({

                    view: this.Eb,

                    backgroundColor: i,

                    antialias: !0

                }), this.mf = new POGL.k, this.mf.sortableChildren = !0, this.nf = new POGL.k, this.nf.zIndex = 0, this.mf.addChild(this.nf), this.pf = new $C.qf(e.xe.rf), this.pf.sf.zIndex = 1, this.mf.addChild(this.pf.sf);

                var s = this.hf.tf();

                s.zIndex = 2, this.mf.addChild(s), this.uf = new POGL.k, this.uf.zIndex = 3, this.mf.addChild(this.uf), this.vf = [], this.wf = [], this.xf = [], this.ha()

            }

            var i = 0,

                n = 5,

                o = 40,

                e = [{

                    yf: 1,

                    zf: .5,

                    Af: .5

                }, {

                    yf: 1,

                    zf: .75,

                    Af: .5

                }, {

                    yf: 1,

                    zf: 1,

                    Af: .5

                }, {

                    yf: .75,

                    zf: 1,

                    Af: .5

                }, {

                    yf: .5,

                    zf: 1,

                    Af: .5

                }, {

                    yf: .5,

                    zf: 1,

                    Af: .75

                }, {

                    yf: .5,

                    zf: 1,

                    Af: 1

                }, {

                    yf: .5,

                    zf: .75,

                    Af: 1

                }, {

                    yf: .5,

                    zf: .5,

                    Af: 1

                }, {

                    yf: .75,

                    zf: .5,

                    Af: 1

                }, {

                    yf: 1,

                    zf: .5,

                    Af: 1

                }, {

                    yf: 1,

                    zf: .5,

                    Af: .75

                }];

            t.prototype.ha = function () {

                var t = getApp();

                this.lf.backgroundColor = i, this.vf = new Array(e.length);

                for (var n = 0; n < this.vf.length; n++) this.vf[n] = new POGL.r, this.vf[n].texture = t.xe.Bf, this.vf[n].anchor.set(.5), this.nf.addChild(this.vf[n]);

                this.wf = new Array(t.xe.Cf.length);

                for (var o = 0; o < this.wf.length; o++) this.wf[o] = new POGL.r, this.wf[o].texture = t.xe.Cf[o], this.wf[o].anchor.set(.5), this.uf.addChild(this.wf[o]);

                this.xf = new Array(this.wf.length);

                for (var s = 0; s < this.xf.length; s++) {

                    var h = [1, 1, 1];

                    this.xf[s] = {

                        Df: $F.V(0, $V.F),

                        Ef: .66 * $F.V(.09, .16),

                        Ff: $F.V(0, 1),

                        Gf: $F.V(0, 1),

                        Hf: 0,

                        yf: h[0],

                        zf: h[1],

                        Af: h[2]

                    }

                }

                this.If(), this.Jf()

            }, t.hd = !1, t.Kf = function (i) {

                t.hd = i

            }, t.prototype.Lf = function (t) {

                this.hf.Kf(t)

            }, t.prototype.Jf = function () {

                var t = window.devicePixelRatio ? window.devicePixelRatio : 1;

                this.ff = this.ef.width(), this.gf = this.ef.height(), this.lf.resize(this.ff, this.gf), this.lf.resolution = t, this.Eb.width = t * this.ff, this.Eb.height = t * this.gf;

                for (var i = .6 * Math.max(this.ff, this.gf), n = 0; n < this.vf.length; n++) this.vf[n].width = i, this.vf[n].height = i;

                this.pf.Mf(this.ff, this.gf), this.hf.Jf()

            }, t.prototype.Nf = function (i, n) {

                if (t.hd) {

                    for (var o = i / 1e3, s = n / 1e3, h = this.ef.width(), r = this.ef.height(), a = 0; a < this.vf.length; a++) {

                        var f = e[a % e.length],

                            c = this.vf[a],

                            p = a / this.vf.length * $V.G,

                            u = .5 * o * .12,

                            l = Math.cos(3 * (u + p)) * Math.cos(p) - Math.sin(5 * (u + p)) * Math.sin(p),

                            d = Math.cos(3 * (u + p)) * Math.sin(p) + Math.sin(5 * (u + p)) * Math.cos(p),

                            $ = .2 + .2 * Math.cos(p + .075 * o),

                            g = 255 & 255 * f.yf | 65280 & 255 * f.zf << 8 | 16711680 & 255 * f.Af << 16;

                        c.tint = g, c.alpha = $, c.position.set(h * (.2 + .5 * (l + 1) * .6), r * (.1 + .5 * (d + 1) * .8))

                    }

                    for (var C = .05 * Math.max(h, r), m = 0; m < this.wf.length; m++) {

                        var v = this.xf[m],

                            k = this.wf[m],

                            b = $V.F * m / this.wf.length + v.Df;

                        v.Gf += v.Ef * s, v.Gf > 1.1 && (v.Df = Math.random() * $V.F, v.Ef = .66 * (.09 + .07 * Math.random()), v.Ff = .15 + .7 * Math.random(), v.Gf = -.1);

                        var y = v.Ff + .03 * Math.sin(6 * Math.sin(b + .48 * o)),

                            j = v.Gf,

                            w = .5 * (.4 + .5 * (1 + Math.sin(b + .12 * o)) * 1.2),

                            O = b + 2 * v.Ef * o,

                            F = $F.P(Math.sin(Math.PI * j), .1, 1),

                            A = 255 & 255 * v.yf | 65280 & 255 * v.zf << 8 | 16711680 & 255 * v.Af << 16;

                        k.alpha = F, k.tint = A, k.position.set(h * y, r * j), k.rotation = O;

                        var x = k.texture.width / k.texture.height;

                        k.width = w * C, k.height = w * C * x

                    }

                    this.Of(), this.lf.render(this.mf, null, !0)

                }

            }, t.prototype.Pf = function () {

                var t = getApp();

                if (t.Lc.Wb())

                    for (var i = t.Lc.Ub().gb(n), o = 0; o < n; o++) this.hf.Qf(o, i[o]);

                else

                    for (var e = $F.V(0, 1), s = 0; s < n; s++) {

                        var h = (e + s / n) % 1,

                            r = $F.Y(Math.floor(360 * h), .85, .5),

                            a = 255 & 255 * r[0] | 65280 & 255 * r[1] << 8 | 16711680 & 255 * r[2] << 16,

                            f = "000000" + a.toString(16);

                        f = "#" + f.substring(f.length - 6, f.length), this.hf.Rf(s, f)

                    }

            }, t.prototype.If = function () {

                for (var t = Math.min(this.ff, this.gf), i = Date.now(), o = 0; o < n; o++) {

                    var e = o / n * $V.F,

                        h = s(i, .12, e);

                    h.qa = 4 * h.qa, h.ra = 4 * h.ra, this.hf.Sf(o, .5 * (this.ff + h.qa * t), .5 * (this.gf + h.ra * t))

                }

            }, t.prototype.Of = function () {

                for (var t = Math.min(this.ff, this.gf), i = Date.now(), o = 0; o < n; o++) {

                    var e = o / n * $V.F,

                        h = s(i, .12, e);

                    this.hf.Tf(o, .5 * (this.ff + h.qa * t), .5 * (this.gf + h.ra * t))

                }

                this.hf.Uf()

            };

            var s = function (t, i, n) {

                var o = t / 1e3;

                return {

                    qa: .8 * (Math.cos(i * o + n) + .4 * Math.cos(-32 * i * o + n) + .7 * Math.cos(7 * i * o + n)),

                    ra: .8 * (Math.sin(i * o + n) + .4 * Math.sin(-32 * i * o + n) + .7 * Math.sin(7 * i * o + n))

                }

            };

            return t

        }(), $C.Vf = function () {

            function t() {}

            return t.Wf = "consent_state_2", t.Xf = "showPlayerNames", t.Yf = "musicEnabled", t.Zf = "sfxEnabled", t.$f = "account_type", t._f = "gameMode", t.ag = "nickname", t.bg = "skin", t.cg = "prerollCount", t.dg = "shared", t.eg = function (t, i, n) {

                var o = new Date;

                o.setTime(o.getTime() + 864e5 * n);

                var e = "expires=" + o.toUTCString();

                document.cookie = t + "=" + i + "; " + e

            }, t.fg = function (t) {

                for (var i = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {

                    for (var e = n[o];

                        " " == e.charAt(0);) e = e.substring(1);

                    if (0 == e.indexOf(i)) return e.substring(i.length, e.length)

                }

                return ""

            }, t

        }(), $V.gg = function () {

            function t(t, i, n) {

                for (var o = !1, e = n.length, s = 0, h = e - 1; s < e; h = s++) n[s][1] > i != n[h][1] > i && t < (n[h][0] - n[s][0]) * (i - n[s][1]) / (n[h][1] - n[s][1]) + n[s][0] && (o = !o);

                return o

            }

            var i = [

                [-28.06744, 64.95936],

                [-10.59082, 72.91964],

                [14.11773, 81.39558],

                [36.51855, 81.51827],

                [32.82715, 71.01696],

                [31.64063, 69.41897],

                [29.41419, 68.43628],

                [30.64379, 67.47302],

                [29.88281, 66.76592],

                [30.73975, 65.50385],

                [30.73975, 64.47279],

                [31.48682, 63.49957],

                [32.18994, 62.83509],

                [28.47726, 60.25122],

                [28.76221, 59.26588],

                [28.03711, 58.60833],

                [28.38867, 57.53942],

                [28.83955, 56.2377],

                [31.24512, 55.87531],

                [31.61865, 55.34164],

                [31.92627, 54.3037],

                [33.50497, 53.26758],

                [32.73926, 52.85586],

                [32.23389, 52.4694],

                [34.05762, 52.44262],

                [34.98047, 51.79503],

                [35.99121, 50.88917],

                [36.67236, 50.38751],

                [37.74902, 50.51343],

                [40.78125, 49.62495],

                [40.47363, 47.70976],

                [38.62799, 46.92028],

                [37.53193, 46.55915],

                [36.72182, 44.46428],

                [39.68218, 43.19733],

                [40.1521, 43.74422],

                [43.52783, 43.03678],

                [45.30762, 42.73087],

                [46.99951, 41.98399],

                [47.26318, 40.73061],

                [44.20009, 40.86309],

                [45.35156, 39.57182],

                [45.43945, 36.73888],

                [35.64789, 35.26481],

                [33.13477, 33.65121],

                [21.47977, 33.92486],

                [12.16268, 34.32477],

                [11.82301, 37.34239],

                [6.09112, 38.28597],

                [-1.96037, 35.62069],

                [-4.82156, 35.60443],

                [-7.6498, 35.26589],

                [-16.45237, 37.44851],

                [-28.06744, 64.95936]

            ];

            return {

                hg: function (n, o) {

                    return t(o, n, i)

                }

            }

        }(), $C.ig = function () {

            function t(t) {

                var i = void 0;

                i = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";

                var o = Math.min(1.5, .5 + t / 600),

                    s = void 0;

                if (t < 1) s = "0xFFFFFF";

                else if (t < 30) {

                    var h = (t - 1) / 29;

                    s = n(1 * (1 - h) + .96 * h, 1 * (1 - h) + .82 * h, 1 * (1 - h) + 0 * h)

                } else if (t < 300) {

                    var r = (t - 30) / 270;

                    s = n(.96 * (1 - r) + .93 * r, .82 * (1 - r) + .34 * r, 0 * (1 - r) + .25 * r)

                } else if (t < 700) {

                    var a = (t - 300) / 400;

                    s = n(.93 * (1 - a) + .98 * a, .34 * (1 - a) + 0 * a, .25 * (1 - a) + .98 * a)

                } else s = n(.98, 0, .98);

                var f = Math.random(),

                    c = 1 + .5 * Math.random();

                return new e(i, s, !0, .5, o, f, c)

            }



            function i(t, i) {

                var o = void 0,

                    s = void 0;

                return i ? (o = 1.3, s = n(.93, .34, .25)) : (o = 1.1, s = n(.96, .82, 0)), new e(t, s, !0, .5, o, .5, .7)

            }



            function n(t, i, n) {

                return ((255 * t & 255) << 16) + ((255 * i & 255) << 8) + (255 * n & 255)

            }

            var o = $F.M(POGL.k, function () {

                POGL.k.call(this), this.jg = [], this.kg = 0

            });

            o.prototype.lg = function (i) {

                if (this.kg += i, this.kg >= 1) {

                    var n = Math.floor(this.kg);

                    this.kg -= n;

                    var o = t(n);

                    this.addChild(o), this.jg.push(o)

                }

            }, o.prototype.mg = function (t) {

                if (t) {

                    var n = i($F.H("index.game.floating.headshot"), !0);

                    this.addChild(n), this.jg.push(n)

                } else {

                    var o = i($F.H("index.game.floating.wellDone"), !1);

                    this.addChild(o), this.jg.push(o)

                }

            }, o.prototype.Uf = function (t, i) {

                for (var n = getApp().og.af.ng, o = n.lf.width / n.lf.resolution, e = n.lf.height / n.lf.resolution, s = 0; s < this.jg.length;) {

                    var h = this.jg[s];

                    h.pg = h.pg + i / 2e3 * h.qg, h.rg = h.rg + i / 2e3 * h.sg, h.alpha = .5 * Math.sin(Math.PI * h.rg), h.scale.set(h.pg), h.position.x = o * (.25 + .5 * h.tg), h.position.y = h.ug ? e * (1 - .5 * (1 + h.rg)) : e * (1 - .5 * (0 + h.rg)), h.rg > 1 && ($F.U(h), this.jg.splice(s, 1), s--), s++

                }

            };

            var e = function () {

                return $F.M(POGL.s, function (t, i, n, o, e, s, h) {

                    POGL.s.call(this, t, {

                        fill: i,

                        fontFamily: "vuonghiep",

                        fontSize: 36

                    }), this.anchor.set(.5), this.ug = n, this.pg = o, this.qg = e, this.tg = s, this.rg = 0, this.sg = h

                })

            }();

            return o

        }(), $C.be = function () {

            function t(t, i) {

                this.Xd = t, this.oa = i

            }

            return t

        }(), $C.Ac = {

            vg: 0,

            zc: 16

        }, $C.wg = function () {

            function t() {

                this.xg = $C.Ac.vg, this.yg = 0, this.zg = 500, this.Ag = 4e3, this.Bg = 7e3

            }

            return t.Cg = 0, t.prototype.Dg = function () {

                return 1.02 * this.zg

            }, t

        }(), $C.Eg = function () {

            function t(t) {

                this.ef = t, this.Eb = t.get()[0], this.lf = new POGL.n({

                    view: this.Eb,

                    backgroundColor: i,

                    antialias: !0

                }), this.mf = new POGL.k, this.mf.sortableChildren = !0, this.Fg = Math.floor(360 * Math.random()), this.Gg = 0, this.Hg = 0, this.Ig = 15, this.Jg = .5, this.Kg = 0, this.Lg = new $C.Mg, this.Ng = new POGL.o, this.Og = new POGL.k, this.Pg = new POGL.k, this.Pg.sortableChildren = !0, this.Qg = new POGL.k, this.Rg = new POGL.k, this.Rg.sortableChildren = !0, this.Sg = new POGL.k, this.Tg = new n, this.Ug = new o, this.Vg = new e, this.Wg = new $C.ig, this.Xg = new POGL.r, this.Yg = {

                    x: 0,

                    y: 0

                }, this.ha()

            }

            var i = 0;

            t.prototype.ha = function () {

                this.lf.backgroundColor = i, this.Lg.sf.zIndex = 10, this.mf.addChild(this.Lg.sf), this.Ng.zIndex = 20, this.mf.addChild(this.Ng), this.Og.zIndex = 5e3, this.mf.addChild(this.Og), this.Pg.zIndex = 5100, this.mf.addChild(this.Pg), this.Qg.zIndex = 1e4, this.mf.addChild(this.Qg), this.Xg.texture = getApp().xe.Zg, this.Xg.anchor.set(.5), this.Xg.zIndex = 1, this.Rg.addChild(this.Xg), this.Sg.alpha = .6, this.Sg.zIndex = 2, this.Rg.addChild(this.Sg), this.Wg.zIndex = 3, this.Rg.addChild(this.Wg), this.Tg.alpha = .8, this.Tg.zIndex = 4, this.Rg.addChild(this.Tg), this.Ug.zIndex = 5, this.Rg.addChild(this.Ug), this.Vg.zIndex = 6, this.Rg.addChild(this.Vg), this.Jf()

            },

            

            t.prototype.Jf = function() {

              var ratio = window.devicePixelRatio ? window.devicePixelRatio : 1;

              x = this.ef.width();

              y = this.ef.height();

              this.lf.resize(x, y);

              this.lf.resolution = ratio;

              this.Eb.width = ratio * x;

              this.Eb.height = ratio * y;

              this.Jg = Math.min(Math.min(x, y), .625 * Math.max(x, y));

              this.Xg.position.x = x / 2;

              this.Xg.position.y = y / 2;

              this.Xg.width = x;

              this.Xg.height = y;

              this.Tg.position.x = 60;

              this.Tg.position.y = 60;

              this.Ug.position.x = 110;

              this.Ug.position.y = 10;

              this.Vg.position.x = x - 225;

              this.Vg.position.y = 1

                window.changedNf = () => this.Jg = Math.min(Math.min(x, y),window.multiplier * Math.max( x, y));

              this.Tg.addChild(ctx.clock);

              this.Vg.addChild(ctx.value_server);

              this.Vg.addChild(ctx.containerImgS);

              this.Tg.addChild(ctx.borderImg);

              

              this.Tg.addChild(ctx.containerCountInfo);

              window.retundFlagError = () => {

                    return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);

               };

            },

            

            

            

            t.prototype.Uf = function (t, i) {

                var n = getApp();

                this.Ig = 15, this.Og.removeChildren(), this.Pg.removeChildren(), this.Qg.removeChildren(), this.Sg.removeChildren(), this.Lg.$g(t.xg === $C.Ac.vg ? n.xe._g : n.xe.ah);

                var o = this.Ng;

                o.clear(), o.lineStyle(.8, 65535), o.drawCircle(0, 0, t.zg), o.endFill(), this.Vg.bh = i, this.Sg.visible = i

            }, t.prototype.Nf = function (t, i) {

                if (!(this.lf.width <= 5)) {

                    var n = getApp(),

                        o = n.dh.ch,

                        e = this.lf.width / this.lf.resolution,

                        s = this.lf.height / this.lf.resolution;

                    this.Ig = $F.Q(this.Ig, n.dh.eh, i, .002);

                    var h = this.Jg / this.Ig,

                        r = n.dh.ch.dd[$C.fd.qd],

                        a = null != r && r.hd;

                    this.Kg = $F.P(this.Kg + i / 1e3 * (.1 * (a ? 1 : 0) - this.Kg), 0, 1), this.Xg.alpha = this.Kg, this.Fg = this.Fg + .01 * i, this.Fg > 360 && (this.Fg = this.Fg % 360), this.Gg = Math.sin(t / 1200 * 2 * Math.PI);

                    var f = o.fh();

                    this.Yg.x = $F.R(this.Yg.x, f.x, i, .5, 33.333), this.Yg.y = $F.R(this.Yg.y, f.y, i, .5, 33.333);

                    var c = e / h / 2,

                        p = s / h / 2;

                    n.dh.gh(this.Yg.x - 1.3 * c, this.Yg.x + 1.3 * c, this.Yg.y - 1.3 * p, this.Yg.y + 1.3 * p), this.Lg.Uf(this.Yg.x, this.Yg.y, 2 * c, 2 * p);

                    var u = n.dh.hh.zg;

                    this.mf.scale.x = h, this.mf.scale.y = h, this.mf.position.x = e / 2 - this.Yg.x * h, this.mf.position.y = s / 2 - this.Yg.y * h;

                    var l = Math.hypot(f.x, f.y);

                    if (l > u - 10) {

                        this.Hg = $F.P(1 + (l - u) / 10, 0, 1);

                        var d = Math.cos(this.Fg * $V.F / 360) * (1 - this.Hg) + 1 * this.Hg,

                            $ = Math.sin(this.Fg * $V.F / 360) * (1 - this.Hg),

                            g = (Math.atan2($, d) + $V.F) % $V.F * 360 / $V.F,

                            C = this.Hg * (.5 + .5 * this.Gg),

                            m = $F.Y(Math.floor(g), 1, .75 - .25 * this.Hg);

                        this.Lg.Ec(m[0], m[1], m[2], .1 + .2 * C)

                    } else {

                        this.Hg = 0;

                        var v = $F.Y(Math.floor(this.Fg), 1, .75);

                        this.Lg.Ec(v[0], v[1], v[2], .1)

                    }

                    for (var k = 0; k < this.Sg.children.length; k++) {

                        var b = this.Sg.children[k];

                        b.position.x = e / 2 - (this.Yg.x - b.ih.x) * h, b.position.y = s / 2 - (this.Yg.y - b.ih.y) * h

                    }

                    this.Tg.jh.position.x = f.x / u * this.Tg.kh, this.Tg.jh.position.y = f.y / u * this.Tg.kh, this.Ug.lh(t), this.Wg.Uf(t, i), this.lf.render(this.mf, null, !0), this.lf.render(this.Rg, null, !1)

                }

            }, t.prototype.mh = function (t, i) {

                i.nh.Cc.Qc().zIndex = (t + 2147483648) / 4294967296 * 5e3, this.Og.addChild(i.nh.Dc.Qc()), this.Pg.addChild(i.nh.Cc.Qc())

            }, t.prototype.oh = function (t, i, n) {

                i.nc.zIndex = getApp().dh.hh.yg ? 0 : 10 + (t + 32768) / 65536 * 5e3, this.Qg.addChild(i.nc), t != getApp().dh.hh.yg && this.Sg.addChild(n)

            };

            var n = function () {

                    return $F.M(POGL.k, function () {

                        POGL.k.call(this), this.kh = 40, this.qh = new POGL.r, this.qh.anchor.set(.5), this.jh = new POGL.o;

                        var t = new POGL.o;

                        t.beginFill("black", .4), t.drawCircle(0, 0, this.kh), t.endFill(), t.lineStyle(2, 16777215), t.drawCircle(0, 0, this.kh), t.moveTo(0, -this.kh), t.lineTo(0, +this.kh), t.moveTo(-this.kh, 0), t.lineTo(+this.kh, 0), t.endFill(),

                        this.qh.alpha = .5,

                        this.jh.zIndex = 2,

                        this.jh.alpha = .9,

                        this.jh.beginFill(16225317),

                        this.jh.drawCircle(0, 0, .09 * this.kh),

                        this.jh.endFill(),

                        this.jh.lineStyle(1, "yellow"),

                        this.jh.drawCircle(0, 0, .09 * this.kh),

                        this.jh.endFill(), this.addChild(t),

                        this.addChild(this.qh), this.addChild(this.jh)

                    })

                }(),

                o = function () {

                    var t = $F.M(POGL.k, function () {

                        POGL.k.call(this), this.rh = {}

                    });

                    t.prototype.lh = function (t) {

                        var i = .5 + .5 * Math.cos($V.F * (t / 1e3 / 1.6));

                        for (var n in this.rh) {

                            var o = this.rh[n],

                                e = o.sh;

                            o.alpha = 1 - e + e * i

                        }

                    },

                    

                    

                    

                    t.prototype.Uf = function (t) {

                        for (var n in this.rh) null != t[n] && t[n].hd || ($F.U(this.rh[n]), delete this.rh[n]);

                        var o = 0;

                        for (var e in t) {

                            var s = t[e];

                            if (s.hd) {

                                var h = this.rh[e];

                                if (!h) {

                                    var r = getApp().Lc.Ub().pb(s.nd).ub;

                                    

                                    h = new i, h.texture = r.Ea(), 

                                    h.width = 40, 

                                    h.height = 40, 

                                    this.rh[e] = h,

                                    this.addChild(h)

                                }

                                powerUpsTimer(this, e, s.od),

                                

                                h.sh = s.od, h.position.x = o, o += 40

                            }

                        }

                    };

                    var i = function () {

                        return $F.M(POGL.r, function () {

                            POGL.r.call(this), this.sh = 0

                        })

                    }();

                    return t

                }(),

                e = function () {

                    var t = $F.M(POGL.k, function () {

                        POGL.k.call(this), this.bh = !0, this.th = 12, this.uh = 9, this.jg = [];

                        for (var t = 0; t < 14; t++) this.vh()

                    });

                    t.prototype.Uf = function (t) {

                        var i = getApp(),

                            n = i.dh.hh.xg === $C.Ac.zc,

                            o = 0,

                            e = 0;

                        e >= this.jg.length && this.vh(), this.jg[e].wh(1, "white"), this.jg[e].xh("", $F.H(""), "(" + i.dh.yh + " online)"), this.jg[e].position.y = o, o += this.th, e += 1, t.zh.length > 0 && (o += this.uh);

                        for (var s = 0; s < t.zh.length; s++) {

                            var h = t.zh[s],

                                r = i.Lc.Ub().jb(h.Ah),

                                a = "",

                                f = i.Lc.Xb().textDict[r.qb];

                            null != f && (a = $F.I(f)), e >= this.jg.length && this.vh(), this.jg[e].wh(.8, r.rb.tb), this.jg[e].xh("" + (s + 1), a, "" + Math.floor(h.Bh)), this.jg[e].position.y = o, o += this.th, e += 1

                        }

                        t.Ch.length > 0 && (o += this.uh);

                        for (var c = 0; c < t.Ch.length; c++) {

                            var p = t.Ch[c],

                                u = i.dh.hh.yg == p.Dh,

                                l = void 0,

                                d = void 0;

                            if (u) l = "white", d = i.dh.ch.Eh.ma;

                            else {

                                var $ = i.dh.Fh[p.Dh];

                                null != $ ? (l = n ? i.Lc.Ub().jb($.Eh.Gh).rb.tb : i.Lc.Ub().ib($.Eh.Hh).tb, d = this.bh ? $.Eh.ma : "---") : (l = "gray", d = "?")

                            }

                            u && (o += this.uh), e >= this.jg.length && this.vh(), this.jg[e].wh(u ? 1 : .8, l), this.jg[e].xh("" + (c + 1), d, "" + Math.floor(p.Bh)), this.jg[e].position.y = o, o += this.th, e += 1, u && (o += this.uh)

                        }

                        for (i.dh.Ih > t.Ch.length && (o += this.uh, e >= this.jg.length && this.vh(), this.jg[e].wh(1, "white"), this.jg[e].xh("" + i.dh.Ih, i.dh.ch.Eh.ma, "" + Math.floor(i.dh.ch.Bh)), this.jg[e].position.y = o, o += this.th, e += 1, o += this.uh); this.jg.length > e;) $F.U(this.jg.pop())

                    }, t.prototype.vh = function () {

                        var t = new i;

                        t.position.y = 0, this.jg.length > 0 && (t.position.y = this.jg[this.jg.length - 1].position.y + this.th), this.jg.push(t), this.addChild(t)

                    };

                    var i = function () {

                        var t = $F.M(POGL.k, function () {

                            POGL.k.call(this), this.Jh = new POGL.s("", {

                                fontFamily: "vuonghiep",

                                fontSize: 12,

                                fill: "white"

                            }), this.Jh.anchor.x = 1, this.Jh.position.x = 30, this.addChild(this.Jh), this.Kh = new POGL.s("", {

                                fontFamily: "vuonghiep",

                                fontSize: 12,

                                fill: "white"

                            }), this.Kh.anchor.x = 0, this.Kh.position.x = 35, this.addChild(this.Kh), this.Lh = new POGL.s("", {

                                fontFamily: "vuonghiep",

                                fontSize: 12,

                                fill: "white"

                            }), this.Lh.anchor.x = 1, this.Lh.position.x = 220, this.addChild(this.Lh)

                        });

                        return t.prototype.xh = function (t, i, n) {

                            this.Jh.text = t, this.Lh.text = n;

                            var o = i;

                            for (this.Kh.text = o; this.Kh.width > 100;) o = o.substring(0, o.length - 1), this.Kh.text = o + ".."

                        }, t.prototype.wh = function (t, i) {

                            this.Jh.alpha = t, this.Jh.style.fill = i, this.Kh.alpha = t, this.Kh.style.fill = i, this.Lh.alpha = t, this.Lh.style.fill = i

                        }, t

                    }();

                    return t

                }();

            return t

        }(), $C.Mh = function () {

            function t(t) {

                this.dh = t, this.Nh = [], this.Oh = 0

            }

            t.prototype.Ph = function (t) {

                this.Nh.push(new DataView(t))

            }, t.prototype.Qh = function () {

                this.Nh = [], this.Oh = 0

            }, t.prototype.Rh = function () {

                for (var t = 0; t < 10; t++) {

                    if (0 === this.Nh.length) return;

                    var i = this.Nh.shift();

                    try {

                        this.Sh(i)

                    } catch (t) {

                        throw t

                    }

                }

            }, t.prototype.Sh = function (t) {

                switch (255 & t.ba(0)) {

                case 0:

                    return void this.Th(t, 1);

                case 1:

                    return void this.Uh(t, 1);

                case 2:

                    return void this.Vh(t, 1);

                case 3:

                    return void this.Wh(t, 1);

                case 4:

                    return void this.Xh(t, 1);

                case 5:

                    return void this.Yh(t, 1)

                }

            }, t.prototype.Th = function (t, i) {

                this.dh.hh.xg = t.ba(i), i += 1;

                var n = t.ca(i);

                return i += 2, this.dh.hh.yg = n, this.dh.ch.Eh.ae = n, this.dh.hh.zg = t.ea(i), i += 4, this.dh.hh.Ag = t.ea(i), i += 4, this.dh.hh.Bg = t.ea(i), i += 4, getApp().og.af.ng.Uf(this.dh.hh, getApp().og.$h.Zh()), i

            }, t.prototype.Uh = function (t, i) {

                var n = this.Oh++,

                    o = t.ca(i);

                i += 2;

                var e = void 0;

                e = this._h(t, i), i += this.ai(e);

                for (var s = 0; s < e; s++) i = this.bi(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var h = 0; h < e; h++) i = this.ci(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var r = 0; r < e; r++) i = this.di(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var a = 0; a < e; a++) i = this.ei(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var f = 0; f < e; f++) i = this.fi(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var c = 0; c < e; c++) i = this.gi(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var p = 0; p < e; p++) i = this.hi(t, i);

                e = this._h(t, i), i += this.ai(e);

                for (var u = 0; u < e; u++) i = this.ii(t, i);

                return n > 0 && (i = this.ji(t, i)), this.dh.ki(n, o), i

            }, t.prototype.ei = function (t, i) {

                var n = new $C.mi.li;

                n.ae = t.ca(i), i += 2, n.Gh = this.dh.hh.xg === $C.Ac.zc ? t.ba(i++) : $C.wg.Cg, n.Hh = t.ca(i), i += 2, n.ni = t.ca(i), i += 2, n.oi = t.ca(i), i += 2, n.pi = t.ca(i), i += 2, n.qi = t.ca(i), i += 2;

                var o = t.ba(i);

                i += 1;

                for (var e = "", s = 0; s < o; s++) e += String.fromCharCode(t.ca(i)), i += 2;

                if (n.ma = e, this.dh.hh.yg === n.ae) this.dh.ch.ri(n);

                else {

                    var h = this.dh.Fh[n.ae];

                    null != h && h.si();

                    var r = new $C.mi(this.dh.hh);

                    r.ti(getApp().og.af.ng), this.dh.Fh[n.ae] = r, r.ri(n)

                }

                return i

            }, t.prototype.fi = function (t, i) {

                var n = t.ca(i);

                i += 2;

                var o = t.ba(i);

                i++;

                var e = !!(1 & o),

                    s = !!(2 & o),

                    h = 0;

                e && (h = t.ca(i), i += 2);

                var r = this.vi(n);

                if (void 0 === r) return i;

                if (r.wi = !1, !r.xi) return i;

                var a = this.vi(n);

                if (e && void 0 !== a && a.xi)

                    if (h === this.dh.hh.yg) {

                        var f = this.dh.ch.fh(),

                            c = r.yi(f.x, f.y);

                        Math.max(0, 1 - c.distance / (.5 * this.dh.eh));

                        c.distance < .5 * this.dh.eh && getApp().og.af.ng.Wg.mg(s)

                    } else if (n === this.dh.hh.yg);

                else {

                    var p = this.dh.ch.fh(),

                        u = r.yi(p.x, p.y);

                    Math.max(0, 1 - u.distance / (.5 * this.dh.eh))

                } else if (n === this.dh.hh.yg);

                else {

                    var l = this.dh.ch.fh(),

                        d = r.yi(l.x, l.y);

                    Math.max(0, 1 - d.distance / (.5 * this.dh.eh))

                }

                return i

            }, t.prototype.ii = function (t, i) {

                var n = t.ca(i);

                i += 2;

                var o = n === this.dh.hh.yg ? null : this.dh.Fh[n],

                    e = t.ba(i);

                i += 1;

                var s = !!(1 & e);

                if (!!(2 & e)) {

                    var h = t.ea(i);

                    i += 4, o && o.zi(h)

                }

                var r = this.Ai(t.ba(i++), t.ba(i++), t.ba(i++)),

                    a = this.Ai(t.ba(i++), t.ba(i++), t.ba(i++));

                if (o) {

                    o.Bi(r, a, s);

                    var f = this.dh.ch.fh(),

                        c = o.fh(),

                        p = Math.max(0, 1 - Math.hypot(f.x - c.x, f.y - c.y) / (.5 * this.dh.eh));

                    getApp().Ci.Ye(p, n, s)

                }

                var u = this._h(t, i);

                if (i += this.ai(u), o)

                    for (var l in o.dd) {

                        var d = o.dd[l];

                        d && (d.hd = !1)

                    }

                for (var $ = 0; $ < u; $++) {

                    var g = t.ba(i);

                    i++;

                    var C = t.ba(i);

                    if (i++, o) {

                        var m = o.dd[g];

                        m || (m = o.dd[g] = new $C.fd(g)), m.hd = !0, m.od = Math.min(1, Math.max(0, C / 100))

                    }

                }

                return i

            }, t.prototype.ji = function (t, i) {

                var n = this.dh.ch,

                    o = t.ba(i);

                i += 1;

                var e = !!(1 & o),

                    s = !!(2 & o),

                    h = !!(4 & o);

                if (s) {

                    var r = n.Bh;

                    n.zi(t.ea(i)), i += 4, r = n.Bh - r, r > 0 && getApp().og.af.ng.Wg.lg(r)

                }

                h && (this.dh.Di = t.ea(i), i += 4);

                var a = this.Ai(t.ba(i++), t.ba(i++), t.ba(i++)),

                    f = this.Ai(t.ba(i++), t.ba(i++), t.ba(i++));

                n.Bi(a, f, e), getApp().Ci.Ye(.5, this.dh.hh.yg, e);

                var c = this._h(t, i);

                i += this.ai(c);

                for (var p in n.dd) {

                    var u = n.dd[p];

                    u && (u.hd = !1)

                }

                for (var l = 0; l < c; l++) {

                    var d = t.ba(i);

                    i++;

                    var $ = t.ba(i);

                    i++;

                    var g = n.dd[d];

                    g || (g = new $C.fd(d), n.dd[d] = g), g.hd = !0, g.od = Math.min(1, Math.max(0, $ / 100))

                }

                getApp().og.af.ng.Ug.Uf(n.dd)

            }, t.prototype.gi = function (t, i) {

                var n = this,

                    o = t.ca(i);

                i += 2;

                var e = this.vi(o),

                    s = t.ea(i);

                i += 4;

                var h = this._h(t, i);

                if (i += this.ai(h), e) {

                    e.zi(s), e.Ei(function () {

                        return n.Ai(t.ba(i++), t.ba(i++), t.ba(i++))

                    }, h), e.kd(!0);

                    var r = this.dh.ch.fh(),

                        a = e.fh(),

                        f = Math.max(0, 1 - Math.hypot(r.x - a.x, r.y - a.y) / (.5 * this.dh.eh));

                    getApp().Ci.We(f, o)

                } else i += 6 * h;

                return i

            }, t.prototype.hi = function (t, i) {

                var n = t.ca(i);

                i += 2;

                var o = this.dh.Fh[n];

                return o && o.wi && o.kd(!1), getApp().Ci.Xe(n), i

            }, t.prototype.bi = function (t, i) {

                var n = new $C.Fi.li;

                n.ae = t.da(i), i += 4, n.Gh = this.dh.hh.xg === $C.Ac.zc ? t.ba(i++) : $C.wg.Cg, n.Gi = this.Ai(t.ba(i++), t.ba(i++), t.ba(i++)), n.Hh = t.ba(i++);

                var o = this.dh.Hi[n.ae];

                null != o && o.si();

                var e = new $C.Fi(n, getApp().og.af.ng);

                return e.Ii(this.Ji(n.ae), this.Ki(n.ae), !0), this.dh.Hi[n.ae] = e, i

            }, t.prototype.ci = function (t, i) {

                var n = t.da(i);

                i += 4;

                var o = this.dh.Hi[n];

                return o && (o.Li = 0, o.Mi = 1.5 * o.Mi, o.Ni = !0), i

            }, t.prototype.di = function (t, i) {

                var n = t.da(i);

                i += 4;

                var o = t.ca(i);

                i += 2;

                var e = this.dh.Hi[n];

                if (e) {

                    e.Li = 0, e.Mi = .1 * e.Mi, e.Ni = !0;

                    var s = this.vi(o);

                    if (s && s.xi) {

                        var h = (this.dh.hh.yg, s.fh());

                        e.Ii(h.x, h.y, !1)

                    }

                }

                return i

            };

            var i = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];

            return t.prototype.Vh = function (t) {

                for (var n = getApp().Lc.Zb().Fb, o = n.getImageData(0, 0, 80, 80), e = i[0], s = 80 - e, h = 0, r = 0; r < 628; r++)

                    for (var a = t.ba(1 + r), f = 0; f < 8; f++) {

                        var c = 0 != (a >> f & 1),

                            p = 4 * (e + 80 * h);

                        c ? (o.data[p] = 255, o.data[p + 1] = 255, o.data[p + 2] = 255, o.data[p + 3] = 255) : o.data[p + 3] = 0, ++e >= s && ++h < 80 && (e = i[h], s = 80 - e)

                    }

                n.putImageData(o, 0, 0);

                var u = getApp().og.af.ng.Tg.qh;

                u.texture = getApp().Lc.Zb().oa, u.texture.update()

            }, t.prototype.Xh = function (t, i) {

                t.da(i);

                i += 4

            }, t.prototype.Yh = function (t, i) {

                this.dh.Oi()

            }, t.prototype.Wh = function (t, i) {

                this.dh.yh = t.ca(i), i += 2, this.dh.Ih = t.ca(i), i += 2;

                var n = new $C.Pi;

                n.Ch = [];

                for (var o = t.ba(i++), e = 0; e < o; e++) {

                    var s = t.ca(i);

                    i += 2;

                    var h = t.ea(i);

                    i += 4, n.Ch.push($C.Pi.Qi(s, h))

                }

                if (n.zh = [], this.dh.hh.xg === $C.Ac.zc)

                    for (var r = t.ba(i++), a = 0; a < r; a++) {

                        var f = t.ba(i);

                        i += 1;

                        var c = t.ea(i);

                        i += 4, n.zh.push($C.Pi.Ri(f, c))

                    }

                getApp().og.af.ng.Vg.Uf(n)

            }, t.prototype.vi = function (t) {

                return t === this.dh.hh.yg ? this.dh.ch : this.dh.Fh[t]

            }, t.prototype.Ai = function (t, i, n) {

                return 1e4 * ((16777215 & (255 & n | i << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)

            }, t.prototype.Ji = function (t) {

                return ((65535 & t) / 32768 - 1) * this.dh.hh.Dg()

            }, t.prototype.Ki = function (t) {

                return ((t >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg()

            }, t.prototype._h = function (t, i) {

                var n = t.ba(i);

                if (0 == (128 & n)) return n;

                var o = t.ba(i + 1);

                if (0 == (128 & o)) return o | n << 7 & 16256;

                var e = t.ba(i + 2);

                if (0 == (128 & e)) return e | o << 7 & 16256 | n << 14 & 2080768;

                var s = t.ba(i + 3);

                return 0 == (128 & s) ? s | e << 7 & 16256 | o << 14 & 2080768 | n << 21 & 266338304 : void 0

            }, t.prototype.ai = function (t) {

                return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0

            }, t

        }(), $C.Si = function () {

            function t(t) {

                this.Ti = t

            }

            return t.Ui = function () {

                return new $C.Si(null)

            }, t.Vi = function (t) {

                return new $C.Si(t)

            }, t.prototype.bc = function () {

                return this.Ti

            }, t.prototype.Wi = function () {

                return null != this.Ti

            }, t.prototype.Xi = function (t) {

                null != this.Ti && t(this.Ti)

            }, t

        }(), $C.Fi = function () {

            function t(t, i) {

                this.Eh = t, this.Yi = t.Hh >= 80, this.Zi = 0, this.$i = 0, this._i = 0, this.aj = 0, this.Mi = this.Yi ? 1 : t.Gi, this.Li = 1, this.Ni = !1, this.bj = 0, this.cj = 0, this.dj = 1, this.ej = 2 * Math.PI * Math.random(), this.fj = new $C.gj, this.fj.yc(getApp().dh.hh.xg, this.Eh.Gh === $C.wg.Cg ? null : getApp().Lc.Ub().jb(this.Eh.Gh), getApp().Lc.Ub().ob(this.Eh.Hh)), i.mh(t.ae, this.fj)

            }

            return t.prototype.si = function () {

                this.fj.nh.Dc.Rc(), this.fj.nh.Cc.Rc()

            }, t.prototype.Ii = function (t, i, n) {

                this.Zi = t, this.$i = i, n && (this._i = t, this.aj = i)

            }, t.prototype.hj = function (t, i) {

                var n = Math.min(.5, 1 * this.Mi),

                    o = Math.min(2.5, 1.5 * this.Mi);

                this.bj = $F.Q(this.bj, n, i, .0025), this.cj = $F.Q(this.cj, o, i, .0025), this.dj = $F.Q(this.dj, this.Li, i, .0025)

            }, t.prototype.ij = function (t, i, n) {

                this._i = $F.Q(this._i, this.Zi, i, .0025), this.aj = $F.Q(this.aj, this.$i, i, .0025), this.fj.Uf(this, t, i, n)

            }, t.li = function () {

                function t() {

                    this.ae = 0, this.Gh = $C.wg.Cg, this.Gi = 0, this.Hh = 0

                }

                return t

            }(), t

        }(), $C.gj = function () {

            function t() {

                this.nh = new o(new $C.sc, new $C.sc), this.nh.Dc.xc.blendMode = POGL.v.z, this.nh.Dc.xc.zIndex = n, this.nh.Cc.xc.zIndex = i

            }

            var i = 500,

                n = 100;

            t.prototype.yc = function (t, i, n) {

                var o = n.ub;

                null != o && this.nh.Cc.Bc(o);

                var e = t === $C.Ac.zc && null != i ? i.sb.vb : n.vb;

                null != e && this.nh.Dc.Bc(e)

            }, t.prototype.Uf = function (t, i, n, o) {

                if (!o(t._i, t.aj)) return void this.nh.Uc();

                var e = t.cj * (1 + .3 * Math.cos(t.ej + i / 200));

                t.Yi ? this.nh.Sc(t._i, t.aj, 2 * t.bj, 1 * t.dj, 1.2 * e, .8 * t.dj) : this.nh.Sc(t._i, t.aj, 2 * t.bj, 1 * t.dj, 2 * e, .3 * t.dj)

            };

            var o = function () {

                function t(t, i) {

                    this.Cc = t, this.Dc = i

                }

                return t.prototype.Sc = function (t, i, n, o, e, s) {

                    this.Cc.kd(!0), this.Cc.ld(t, i), this.Cc.Tc(n), this.Cc.jj(o), this.Dc.kd(!0), this.Dc.ld(t, i), this.Dc.Tc(e), this.Dc.jj(s)

                }, t.prototype.Uc = function () {

                    this.Cc.kd(!1), this.Dc.kd(!1)

                }, t

            }();

            return t

        }(), $C.kj = function () {

            function t() {

                this.lj = 0, this.mj = 0, this.nj = 0, this.oj = 0, this.pj = 0, this.qj = []

            }



            function i(t, i) {

                for (var n = 0; n < t.length; n++)

                    if (t[n].id == i) return n;

                return -1

            }

            return t.prototype.ha = function () {}, t.prototype.rj = function (t) {

                switch (t) {

                case $C.tj.sj:

                    return this.lj;

                case $C.tj.uj:

                    return this.mj;

                case $C.tj.vj:

                    return this.nj;

                case $C.tj.wj:

                    return this.oj;

                case $C.tj.xj:

                    return this.pj

                }

                return 0

            }, t.prototype.yj = function () {

                return new $C.hb(this.lj, this.mj, this.nj, this.oj, this.pj)

            }, t.prototype.zj = function (t) {

                this.qj.push(t), this.Aj()

            }, t.prototype.Bj = function () {

                if (!getApp().Lc.Wb()) return $F.W([32, 33, 34, 35]);

                for (var t = [], i = getApp().Lc.Xb().skinArrayDict, n = 0; n < i.length; n++) {

                    var o = i[n];

                    this.Cj(o.id, $C.tj.sj) && t.push(o)

                }

                return 0 === t.length ? 0 : t[parseInt(t.length * Math.random())].id

            }, t.prototype.Dj = function () {

                if (getApp().Lc.Wb()) {

                    var t = getApp().Lc.Xb().skinArrayDict,

                        n = i(t, this.lj);

                    if (!(n < 0)) {

                        for (var o = n + 1; o < t.length; o++)

                            if (this.Cj(t[o].id, $C.tj.sj)) return this.lj = t[o].id, void this.Aj();

                        for (var e = 0; e < n; e++)

                            if (this.Cj(t[e].id, $C.tj.sj)) return this.lj = t[e].id, void this.Aj()

                    }

                }

            }, t.prototype.Ej = function () {

                if (getApp().Lc.Wb) {

                    var t = getApp().Lc.Xb().skinArrayDict,

                        n = i(t, this.lj);

                    if (!(n < 0)) {

                        for (var o = n - 1; o >= 0; o--)

                            if (this.Cj(t[o].id, $C.tj.sj)) return this.lj = t[o].id, void this.Aj();

                        for (var e = t.length - 1; e > n; e--)

                            if (this.Cj(t[e].id, $C.tj.sj)) return this.lj = t[e].id, void this.Aj()

                    }

                }

            }, t.prototype.Fj = function (t, i) {

                if (!getApp().Lc.Wb() || this.Cj(t, i)) switch (i) {

                case $C.tj.sj:

                    return void(this.lj !== t && (this.lj = t, this.Aj()));

                case $C.tj.uj:

                    return void(this.mj !== t && (this.mj = t, this.Aj()));

                case $C.tj.vj:

                    return void(this.nj !== t && (this.nj = t, this.Aj()));

                case $C.tj.wj:

                    return void(this.oj !== t && (this.oj = t, this.Aj()));

                case $C.tj.xj:

                    return void(this.pj !== t && (this.pj = t, this.Aj()))

                }

            }, t.prototype.Cj = function (t, i) {

                var n = this.Gj(t, i);

                return null != n && (getApp().Ij.Hj() ? 0 === n.Jj() && !n.Kj() || getApp().Ij.Lj(t, i) : n.Mj())

            }, t.prototype.Gj = function (t, n) {

                if (!getApp().Lc.Wb()) return null;

                var o = getApp().Lc.Xb();

                if (n === $C.tj.sj) {

                    var e = i(o.skinArrayDict, t);

                    return e < 0 ? null : $C.Oj.Nj(o.skinArrayDict[e])

                }

                var s = null;

                switch (n) {

                case $C.tj.uj:

                    s = o.eyesDict[t];

                    break;

                case $C.tj.vj:

                    s = o.mouthDict[t];

                    break;

                case $C.tj.wj:

                    s = o.hatDict[t];

                    break;

                case $C.tj.xj:

                    s = o.glassesDict[t]

                }

                return null != s ? $C.Oj.Pj(s) : null

            }, t.prototype.Aj = function () {

                for (var t = 0; t < this.qj.length; t++) this.qj[t]()

            }, t

        }(), $C.tj = function () {

            function t() {}

            return t.sj = "SKIN", t.uj = "EYES", t.vj = "MOUTH", t.xj = "GLASSES", t.wj = "HAT", t

        }(), $C.Qj = function () {

            function t() {

                this.Bf = new POGL.m(POGL.l.from("/images/bg-obstacle.png"));

                var t = POGL.l.from($F.a.f),

                    i = new POGL.m(t, new POGL.q(0, 0, 256, 256));

                this.Cf = new Array(36);

                for (var n = 0; n < this.Cf.length; n++) this.Cf[n] = i;

                this._g = new POGL.m(function () {

                    var t = POGL.l.from("https://i.imgur.com/8ubx4RA.png");

                    return t.wrapMode = POGL.C.D, t

                }()), this.ah = new POGL.m(function () {

                    var t = POGL.l.from("https://i.imgur.com/8ubx4RA.png");

                    return t.wrapMode = POGL.C.D, t

                }()), this.Zg = new POGL.m(POGL.l.from("/images/lens.png")), this.rf = new POGL.m(function () {

                    var t = POGL.l.from($F.a.g);

                    return t.wrapMode = POGL.C.D, t

                }()), this.Db = function () {

                    var t = window.document.createElement("canvas");

                    return t.width = 80, t.height = 80, {

                        Eb: t,

                        Fb: t.getContext("2d"),

                        oa: new POGL.m(POGL.l.from(t))

                    }

                }(), this.Ae = {}, this.we = {}, this.Rj = [], this.Sj = null

            }

            return t.prototype.ha = function (t) {

                function i() {

                    0 == --n && t()

                }

                var n = 4;

                this.Ae = {}, i(), this.we = {}, i(), this.Rj = [], i(), this.Sj = null, i()

            }, t

        }(), $C.Tj = function () {

            function t() {

                this.Uj = null, this.af = new $C.Vj, this._e = new $C.Wj, this.Xj = new $C.Yj, this.Zj = new $C.$j, this._j = new $C.ak, this.bk = new $C.ck, this.dk = new $C.ek, this.fk = new $C.gk, this.$h = new $C.hk, this.ik = new $C.jk, this.kk = new $C.lk, this.mk = new $C.nk, this.ok = new $C.pk, this.qk = new $C.rk, this.ie = new $C.sk, this.tk = new $C.uk, this.vk = new $C.wk, this.xk = new $C.yk, this.zk = []

            }



            function i(t, i) {

                if (0 !== i) {

                    var n = t[i];

                    $F.T(t, 0, 1, i), t[0] = n

                }

            }



            function n(t, i) {

                if (i !== t.length + 1) {

                    var n = t[i];

                    $F.T(t, i + 1, i, t.length - i - 1), t[t.length - 1] = n

                }

            }



            function o(t, i) {

                for (var n = 0; n < t.length; n++)

                    if (t[n] === i) return n;

                return -1

            }

            return t.prototype.ha = function () {

                this.Uj = new $C.df($C.kf.jf), this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];

                for (var t = 0; t < this.zk.length; t++) this.zk[t].ha()

            }, t.prototype.lh = function (t, i) {

                for (var n = this.zk.length - 1; n >= 0; n--) this.zk[n].Nf(t, i);

                this.zk[0] !== this.af && this.zk[0] !== this.xk && null != this.Uj && this.Uj.Nf(t, i)

            }, t.prototype.Jf = function () {

                for (var t = this.zk.length - 1; t >= 0; t--) this.zk[t].Jf();

                null != this.Uj && this.Uj.Jf()

            }, t.prototype.Ak = function (t) {

                var n = o(this.zk, t);

                if (!(n < 0)) {

                    this.zk[0].Bk(), i(this.zk, n), this.Ck()

                }

            }, t.prototype.Dk = function () {

                this.zk[0].Bk();

                do {

                    n(this.zk, 0)

                } while (this.zk[0].nd !== $C.Fk.Ek);

                this.Ck()

            }, t.prototype.Ck = function () {

                var t = this.zk[0];

                t.Gk(), t.Hk(), this.Ik()

            }, t.prototype.Jk = function () {

                return 0 !== this.zk.length && (this.zk[0].nd === $C.Fk.Ek && this.qk.Kk())

            }, t.prototype.Lk = function () {

                return 0 === this.zk.length ? null : this.zk[0]

            }, t.prototype.Ik = function () {

                this.Jk() && this.Ak(this.qk)

            }, t

        }(), $C.Pi = function () {

            function t() {

                this.Ch = [], this.zh = []

            }

            return t.Qi = function (t, i) {

                return {

                    Dh: t,

                    Bh: i

                }

            }, t.Ri = function (t, i) {

                return {

                    Ah: t,

                    Bh: i

                }

            }, t

        }(), $C.Mk = function () {

            function t() {

                this.Nk = [], this.Ok = [], this.Pk = !1, this.Qk = i, this.Rk = {}

            }

            var i = "guest";

            return t.Sk = new(function () {

                function t() {}

                return t.Tk = function () {

                    function t(t) {

                        this.Uk = t

                    }

                    return t

                }(), t.prototype.Vk = function () {

                    return "undefined" != typeof FB

                }, t.prototype.Wk = function (t, i, n) {

                    var o = "https://graph.facebook.com/me?access_token=" + t;

                    $.get(o).fail(function () {

                        i()

                    }).done(function () {

                        n()

                    })

                }, t.prototype.Xk = function (i, n) {

                    if (!this.Vk()) return void i();

                    this.Yk(function () {

                        FB.login(function (o) {

                            if ("connected" !== o.status) return void i();

                            var e = o.authResponse.accessToken;

                            n(new t.Tk(e))

                        })

                    }, function (t) {

                        n(t)

                    })

                }, t.prototype.Yk = function (i, n) {

                    var o = this;

                    if (!this.Vk()) return void i();

                    FB.getLoginStatus(function (e) {

                        if ("connected" !== e.status) return void i();

                        var s = e.authResponse.accessToken;

                        o.Wk(s, function () {

                            i()

                        }, function () {

                            n(new t.Tk(s))

                        })

                    })

                }, t.prototype.Zk = function () {

                    this.Vk() && FB.logout()

                }, t

            }()), t.$k = new(function () {

                function t() {}

                return t._k = function () {

                    function t(t, i) {

                        this.Uk = t, this.al = i

                    }

                    return t

                }(), t.prototype.Vk = function () {

                    return void 0 !== GoogleAuth

                }, t.prototype.Xk = function (i, n) {

                    if (void 0 === GoogleAuth) return void i();

                    GoogleAuth.then(function () {

                        if (GoogleAuth.isSignedIn.get()) {

                            var o = GoogleAuth.currentUser.get(),

                                e = o.getAuthResponse().id_token,

                                s = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;

                            if ((new Date).getTime() < s) return void n(new t._k(e, s))

                        }

                        GoogleAuth.signIn().then(function (o) {

                            if (void 0 !== o.error) return void i();

                            if (!o.isSignedIn()) return void i();

                            var e = o.getAuthResponse().id_token,

                                s = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;

                            n(new t._k(e, s))

                        })

                    })

                }, t.prototype.Yk = function (i, n) {

                    if (void 0 === GoogleAuth) return void i();

                    GoogleAuth.then(function () {

                        if (GoogleAuth.isSignedIn.get()) {

                            var o = GoogleAuth.currentUser.get(),

                                e = o.getAuthResponse().id_token,

                                s = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;

                            if ((new Date).getTime() < s) return void n(new t._k(e, s))

                        }

                        i()

                    })

                }, t.prototype.Zk = function () {

                    void 0 !== GoogleAuth && GoogleAuth.signOut()

                }, t

            }()), t.prototype.ha = function () {

                this.bl()

            }, t.prototype.cl = function () {

                return this.Pk ? this.Rk.userId : ""

            }, t.prototype.dl = function () {

                return this.Pk ? this.Rk.username : ""

            }, t.prototype.el = function () {

                return this.Pk ? this.Rk.nickname : ""

            }, t.prototype.fl = function () {

                return this.Pk ? this.Rk.avatarUrl : GUEST_AVATAR_URL

            }, t.prototype.gl = function () {

                return this.Pk && this.Rk.isBuyer

            }, t.prototype.hl = function () {

                return this.Pk && this.Rk.isConsentGiven

            }, t.prototype.il = function () {

                return this.Pk ? this.Rk.coins : 0

            }, t.prototype.jl = function () {

                return this.Pk ? this.Rk.level : 1

            }, t.prototype.kl = function () {

                return this.Pk ? this.Rk.expOnLevel : 0

            }, t.prototype.ll = function () {

                return this.Pk ? this.Rk.expToNext : 50

            }, t.prototype.ml = function () {

                return this.Pk ? this.Rk.skinId : 0

            }, t.prototype.nl = function () {

                return this.Pk ? this.Rk.eyesId : 0

            }, t.prototype.ol = function () {

                return this.Pk ? this.Rk.mouthId : 0

            }, t.prototype.pl = function () {

                return this.Pk ? this.Rk.glassesId : 0

            }, t.prototype.ql = function () {

                return this.Pk ? this.Rk.hatId : 0

            }, t.prototype.rl = function () {

                return this.Pk ? this.Rk.highScore : 0

            }, t.prototype.sl = function () {

                return this.Pk ? this.Rk.bestSurvivalTimeSec : 0

            }, t.prototype.tl = function () {

                return this.Pk ? this.Rk.kills : 0

            }, t.prototype.ul = function () {

                return this.Pk ? this.Rk.headShots : 0

            }, t.prototype.vl = function () {

                return this.Pk ? this.Rk.sessionsPlayed : 0

            }, t.prototype.wl = function () {

                return this.Pk ? this.Rk.totalPlayTimeSec : 0

            }, t.prototype.xl = function () {

                return this.Pk ? this.Rk.regDate : {}

            }, t.prototype.yl = function (t) {

                this.Nk.push(t), t()

            }, t.prototype.zl = function (t) {

                this.Ok.push(t), t()

            }, t.prototype.Lj = function (t, i) {

                var n = this.Rk.propertyList;

                if (null == n) return !1;

                for (var o = t.toString(), e = 0; e < n.length; e++) {

                    var s = n[e];

                    if (s.id === o && s.type === i) return !0

                }

                return !1

            }, t.prototype.Hj = function () {

                return this.Pk

            }, t.prototype.Al = function () {

                return this.Qk

            }, t.prototype.Bl = function (t) {

                var i = this,

                    n = this.cl(),

                    o = this.il(),

                    e = this.jl();

                this.Cl(function () {

                    null != t && t()

                }, function (s) {

                    i.Rk = s.user_data, i.Dl();

                    var h = i.cl(),

                        r = i.il(),

                        a = i.jl();

                    if (n === h) {

                        a > 1 && a !== e && getApp().og.qk.El(new $C.Fl(currLevel));

                        var f = r - o;

                        f >= 20 && getApp().og.qk.El(new $C.Gl(f))

                    }

                    null != t && t()

                })

            }, t.prototype.Cl = function (t, i) {

                var n = $F.a.b + "/pub/wuid/" + this.Qk + "/getUserData";

                $F.Z(n, t, function (n) {

                    1200 !== n.code ? t() : i(n)

                })

            }, t.prototype.Hl = function (t, i, n, o) {

                var e = $F.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + t + "&type=" + i;

                $F.Z(e, function () {

                    n()

                }, function (t) {

                    1200 !== t.code ? n() : o(t)

                })

            }, t.prototype.Il = function (t, i) {

                var n = $F.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";

                $F.Z(n, t, function (n) {

                    1200 !== n.code ? t() : i(n)

                })

            }, t.prototype.Jl = function (i) {

                var n = this;

                this.Pk && this.Kl(), t.Sk.Xk(function () {

                    i()

                }, function (t) {

                    n.Ll("fb", t.Uk, i)

                })

            }, t.prototype.Ml = function (i) {

                var n = this;

                this.Pk && this.Kl(), t.$k.Xk(function () {

                    i()

                }, function (t) {

                    n.Ll("gg", t.Uk, i)

                })

            }, t.prototype.Ll = function (t, i, n) {

                var o = this,

                    e = t + "_" + i,

                    s = $F.a.b + "/pub/wuid/" + e + "/login";

                $F.Z(s, function () {

                    o.Nl()

                }, function (e) {

                    1200 !== e.code ? o.Nl() : (o.Ol(t, i, e.user_data), null != n && n())

                })

            }, t.prototype.Kl = function () {

                try {

                    this.Pl(), this.Ql()

                } catch (t) {}

                this.Rl()

            }, t.prototype.Sl = function () {

                this.Pk && this.Il(function () {}, function (t) {})

            }, t.prototype.Nl = function () {

                getApp().og.Ak(getApp().og.tk)

            }, t.prototype.Ol = function (t, i, n) {

                var o = this.Pk ? this.Rk.userId : "guest";

                serversHTML();

                this.Pk = !0, this.Qk = t + "_" + i, this.Rk = n, $C.Vf.eg($C.Vf.$f, t, 60), o !== this.Rk.userId ? this.Tl() : this.Dl()

            }, t.prototype.Rl = function () {

                var t = this.Pk ? this.Rk.userId : "guest";

                this.Pk = !1, this.Qk = i, this.Rk = {}, $C.Vf.eg($C.Vf.$f, "", 60), t !== this.Rk.userId ? this.Tl() : this.Dl()

            }, t.prototype.bl = function () {

                var i = $C.Vf.fg($C.Vf.$f),

                    n = this;

                if ("fb" === i) {

                    var o = 1;

                    ! function i() {

                        if (!t.Sk.Vk() && o++ < 5) return void setTimeout(i, 1e3);

                        t.Sk.Yk(function () {}, function (t) {

                            n.Ll("fb", t.Uk)

                        })

                    }()

                } else if ("gg" === i) {

                    var e = 1;

                    ! function i() {

                        if (!t.$k.Vk() && e++ < 5) return void setTimeout(i, 1e3);

                        t.$k.Yk(function () {}, function (t) {

                            n.Ll("gg", t.Uk)

                        })

                    }()

                }

            }, t.prototype.Tl = function () {

                for (var t = 0; t < this.Nk.length; t++) this.Nk[t]();

                this.Dl()

            }, t.prototype.Dl = function () {

                for (var t = 0; t < this.Ok.length; t++) this.Ok[t]()

            }, t.prototype.Pl = function () {

                t.Sk.Zk()

            }, t.prototype.Ql = function () {

                t.$k.Zk()

            }, t

        }(), $C.if = function () {

            function t(t, i, n) {

                this.ef = n, this.hd = !1, this.nc = new POGL.k, this.nc.visible = !1, this.Ul = new Array(t);

                for (var o = 0; o < this.Ul.length; o++) {

                    var e = new $C.Vl(new Float32Array(3 * i));

                    e.Wl(i), this.Ul[o] = e, this.nc.addChild(e.tf())

                }

                this.ff = 1, this.gf = 1, this.Jf()

            }

            return t.prototype.tf = function () {

                return this.nc

            }, t.prototype.Kf = function (t) {

                this.hd = t, this.nc.visible = t

            }, t.prototype.Jf = function () {

                this.ff = this.ef.width(), this.gf = this.ef.height();

                for (var t = this.gf / 30, i = 0; i < this.Ul.length; i++) this.Ul[i].Xl(t)

            }, t.prototype.Uf = function () {

                if (this.hd)

                    for (var t = 0; t < this.Ul.length; t++) this.Ul[t].Uf(this.lf)

            }, t.prototype.Yl = function () {

                return this.ff

            }, t.prototype.Zl = function () {

                return this.gf

            }, t.prototype.Qf = function (t, i) {

                this.Ul[t].$l(i)

            }, t.prototype.Rf = function (t, i) {

                this.Ul[t]._l(i)

            }, t.prototype.Sf = function (t, i, n) {

                for (var o = this.Ul[t], e = o.am(), s = o.bm, h = 0; h < e; h++) s[3 * h] = i, s[3 * h + 1] = n, s[3 * h + 2] = 0

            }, t.prototype.Tf = function (t, i, n) {

                var o = this.Ul[t],

                    e = o.am(),

                    s = o.bm,

                    h = o.cm(),

                    r = s[0],

                    a = void 0,

                    f = s[1],

                    c = void 0,

                    p = i - r,

                    u = n - f,

                    l = Math.hypot(p, u);

                if (l > 0) {

                    s[0] = i, s[1] = n, s[2] = Math.atan2(u, p);

                    for (var d = .25 * h / (.25 * h + l), $ = 1 - 2 * d, g = 1, C = e; g < C; g++) a = s[3 * g], s[3 * g] = s[3 * g - 3] * $ + (a + r) * d, r = a, c = s[3 * g + 1], s[3 * g + 1] = s[3 * g - 2] * $ + (c + f) * d, f = c, s[3 * g + 2] = Math.atan2(s[3 * g - 2] - s[3 * g + 1], s[3 * g - 3] - s[3 * g])

                }

            }, t

        }(), $C.dm = function () {

            function t(t) {

                var o = this;

                this.ef = t, this.Eb = t.get()[0], this.lf = new POGL.n({

                    view: this.Eb,

                    transparent: !0

                }), this.hd = !1, this.em = new $C.Vl(new Float32Array(3 * i)), this.ff = 1, this.gf = 1, this.fm = n.gm, this.hm = n.gm, this.im = n.gm, this.jm = n.gm, this.km = n.gm, this.Jf(), getApp().Lc.$b(function () {

                    o.em.lm()

                })

            }

            var i = Math.min(100, $C.mc.wc),

                n = {

                    gm: "0lt0",

                    mm: "0lt1",

                    nm: "0lt2"

                };

            return t.prototype.Kf = function (t) {

                this.hd = t

            }, t.prototype.Jf = function () {

                var t = window.devicePixelRatio ? window.devicePixelRatio : 1;

                this.ff = this.ef.width(), this.gf = this.ef.height(), this.lf.resize(this.ff, this.gf), this.lf.resolution = t, this.Eb.width = t * this.ff, this.Eb.height = t * this.gf;

                var n = this.gf / 4;

                this.em.Xl(n);

                var o = $F.P(2 * Math.floor(this.ff / n) - 5, 1, i);

                this.em.Wl(o)

            }, t.prototype.Nf = function () {

                if (this.hd) {

                    var t = Date.now(),

                        i = t / 200,

                        n = Math.sin(i);

                    this.em.om(this.pm(this.fm, n), this.qm(this.fm, n)), this.em.rm(this.sm(this.hm, n), this.sm(this.im, n), this.sm(this.jm, n), this.sm(this.km, n));

                    for (var o = this.em.cm(), e = this.em.am(), s = this.em.bm, h = this.ff - .5 * (this.ff - .5 * o * (e - 1)), r = .5 * this.gf, a = 0, f = 0, c = -1; c < e; c++) {

                        var p = c,

                            u = Math.cos(1 * p / 12 * Math.PI - i) * (1 - Math.pow(16, -1 * p / 12));

                        c >= 0 && (s[3 * c] = h + -.5 * o * p, s[3 * c + 1] = r + .5 * o * u, s[3 * c + 2] = Math.atan2(f - u, p - a)), a = p, f = u

                    }

                    this.em.Uf(), this.em.tm(this.lf)

                }

            }, t.prototype.$l = function (t) {

                this.em.$l(t)

            }, t.prototype.um = function (t) {

                this.fm = t ? n.nm : n.mm, this.hm = n.gm, this.im = n.gm, this.jm = n.gm, this.km = n.gm

            }, t.prototype.vm = function (t) {

                this.fm = n.gm, this.hm = t ? n.nm : n.mm, this.im = n.gm, this.jm = n.gm, this.km = n.gm

            }, t.prototype.wm = function (t) {

                this.fm = n.gm, this.hm = n.gm, this.im = t ? n.nm : n.mm, this.jm = n.gm, this.km = n.gm

            }, t.prototype.xm = function (t) {

                this.fm = n.gm, this.hm = n.gm, this.im = n.gm, this.jm = t ? n.nm : n.mm, this.km = n.gm

            }, t.prototype.ym = function (t) {

                this.fm = n.gm, this.hm = n.gm, this.im = n.gm, this.jm = n.gm, this.km = t ? n.nm : n.mm

            }, t.prototype.pm = function (t, i) {

                switch (t) {

                case n.mm:

                    return .9 + .1 * i;

                case n.nm:

                    return .4 + .3 * i

                }

                return 1

            }, t.prototype.qm = function (t, i) {

                switch (t) {

                case n.mm:

                    return .6 + .5 * i;

                case n.nm:

                    return .3 + .3 * i

                }

                return 1

            }, t.prototype.sm = function (t, i) {

                switch (t) {

                case n.mm:

                    return .9 + .1 * i;

                case n.nm:

                    return .6 + .4 * i

                }

                return 1

            }, t

        }(), $C.Oj = function () {

            function t(t, i, n, o, e) {

                this.zm = t, this.Am = i, this.Bm = n, this.Cm = o, this.Dm = e

            }

            return t.Nj = function (i) {

                return new t(i.price, i.guest, i.nonbuyable, i.nonbuyableCause, i.description)

            }, t.Pj = function (i) {

                return new t(i.price, i.guest, i.nonbuyable, i.nonbuyableCause, i.description)

            }, t.prototype.Jj = function () {

                return this.zm

            }, t.prototype.Mj = function () {

                return this.Am

            }, t.prototype.Kj = function () {

                return this.Bm

            }, t.prototype.Em = function () {

                return this.Cm

            }, t.prototype.Fm = function () {

                return this.Dm

            }, t

        }(), $C.qf = function () {

            function t(t) {

                this.Gm = {}, this.Gm[s] = t;

                var i = POGL.p.from(f, c, this.Gm);

                this.sf = new POGL.u(a, i), this.sf.blendMode = POGL.v.B

            }

            var i = "a1_" + $F.X(),

                n = "a2_" + $F.X(),

                o = atob("dHJhbnNsYXRpb25NYXRyaXg="),

                e = atob("cHJvamVjdGlvbk1hdHJpeA=="),

                s = "u3_" + $F.X(),

                h = "u4_" + $F.X(),

                r = "v1_" + $F.X(),

                a = (new POGL.t).addAttribute(i, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(n, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2),

                f = "" + atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + i + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + n + atob("O3VuaWZvcm0gbWF0MyA=") + o + atob("O3VuaWZvcm0gbWF0MyA=") + e + atob("O3VuaWZvcm0gdmVjNCA=") + h + atob("O3ZhcnlpbmcgdmVjMiA=") + r + atob("O2NvbnN0IGZsb2F0IFJPVF9BTkdMRV9ERUc9Ny41O2NvbnN0IGZsb2F0IFJPVF9DT1M9Y29zKFJPVF9BTkdMRV9ERUcvMTgwLjAqNi4yODMxODUzMDcxNzk1ODYpO2NvbnN0IGZsb2F0IFJPVF9TSU49c2luKFJPVF9BTkdMRV9ERUcvMTgwLjAqNi4yODMxODUzMDcxNzk1ODYpO3ZvaWQgbWFpbigpe2dsX1Bvc2l0aW9uPXZlYzQoKA==") + e + atob("Kg==") + o + atob("KnZlYzMo") + i + atob("LDEuMCkpLnh5LDAuMCwxLjApO3ZlYzQgX1NjcmVlblBhcmFtcz0=") + h + atob("O3ZlYzIgdXY9") + n + atob("O3ZlYzIgbXVsPTAuNSp2ZWMyKF9TY3JlZW5QYXJhbXMueCooX1NjcmVlblBhcmFtcy53LTEuMCkrMS4wLF9TY3JlZW5QYXJhbXMueSooX1NjcmVlblBhcmFtcy56LTEuMCkrMS4wKTt2ZWMyIHYyPSh1di12ZWMyKDAuNSwwLjUpKSptdWwqMS4yNTt2Mj12ZWMyKHYyLngqUk9UX0NPUy12Mi55KlJPVF9TSU4sdjIueCpST1RfU0lOK3YyLnkqUk9UX0NPUykqdmVjMigxLDIpO3V2PXYyOw==") + r + atob("PXV2O30="),

                c = "" + atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + r + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + s + atob("O3ZvaWQgbWFpbigpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + s + atob("LA==") + r + atob("KTt9");

            return t.prototype.Mf = function (t, i) {

                this.sf.scale.x = t, this.sf.scale.y = i, this.Gm[h] = [t, i, 1 / t + 1, 1 / i + 1]

            }, t

        }(), $C.Mg = function () {

            function t() {

                this.Gm = {}, this.Gm[s] = [1, .5, .25, .5], this.Gm[h] = POGL.m.WHITE, this.Gm[r] = [0, 0], this.Gm[a] = [0, 0];

                var t = POGL.p.from(p, u, this.Gm);

                this.sf = new POGL.u(c, t)

            }

            var i = "a1_" + $F.X(),

                n = "a2_" + $F.X(),

                o = atob("dHJhbnNsYXRpb25NYXRyaXg="),

                e = atob("cHJvamVjdGlvbk1hdHJpeA=="),

                s = "u3_" + $F.X(),

                h = "u4_" + $F.X(),

                r = "u5_" + $F.X(),

                a = "u6_" + $F.X(),

                f = "v1_" + $F.X(),

                c = (new POGL.t).addAttribute(i, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(n, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2),

                p = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + i + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + n + atob("O3VuaWZvcm0gbWF0MyA=") + o + atob("O3VuaWZvcm0gbWF0MyA=") + e + atob("O3ZhcnlpbmcgdmVjMiA=") + f + atob("O3ZvaWQgbWFpbigpew==") + f + atob("PQ==") + n + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + e + atob("Kg==") + o + atob("KnZlYzMo") + i + atob("LDEuMCkpLnh5LDAuMCwxLjApO30="),

                u = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + f + atob("O3VuaWZvcm0gdmVjNCA=") + s + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + h + atob("O3VuaWZvcm0gdmVjMiA=") + r + atob("O3VuaWZvcm0gdmVjMiA=") + a + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + f + atob("Kg==") + r + atob("Kw==") + a + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + s + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + h + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");

            return t.prototype.Ec = function (t, i, n, o) {

                var e = this.Gm[s];

                e[0] = t, e[1] = i, e[2] = n, e[3] = o

            }, t.prototype.$g = function (t) {

                this.Gm[h] = t

            }, t.prototype.Uf = function (t, i, n, o) {

                this.sf.position.x = t, this.sf.position.y = i, this.sf.scale.x = n, this.sf.scale.y = o;

                var e = this.Gm[r];

                e[0] = .2520615384615385 * n, e[1] = .4357063736263738 * o;

                var s = this.Gm[a];

                s[0] = .2520615384615385 * t, s[1] = .4357063736263738 * i

            }, t

        }(), $C.sc = function () {

            function t() {

                this.xc = new POGL.r, this.Hm = 0, this.Im = 0

            }

            return t.prototype.Bc = function (t) {

                this.xc.texture = t.Ea(), this.xc.anchor.set(t.ya, t.za), this.Hm = t.Aa, this.Im = t.Ba

            }, t.prototype.Ec = function (t) {

                this.xc.tint = parseInt(t.substring(1), 16)

            }, t.prototype.Tc = function (t) {

                this.xc.width = t * this.Hm, this.xc.height = t * this.Im

            }, t.prototype.md = function (t) {

                this.xc.rotation = t

            }, t.prototype.ld = function (t, i) {

                this.xc.position.set(t, i)

            }, t.prototype.kd = function (t) {

                this.xc.visible = t

            }, t.prototype.gd = function () {

                return this.xc.visible

            }, t.prototype.jj = function (t) {

                this.xc.alpha = t

            }, t.prototype.Qc = function () {

                return this.xc

            }, t.prototype.Rc = function () {

                $F.U(this.xc)

            }, t

        }(), $C.mi = function () {

            function t(t) {

                this.hh = t, this.Eh = new $C.mi.li, this.xi = !1, this.wi = !0, this.Xc = !1, this.$c = 0, this.Jm = 0, this.dj = 1, this.bd = 0, this.Bh = 0, this.dd = {}, this.ad = 0, this.Km = new Float32Array(2 * i), this.Lm = new Float32Array(2 * i), this._c = new Float32Array(2 * i), this.Mm = null, this.Nm = null, this.Om = null, this.Pm()

            }

            var i = 200;

            return t.prototype.si = function () {

                null != this.Nm && $F.U(this.Nm.nc), null != this.Om && $F.U(this.Om)

            }, t.prototype.Pm = function () {

                this.zi(.25), this.Eh.ma = "", this.wi = !0, this.dd = {}, this.kd(!1)

            }, t.prototype.ri = function (t) {

                this.Eh = t, this.Qm(this.xi)

            }, t.prototype.kd = function (t) {

                var i = this.xi;

                this.xi = t, this.Qm(i)

            }, t.prototype.zi = function (t) {

                this.Bh = 50 * t;

                var n = t;

                t > this.hh.Ag && (n = Math.atan((t - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag);

                var o = Math.sqrt(4 * Math.pow(5 * n, .707106781186548) + 25),

                    e = Math.min(i, Math.max(3, 5 * (o - 5) + 1)),

                    s = this.ad;

                if (this.$c = .025 * (5 + .9 * o), this.ad = Math.floor(e), this.Jm = e - this.ad, s > 0 && s < this.ad)

                    for (var h = this.Km[2 * s - 2], r = this.Km[2 * s - 1], a = this.Lm[2 * s - 2], f = this.Lm[2 * s - 1], c = this._c[2 * s - 2], p = this._c[2 * s - 1], u = s; u < this.ad; u++) this.Km[2 * u] = h, this.Km[2 * u + 1] = r, this.Lm[2 * u] = a, this.Lm[2 * u + 1] = f, this._c[2 * u] = c, this._c[2 * u + 1] = p

            }, t.prototype.Ei = function (t, i) {

                this.ad = i;

                for (var n = 0; n < this.ad; n++) this.Km[2 * n] = this.Lm[2 * n] = this._c[2 * n] = t(), this.Km[2 * n + 1] = this.Lm[2 * n + 1] = this._c[2 * n + 1] = t()

            }, t.prototype.Bi = function (t, i, n) {

                this.Xc = n;

                for (var o = 0; o < this.ad; o++) this.Km[2 * o] = this.Lm[2 * o], this.Km[2 * o + 1] = this.Lm[2 * o + 1];

                var e = t - this.Lm[0],

                    s = i - this.Lm[1];

                this.Rm(e, s, this.ad, this.Lm)

            }, t.prototype.Rm = function (t, i, n, o) {

                var e = Math.hypot(t, i);

                if (!(e <= 0)) {

                    var s = o[0],

                        h = void 0;

                    o[0] += t;

                    var r = o[1],

                        a = void 0;

                    o[1] += i;

                    for (var f = this.$c / (this.$c + e), c = 1 - 2 * f, p = 1, u = n - 1; p < u; p++) h = o[2 * p], o[2 * p] = o[2 * p - 2] * c + (h + s) * f, s = h, a = o[2 * p + 1], o[2 * p + 1] = o[2 * p - 1] * c + (a + r) * f, r = a;

                    f = this.Jm * this.$c / (this.Jm * this.$c + e), c = 1 - 2 * f, o[2 * n - 2] = o[2 * n - 4] * c + (o[2 * n - 2] + s) * f, o[2 * n - 1] = o[2 * n - 3] * c + (o[2 * n - 1] + r) * f

                }

            }, t.prototype.fh = function () {

                return {

                    x: this._c[0],

                    y: this._c[1]

                }

            }, t.prototype.yi = function (t, i) {

                for (var n = 1e6, o = t, e = i, s = 0; s < this.ad; s++) {

                    var h = this._c[2 * s],

                        r = this._c[2 * s + 1],

                        a = Math.hypot(t - h, i - r);

                    a < n && (n = a, o = h, e = r)

                }

                return {

                    x: o,

                    y: e,

                    distance: n

                }

            }, t.prototype.ti = function (t) {

                this.Mm = t

            }, t.prototype.hj = function (t, i) {

                this.dj = $F.Q(this.dj, this.wi ? this.Xc ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, i, 1 / 800), this.bd = $F.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, i, .0025), null != this.Nm && (this.Nm.nc.alpha = this.dj), null != this.Om && (this.Om.alpha = this.dj)

            }, t.prototype.ij = function (t, i, n, o) {

                if (this.xi && this.wi)

                    for (var e = Math.pow(.11112, i / 95), s = 0; s < this.ad; s++) {

                        var h = $F.S(this.Km[2 * s], this.Lm[2 * s], n),

                            r = $F.S(this.Km[2 * s + 1], this.Lm[2 * s + 1], n);

                        this._c[2 * s] = $F.S(h, this._c[2 * s], e), this._c[2 * s + 1] = $F.S(r, this._c[2 * s + 1], e)

                    }

                null != this.Nm && this.xi && this.Nm.Zc(this, t, i, o), null != this.Om && (this.Om.ih.x = this._c[0], this.Om.ih.y = this._c[1] - 3 * this.$c)

            }, t.prototype.Qm = function (t) {

                this.xi ? t || this.Sm() : (null != this.Nm && $F.U(this.Nm.nc), null != this.Om && $F.U(this.Om))

            }, t.prototype.Sm = function () {

                var t = getApp();

                null == this.Nm ? this.Nm = new $C.mc : $F.U(this.Nm.nc), this.Nm.yc(t.dh.hh.xg, t.Lc.Ub().jb(this.Eh.Gh), t.Lc.Ub().ib(this.Eh.Hh), t.Lc.Ub().kb(this.Eh.ni), t.Lc.Ub().lb(this.Eh.oi), t.Lc.Ub().mb(this.Eh.pi), t.Lc.Ub().nb(this.Eh.qi), "#ffffff"), null == this.Om ? (this.Om = new $C.Tm(""), this.Om.style.fontFamily = "vuonghiep", this.Om.anchor.set(.5)) : $F.U(this.Om), this.Om.style.fontSize = 14, this.Om.style.fill = t.Lc.Ub().ib(this.Eh.Hh).tb, this.Om.text = this.Eh.ma, this.Mm.oh(this.Eh.ae, this.Nm, this.Om)

            }, t.li = function () {

                function t() {

                    this.ae = 0, this.Gh = $C.wg.Cg, this.Hh = 0, this.ni = 0, this.oi = 0, this.pi = 0, this.qi = 0, this.ma = ""

                }

                return t

            }(), t

        }(), $C.Tm = function () {

            return $F.M(POGL.s, function (t, i, n) {

                POGL.s.call(this, t, i, n), this.ih = {

                    x: 0,

                    y: 0

                }

            })

        }(), $C.hb = function () {

            function t(t, i, n, o, e) {

                this.lj = t, this.mj = i, this.nj = n, this.oj = o, this.pj = e

            }

            return t.prototype.Um = function (i) {

                return new t(i, this.mj, this.nj, this.oj, this.pj)

            }, t.prototype.Vm = function (i) {

                return new t(this.lj, i, this.nj, this.oj, this.pj)

            }, t.prototype.Wm = function (i) {

                return new t(this.lj, this.mj, i, this.oj, this.pj)

            }, t.prototype.Xm = function (i) {

                return new t(this.lj, this.mj, this.nj, i, this.pj)

            }, t.prototype.Ym = function (i) {

                return new t(this.lj, this.mj, this.nj, this.oj, i)

            }, t

        }(), $C.Vl = function () {

            function t(t) {

                this.Zm = new $C.mc, this.Zm.nc.addChild(this.Zm.oc), this.$m = null, this._m = null, this.bm = t, this.pc = 0, this.Gi = 1, this.an = 1, this.bn = 1, this.cn = 1, this.dn = 1, this.gn = 1, this.hn = 1, this._l("#ffffff")

            }

            var i = new $C.hb(0, 0, 0, 0, 0);

            return t.prototype.tf = function () {

                return this.Zm.nc

            }, t.prototype.Wl = function (t) {

                if (this.pc = t, this.Zm.pc !== t) {

                    for (var i = t; i < this.Zm.qc.length; i++) this.Zm.qc[i].Uc();

                    for (; this.Zm.pc > t;) {

                        this.Zm.pc -= 1;

                        var n = this.Zm.qc[this.Zm.pc];

                        n.Dc.Rc(), n.Cc.Rc()

                    }

                    for (; this.Zm.pc < t;) {

                        var o = this.Zm.qc[this.Zm.pc];

                        this.Zm.pc += 1, this.Zm.nc.addChild(o.Cc.Qc()), this.Zm.nc.addChild(o.Dc.Qc()), o.Cc.jj(this.an), o.Dc.jj(this.bn)

                    }

                    for (var e = 0; e < this.Zm.oc.Fc.length; e++) this.Zm.oc.Fc[e].jj(this.cn);

                    for (var s = 0; s < this.Zm.oc.Gc.length; s++) this.Zm.oc.Gc[s].jj(this.dn);

                    for (var h = 0; h < this.Zm.oc.Ic.length; h++) this.Zm.oc.Ic[h].jj(this.gn);

                    for (var r = 0; r < this.Zm.oc.Hc.length; r++) this.Zm.oc.Hc[r].jj(this.hn)

                }

            }, t.prototype.am = function () {

                return this.pc

            }, t.prototype.$l = function (t) {

                this.$m = t, this._m = "#ffffff", this.lm()

            }, t.prototype._l = function (t) {

                this.$m = i, this._m = t, this.lm()

            }, t.prototype.lm = function () {

                var t = getApp();

                this.Zm.yc($C.Ac.vg, null, t.Lc.Ub().ib(this.$m.lj), t.Lc.Ub().kb(this.$m.mj), t.Lc.Ub().lb(this.$m.nj), t.Lc.Ub().mb(this.$m.pj), t.Lc.Ub().nb(this.$m.oj), this._m)

            }, t.prototype.Xl = function (t) {

                this.Gi = t

            }, t.prototype.cm = function () {

                return this.Gi

            }, t.prototype.om = function (t, i) {

                this.an = t, this.bn = i;

                for (var n = 0; n < this.pc; n++) {

                    var o = this.Zm.qc[n];

                    o.Cc.jj(this.an), o.Dc.jj(this.bn)

                }

            }, t.prototype.rm = function (t, i, n, o) {

                this.cn = t, this.dn = i, this.gn = n, this.hn = o;

                for (var e = 0; e < this.Zm.oc.Fc.length; e++) this.Zm.oc.Fc[e].jj(this.cn);

                for (var s = 0; s < this.Zm.oc.Gc.length; s++) this.Zm.oc.Gc[s].jj(this.dn);

                for (var h = 0; h < this.Zm.oc.Ic.length; h++) this.Zm.oc.Ic[h].jj(this.gn);

                for (var r = 0; r < this.Zm.oc.Hc.length; r++) this.Zm.oc.Hc[r].jj(this.hn)

            }, t.prototype.Uf = function () {

                var t = 2 * this.Gi,

                    i = 2 * this.Gi * 1.5;

                if (this.pc > 0) {

                    var n = this.bm[0],

                        o = this.bm[1],

                        e = this.bm[2];

                    this.Zm.qc[0].Sc(n, o, t, i, e), this.Zm.oc.Sc(n, o, t, e)

                }

                for (var s = 1; s < this.pc; s++) {

                    var h = this.bm[3 * s],

                        r = this.bm[3 * s + 1],

                        a = this.bm[3 * s + 2];

                    this.Zm.qc[s].Sc(h, r, t, i, a)

                }

            }, t.prototype.tm = function (t) {

                t.render(this.Zm.nc)

            }, t

        }(), $C.kf = function () {

            function t(t) {

                this.nd = t

            }

            return t.jf = $("#background-canvas"), t.in = $("#social-buttons"), t.jn = $("#game-view"), t.kn = $("#game-canvas"), t.ln = $("#results-view"), t.mn = $("#stretch-box"), t.nn = $("#main-menu-view"), t.pn = $("#popup-view"), t.qn = $("#loading-view"), t.rn = $("#restricted-view"), t.sn = $("#toaster-view"), t.tn = $("#error-gateway-connection-view"), t.un = $("#error-game-connection-view"), t.vn = $("#markup-wrap"), t.prototype.ha = function () {}, t.prototype.Gk = function () {}, t.prototype.Hk = function () {}, t.prototype.Bk = function () {}, t.prototype.Jf = function () {}, t.prototype.Nf = function (t, i) {}, t

        }(), $C.Vj = function () {

            function t(t, i, n, o, e, s) {

                var h = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#517AD1"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' + t + "</span></div>",

                    r = $(h);

                return r.click(function () {

                    "undefined" != typeof FB && void 0 !== FB.ui && FB.ui({

                        method: "feed",

                        display: "popup",

                        link: i,

                        name: n,

                        caption: o,

                        description: e,

                        picture: s

                    }, function () {})

                }), r

            }

            var i = $("#final-caption"),

                n = $("#final-continue"),

                o = $("#congrats-bg"),

                e = $("#unl6wj4czdl84o9b"),

                s = ($("#congrats"), $("#final-share-fb")),

                h = $("#final-message"),

                r = $("#final-score"),

                a = $("#final-place"),

                f = $("#final-board"),

                c = $F.M($C.kf, function () {

                    $C.kf.call(this, $C.Fk.wn);

                    var t = this,

                        o = getApp(),

                        e = $C.kf.kn.get()[0];

                    s.toggle(env.xn), i.text($F.H("index.game.result.title")), n.text($F.H("index.game.result.continue")), n.click(function () {

                        o.Ci.Be(), o.zn.yn.ka(), o.Ci.pe($C.ge.je._e), o.og.Ak(o.og._e)

                    }), $("html").keydown(function (i) {

                        32 === i.keyCode && (t.An = !0)

                    }).keyup(function (i) {

                        32 === i.keyCode && (t.An = !1)

                    }), e.addEventListener("touchmove", function (i) {

                        (i = i || window.event) && (i = i.touches[0], void 0 !== i.clientX ? t.Bn = Math.atan2(i.clientY - .5 * e.offsetHeight, i.clientX - .5 * e.offsetWidth) : t.Bn = Math.atan2(i.pageY - .5 * e.offsetHeight, i.pageX - .5 * e.offsetWidth))

                    }, !0), e.addEventListener("touchstart", function (i) {

                        (i = i || window.event) && (t.An = i.touches.length >= 2), i.preventDefault()

                    }, !0), e.addEventListener("touchend", function (i) {

                        (i = i || window.event) && (t.An = i.touches.length >= 2)

                    }, !0), e.addEventListener("mousemove", function (i) {

                        (i = i || window.event && void 0 !== i.clientX) && (t.Bn = Math.atan2(i.clientY - .5 * e.offsetHeight, i.clientX - .5 * e.offsetWidth))

                    }, !0), e.addEventListener("mousedown", function (i) {

                        t.An = !0

                    }, !0), e.addEventListener("mouseup", function (i) {

                        t.An = !1

                    }, !0), this.ng = new $C.Eg($C.kf.kn), this.Cn = p.Dn, this.Bn = 0, this.An = !1

                });

            c.prototype.ha = function () {}, c.prototype.Gk = function () {

                this.Cn === p.Dn ? ($C.kf.jn.stop(), $C.kf.jn.fadeIn(500), $C.kf.ln.stop(), $C.kf.ln.fadeOut(1), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeOut(1), $C.kf.jf.stop(), $C.kf.jf.fadeOut(50), $C.df.Kf(!1), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)) : ($C.kf.jn.stop(), $C.kf.jn.fadeIn(500), $C.kf.ln.stop(), $C.kf.ln.fadeIn(500), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeOut(1), $C.kf.jf.stop(), $C.kf.jf.fadeOut(50), $C.df.Kf(!1), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50))

            }, c.prototype.Dn = function () {

                return this.Cn = p.Dn, this

            }, c.prototype.En = function () {

                return o.hide(), setTimeout(function () {

                    o.fadeIn(500)

                }, 3e3), e.hide(), setTimeout(function () {

                    e.fadeIn(500)

                }, 500), this.Cn = p.En, this

            }, c.prototype.Hk = function () {

                this.An = !1, this.ng.Jf(), this.Cn === p.En && getApp().Ci.Fe()

            }, c.prototype.Jf = function () {

                this.ng.Jf()

            }, c.prototype.Nf = function (t, i) {

                this.ng.Nf(t, i)

            }, c.prototype.Fn = function (i, n, o) {

                var e = void 0,

                    c = void 0,

                    p = void 0;

                if (n >= 1 && n <= 10 ? (e = $F.H("index.game.result.place.i" + n), c = $F.H("index.game.result.placeInBoard"), p = $F.H("index.game.social.shareResult.messGood").replace("{0}", o).replace("{1}", i).replace("{2}", e)) : (e = "", c = $F.H("index.game.result.tryHit"), p = $F.H("index.game.social.shareResult.messNorm").replace("{0}", o).replace("{1}", i)), h.html($F.H("index.game.result.your")), r.html(i), a.html(e), f.html(c), env.xn) {

                    var u = $F.H("index.game.result.share");

                    $F.H("index.game.social.shareResult.caption");

                    s.empty().append(t(u, "https://wormate.io", "wormate.io", p, p, "https://wormate.io/images/og-share-img-new.jpg"))

                }

            }, c.prototype.Gn = function () {

                return this.Bn

            }, c.prototype.Hn = function () {

                return this.An

            };

            var p = {

                Dn: 0,

                En: 1

            };

            return c

        }(), $C.sk = function () {

            var t = $("#loading-progress-cont"),

                i = $("#loading-progress-bar"),

                n = $("#loading-progress-text"),

                o = $F.M($C.kf, function () {

                    $C.kf.call(this, $C.Fk.wn), this.In = -1, this.Jn = ""

                });

            return o.prototype.ha = function () {}, o.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeIn(500), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)

            }, o.prototype.Hk = function () {

                getApp().Ci.pe($C.ge.je.ie), getApp().og.Uj.Pf(), getApp().og.Uj.Lf(!0)

            }, o.prototype.Bk = function () {

                getApp().og.Uj.Lf(!1)

            }, o.prototype.Kn = function () {

                this.Ln("", 0), t.stop(), t.fadeIn(100)

            }, o.prototype.Mn = function () {

                t.stop(), t.fadeOut(100)

            }, o.prototype.Ln = function (t, o) {

                this.Jn !== t && (this.Jn = t);

                var e = $F.P(Math.floor(100 * o), 0, 100);

                this.In !== e && (i.css({

                    width: e + "%"

                }), n.html(e + " %"))

            }, o

        }(), $C.Wj = function () {

            var t = $("#mm-line-top"),

                i = ($("#mm-line-center"), $("#mm-line-bottom"), $("#mm-bottom-buttons")),

                n = $("#mm-menu-cont"),

                o = $("#mm-loading"),

                e = $("#mm-loading-progress-bar"),

                s = $("#mm-loading-progress-text"),

                h = ($("#mm-event-text"), $("#mm-skin-canv")),

                r = $("#mm-skin-prev"),

                a = $("#mm-skin-next"),

                f = $("#mm-skin-over"),

                c = $("#mm-skin-over-button-list"),

                p = $("#mm-params-nickname"),

                u = $("#mm-params-game-mode"),

                l = $("#mm-action-play"),

                d = $("#mm-action-guest"),

                g = $("#mm-action-login"),

                C = $("#mm-player-info"),

                m = $("#mm-store"),

                v = $("#mm-leaders"),

                k = $("#mm-settings"),

                b = $("#mm-coins-box"),

                y = $("#mm-player-avatar"),

                j = $("#mm-player-username"),

                w = $("#mm-coins-val"),

                O = $("#mm-player-exp-bar"),

                F = $("#mm-player-exp-val"),

                A = $("#mm-player-level"),

                x = $F.M($C.kf, function () {

                    $C.kf.call(this, $C.Fk.Ek);

                    var t = getApp();

                    this.In = -1, this.Jn = "", this.Nn = new $C.dm(h), u.click(function () {

                        t.Ci.Be()

                    }), h.click(function () {

                        t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og.ik))

                    }), r.click(function () {

                        t.Ci.Be(), t.On.Ej()

                    }), a.click(function () {

                        t.Ci.Be(), t.On.Dj()

                    }), p.keypress(function (i) {

                        13 == i.keyCode && t.Pn()

                    }), l.click(function () {

                        t.Ci.Be(), t.Pn()

                    }), d.click(function () {

                        t.Ci.Be(), t.Pn()

                    }), g.click(function () {

                        t.Ci.Be(), t.og.Ak(t.og.fk)

                    }), k.click(function () {

                        t.Ci.Be(), t.og.Ak(t.og.$h)

                    }), C.click(function () {

                        t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og.dk))

                    }), v.click(function () {

                        t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og.bk))

                    }), m.click(function () {

                        t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og.kk))

                    }), b.click(function () {

                        t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og._j))

                    }), this.Qn(), this.Rn();

                    var i = $C.Vf.fg($C.Vf._f);

                    "ARENA" !== i && "TEAM2" !== i && (i = "ARENA"), u.val(i)

                });

            return x.prototype.ha = function () {

                var t = getApp(),

                    i = this;

                t.Ij.zl(function () {

                    t.Ij.Hj() ? (t.On.Fj(t.Ij.ml(), $C.tj.sj), t.On.Fj(t.Ij.nl(), $C.tj.uj), t.On.Fj(t.Ij.ol(), $C.tj.vj), t.On.Fj(t.Ij.pl(), $C.tj.xj), t.On.Fj(t.Ij.ql(), $C.tj.wj)) : (t.On.Fj(t.Sn(), $C.tj.sj), t.On.Fj(0, $C.tj.uj), t.On.Fj(0, $C.tj.vj), t.On.Fj(0, $C.tj.xj), t.On.Fj(0, $C.tj.wj))

                }), t.Ij.zl(function () {

                    l.toggle(t.Ij.Hj()), g.toggle(!t.Ij.Hj()), C.toggle(!0), d.toggle(!t.Ij.Hj()), k.toggle(!0), v.toggle(t.Ij.Hj()), m.toggle(t.Ij.Hj()), b.toggle(t.Ij.Hj()), t.Ij.Hj() ? (f.hide(), j.html(t.Ij.dl()), y.attr("src", t.Ij.fl()), w.html(t.Ij.il()), O.width(100 * t.Ij.kl() / t.Ij.ll() + "%"), F.html(t.Ij.kl() + " / " + t.Ij.ll()), A.html(t.Ij.jl()), p.val(t.Ij.el())) : (f.toggle(env.xn && !t.Tn()), j.html(j.data("guest")), y.attr("src", $F.a.e), w.html("10"), O.width("0"), F.html(""), A.html(1), p.val($C.Vf.fg($C.Vf.ag)))

                }), t.On.zj(function () {

                    i.Nn.$l(t.On.yj())

                })

            }, x.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeIn(500), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeIn(500), $C.kf.vn.stop(), $C.kf.vn.fadeIn(500)

            }, x.prototype.Un = function () {

                t.fadeIn(500), i.fadeIn(500), n.fadeIn(500), o.fadeOut(100)

            }, x.prototype.Vn = function () {

                t.fadeOut(100), i.fadeOut(100), n.fadeOut(100), o.fadeIn(500)

            }, x.prototype.Ln = function (t, i) {

                this.Jn !== t && (this.Jn = t);

                var n = $F.P(Math.floor(100 * i), 0, 100);

                this.In !== n && (e.css({

                    width: n + "%"

                }), s.html(n + " %"))

            }, x.prototype.Hk = function () {

                getApp().Ci.Ce(), this.Nn.Kf(!0)

            }, x.prototype.Bk = function () {

                this.Nn.Kf(!1)

            }, x.prototype.Jf = function () {

                this.Nn.Jf()

            }, x.prototype.Nf = function (t, i) {

                this.Nn.Nf()

            }, x.prototype.el = function () {

                return p.val()

            }, x.prototype.Wn = function () {

                return u.val()

            }, x.prototype.Qn = function () {

                var t = $("#mm-advice-cont").children(),

                    i = 0;

                setInterval(function () {

                    t.eq(i).fadeOut(500, function () {

                        ++i >= t.length && (i = 0), t.eq(i).fadeIn(500).css("display", "inline-block")

                    })

                }, 3e3)

            }, x.prototype.Rn = function () {

                function t() {

                    i.Xn(!0), setTimeout(function () {

                        f.hide()

                    }, 3e3)

                }

                var i = getApp();

                if (env.xn && !i.Tn()) {

                    f.show();

                    var n = $F.H("index.game.main.menu.unlockSkins.share"),

                        o = encodeURIComponent($F.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio"),

                        e = encodeURIComponent($F.H("index.game.main.menu.unlockSkins.comeAndPlay"));

                    c.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + o + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + n + "</span></a>").click(t)), c.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + e + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + n + "</span></a>").click(t))

                }

            }, x

        }(), $C.yk = function () {

            var t = $F.M($C.kf, function () {

                $C.kf.call(this, $C.Fk.wn)

            });

            return t.prototype.ha = function () {}, t.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeOut(1), $C.kf.jf.stop(), $C.kf.jf.fadeOut(50), $C.df.Kf(!1), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)

            }, t

        }(), $C.pk = function () {

            var t = $F.M($C.kf, function () {

                $C.kf.call(this, $C.Fk.wn)

            });

            return t.prototype.ha = function () {}, t.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeIn(500), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)

            }, t.prototype.Hk = function () {}, t

        }(), $C.rk = function () {

            var t = $("#toaster-stack"),

                i = $F.M($C.kf, function () {

                    $C.kf.call(this, $C.Fk.wn), this.Yn = [], this.Zn = null

                });

            return i.prototype.ha = function () {}, i.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeIn(500), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeIn(500)

            }, i.prototype.Hk = function () {

                this.$n()

            }, i.prototype.Kk = function () {

                return null != this.Zn || this.Yn.length > 0

            }, i.prototype._n = function (t) {

                this.Yn.unshift(t), setTimeout(function () {

                    getApp().og.Ik()

                }, 0)

            }, i.prototype.El = function (t) {

                this.Yn.push(t), setTimeout(function () {

                    getApp().og.Ik()

                }, 0)

            }, i.prototype.$n = function () {

                var i = this;

                if (null == this.Zn) {

                    if (0 == this.Yn.length) return void getApp().og.Dk();

                    var n = this.Yn.shift();

                    this.Zn = n;

                    var o = n.tf();

                    o.hide(), o.fadeIn(300), t.append(o), n.ao = function () {

                        o.fadeOut(300), setTimeout(function () {

                            o.remove()

                        }, 300), i.Zn == n && (i.Zn = null), i.$n()

                    }, n.Hk()

                }

            }, i

        }(), $C.Fk = {

            wn: 0,

            Ek: 1

        }, $C.bo = function () {

            var t = $("#popup-menu-label"),

                i = $("#popup-menu-coins-box"),

                n = $("#popup-menu-coins-val");

            $("#popup-menu-back").click(function () {

                var t = getApp();

                t.Ci.Be(), t.og.Dk()

            }), i.click(function () {

                var t = getApp();

                t.Ij.Hj() && (t.Ci.Be(), t.og.Ak(t.og._j))

            });

            var o = $F.M($C.kf, function (t, i) {

                $C.kf.call(this, $C.Fk.Ek), this.ma = t, this.co = i, this.do = []

            });

            return o.prototype.ha = function () {

                if (o.parent.prototype.ha.call(this), !o.eo) {

                    o.eo = !0;

                    var t = getApp();

                    t.Ij.zl(function () {

                        t.Ij.Hj() ? n.html(t.Ij.il()) : n.html("0")

                    })

                }

                $C.bo.fo.stop(), $C.bo.fo.fadeOut(100)

            }, o.go = $("#coins-view"), o.ho = $("#leaders-view"), o.io = $("#profile-view"), o.jo = $("#settings-view"), o.ko = $("#login-view"), o.lo = $("#skins-view"), o.mo = $("#store-view"), o.no = $("#wear-view"), o.oo = $("#withdraw-consent-view"), o.po = $("#delete-account-view"), o.fo = $("#please-wait-view"), o.prototype.Gk = function () {

                $C.kf.jn.stop(), $C.kf.jn.fadeOut(200), $C.kf.ln.stop(), $C.kf.ln.fadeOut(200), $C.kf.nn.stop(), $C.kf.nn.fadeOut(200), $C.kf.pn.stop(), $C.kf.pn.fadeIn(200), $C.kf.sn.stop(), $C.kf.sn.fadeOut(200), $C.kf.qn.stop(), $C.kf.qn.fadeOut(200), $C.kf.rn.stop(), $C.kf.rn.fadeOut(200), $C.kf.tn.stop(), $C.kf.tn.fadeOut(200), $C.kf.un.stop(), $C.kf.un.fadeOut(200), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeIn(200), $C.kf.vn.stop(), $C.kf.vn.fadeIn(200), t.html(this.ma), i.toggle(this.co), this.qo()

            }, o.prototype.qo = function () {}, o.prototype.ro = function (t) {

                var i = this,

                    n = 2147483647 & $F.V(0, 2147483647);

                return this.do.push(n), $C.bo.fo.stop(), $C.bo.fo.fadeIn(100), setTimeout(function () {

                    i.so(n)

                }, t), new PleaseWaitCapture(this, n)

            }, o.prototype.so = function (t) {

                var i = this.do.indexOf(t);

                i < 0 || (this.do.splice(i, 1), 0 === this.do.length && ($C.bo.fo.stop(), $C.bo.fo.fadeOut(100)))

            }, o

        }();

    var PleaseWaitCapture = function () {

        function t(t, i) {

            this.to = t, this.uo = i

        }

        return t.prototype.vo = function () {

            this.to.so(this.uo)

        }, t

    }();

    $C.ak = function () {

        var t = $("#store-buy-coins_125000"),

            i = $("#store-buy-coins_50000"),

            n = $("#store-buy-coins_16000"),

            o = $("#store-buy-coins_7000"),

            e = $("#store-buy-coins_3250"),

            s = $("#store-buy-coins_1250"),

            h = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.coins.tab"), !1);

                var h = getApp(),

                    r = this;

                t.click(function () {

                    h.Ci.Be(), r.wo("coins_125000")

                }), i.click(function () {

                    h.Ci.Be(), r.wo("coins_50000")

                }), n.click(function () {

                    h.Ci.Be(), r.wo("coins_16000")

                }), o.click(function () {

                    h.Ci.Be(), r.wo("coins_7000")

                }), e.click(function () {

                    h.Ci.Be(), r.wo("coins_3250")

                }), s.click(function () {

                    h.Ci.Be(), r.wo("coins_1250")

                })

            });

        return h.prototype.ha = function () {

            h.parent.prototype.ha.call(this)

        }, h.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeIn(200), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, h.prototype.Hk = function () {

            getApp().Ci.Ce()

        }, h.prototype.wo = function (t) {}, h

    }(), $C.ck = function () {

        var t = $("#highscore-table"),

            i = $("#leaders-button-level"),

            n = $("#leaders-button-highscore"),

            o = $("#leaders-button-kills"),

            e = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.leaders.tab"), !0);

                var t = getApp(),

                    e = this;

                this.xo = {}, this.yo = {

                    zo: {

                        Ao: i,

                        Bo: "byLevel"

                    },

                    Co: {

                        Ao: n,

                        Bo: "byHighScore"

                    },

                    Do: {

                        Ao: o,

                        Bo: "byKillsAndHeadShots"

                    }

                }, i.click(function () {

                    t.Ci.Be(), e.Eo(e.yo.zo)

                }), n.click(function () {

                    t.Ci.Be(), e.Eo(e.yo.Co)

                }), o.click(function () {

                    t.Ci.Be(), e.Eo(e.yo.Do)

                })

            });

        return e.prototype.ha = function () {

            e.parent.prototype.ha.call(this)

        }, e.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeIn(200), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, e.prototype.Hk = function () {

            var t = this;

            getApp().Ci.Ce();

            var i = this.ro(5e3),

                n = $F.a.b + "/pub/leaders";

            $F.Z(n, function () {

                t.xo = {

                    byLevel: [],

                    byHighScore: [],

                    byKillsAndHeadShots: []

                }, t.Eo(null != t.Fo ? t.Fo : t.yo.zo), i.vo()

            }, function (n) {

                t.xo = n, t.Eo(null != t.Fo ? t.Fo : t.yo.zo), i.vo()

            })

        }, e.prototype.Eo = function (i) {

            this.Fo = i;

            for (var n in this.yo)

                if (this.yo.hasOwnProperty(n)) {

                    var o = this.yo[n];

                    o.Ao.removeClass("pressed")

                } this.Fo.Ao.addClass("pressed");

            for (var e = this.xo[this.Fo.Bo], s = "", h = 0; h < e.length; h++) {

                var r = e[h];

                s += '<div class="table-row"><span>' + (h + 1) + '</span><span><img src="' + r.avatarUrl + '"/></span><span>' + r.username + "</span><span>" + r.level + "</span><span>" + r.highScore + "</span><span>" + r.headShots + " / " + r.kills + "</span></div>"

            }

            t.empty(), t.append(s)

        }, e

    }(), $C.gk = function () {

        var t = $("#popup-login-gg"),

            i = $("#popup-login-fb"),

            n = $F.M($C.bo, function () {

                var n = this;

                $C.bo.call(this, $F.H("index.game.popup.menu.login.tab"), !1);

                var o = getApp();

                t.click(function () {

                    o.Ci.Be();

                    var t = n.ro(1e4);

                    setTimeout(function () {

                        o.Ij.Ml(function () {

                            o.Ij.Hj() && o.Ci.Fe(), t.vo()

                        })

                    }, 500)

                }), i.click(function () {

                    o.Ci.Be();

                    var t = n.ro(1e4);

                    setTimeout(function () {

                        o.Ij.Jl(function () {

                            o.Ij.Hj() && o.Ci.Fe(), t.vo()

                        })

                    }, 500)

                })

            });

        return n.prototype.ha = function () {

            n.parent.prototype.ha.call(this)

        }, n.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeIn(200), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, n.prototype.Hk = function () {

            getApp().Ci.Ce()

        }, n

    }(), $C.ek = function () {

        var t = $("#profile-avatar"),

            i = $("#profile-username"),

            n = $("#profile-experience-bar"),

            o = $("#profile-experience-val"),

            e = $("#profile-level"),

            s = $("#profile-stat-highScore"),

            h = $("#profile-stat-bestSurvivalTime"),

            r = $("#profile-stat-kills"),

            a = $("#profile-stat-headshots"),

            f = $("#profile-stat-gamesPlayed"),

            c = $("#profile-stat-totalTimeSpent"),

            p = $("#profile-stat-registrationDate"),

            u = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.profile.tab"), !0)

            });

        return u.prototype.ha = function () {

            u.parent.prototype.ha.call(this)

        }, u.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeIn(200), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, u.prototype.Hk = function () {

            var u = getApp();

            u.Ci.Ce();

            var l = u.Ij.xl(),

                d = moment([l.year, l.month - 1, l.day]).format("LL");

            i.html(u.Ij.dl()), t.attr("src", u.Ij.fl()), n.width(100 * u.Ij.kl() / u.Ij.ll() + "%"), o.html(u.Ij.kl() + " / " + u.Ij.ll()), e.html(u.Ij.jl()), s.html(u.Ij.rl()), h.html($F.J(u.Ij.sl())), r.html(u.Ij.tl()), a.html(u.Ij.ul()), f.html(u.Ij.vl()), c.html($F.J(u.Ij.wl())), p.html(d)

        }, u

    }(), $C.hk = function () {

        var t = $("#settings-music-enabled-switch"),

            i = $("#settings-sfx-enabled-switch"),

            n = $("#settings-show-names-switch"),

            o = $("#popup-logout"),

            e = $("#popup-logout-container"),

            s = $("#popup-delete-account"),

            h = $("#popup-delete-account-container"),

            r = $("#popup-withdraw-consent"),

            a = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.settings.tab"), !1);

                var e = this,

                    h = getApp();

                t.click(function () {

                    var i = !!t.prop("checked");

                    $C.Vf.eg($C.Vf.Yf, i, 30), h.Ci.re(i), h.Ci.Be()

                }), i.click(function () {

                    var t = !!i.prop("checked");

                    $C.Vf.eg($C.Vf.Zf, t, 30), h.Ci.oe(t), h.Ci.Be()

                }), n.click(function () {

                    h.Ci.Be()

                }), o.click(function () {

                    h.Ci.Be(), e.ro(500), h.Ij.Kl()

                }), s.click(function () {

                    h.Ij.Hj() ? (h.Ci.Be(), h.og.Ak(h.og.Zj)) : h.Ci.Ge()

                }), r.click(function () {

                    h.Go() ? (h.Ci.Be(), h.og.Ak(h.og.Xj)) : h.Ci.Ge()

                })

            });

        return a.prototype.ha = function () {

            a.parent.prototype.ha.call(this);

            var o = getApp(),

                s = void 0;

            switch ($C.Vf.fg($C.Vf.Yf)) {

            case "false":

                s = !1;

                break;

            default:

                s = !0

            }

            t.prop("checked", s), o.Ci.re(s);

            var r = void 0;

            switch ($C.Vf.fg($C.Vf.Zf)) {

            case "false":

                r = !1;

                break;

            default:

                r = !0

            }

            i.prop("checked", r), o.Ci.oe(r);

            var f = void 0;

            switch ($C.Vf.fg($C.Vf.Xf)) {

            case "false":

                f = !1;

                break;

            default:

                f = !0

            }

            n.prop("checked", f), o.Ij.yl(function () {

                e.toggle(o.Ij.Hj()), h.toggle(o.Ij.Hj())

            })

        }, a.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeIn(200), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, a.prototype.Hk = function () {

            var t = getApp();

            t.Ci.Ce(), t.Go() ? r.show() : r.hide()

        }, a.prototype.Zh = function () {

            return n.prop("checked")

        }, a

    }(), $C.jk = function () {

        var t = $("#store-view-canv"),

            i = $("#skin-description-text"),

            n = $("#skin-group-description-text"),

            o = $("#store-locked-bar"),

            e = $("#store-locked-bar-text"),

            s = $("#store-buy-button"),

            h = $("#store-item-price"),

            r = $("#store-groups"),

            a = $("#store-view-prev"),

            f = $("#store-view-next"),

            c = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.skins.tab"), !0);

                var i = this,

                    n = getApp();

                this.Ho = null, this.Io = [], this.Jo = {}, this.Ko = new $C.dm(t), s.click(function () {

                    n.Ci.Be(), i.Lo()

                }), a.click(function () {

                    n.Ci.Be(), i.Ho.Mo()

                }), f.click(function () {

                    n.Ci.Be(), i.Ho.No()

                })

            });

        c.prototype.ha = function () {

            c.parent.prototype.ha.call(this);

            var t = this,

                i = getApp();

            i.Lc.$b(function () {

                var n = i.Lc.Xb();

                t.Io = [];

                for (var o = 0; o < n.skinGroupArrayDict.length; o++) t.Io.push(new p(t, n.skinGroupArrayDict[o]));

                t.Jo = {};

                for (var e = 0; e < n.skinArrayDict.length; e++) {

                    var s = n.skinArrayDict[e];

                    t.Jo[s.id] = s

                }

                t.Oo()

            }), this.Po(!1), i.On.zj(function () {

                t.Po(!1)

            })

        }, c.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeIn(200), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, c.prototype.Hk = function () {

            getApp().Ci.pe($C.ge.je._e), getApp().Ci.Ce(), this.Oo(), this.Ko.Kf(!0)

        }, c.prototype.Bk = function () {

            this.Ko.Kf(!1)

        }, c.prototype.Jf = function () {

            this.Ko.Jf()

        }, c.prototype.Nf = function (t, i) {

            this.Ko.Nf()

        }, c.prototype.Oo = function () {

            var t = this,

                i = this,

                n = getApp();

            r.empty();

            for (var o = 0; o < this.Io.length; o++) ! function (o) {

                var e = t.Io[o],

                    s = document.createElement("li");

                r.append(s);

                var h = $(s);

                h.html(e.Qo()), h.click(function () {

                    n.Ci.Be(), i.Ro(e)

                }), e.So = h

            }(o);

            if (this.Io.length > 0) {

                for (var e = n.On.rj($C.tj.sj), o = 0; o < this.Io.length; o++)

                    for (var s = this.Io[o], h = s.To.list, a = 0; a < h.length; a++)

                        if (h[a] == e) return s.Uo = a, void this.Ro(s);

                this.Ro(this.Io[0])

            }

        }, c.prototype.Ro = function (t) {

            var i = getApp();

            if (this.Ho !== t) {

                if (this.Ho = t, r.children().removeClass("pressed"), this.Ho.So && this.Ho.So.addClass("pressed"), n.html(""), null != t.To) {

                    var o = i.Lc.Xb().textDict[t.To.description];

                    null != o && n.html($F.K($F.I(o)))

                }

                this.Po(!0)

            }

        }, c.prototype.Vo = function () {

            return null == this.Ho ? $C.Si.Ui() : this.Ho.Wo()

        }, c.prototype.Lo = function () {

            var t = this,

                i = this.Vo();

            if (i.Wi()) {

                var n = i.bc();

                t.Xo(n)

            }

        }, c.prototype.Xo = function (t) {

            var i = getApp(),

                n = i.On.Gj(t, $C.tj.sj);

            if (null != n) {

                var o = n.Jj();

                if (!(i.Ij.il() < o)) {

                    var e = i.On.rj($C.tj.sj),

                        s = i.On.rj($C.tj.uj),

                        h = i.On.rj($C.tj.vj),

                        r = i.On.rj($C.tj.xj),

                        a = i.On.rj($C.tj.wj),

                        f = this.ro(5e3);

                    i.Ij.Hl(t, $C.tj.sj, function () {

                        f.vo(), i.og.Ak(i.og.tk)

                    }, function (n) {

                        i.Ij.Bl(function () {

                            i.On.Fj(e, $C.tj.sj), i.On.Fj(s, $C.tj.uj), i.On.Fj(h, $C.tj.vj), i.On.Fj(r, $C.tj.xj), i.On.Fj(a, $C.tj.wj), i.On.Fj(t, $C.tj.sj), f.vo()

                        })

                    })

                }

            }

        }, c.prototype.Po = function (t) {

            var n = getApp(),

                r = n.On.yj(),

                a = this.Vo();

            if (a.Wi()) {

                var f = a.bc(),

                    c = n.On.Gj(f, $C.tj.sj),

                    p = !1;

                if (n.On.Cj(f, $C.tj.sj)) o.hide(), s.hide();

                else if (null == c || c.Kj()) {

                    if (p = !0, o.show(), s.hide(), e.text($F.H("index.game.popup.menu.store.locked")), null != c && c.Kj()) {

                        var u = n.Lc.Xb().textDict[c.Em()];

                        null != u && e.text($F.I(u))

                    }

                } else o.hide(), s.show(), h.html(c.Jj());

                if (i.html(""), null != c && null != c.Fm()) {

                    var l = n.Lc.Xb().textDict[c.Fm()];

                    null != l && i.html($F.K($F.I(l)))

                }

                this.Ko.$l(r.Um(f)), this.Ko.um(p), t && n.On.Fj(f, $C.tj.sj)

            }

        };

        var p = function () {

            function t(t, i) {

                this.Yo = t, this.Uo = 0, this.To = i

            }

            return t.prototype.Mo = function () {

                --this.Uo < 0 && (this.Uo = this.To.list.length - 1), this.Yo.Po(!0)

            }, t.prototype.No = function () {

                ++this.Uo >= this.To.list.length && (this.Uo = 0), this.Yo.Po(!0)

            }, t.prototype.Qo = function () {

                return $F.I(this.To.name)

            }, t.prototype.Wo = function () {

                return this.Uo >= this.To.list.length ? $C.Si.Ui() : $C.Si.Vi(this.To.list[this.Uo])

            }, t

        }();

        return c

    }(), $C.lk = function () {

        var t = $("#store-go-coins-button"),

            i = $("#store-go-skins-button"),

            n = $("#store-go-wear-button"),

            o = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.store.tab"), !0);

                var o = getApp();

                t.click(function () {

                    o.Ci.Be(), o.og.Ak(o.og._j)

                }), i.click(function () {

                    o.Ci.Be(), o.og.Ak(o.og.ik)

                }), n.click(function () {

                    o.Ci.Be(), o.og.Ak(o.og.mk)

                })

            });

        return o.prototype.ha = function () {

            o.parent.prototype.ha.call(this)

        }, o.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeIn(200), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, o.prototype.Hk = function () {

            getApp().Ci.Ce()

        }, o

    }(), $C.nk = function () {

        var t = $("#wear-view-canv"),

            i = $("#wear-description-text"),

            n = $("#wear-locked-bar"),

            o = $("#wear-locked-bar-text"),

            e = $("#wear-buy-button"),

            s = $("#wear-item-price"),

            h = $("#wear-eyes-button"),

            r = $("#wear-mouths-button"),

            a = $("#wear-glasses-button"),

            f = $("#wear-hats-button"),

            c = $("#wear-tint-chooser"),

            p = $("#wear-view-prev"),

            u = $("#wear-view-next"),

            l = $F.M($C.bo, function () {

                var i = this;

                $C.bo.call(this, $F.H("index.game.popup.menu.wear.tab"), !0);

                var n = getApp(),

                    o = this;

                this.Zo = [], this.uj = new d(this, $C.tj.uj, h), this.vj = new d(this, $C.tj.vj, r), this.xj = new d(this, $C.tj.xj, a), this.wj = new d(this, $C.tj.wj, f), this.$o = null, this._o = null, this.ap = null, this.bp = null, this.cp = null, this.dp = null, this.Ko = new $C.dm(t), e.click(function () {

                    n.Ci.Be(), o.ep()

                }), p.click(function () {

                    n.Ci.Be(), o.$o.fp()

                }), u.click(function () {

                    n.Ci.Be(), o.$o.gp()

                }), h.click(function () {

                    n.Ci.Be(), o.hp(i.uj)

                }), r.click(function () {

                    n.Ci.Be(), o.hp(i.vj)

                }), a.click(function () {

                    n.Ci.Be(), o.hp(i.xj)

                }), f.click(function () {

                    n.Ci.Be(), o.hp(i.wj)

                }), this.Zo.push(this.uj), this.Zo.push(this.vj), this.Zo.push(this.xj), this.Zo.push(this.wj)

            });

        l.prototype.ha = function () {

            l.parent.prototype.ha.call(this);

            var t = getApp(),

                i = this;

            t.Lc.$b(function () {

                var n = t.Lc.Xb();

                i._o = n.eyesDict, i.ap = n.mouthDict, i.bp = n.glassesDict, i.cp = n.hatDict, i.dp = n.colorDict, i.uj.ip(n.eyesVariantArray), i.uj.jp(i._o), i.vj.ip(n.mouthVariantArray), i.vj.jp(i.ap), i.xj.ip(n.glassesVariantArray), i.xj.jp(i.bp), i.wj.ip(n.hatVariantArray), i.wj.jp(i.cp)

            }), this.Po(!1), t.On.zj(function () {

                i.Po(!1)

            })

        }, l.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeIn(200), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, l.prototype.Hk = function () {

            getApp().Ci.pe($C.ge.je._e), getApp().Ci.Ce(), this.hp(null != this.$o ? this.$o : this.uj), this.Ko.Kf(!0)

        }, l.prototype.Bk = function () {

            this.Ko.Kf(!1)

        }, l.prototype.Jf = function () {

            this.Ko.Jf()

        }, l.prototype.Nf = function (t, i) {

            this.Ko.Nf()

        }, l.prototype.hp = function (t) {

            this.$o = t;

            for (var i = 0; i < this.Zo.length; i++) this.Zo[i].Ao.removeClass("pressed");

            this.$o.Ao.addClass("pressed"), this.$o.Gk()

        }, l.prototype.kp = function () {

            return null == this.$o ? $C.Si.Ui() : $C.Si.Vi({

                ae: this.$o.Wo(),

                nd: this.$o.nd

            })

        }, l.prototype.ep = function () {

            var t = this,

                i = this.kp();

            if (i.Wi()) {

                var n = i.bc();

                t.lp(n.ae, n.nd)

            }

        }, l.prototype.lp = function (t, i) {

            var n = getApp(),

                o = n.On.Gj(t, i);

            if (null != o) {

                var e = o.Jj();

                if (!(n.Ij.il() < e)) {

                    var s = n.On.rj($C.tj.sj),

                        h = n.On.rj($C.tj.uj),

                        r = n.On.rj($C.tj.vj),

                        a = n.On.rj($C.tj.xj),

                        f = n.On.rj($C.tj.wj),

                        c = this.ro(5e3);

                    n.Ij.Hl(t, i, function () {

                        c.vo(), n.og.Ak(n.og.tk)

                    }, function (o) {

                        n.Ij.Bl(function () {

                            n.On.Fj(s, $C.tj.sj), n.On.Fj(h, $C.tj.uj), n.On.Fj(r, $C.tj.vj), n.On.Fj(a, $C.tj.xj), n.On.Fj(f, $C.tj.wj), n.On.Fj(t, i), c.vo()

                        })

                    })

                }

            }

        }, l.prototype.Po = function (t) {

            var h = getApp(),

                r = h.On.yj(),

                a = this.kp();

            if (a.Wi()) {

                var f = a.bc(),

                    c = h.On.Gj(f.ae, f.nd),

                    p = !1;

                if (h.On.Cj(f.ae, f.nd)) n.hide(), e.hide();

                else if (null == c || c.Kj()) {

                    if (p = !0, n.show(), e.hide(), o.text($F.H("index.game.popup.menu.store.locked")), null != c && c.Kj()) {

                        var u = h.Lc.Xb().textDict[c.Em()];

                        null != u && o.text($F.I(u))

                    }

                } else n.hide(), e.show(), s.html(c.Jj());

                if (i.html(""), null != c && null != c.Fm()) {

                    var l = h.Lc.Xb().textDict[c.Fm()];

                    null != l && i.html($F.K($F.I(l)))

                }

                var d = this.Ko;

                switch (f.nd) {

                case $C.tj.uj:

                    d.$l(r.Vm(f.ae)), d.vm(p);

                    break;

                case $C.tj.vj:

                    d.$l(r.Wm(f.ae)), d.wm(p);

                    break;

                case $C.tj.xj:

                    d.$l(r.Ym(f.ae)), d.ym(p);

                    break;

                case $C.tj.wj:

                    d.$l(r.Xm(f.ae)), d.xm(p)

                }

                t && h.On.Fj(f.ae, f.nd)

            }

        };

        var d = function () {

            function t(t, i, n) {

                this.Yo = t, this.nd = i, this.Ao = n, this.ac = {}, this.mp = [

                    []

                ], this.np = -10, this.op = -10

            }

            return t.prototype.ip = function (t) {

                this.mp = t

            }, t.prototype.jp = function (t) {

                this.ac = t

            }, t.prototype.Gk = function () {

                for (var t = getApp(), i = t.On.rj(this.nd), n = 0; n < this.mp.length; n++)

                    for (var o = 0; o < this.mp[n].length; o++)

                        if (this.mp[n][o] == i) return this.pp(n), void this.qp(o);

                this.pp(0), this.qp(0)

            }, t.prototype.fp = function () {

                var t = this.np - 1;

                t < 0 && (t = this.mp.length - 1), this.pp(t), this.qp(this.op % this.mp[t].length)

            }, t.prototype.gp = function () {

                var t = this.np + 1;

                t >= this.mp.length && (t = 0), this.pp(t), this.qp(this.op % this.mp[t].length)

            }, t.prototype.pp = function (t) {

                var i = this;

                if (!(t < 0 || t >= this.mp.length)) {

                    this.np = t, c.empty();

                    var n = this.mp[this.np];

                    if (n.length > 1)

                        for (var o = 0; o < n.length; o++) ! function (t) {

                            var o = n[t],

                                e = i.ac[o],

                                s = "#" + i.Yo.dp[e.prime],

                                h = $('<div style="border-color:' + s + '"></div>');

                            h.click(function () {

                                getApp().Ci.Be(), i.qp(t)

                            }), c.append(h)

                        }(o)

                }

            }, t.prototype.qp = function (t) {

                if (!(t < 0 || t >= this.mp[this.np].length)) {

                    this.op = t, c.children().css("background-color", "transparent");

                    var i = c.children(":nth-child(" + (1 + t) + ")");

                    i.css("background-color", i.css("border-color")), this.Yo.Po(!0)

                }

            }, t.prototype.Wo = function () {

                return this.mp[this.np][this.op]

            }, t

        }();

        return l

    }(), $C.Yj = function () {

        var t = $("#withdraw-consent-yes"),

            i = $("#withdraw-consent-no"),

            n = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.consent.tab"), !1);

                var n = getApp();

                t.click(function () {

                    n.Ci.Be(), n.Go() ? (n.og.Ak(n.og._e), n.rp(!1, !0), n.og.qk._n(new $C.sp)) : n.og.Dk()

                }), i.click(function () {

                    n.Ci.Be(), n.og.Dk()

                })

            });

        return n.prototype.ha = function () {

            n.parent.prototype.ha.call(this)

        }, n.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeIn(200), $C.bo.po.stop(), $C.bo.po.fadeOut(50)

        }, n.prototype.Hk = function () {

            getApp().Ci.Ce()

        }, n

    }(), $C.$j = function () {

        var t = $("#delete-account-timer"),

            i = $("#delete-account-yes"),

            n = $("#delete-account-no"),

            o = $F.M($C.bo, function () {

                $C.bo.call(this, $F.H("index.game.popup.menu.delete.tab"), !1);

                var t = getApp();

                i.click(function () {

                    t.Ci.Be(), t.Ij.Hj() ? (t.Ij.Sl(), t.Ij.Kl()) : t.og.Dk()

                }), n.click(function () {

                    t.Ci.Be(), t.og.Dk()

                }), this.tp = []

            });

        return o.prototype.ha = function () {

            o.parent.prototype.ha.call(this)

        }, o.prototype.qo = function () {

            $C.bo.go.stop(), $C.bo.go.fadeOut(50), $C.bo.ho.stop(), $C.bo.ho.fadeOut(50), $C.bo.io.stop(), $C.bo.io.fadeOut(50), $C.bo.ko.stop(), $C.bo.ko.fadeOut(50), $C.bo.jo.stop(), $C.bo.jo.fadeOut(50), $C.bo.lo.stop(), $C.bo.lo.fadeOut(50), $C.bo.mo.stop(), $C.bo.mo.fadeOut(50), $C.bo.no.stop(), $C.bo.no.fadeOut(50), $C.bo.oo.stop(), $C.bo.oo.fadeOut(50), $C.bo.po.stop(), $C.bo.po.fadeIn(200)

        }, o.prototype.Hk = function () {

            getApp().Ci.Ge(), i.stop(), i.hide(), t.stop(), t.show(), t.text(".. 10 .."), this.up(), this.vp(function () {

                t.text(".. 9 ..")

            }, 1e3), this.vp(function () {

                t.text(".. 8 ..")

            }, 2e3), this.vp(function () {

                t.text(".. 7 ..")

            }, 3e3), this.vp(function () {

                t.text(".. 6 ..")

            }, 4e3), this.vp(function () {

                t.text(".. 5 ..")

            }, 5e3), this.vp(function () {

                t.text(".. 4 ..")

            }, 6e3), this.vp(function () {

                t.text(".. 3 ..")

            }, 7e3), this.vp(function () {

                t.text(".. 2 ..")

            }, 8e3), this.vp(function () {

                t.text(".. 1 ..")

            }, 9e3), this.vp(function () {

                t.hide(), i.fadeIn(300)

            }, 1e4)

        }, o.prototype.vp = function (t, i) {

            var n = setTimeout(t, i);

            this.tp.push(n)

        }, o.prototype.up = function () {

            for (var t = 0; t < this.tp.length; t++) clearTimeout(this.tp[t]);

            this.tp = []

        }, o

    }(), $C.wp = function () {

        function t() {

            this.ao = function () {}

        }

        return t.prototype.tf = function () {}, t.prototype.Hk = function () {}, t

    }(), $C.Gl = function () {

        var t = $F.M($C.wp, function (t) {

            $C.wp.call(this);

            var i = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());

            this.xp = $('<div id="' + i + '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' + t + '</div>    <div class="toaster-coins-close">' + $F.H("index.game.toaster.continue") + "</div></div>");

            var n = this;

            this.xp.find(".toaster-coins-close").click(function () {

                getApp().Ci.Be(), n.ao()

            })

        });

        return t.prototype.tf = function () {

            return this.xp

        }, t.prototype.Hk = function () {

            getApp().Ci.Ee()

        }, t

    }(), $C.Fl = function () {

        var t = $F.M($C.wp, function (t) {

            $C.wp.call(this);

            var i = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());

            this.xp = $('<div id="' + i + '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' + t + '</div>    <div class="toaster-levelup-text">' + $F.H("index.game.toaster.levelup") + '</div>    <div class="toaster-levelup-close">' + $F.H("index.game.toaster.continue") + "</div></div>");

            var n = this;

            this.xp.find(".toaster-levelup-close").click(function () {

                getApp().Ci.Be(), n.ao()

            })

        });

        return t.prototype.tf = function () {

            return this.xp

        }, t.prototype.Hk = function () {

            getApp().Ci.De()

        }, t

    }(), $C.sp = function () {

        var t = $F.M($C.wp, function () {

            $C.wp.call(this);

            var t = this,

                i = getApp(),

                n = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());

            this.xp = $('<div id="' + n + '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' + $F.a.d + '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' + $F.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + $F.H("index.game.toaster.consent.link") + '</a>    </div>    <div class="toaster-consent-close">' + $F.H("index.game.toaster.consent.iAccept") + "</div></div>"), this.yp = this.xp.find(".toaster-consent-close"), this.yp.hide(), this.yp.click(function () {

                i.Ci.Be(), i.Go() && i.rp(!0, !0), t.ao()

            })

        });

        return t.prototype.tf = function () {

            return this.xp

        }, t.prototype.Hk = function () {

            var t = this,

                i = getApp();

            i.Go() && !i.hl() ? (i.Ci.Ge(), setTimeout(function () {

                t.yp.fadeIn(300)

            }, 2e3)) : setTimeout(function () {

                t.ao()

            }, 0)

        }, t

    }(), $C.uk = function () {

        var t = $("#error-gateway-connection-retry"),

            i = $F.M($C.kf, function () {

                $C.kf.call(this, $C.Fk.wn);

                var i = getApp();

                t.click(function () {

                    i.Ci.Be(), i.og.ie.Mn(), i.og.Ak(i.og.ie), setTimeout(function () {

                        var t = $F.a.b + "/pub/healthCheck/ping";

                        $F.Z(t, function () {

                            i.og.Ak(i.og.tk)

                        }, function (t) {

                            i.og.ie.Kn(), i.Lc.Ib(function () {

                                i.og.Ak(i.og._e)

                            }, function (t) {

                                i.og.Ak(i.og.tk)

                            }, function (t, n) {

                                var o = t;

                                i.og.ie.Ln(o, n)

                            })

                        })

                    }, 2e3)

                })

            });

        return i.prototype.ha = function () {}, i.prototype.Gk = function () {

            $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeIn(500), $C.kf.un.stop(), $C.kf.un.fadeOut(50), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)

        }, i.prototype.Hk = function () {

            var t = getApp();

            t.Ci.pe($C.ge.je._e), t.Ci.Ge()

        }, i

    }(), $C.wk = function () {

        var t = $("#error-game-connection-retry"),

            i = $F.M($C.kf, function () {

                $C.kf.call(this, $C.Fk.wn);

                var i = getApp();

                t.click(function () {

                    i.Ci.Be(), i.og.Ak(i.og._e)

                })

            });

        return i.prototype.ha = function () {}, i.prototype.Gk = function () {

            $C.kf.jn.stop(), $C.kf.jn.fadeOut(50), $C.kf.ln.stop(), $C.kf.ln.fadeOut(50), $C.kf.nn.stop(), $C.kf.nn.fadeOut(50), $C.kf.pn.stop(), $C.kf.pn.fadeOut(50), $C.kf.sn.stop(), $C.kf.sn.fadeOut(50), $C.kf.qn.stop(), $C.kf.qn.fadeOut(50), $C.kf.rn.stop(), $C.kf.rn.fadeOut(50), $C.kf.tn.stop(), $C.kf.tn.fadeOut(50), $C.kf.un.stop(), $C.kf.un.fadeIn(500), $C.kf.mn.stop(), $C.kf.mn.fadeIn(1), $C.kf.jf.stop(), $C.kf.jf.fadeIn(500), $C.df.Kf(!0), $C.kf.in.stop(), $C.kf.in.fadeOut(50), $C.kf.vn.stop(), $C.kf.vn.fadeOut(50)

        }, i.prototype.Hk = function () {

            var t = getApp();

            t.Ci.pe($C.ge.je._e), t.Ci.Ge()

        }, i

    }(), $F.zp = function () {

        function t(t) {

            var i = t + 37 * Math.floor(65535 * Math.random());

            $C.Vf.eg($C.Vf.cg, i, 30)

        }



        function i() {

            return parseInt($C.Vf.fg($C.Vf.cg)) % 37

        }

        return function () {

            var n = i();

            n >= 0 && n < env.Ap || (n = Math.max(0, env.Ap - 2));

            var o = {};

            o.zn = env, o.Bp = !1, o.Cp = Date.now(), o.Dp = 0, o.Ep = 0, o.Fp = null, o.Gp = $F.a.j, o.Hp = $F.a.i, o.dh = null, o.Lc = null, o.xe = null, o.Ci = null, o.og = null, o.On = null, o.Ij = null;

            try {

                navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function (t) {

                    if (void 0 !== t.coords) {

                        var i = t.coords;

                        void 0 !== i.latitude && void 0 !== i.longitude && (o.Fp = t)

                    }

                }, function (t) {})

            } catch (t) {}

            return o.Ip = function () {

                o.dh = new $C.Jp, o.dh.Kp = new $C.Mh(o.dh), o.Lc = new $C._a, o.xe = new $C.Qj, o.Ci = new $C.ge, o.og = new $C.Tj, o.On = new $C.kj, o.Ij = new $C.Mk, o.ha()

            }, o.ha = function () {

                try {

                    ga("send", "event", "app", window.runtimeHash + "_init")

                } catch (t) {}

                o.dh.Lp = function () {

                    o.og.Ak(o.og.vk)

                }, o.dh.Mp = function () {

                    var t = o.og._e.Wn();

                    try {

                        ga("send", "event", "game", window.runtimeHash + "_start", t)

                    } catch (t) {}

                    o.Ci.pe($C.ge.je.af), o.og.Ak(o.og.af.Dn())

                }, o.dh.Np = function () {

                    try {

                        ga("send", "event", "game", window.runtimeHash + "_end")

                    } catch (t) {}

                    $("body").height() >= 430 && o.zn.Op.ka(), o.Lc.Ib(null, null, null),

                        function () {

                            var t = Math.floor(o.dh.ch.Bh),

                                i = o.dh.Ih;

                            o.Ij.Hj() ? o.Ij.Bl(function () {

                                o.Pp(t, i)

                            }) : o.Pp(t, i)

                        }()

                }, o.dh.Qp = function (t) {

                    t(o.og.af.Gn(), o.og.af.Hn())

                }, o.Ij.yl(function () {

                    var t = o.og.Lk();

                    if (null != t && t.nd === $C.Fk.Ek && (o.Ci.pe($C.ge.je._e), o.og.Ak(o.og._e)), o.Ij.Hj()) try {

                        var i = o.Ij.cl();

                        ga("set", "userId", i)

                    } catch (t) {}

                    o.Go() && o.Ij.Hj() && !o.Ij.hl() ? (o.rp(!1, !1), o.og.qk._n(new $C.sp)) : o.Rp(!0)

                }), o.dh.ha(), o.og.ha(), o.On.ha(), o.Lc.ha(), o.og._e.Vn(), o.og.Ak(o.og._e), o.xe.ha(function () {

                    o.Ci.ha(), o.Ij.ha(), o.Lc.Ib(function () {

                        o.og._e.Un(), o.og.Ak(o.og._e)

                    }, function (t) {

                        o.og._e.Un(), o.og.Ak(o.og.tk)

                    }, function (t, i) {

                        var n = t;

                        o.og.ie.Ln(n, i), o.og._e.Ln(n, i)

                    }), o.Go() && !o.hl() ? o.og.qk._n(new $C.sp) : o.Rp(!0)

                })

            }, o.Sp = function (t) {

                if (o.Ij.Hj()) {

                    var i = o.Ij.Al(),

                        n = $F.a.b + "/pub/wuid/" + i + "/consent/change?value=" + encodeURI(t);

                    $F.Z(n, function () {}, function (t) {})

                }

            }, o.Pn = function () {

                n++, !o.zn.Tp && n >= o.zn.Ap ? (o.og.Ak(o.og.xk), o.Ci.pe($C.ge.je.cf), o.zn.Up.ia()) : (t(n), o.Vp())

            }, o.Vp = function () {

                if (o.dh.Wp()) {

                    o.og.ie.Mn(), o.og.Ak(o.og.ie);

                    var t = o.og._e.Wn();

                    $C.Vf.eg($C.Vf._f, t, 30);

                    var i = o.og.$h.Zh();

                    $C.Vf.eg($C.Vf.Xf, i, 30);

                    var n = 0;

                    if (null != o.Fp) {

                        var e = o.Fp.coords.latitude,

                            s = o.Fp.coords.longitude;

                        n = 1 | Math.max(0, Math.min(32767, (e + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (s + 180) / 360 * 65536)) << 16

                    }

                    if (o.Ij.Hj()) o.Xp(t, n);

                    else {

                        var h = o.og._e.el();

                        $C.Vf.eg($C.Vf.ag, h, 30);

                        var r = o.On.rj($C.tj.sj);

                        $C.Vf.eg($C.Vf.bg, r, 30), o.Yp(t, n)

                    }

                }

            }, o.Xp = function (t, i) {

                var n = o,

                    e = o.Ij.Al(),

                    s = o.og._e.el(),

                    h = o.On.rj($C.tj.sj),

                    r = o.On.rj($C.tj.uj),

                    a = o.On.rj($C.tj.vj),

                    f = o.On.rj($C.tj.xj),

                    c = o.On.rj($C.tj.wj),

                    p = $F.a.b + "/pub/wuid/" + e + "/start?gameMode=" + encodeURI(t) + "&gh=" + i + "&nickname=" + encodeURI(s) + "&skinId=" + encodeURI(h) + "&eyesId=" + encodeURI(r) + "&mouthId=" + encodeURI(a) + "&glassesId=" + encodeURI(f) + "&hatId=" + encodeURI(c);

                $F.Z(p, function () {

                    n.og.Ak(n.og.tk)

                }, function (t) {

                    if (1460 === t.code) {

                        n.og.Ak(n.og.ok);

                        try {

                            ga("send", "event", "restricted", window.runtimeHash + "_tick")

                        } catch (t) {}

                    } else if (1200 !== t.code) n.og.Ak(n.og.tk);

                    else {

                        var i = t.server_url;

                        n.dh.Zp(window.server_url || i, e)

                    }

                })

            }, o.Yp = function (t, i) {

                var n = o,

                    e = o.og._e.el(),

                    s = o.On.rj($C.tj.sj),

                    h = $F.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(t) + "&gh=" + i + "&nickname=" + encodeURI(e) + "&skinId=" + encodeURI(s);

                $F.Z(h, function () {

                    n.og.Ak(n.og.tk)

                }, function (t) {

                    if (1460 === t.code) {

                        n.og.Ak(n.og.ok);

                        try {

                            ga("send", "event", "restricted", window.runtimeHash + "_tick")

                        } catch (t) {}

                    } else if (1200 !== t.code) n.og.Ak(n.og.tk);

                    else {

                        var i = t.server_url;

                        n.dh.Zp(window.server_url || i, e, s)

                    }

                })

            }, o.Pp = function (t, i) {

                var n = o.og._e.el();

                o.og.af.Fn(t, i, n), o.Ci.pe($C.ge.je.bf), o.og.Ak(o.og.af.En())

            }, o.Sn = function () {

                if (!o.Tn()) return o.On.Bj();

                var t = parseInt($C.Vf.fg($C.Vf.bg));

                return null != t && o.On.Cj(t, $C.tj.sj) ? t : o.On.Bj()

            }, o.Xn = function (t) {

                $C.Vf.eg($C.Vf.dg, t ? "true" : "false", 1800)

            }, o.Tn = function () {

                return "true" === $C.Vf.fg($C.Vf.dg)

            }, o.Rp = function (i) {

                if (i !== o.Bp) {

                    o.Bp = i;

                    var e = e || {};

                    e.consented = i, e.gdprConsent = i, o.zn.yn.ha(), o.zn.Op.ha(), o.zn.Up.ha(function (i) {

                        i && t(n = 0), o.Vp()

                    })

                }

            }, o.rp = function (t, i) {

                $C.Vf.eg($C.Vf.Wf, t ? "true" : "false"), i && o.Sp(t), o.Rp(t)

            }, o.hl = function () {

                switch ($C.Vf.fg($C.Vf.Wf)) {

                case "true":

                    return !0;

                default:

                    return !1

                }

            }, o.Go = function () {

                try {

                    return !!window.isIPInEEA || !(null == o.Fp || !$V.gg.hg(o.Fp.coords.latitude, o.Fp.coords.longitude))

                } catch (t) {

                    return !0

                }

            }, o.Nf = function () {

                o.Dp = Date.now(), o.Ep = o.Dp - o.Cp, o.dh.lh(o.Dp, o.Ep), o.og.lh(o.Dp, o.Ep), o.Cp = o.Dp

            }, o.Jf = function () {

                o.og.Jf()

            }, o

        }()

    }, $C.Jp = function () {

        var t = {

                _p: 0,

                aq: 1,

                bq: 2,

                cq: 3

            },

            i = {};

        return i.dq = 30, i.fq = new Float32Array(100), i.gq = 0, i.hq = 0, i.iq = 0, i.jq = 0, i.kq = 0, i.lq = 0, i.Cn = t._p, i.mq = null, i.nq = 300, i.Mp = function () {}, i.Np = function () {}, i.Qp = function () {}, i.Lp = function () {}, i.hh = new $C.wg, i.Kp = null, i.ch = null, i.Hi = {}, i.Fh = {}, i.Di = 12.5, i.eh = 40, i.oq = 1, i.pq = -1, i.qq = 1, i.rq = 1, i.sq = -1, i.tq = -1, i.uq = 1, i.vq = 1, i.wq = -1, i.Ih = 500, i.yh = 500, i.hh.zg = 500, i.ch = new $C.mi(i.hh), i.ha = function () {

            i.ch.ti(getApp().og.af.ng), setInterval(function () {

                i.Qp(function (t, n) {

                    i.xq(t, n)

                })

            }, 100)

        }, i.gh = function (t, n, o, e) {

            i.pq = t, i.qq = n, i.rq = o, i.sq = e, i.yq()

        }, i.zq = function (t) {

            i.oq = t, i.yq()

        }, i.yq = function () {

            i.tq = i.pq - i.oq, i.uq = i.qq + i.oq, i.vq = i.rq - i.oq, i.wq = i.sq + i.oq

        }, i.lh = function (n, o) {

            i.iq += o, i.hq -= .2 * i.gq * o, i.Kp.Rh(), null == i.mq || i.Cn !== t.bq && i.Cn !== t.cq || (i.Aq(n, o), i.eh = 4 + i.Di * i.ch.$c);

            for (var e = 1e3 / Math.max(1, o), s = 0, h = 0; h < i.fq.length - 1; h++) s += i.fq[h], i.fq[h] = i.fq[h + 1];

            i.fq[i.fq.length - 1] = e, i.dq = (s + e) / i.fq.length

        }, i.Bq = function (t, n) {

            return t > i.tq && t < i.uq && n > i.vq && n < i.wq

        }, i.Aq = function (t, n) {

            var o = i.iq + i.hq,

                e = (o - i.jq) / (i.kq - i.jq);

            i.ch.hj(t, n), i.ch.ij(t, n, e, i.Bq);

            var s = 0;

            for (var h in i.Fh) {

                var r = i.Fh[h];

                r.hj(t, n), r.ij(t, n, e, i.Bq), r.xi && r.$c > s && (s = r.$c), r.wi || !(r.dj < .005) && r.xi || (r.si(), delete i.Fh[r.Eh.ae])

            }

            i.zq(3 * s);

            for (var a in i.Hi) {

                var f = i.Hi[a];

                f.hj(t, n), f.ij(t, n, i.Bq), f.Ni && (f.dj < .005 || !i.Bq(f.Zi, f.$i)) && (f.si(), delete i.Hi[f.Eh.ae])

            }

        }, i.ki = function (n, o) {

            i.Cn === t.aq && (i.Cn = t.bq, i.Mp());

            var e = getApp().Dp;

            i.lq = n, 0 === n ? (i.jq = e - 95, i.kq = e, i.iq = i.jq, i.hq = 0) : (i.jq = i.kq, i.kq = i.kq + o);

            var s = i.iq + i.hq;

            i.gq = (s - i.jq) / (i.kq - i.jq)

        }, i.Oi = function () {

            if (i.Cn === t.aq || i.Cn === t.bq) {

                i.Cn = t.cq;

                var n = i.mq;

                setTimeout(function () {

                    i.Cn === t.cq && (i.Cn = t._p), null != n && n === i.mq && (i.mq.close(), i.mq = null)

                }, 5e3), i.Np()

            }

        }, i.Wp = function () {

            return i.Cn !== t.bq && (i.Cn = t.aq, i.Kp.Qh(), i.Hi = {}, i.Fh = {}, i.ch.Pm(), null != i.mq && (i.mq.close(), i.mq = null), !0)

        }, i.Cq = function () {

            i.mq = null, i.Kp.Qh(), i.Cn !== t.cq && i.Lp(), i.Cn = t._p

        }, i.Zp = function (t, n) {

            i.Dq(t, function () {

                var t = Math.min(2048, n.length),

                    o = new ArrayBuffer(6 + 2 * t),

                    e = new DataView(o),

                    s = 0;

                e.setInt8(s, 129), s += 1, e.setInt16(s, 2800), s += 2, e.setInt8(s, 1), s += 1, e.setInt16(s, t), s += 2;

                for (var h = 0; h < t; h++) e.setInt16(s, n.charCodeAt(h)), s += 2;

                i.Eq(o)

            })

        }, i.$p = function (t, n, o) {

            i.Dq(t, function () {

                var t = Math.min(32, n.length),

                    e = new ArrayBuffer(7 + 2 * t),

                    s = new DataView(e),

                    h = 0;

                s.setInt8(h, 129), h += 1, s.setInt16(h, 2800), h += 2, s.setInt8(h, 0), h += 1, s.setInt16(h, o), h += 2, s.setInt8(h, t), h++;

                for (var r = 0; r < t; r++) s.setInt16(h, n.charCodeAt(r)), h += 2;

                i.Eq(e)

            })

        }, i.Eq = function (t) {

            try {

                null != i.mq && i.mq.readyState === WebSocket.OPEN && i.mq.send(t)

            } catch (t) {

                i.Cq()

            }

        }, i.xq = function (t, n) {

            var o = n ? 128 : 0,

                e = $F.N(t) / $V.F * 128 & 127,

                s = 255 & (o | e);

            if (i.nq !== s) {

                var h = new ArrayBuffer(1);

                new DataView(h).setInt8(0, s), i.Eq(h), i.nq = s

            }

        }, i.Dq = function (t, n) {

            var o = i.mq = new WebSocket(t);

            o.binaryType = "arraybuffer", o.onopen = function () {

                i.mq === o && n()

            }, o.onclose = function () {

                i.mq === o && i.Cq()

            }, o.onerror = function (t) {

                i.mq === o && i.Cq()

            }, o.onmessage = function (t) {

                i.mq === o && i.Kp.Ph(t.data)

            }

        }, i

    };

    var env = function (t) {

        var i = {};

        i.main = {

            yn: $F.ja("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),

            Op: $F.ja("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),

            Up: $F.ga(),

            Ap: 4,

            Tp: !1,

            xn: !0

        }, i.miniclip = {

            yn: $F.ja("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),

            Op: $F.ja("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),

            Up: $F.ga(),

            Ap: 4,

            Tp: !1,

            xn: !1

        };

        var n = i[window.ENV];

        return n || (n = i.main), n

    }(window.ENV);

    $(function () {

            FastClick.attach(document.body)

        }), addEventListener("contextmenu", function (t) {

            return t.preventDefault(), t.stopPropagation(), !1

        }), window.fbAsyncInit = function () {

            FB.init({

                appId: atob("ODYxOTI2ODUwNjE5MDUx"),

                cookie: !0,

                xfbml: !0,

                status: !0,

                version: "v14.0"

            })

        }, $F.L("//connect.facebook.net/" + $F.a.j + "/sdk.js", {

            id: "facebook-jssdk",

            async: !0,

            defer: !0,

            crossorigin: "anonymous"

        }), $F.L("//apis.google.com/js/api:client.js", null, function () {

            gapi.load("auth2", function () {

                GoogleAuth = gapi.auth2.init({

                    client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")

                })

            })

        }), $F.L("//platform.twitter.com/widgets.js", {

            id: "twitter-wjs"

        }), $F.L("//apis.google.com/js/platform.js"), _anApp = $F.zp(), _anApp.Ip(),

        

          

             // $('#mm-event-text').replaceWith('<div class="text-vnxx"><h3><a href="https://www.facebook.com/WormateFriendsConnect">Yapıyoruz Bişiler Kanks</a></h3></div>');

             

             $("#mm-advice-cont").html('<input type="button" style="float: left;height: 35.5px;color: #001fff;font-size:18px;border:solid 1px #2196f300;font-weight:600;background:#e6ae50;width: 49%;font-family: vuonghiep;" class="fullscreen_button" value="Tam Ekran"/><div class="nhac"><a href="https://www.GOOGLE.com">İletişim</div>');

             

            

          

             

             $(document).ready(function(){

             $(".fullscreen_button").on("click", function() 

             {

              document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()

             });    

            });

             
        //   $('#markup-footer').replaceWith('<footer id="markup-footer"><div class="lang-menu"><button class="lang-button">Language â–´</button><div class="lang-list"><a hreflang="en" href="/">English</a><a hreflang="uk" href="/uk/">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a><a hreflang="de" href="/de/">Deutsch</a><a hreflang="fr" href="/fr/">FranÃ§ais</a><a hreflang="ru" href="/ru/">Ð ÑƒÑÑÐºÐ¸Ð¹</a><a hreflang="es" href="/es/">EspaÃ±ol</a></div></div><a class="link" hreflang="en" href="/">Home</a><a class="link" hreflang="en" href="/contact">Wormate.io team Â© 2022</a><a style="color: #d7f100;" class="link" href="https://wormfriends.com">Wormfriends.Com</a><a style="color: #00ff21;">VuongHiep.Com</a></footer>');
                 
     //       $('#ltmolilci1iurq1i').replaceWith('<div id="toantrang-quangcao"><div class="quangcao-left1"><a href="https://www.facebook.com/CasterLinhcom"><div class="ten-khach-hang">Ã”NG CHá»¦ GAMING</div><img src="https://haylamday.com/images/hiep_img/ong-chu-gaming.png"></a></div> <div class="quangcao-left2"><a href="https://www.tiktok.com/@ypg_25/"><div class="ten-khach-hang">YPG_25 ABOO JUDY</div><img src="https://haylamday.com/images/hiep_img/25ypg.jpg"></a></div> <div class="quangcao-left3"><a href="https://www.facebook.com/BAHAGAMING0/"><div class="ten-khach-hang">BAHA GAMING</div><img src="https://haylamday.com/images/hiep_img/baha-cover.jpg"></a></div> <div class="quangcao-left4"><a href="https://www.facebook.com/glitchgamingvas/"><div class="ten-khach-hang">GLITCH GAMING</div><img src="https://haylamday.com/images/hiep_img/glitch.jpg"></a></div>  <div class="quangcao-left5"><a href="https://www.tiktok.com/@alp.gamingg/"><div class="ten-khach-hang">ALP_GAMING2</div><img src="https://haylamday.com/images/hiep_img/alp.jpg"></a></div>   </div>');
            
            
              $("#loa831pibur0w4gv").replaceWith('<div style="margin: 0;" id="loa831pibur0w4gv"><div class="label" id="titleSetings">Settings</div></div>'),
           
           
     

            

        function () {

            function t() {

                requestAnimationFrame(t), getApp().Nf()

            }

            t()

        }(),

        function () {

            function t() {

                var t = i.width(),

                    s = i.height(),

                    h = n.outerWidth(),

                    r = n.outerHeight(),

                    a = o.outerHeight(),

                    f = e.outerHeight(),

                    c = Math.min(1, Math.min((s - f - a) / r, t / h)),

                    p = "translate(-50%, -50%) scale(" + c + ")";

                n.css({

                    "-webkit-transform": p,

                    "-moz-transform": p,

                    "-ms-transform": p,

                    "-o-transform": p,

                    transform: p

                }), getApp().Jf(), window.scrollTo(0, 1)

            }

            var i = $("body"),

                n = $("#stretch-box"),

                o = $("#markup-header"),

                e = $("#markup-footer");

            t(), $(window).resize(t)

        }()

}()

});



function serversHTML() {

                $('.description-text').replaceWith('<div style=";padding: 0px;margin: 0;" class="description-text">');

                $('.description-text').prepend("<div id='title'>Wormate.io</div>");

                $('#title').after('<ul style="border-bottom: solid 2px;margin-top: 5px;" class="ui-tabs-nav">'+

                '<li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag br" value="https://i.imgur.com/EkbSd65.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag mx"  value="https://i.imgur.com/PByBXKq.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag ca" value="https://i.imgur.com/S5EqHAE.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag de" value="https://i.imgur.com/M5OGzTL.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag fr" value="https://i.imgur.com/TPcPGhw.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag sg" value="https://i.imgur.com/wukcAB8.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag jp" value="https://i.imgur.com/ROLgkl4.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag au" value="https://i.imgur.com/yFI1dyE.png"></span>'+

                    '</a>'+

                '</li>'+



                '<li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">'+

                    '<a>'+

                        '<span class="flag gb" value="https://i.imgur.com/JJbgOQx.png"></span>'+

                    '</a>'+

                '</li>'+



                '</ul>'+

                '<div class="servers-container">'+

                '<div class="servers-peru"></div>'+

                '<div class="servers-mexico" style="display: none;"></div>'+

                '<div class="servers-eeuu" style="display: none;"></div>'+

                '<div class="servers-canada" style="display: none;"></div>'+

                '<div class="servers-germania" style="display: none;"></div>'+

                '<div class="servers-francia" style="display: none;"></div>'+

                '<div class="servers-singapur" style="display: none;"></div>'+

                '<div class="servers-japon" style="display: none;"></div>'+

                '<div class="servers-australia" style="display: none;"></div>'+

                '<div class="servers-granbretana" style="display: none;"></div>'+

                '</div>');

                $(".ui-tab").on("click", account);

                $(".flag").click(function() {

                    let getValue = $(this).attr("value");

                    theoKzObjects.flag = getValue;

                    ctx.containerImgS.texture = ctx.onclickServer;

                    retundFlagError();

                    console.log(getValue);

                });

                for (a = 0; a < servers.Api_listServer.length; a++) {

                var server = servers.Api_listServer[a].serverUrl;

                var nombre = servers.Api_listServer[a].name;

                var region = servers.Api_listServer[a].region;

                let span = document.createElement('p');

                span.value = server;

                span.innerHTML = nombre;

                if (region == "peru") {

                    $(".servers-peru").prepend(span);

                }else if (region == "mexico") {

                    $(".servers-mexico").prepend(span);

                }else if (region == "eeuu") {

                    $(".servers-eeuu").prepend(span);

                }else if (region == "canada") {

                    $(".servers-canada").prepend(span);

                }else if (region == "germania") {

                    $(".servers-germania").prepend(span);

                }else if (region == "francia") {

                    $(".servers-francia").prepend(span);

                }else if (region == "singapur") {

                    $(".servers-singapur").prepend(span);

                }else if (region == "japon") {

                    $(".servers-japon").prepend(span);

                }else if (region == "australia") {

                    $(".servers-australia").prepend(span);

                }else if (region == "granbretana") {

                    $(".servers-granbretana").prepend(span);

                }

                //$('.servers-container').prepend(span);

                //se le agrega un id 

                $(span).attr("id", region);

                $(span).attr("class", "selectSala");

                $(span).attr("value", nombre);

                $(span).click(function() {

                     ctx.setServer($(this).text());

                     //console.log($(this).text());

                    //$(".serverName").text($(this).attr("value"));

                    let getValue = $(this).val();

                    ctx.containerImgS.texture = ctx.onclickServer;

                    retundFlagError();

                    window.server_url = getValue;

                    $("#mm-action-play").click();

                    $("#adbl-continue").click();



                });

            }

            };

            

            function powerUpsTimer(msg, i, data) {

                const timePWR = [38, 38, 38, 120, 38, 25, 38];

                const colors = ["#FFD500", '#FFC75A', '#00B2ED', "#FF4544", '#0094D7', '#CCCF81', '#ff0999'];

                let countTime = timePWR[i] - parseInt((0.99 == data ? 1 : data) * timePWR[i] / 1);

                const inputTextV1 = new PIXI.TextStyle({

                    "align" : "center",

                    "fill" : colors[i],

                    "fontSize" : 25,

                    "lineJoin" : 'round',

                    "whiteSpace" : 'normal',

                    "wordWrap" : true,

                    "dropShadow" : true,

                    "dropShadowBlur" : 6,

                    fontFamily : "vuonghiep",

                    "fontWeight" : 'bold'

                  });

                let changePWR = 'pwr_clock' + i;

                if (!pwrups[changePWR] && timePWR[i] === countTime) {

                    pwrups[changePWR] = new PIXI.Text(countTime, inputTextV1);

                    pwrups[changePWR]["y"] = 61;

                    msg["rh"][i]['addChild'](pwrups[changePWR]);

                  }

                  if (pwrups[changePWR]) {

                    pwrups[changePWR]["x"] = countTime >= 100 ? 11 : countTime >= 10 ? 18 : 26;

                    pwrups[changePWR]['text'] = countTime;

                    if (countTime === 0) {

                      delete pwrups[changePWR];

                    }

                  }

            }

            //abre account

            function account() {

                $(".mx").on("click", function() {

                    $(".servers-mexico").fadeIn(500);

                    $("#addflag").attr("class", "flag mx");

                    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-peru").fadeOut(100);

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

            

                });

                $(".br").on("click", function() {

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");

            

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

            

                    $(".servers-peru").fadeIn(500);

                    $("#addflag").attr("class", "flag br");

                    //$(".ui-tab-inactive0").attr("class", "ui-tab-active");

                });

                $(".us").on("click", function() {

                    $(".servers-eeuu").fadeIn(500);

                    $("#addflag").attr("class", "flag us");

                    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");

            

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".ca").on("click", function() {

                    $(".servers-canada").fadeIn(500);

                    $("#addflag").attr("class", "flag ca");

                    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(500);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".de").on("click", function() {

                    $(".servers-germania").fadeIn(500);

                    $("#addflag").attr("class", "flag de");

                    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(500);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".fr").on("click", function() {

                    $(".servers-francia").fadeIn(500);

                    $("#addflag").attr("class", "flag fr");

                    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".sg").on("click", function() {

                    $(".servers-singapur").fadeIn(500);

                    $("#addflag").attr("class", "flag sg");

                    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");

            

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".jp").on("click", function() {

                    $(".servers-japon").fadeIn(500);

                    $("#addflag").attr("class", "flag jp");

                    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".au").on("click", function() {

                    $(".servers-australia").fadeIn(500);

                    $("#addflag").attr("class", "flag au");

                    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");

            

                    

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive7").removeClass("ui-tab-active");

                    $(".ui-tab-inactive9").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-granbretana").fadeOut(100);

                });

                $(".gb").on("click", function() {

                    $(".servers-granbretana").fadeIn(500);

                    $("#addflag").attr("class", "flag gb");

                    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");

            

                    $(".ui-tab-inactive0").removeClass("ui-tab-active");

                    $(".ui-tab-inactive1").removeClass("ui-tab-active");

                    $(".ui-tab-inactive2").removeClass("ui-tab-active");

                    $(".ui-tab-inactive3").removeClass("ui-tab-active");

                    $(".ui-tab-inactive4").removeClass("ui-tab-active");

                    $(".ui-tab-inactive5").removeClass("ui-tab-active");

                    $(".ui-tab-inactive6").removeClass("ui-tab-active");

                    $(".ui-tab-inactive8").removeClass("ui-tab-active");

                    $(".servers-eeuu").fadeOut(100);

                    $(".servers-mexico").fadeOut(100);

                    $(".servers-peru").fadeOut(100);

                    $(".servers-canada").fadeOut(100);

                    $(".servers-germania").fadeOut(100);

                    $(".servers-francia").fadeOut(100);

                    $(".servers-singapur").fadeOut(100);

                    $(".servers-japon").fadeOut(100);

                    $(".servers-australia").fadeOut(100);

                });

            };

            //abre links

            /*zoom by yildo.com*/                    

window.multiplier = 0.625; // Başlangıç zoom seviyesi (daha yakın)

const zoomSpeed = 0.1; // Yakınlaştırma ve uzaklaştırma hızı (artırılmış)





window.onwheel = (event) => {

if (event.deltaY < 0) {

    window.multiplier *= (1 + zoomSpeed); // Yukarı hareket (yakınlaşma)

} else {

    window.multiplier *= (1 - zoomSpeed); // Aşağı hareket (uzaklaşma)

}

window.changedNf();

};



// "z" tuşuna basıldığında zoom işlemini durdurma fonksiyonu

function stopZoom(event) {

if (event.key === 'z') {

    window.multiplier = 0.625; // Başlangıç zoom seviyesine geri dön

    window.changedNf();

}

}



// Tuş olayını dinleyiciye bağlama

window.addEventListener('keydown', stopZoom);



// Mouse pozisyonunu depolamak için değişkenler

let mouseX = 0;

let mouseY = 0;



// Örnek: Veri önbelleği kullanımı

const cache = {};



function fetchData(key) {

if (cache[key]) {

return Promise.resolve(cache[key]);

} else {

return fetch('data.json')

  .then(response => response.json())

  .then(data => {

    cache[key] = data;

    return data;

  });

}

}





// Örnek: Yalnızca gerektiğinde render yapma

function render() {

if (needsRender) {

// Render işlemleri

needsRender = false;

}

}

/*zoom by yildo.com*/ 

// Bakım mesajı Start
var maintenanceMessage = "Hoşgeldiniz (ByYildo).";

// Sayfa yüklendiğinde çalışacak fonksiyon
window.onload = function() {
    // Bakım mesajını göster
    alert(maintenanceMessage);
};

// Bakım mesajı end

