
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    // window.$ = window.jQuery = require('jquery');
    window.$ = window.jQuery = require('adminbsb-materialdesign/plugins/jquery/jquery.min.js');

    require('bootstrap-sass');

    require('adminbsb-materialdesign/plugins/bootstrap/js/bootstrap.js');
    require('adminbsb-materialdesign/plugins/bootstrap-select/js/bootstrap-select.js');
    require('adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js');
    window.Waves = require('adminbsb-materialdesign/plugins/node-waves/waves.js');
    window.$.fn.countTo = window.jQuery.fn.countTo = require('adminbsb-materialdesign/plugins/jquery-countto/jquery.countTo.js');
    window.Raphael = require('adminbsb-materialdesign/plugins/raphael/raphael.min.js');
    require('adminbsb-materialdesign/plugins/morrisjs/morris.js');
    require('adminbsb-materialdesign/plugins/chartjs/Chart.bundle.js');
    require('adminbsb-materialdesign/plugins/flot-charts/jquery.flot.js');
    require('adminbsb-materialdesign/plugins/flot-charts/jquery.flot.resize.js');
    require('adminbsb-materialdesign/plugins/flot-charts/jquery.flot.pie.js');
    require('adminbsb-materialdesign/plugins/flot-charts/jquery.flot.categories.js');
    require('adminbsb-materialdesign/plugins/flot-charts/jquery.flot.time.js');
    require('adminbsb-materialdesign/plugins/jquery-sparkline/jquery.sparkline.js');
    // datatables = require('adminbsb-materialdesign/plugins/jquery-datatable/jquery.dataTables.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/buttons.flash.min.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/jszip.min.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/pdfmake.min.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/vfs_fonts.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/buttons.html5.min.js');
    // require('adminbsb-materialdesign/plugins/jquery-datatable/extensions/export/buttons.print.min.js');

    require('./admin/admin.js');
    require('./admin/pages/index.js');
    require('./admin/demo.js');
    
} catch (e) {
    console.log(e.message, e.name);
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });
