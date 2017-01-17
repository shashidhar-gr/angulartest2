<!DOCTYPE html>
<html ng-app="SellerApp" ng-controller="mainController">
<head>
<base href="/supplier/">
<title ng-bind="metaservice.metaTitle()"></title>
<meta name="description" content="{{ metaservice.metaDescription() }}"/>
<meta name="keywords" content="{{ metaservice.metaKeywords() }}"/>
<meta name="title" content="{{ metaservice.metaTitle() }}">
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
<link rel="icon" ng-href="{{imagePathURL}}images/fav_icon-01.png" type="image/x-icon">
<link rel="shortcut icon" ng-href="{{imagePathURL}}images/fav_icon-01.png" type="image/x-icon">
<link rel="stylesheet" ng-href="{{imagePathURL}}css/main-v0.1.14.css"/>
<link rel="stylesheet" ng-href="{{imagePathURL}}css/font-awesome.min.css"/>
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato"/>
<script>(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
	ga('create', 'UA-63977657-1', 'auto');
	ga('send', 'pageview');
</script>
</head>
<body class="ng-layout" ng-cloak>
<loading></loading>
<div header-directive></div>
<div class="main-page" ng-cloak>
<ng-view class="main-view" ng-cloak></ng-view>
<div footer-directive></div>
</div>
</body>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/angular.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/angular-route.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/ng-file-upload-all.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/angular-cookies.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/angular-filter.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/FileSaver.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/scriptjs.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/sources/angular-css.min.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/app-v0.1.15.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/routes/app.constants-v0.1.11.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/controllers/loginController-v0.1.14.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/routes/app.routes-v0.1.22.js"></script>
<script type="text/javascript" src="https://static.msupply.com/supplierPanelApp/js/directives/directive-v0.1.18.js"></script>
</html>
