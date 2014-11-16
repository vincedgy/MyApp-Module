/**
 * Created by Vincent on 16/11/2014.
 */

requirejs.config({
    context: 'app',
    baseUrl: 'app',
    paths: {
//    Bootstrapping,
        appModule: 'app.module.js',
        appFeatures: 'app.features.js',

//    Core,
        coreModule: 'core/core.module.js',
        coreConstants: 'core/constants.js',
        coreConfig: 'core/core.config.js',
        coreRoutes: 'core/core.routes.js',

//    Layout,
        layourModule: 'layout/layout.module.js',
        layoutCtrl: 'layout/layout.ctrl.js',
        layoutFilter: 'layout/layout.filters.js',
        layoutDrctv: 'layout/layout.directives.js',

//    Reusable Blocks/Modules,
        exceptionModule: 'blocks/exception/exception.module.js',
        exceptionHandler: 'blocks/exception/exception-handler.provider.js',
        exception: 'blocks/exception/exception.js',
        loggerModule: 'blocks/logger/logger.module.js',
        logger: 'blocks/logger/logger.js',
//        routerModule: 'blocks/router/router.module.js',
//        routerHelper: 'blocks/router/routehelper.js',

//    Sessions,
        sessionModule: 'sessions/session.module.js',
        sessionCtrl: 'sessions/session.ctrl.js',
        sessionListCtrl: 'sessions/sessionsList.ctrl.js',
        addAttendeesCtrl: 'sessions/addAttendees.ctrl.js',
        sessionSrv: 'sessions/sessions.srv.js',
        sessionTitleDrctv: 'sessions/sessionTitle.directive.js',

//    Attendees,
        attendeeModule: 'attendees/attendee.module.js',
        attendeeCtrl: 'attendees/attendee.ctrl.js',
        attendeeListCtrl: 'attendees/attendeesList.ctrl.js',
        attendeeSrv: 'attendees/attendees.srv.js',
        attendeeDrctv: 'attendees/attendeeTitle.directive.js'

    }});