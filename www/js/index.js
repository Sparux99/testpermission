document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // ---- 1. طلب إذن الإشعارات ----
    cordova.plugins.notification.local.requestPermission(function (granted) {
        if (granted) {
            console.log("إذن الإشعارات مُنح ✅");

            // ---- إشعار ترحيبي عند فتح التطبيق ----
            cordova.plugins.notification.local.schedule({
                id: 1,
                title: "مرحبا بك!",
                text: "لقد وافقت على الإشعارات والتطبيق بدأ العمل بنجاح.",
                foreground: true // يظهر حتى لو التطبيق مفتوح
            });

            // ---- إشعار كل دقيقة ----
            setInterval(function () {
                cordova.plugins.notification.local.schedule({
                    id: Date.now(), // رقم مميز لكل إشعار
                    title: "إشعار دوري",
                    text: "هذا إشعار تحقق كل دقيقة",
                    foreground: true
                });
            }, 60000); // 60000 ms = دقيقة واحدة

        } else {
            console.log("إذن الإشعارات مرفوض ❌");
        }
    });

    // ---- مثال إضافي: التعامل مع الضغط على الإشعار ----
    cordova.plugins.notification.local.on('click', function (notification) {
        console.log('تم الضغط على الإشعار: ' + notification.id);
        alert('تم الضغط على الإشعار: ' + notification.id);
    });
}
