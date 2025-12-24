// ========================================
// i18n - Internationalization System
// ========================================

const translations = {
    ar: {
        // App
        app_name: 'صلاتك',
        app_description: 'تطبيق لمساعدتك على الالتزام بالصلوات وبناء عادات عبادية',

        // Navigation
        nav_daily_prayers: 'صلوات اليوم',
        nav_qada_prayers: 'الصلاة الفائتة',
        nav_habits: 'متتبع العادات',
        nav_statistics: 'الإحصائيات',
        nav_settings: 'الإعدادات',

        // Prayer names
        fajr: 'الفجر',
        duha: 'الضحى',
        dhuhr: 'الظهر',
        asr: 'العصر',
        maghrib: 'المغرب',
        isha: 'العشاء',
        qiyam: 'قيام الليل',

        // Prayer details
        rakaat: 'ركعة',
        rakaat_plural: 'ركعات',
        points: 'نقطة',
        points_plural: 'نقاط',
        variable: 'متغير',

        // Actions
        performed: 'أديت',
        missed: 'تركت',
        made_up: 'قضيت الصلاة',
        add_habit: 'إضافة عادة',
        edit: 'تعديل',
        delete: 'حذف',
        save: 'حفظ',
        cancel: 'إلغاء',
        confirm: 'تأكيد',
        close: 'إغلاق',
        export_data: 'تصدير البيانات',
        import_data: 'استيراد البيانات',
        clear_all: 'مسح الكل',
        reset_decision: 'إعادة تعيين القرار',

        // Daily Prayers Page
        daily_prayers_title: 'صلوات اليوم',
        daily_prayers_subtitle: 'سجل صلواتك اليومية واكسب النقاط',
        today: 'اليوم',
        previous_day: 'اليوم السابق',
        next_day: 'اليوم التالي',
        prayer_not_done: 'لم تؤد بعد',
        prayer_done: 'تمت',
        prayer_missed: 'فاتت',

        // Qada Prayers Page
        qada_prayers_title: 'الصلاة الفائتة',
        qada_prayers_subtitle: 'اقض صلواتك الفائتة لتقليل رصيدك',
        total_rakaat: 'إجمالي الركعات',
        no_qada_prayers: 'الحمد لله! لا توجد صلوات فائتة',
        qada_empty_message: 'استمر في المحافظة على صلواتك اليومية في وقتها',
        add_qada_prayer: 'إضافة صلوات فائتة',
        prayer_type: 'نوع الصلاة',
        prayer_count: 'عدد الصلوات',
        optional_date: 'التاريخ (اختياري)',
        date_unknown: 'غير معروف',
        add_multiple_hint: 'يمكنك إضافة عدة صلوات من نفس النوع دفعة واحدة',
        empty_date_hint: 'اترك فارغاً إذا كنت لا تتذكر التاريخ',
        invalid_count: 'يرجى إدخال عدد صحيح',
        count_too_large: 'العدد كبير جداً',
        added_prayers_success: 'تمت إضافة {count} صلاة {prayer}',

        // Habits Page
        habits_title: 'متتبع العادات',
        habits_subtitle: 'ابن عادات إيمانية وتخلص من العادات السيئة',
        worship_habit: 'عبادة',
        sin_habit: 'معصية',
        habit_name: 'اسم العادة',
        habit_type: 'نوع العادة',
        add_new_habit: 'إضافة عادة جديدة',
        mark_done: 'تم الأداء',
        mark_committed: 'ارتكبت',
        mark_avoided: 'تركت',
        streak: 'سلسلة',
        days: 'يوم',
        no_habits: 'لا توجد عادات مضافة',
        habits_empty_message: 'ابدأ بإضافة عادة جديدة لتتبعها',

        // Statistics Page
        statistics_title: 'الإحصائيات',
        statistics_subtitle: 'تابع تقدمك الإيماني وإنجازاتك',
        prayers_performed: 'الصلوات المؤداة',
        prayers_missed: 'الصلوات الفائتة',
        total_rakaat_prayed: 'إجمالي الركعات',
        worship_count: 'إجمالي العبادات',
        days_without_sin: 'أيام بدون معاصي',
        weekly_progress: 'التقدم الأسبوعي',
        monthly_progress: 'التقدم الشهري',
        completion_rate: 'نسبة الإنجاز',
        points_to_next_level: '{points} نقطة للمستوى التالي',

        // Settings Page
        settings_title: 'الإعدادات',
        settings_subtitle: 'خصص تجربتك بما يناسبك',
        theme: 'المظهر',
        theme_light: 'فاتح',
        theme_dark: 'داكن',
        theme_auto: 'تلقائي',
        language: 'اللغة',
        language_ar: 'العربية',
        language_en: 'English',
        location_settings: 'إعدادات الموقع',
        latitude: 'خط العرض',
        longitude: 'خط الطول',
        save_location: 'حفظ الموقع يدوياً',
        auto_location: 'تحديد الموقع تلقائياً',
        location_updated: 'تم تحديث الموقع بنجاح',
        manual_mode_on: 'تم تفعيل الموقع اليدوي',
        auto_mode_on: 'تم تفعيل التحديد التلقائي للموقع',
        data_management: 'إدارة البيانات',
        about: 'حول التطبيق',
        version: 'الإصدار',
        demo_tag: '(تجريبي)',
        download_app: 'لتنزيل التطبيق الخاص بالهاتف',
        error_invalid_input: 'البيانات المدخلة غير صحيحة',
        error_importing: 'حدث خطأ أثناء استيراد البيانات',

        // Points
        your_points: 'رصيد نقاطك',
        points_history: 'سجل النقاط',
        level: 'المستوى',
        beginner: 'مبتدئ',
        intermediate: 'متقدم',
        advanced: 'محسن',
        expert: 'متقن',

        // Messages
        prayer_performed_message: 'بارك الله فيك! تم تسجيل الصلاة',
        prayer_missed_message: 'تم تسجيل الصلاة كفائتة، بادر بقضائها',
        qada_made_up_message: 'أحسنت! تم قضاء الصلاة بنجاح',
        habit_added_message: 'تمت إضافة العادة بنجاح',
        habit_deleted_message: 'تم حذف العادة',
        habit_marked_message: 'تم تحديث سجل العادة',
        data_exported_message: 'تم تصدير البيانات بنجاح',
        data_imported_message: 'تم استيراد البيانات بنجاح',
        data_cleared_message: 'تم مسح جميع البيانات بنجاح',
        confirm_delete: 'هل أنت متأكد من الحذف؟',
        confirm_clear_all: 'هل أنت متأكد من مسح جميع البيانات؟ لا يمكن التراجع عن هذا الإجراء.',
        loading_message: 'يرجى الانتظار، جاري تحديد مواقيت الصلاة في منطقتك...',
        error_location: 'تعذر تحديد الموقع',
        error_calculation: 'خطأ في حساب مواقيت الصلاة',
        notifications_title: 'الإشعارات',

        // v1.3.0 Features
        change_decision: 'تغيير القرار',
        edit_qada: 'تعديل الصلاة الفائتة',
        remove_qada: 'إزالة من القضاء',
        last_7_days_only: 'يمكن التعديل لآخر 7 أيام فقط',
        select_date: 'اختر التاريخ',
        history_navigation: 'سجل الأيام السابقة',
        undo_success: 'تم التراجع عن القرار بنجاح',

        // Date
        saturday: 'السبت',
        sunday: 'الأحد',
        monday: 'الاثنين',
        tuesday: 'الثلاثاء',
        wednesday: 'الأربعاء',
        thursday: 'الخميس',
        friday: 'الجمعة',
        hijri_suffix: 'هـ',

        jan: 'يناير', feb: 'فبراير', mar: 'مارس', apr: 'أبريل', may: 'مايو', jun: 'يونيو',
        jul: 'يوليو', aug: 'أغسطس', sep: 'سبتمبر', oct: 'أكتوبر', nov: 'نوفمبر', dec: 'ديسمبر',

        // Hijri Months
        h_month_1: 'محرم', h_month_2: 'صفر', h_month_3: 'ربيع الأول', h_month_4: 'ربيع الثاني',
        h_month_5: 'جمادى الأولى', h_month_6: 'جمادى الثانية', h_month_7: 'رجب', h_month_8: 'شعبان',
        h_month_9: 'رمضان', h_month_10: 'شوال', h_month_11: 'ذو القعدة', h_month_12: 'ذو الحجة',

        // Short days
        day_0: 'ح', day_1: 'ن', day_2: 'ث', day_3: 'ر', day_4: 'خ', day_5: 'ج', day_6: 'س'
    },

    en: {
        // App
        app_name: 'Salatk',
        app_description: 'An app to help you stay committed to prayers and build worship habits',

        // Navigation
        nav_daily_prayers: "Daily Prayers",
        nav_qada_prayers: 'Missed Prayers',
        nav_habits: 'Habit Tracker',
        nav_statistics: 'Statistics',
        nav_settings: 'Settings',

        // Prayer names
        fajr: 'Fajr',
        duha: 'Duha',
        dhuhr: 'Dhuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        isha: 'Isha',
        qiyam: 'Qiyam al-Layl',

        // Prayer details
        rakaat: 'rakah',
        rakaat_plural: 'rakaat',
        points: 'point',
        points_plural: 'points',
        variable: 'variable',

        // Actions
        performed: 'Performed',
        missed: 'Missed',
        made_up: 'Made Up',
        add_habit: 'Add Habit',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        close: 'Close',
        export_data: 'Export Data',
        import_data: 'Import Data',
        clear_all: 'Clear All',
        reset_decision: 'Reset Decision',

        // Daily Prayers Page
        daily_prayers_title: "Daily Prayers",
        daily_prayers_subtitle: 'Track your daily prayers and earn points',
        today: 'Today',
        previous_day: 'Previous Day',
        next_day: 'Next Day',
        prayer_not_done: 'Not performed yet',
        prayer_done: 'Completed',
        prayer_missed: 'Missed',

        // Qada Prayers Page
        qada_prayers_title: 'Missed Prayers',
        qada_prayers_subtitle: 'Make up your missed prayers to clear your list',
        total_rakaat: 'Total Rakaat',
        no_qada_prayers: 'Alhamdulillah! No missed prayers',
        qada_empty_message: 'Keep maintaining your daily prayers on time',
        add_qada_prayer: 'Add Missed Prayers',
        prayer_type: 'Prayer Type',
        prayer_count: 'Number of Prayers',
        optional_date: 'Date (Optional)',
        date_unknown: 'Unknown',
        add_multiple_hint: 'You can add multiple prayers of the same type at once',
        empty_date_hint: 'Leave empty if you don\'t remember the date',
        invalid_count: 'Please enter a valid count',
        count_too_large: 'Count is too large',
        added_prayers_success: 'Added {count} {prayer} prayers',

        // Habits Page
        habits_title: 'Habit Tracker',
        habits_subtitle: 'Build spiritual habits and eliminate bad ones',
        worship_habit: 'Worship',
        sin_habit: 'Sin',
        habit_name: 'Habit Name',
        habit_type: 'Habit Type',
        add_new_habit: 'Add New Habit',
        mark_done: 'Done',
        mark_committed: 'Committed',
        mark_avoided: 'Avoided',
        streak: 'Streak',
        days: 'days',
        no_habits: 'No habits added',
        habits_empty_message: 'Start by adding a new habit to track',

        // Statistics Page
        statistics_title: 'Statistics',
        statistics_subtitle: 'Track your spiritual progress and achievements',
        prayers_performed: 'Prayers Performed',
        prayers_missed: 'Prayers Missed',
        total_rakaat_prayed: 'Total Rakaat',
        worship_count: 'Total Worship',
        days_without_sin: 'Days Without Sin',
        weekly_progress: 'Weekly Progress',
        monthly_progress: 'Monthly Progress',
        completion_rate: 'Completion Rate',
        points_to_next_level: '{points} points to next level',

        // Settings Page
        settings_title: 'Settings',
        settings_subtitle: 'Customize your experience',
        theme: 'Theme',
        theme_light: 'Light',
        theme_dark: 'Dark',
        theme_auto: 'Auto',
        language: 'Language',
        language_ar: 'العربية',
        language_en: 'English',
        location_settings: 'Location Settings',
        latitude: 'Latitude',
        longitude: 'Longitude',
        save_location: 'Save Manual Location',
        auto_location: 'Auto-Detect Location',
        location_updated: 'Location updated successfully',
        manual_mode_on: 'Manual location mode enabled',
        auto_mode_on: 'Auto-detect location enabled',
        data_management: 'Data Management',
        about: 'About',
        version: 'Version',
        demo_tag: '(Beta)',
        download_app: 'To download the mobile app',
        error_invalid_input: 'Invalid input data',
        error_importing: 'Error occurred while importing data',

        // Points
        your_points: 'Your Points',
        points_history: 'Points History',
        level: 'Level',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',

        // Messages
        prayer_performed_message: 'Barakallahu feek! Prayer recorded',
        prayer_missed_message: 'Prayer recorded as missed, try to make it up',
        qada_made_up_message: 'Well done! Prayer made up successfully',
        habit_added_message: 'Habit added successfully',
        habit_deleted_message: 'Habit deleted',
        habit_marked_message: 'Habit history updated',
        data_exported_message: 'Data exported successfully',
        data_imported_message: 'Data imported successfully',
        data_cleared_message: 'All data cleared successfully',
        confirm_delete: 'Are you sure you want to delete?',
        confirm_clear_all: 'Are you sure you want to clear all data? This action cannot be undone.',
        loading_message: 'Please wait, determining prayer times...',
        error_location: 'Could not determine location',
        error_calculation: 'Error calculating prayer times',
        notifications_title: 'Notifications',

        // v1.3.0 Features
        change_decision: 'Change Decision',
        edit_qada: 'Edit Missed Prayer',
        remove_qada: 'Remove from Qada',
        last_7_days_only: 'Modifications allowed for the last 7 days only',
        select_date: 'Select Date',
        history_navigation: 'History Navigation',
        undo_success: 'Decision undone successfully',

        // Date
        saturday: 'Saturday',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        hijri_suffix: 'AH',

        jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun',
        jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec',

        // Hijri Months
        h_month_1: 'Muharram', h_month_2: 'Safar', h_month_3: 'Rabi\' al-Awwal', h_month_4: 'Rabi\' al-Thani',
        h_month_5: 'Jumada al-Ula', h_month_6: 'Jumada al-Akhirah', h_month_7: 'Rajab', h_month_8: 'Sha\'ban',
        h_month_9: 'Ramadan', h_month_10: 'Shawwal', h_month_11: 'Dhu al-Qi\'dah', h_month_12: 'Dhu al-Hijjah',

        // Short days
        day_0: 'Su', day_1: 'Mo', day_2: 'Tu', day_3: 'We', day_4: 'Th', day_5: 'Fr', day_6: 'Sa'
    }
};

// Current language
let currentLanguage = localStorage.getItem('salatk_language') || 'ar';

// Get translation
function t(key) {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage][key] || key;
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('salatk_language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updatePageTranslations();
}

// Update all translations on page
function updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // Update lang toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.querySelector('.lang-text').textContent = currentLanguage === 'ar' ? 'EN' : 'ع';
    }

    // Trigger custom event for components to update
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});
