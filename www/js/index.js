document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // ---- 1. طلب إذن الإشعارات ----
    cordova.plugins.notification.local.requestPermission(function (granted) {
        if (granted) {
            console.log("إذن الإشعارات مُنح ✅");
            // إشعار ترحيبي عند تشغيل التطبيق
            cordova.plugins.notification.local.schedule({
                id: 1,
                title: "اختبار الإشعارات",
                text: "التطبيق بدأ العمل بنجاح",
                foreground: true
            });

            // ---- 2. جدولة إشعار كل دقيقة للتحقق ----
            setInterval(function () {
                cordova.plugins.notification.local.schedule({
                    id: Date.now(), // رقم مميز
                    title: "اختبار دوري",
                    text: "هذا إشعار تحقق كل دقيقة",
                    foreground: true
                });
            }, 60000); // 60000 ms = دقيقة واحدة

        } else {
            console.log("إذن الإشعارات مرفوض ❌");
        }
    });

    // ---- 3. هنا تظل الأكواد الأصلية لاختبار الملفات كما هي ----
    // يمكنك نسخ الأكواد من HTML ووضعها هنا أو تركها كما هي في HTML
}
