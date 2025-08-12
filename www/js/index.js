document.addEventListener('deviceready', function() {
  var permissions = cordova.plugins.permissions;

  var list = [
    permissions.READ_EXTERNAL_STORAGE,
    permissions.WRITE_EXTERNAL_STORAGE
  ];

  permissions.hasPermission(list, function(status) {
    if(status.hasPermission) {
      console.log("الأذونات متاحة");
      // هنا تستدعي الدالة التي تحتاج الأذونات
    } else {
      permissions.requestPermissions(list, function(status2) {
        if(status2.hasPermission) {
          console.log("تم منح الأذونات");
          // نفذ دوالك بعد الحصول على الأذونات
        } else {
          alert("لم يتم منح الأذونات اللازمة");
        }
      }, function() {
        alert("فشل طلب الأذونات");
      });
    }
  }, function() {
    alert("خطأ في التحقق من الأذونات");
  });
});
