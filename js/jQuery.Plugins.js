function _mmenu(n) {
    var i = "right",
        t;
    arguments.length > 1 && (i = arguments[1]), t = !0, arguments.length > 2 && (t = arguments[2]), $(document).ready(function() { $("#" + n).mmenu({ offCanvas: { position: i, zposition: "front" } }, { clone: t }) })
}