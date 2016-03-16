<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>CRUD Cliente</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="view/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">		
	</head>

	<body>
		<div class="container">			
			
			<div class="page-header">
				<h2>CRUD <small>Cliente</small></h2>        
			</div>
				<!-- Navigate -->
				<div class="navbar">
					<div class="navbar-inner">    
						<ul class="nav">
							<li><a href="javascript:void(0);" id="lista_cliente">Listar</a></li>
							<li><a href="javascript:void(0);" id="insere_cliente_form">Adicionar</a></li>		  
						</ul>
					</div>
				</div>

				<div id="indicator" style="display: none; text-align: center;" class="loading_img">
					<img src="view/bootstrap/img/indicator.gif"/>
				</div>
				<!--  -->
			<div id="content"></div>
		</div>
		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="view/bootstrap/js/bootstrap.min.js"></script>
		<script src="view/transporter.js"></script>
	</body>
	
</html>





















