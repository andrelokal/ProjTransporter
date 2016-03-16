var controller = 'control/Controller.php';

$(function(){
	$(document).on("click","a#lista_cliente",function(){ getListaCli(this); });
	$(document).on("click","a#insere_cliente_form",function(){ getCreateForm(this); });
	$(document).on("click","button#insere_cliente",function(){ insereDados(this); });
	$(document).on("click", "a.btn-danger", function(){ deleteCli(this); });
	$(document).on("dblclick", "td.edit", function(){ deixarEditavel(this); });
	$(document).on("blur", "input#editbox", function(){ removeEditavel(this) });
});

function getCreateForm(){
	$.post(controller,
		{action:'get_properties'},
		function(data,textStatus){
		var form = '';
			$.each(data, function(index, value) {
				if(value != 'id'){
					form +=	'<div class="input-prepend">';
					form +=	'<span class="add-on">'+value+'</span>';
					form +=	'<input type="text" id="'+value+'" name="'+value+'" value="" class="input-xlarge" />';
					form +=	'</div><br/><br/>';
				}	
			});
		form +=	'<div class="control-group">';	
		form +=	'<button type="button" id="insere_cliente" class="btn btn-primary"><i class="icon-ok icon-white"></i> Adicionar</button>';
		form +=	'</div>';
		
		$('div#content').html(form);

		},
		"json"
	)
}

function renderClienteLista(jsonData){
	// IMPORTANTE QUE O ID DA TABELA VENHA COM O NOME DE 'id'
	$.post(controller,
		{action:'get_properties'},
		function(data,textStatus){
		var table  = '<table width="600" cellpadding="5" class="table table-hover table-bordered"><thead><tr>';
			$.each(data, function(index, value) {
				if(value != 'id'){
					table += '<th scope="col">'+value+'</th>';
				}	
			});
		table += '<th scope="col"></th></tr></thead><tbody>';	
		$.each(jsonData, function(index,cli){
			table += '<tr>';
			$.each(this, function(index, value) {
				if(index != 'id'){
					table += '<td class="edit" field="'+index+'" cli_id="'+cli.id+'">'+value+'</td>';
				}
			});
			table += '<td><a href="javascript:void(0);" cli_id="'+cli.id+'" class="btn-danger"><i class="icon-remove icon-white"></i></a></td>';
			table += '</tr>';
		});
		table += '</tbody></table>';	
		$('div#content').html(table);
		},
		"json"
	)
}

function deixarEditavel(element){
	$(element).html('<input id="editbox" size="'+ $(element).text().length +' type="text" value="'+ $(element).text() +'">');
	$('#editbox').focus();
	$(element).addClass('current');
}

function removeEditavel(element){
	$('#indicator').show();
	var Cli = new Object();
		Cli.id = $('.current').attr('cli_id');
		Cli.field = $('.current').attr('field');
		Cli.newvalue = $(element).val();
	var cliJson = JSON.stringify(Cli);	
	$.post(controller,
		{action: 'update_cliente',cliente:cliJson},
		function(data,textStatus){
			$('td.current').html($(element).val());
			$('.current').removeClass('current');
			$('#indicator').hide();
		},
		"json"
	);	
}

function insereDados(element){
	$('#indicator').show();
	var Cli = new Object();
		Cli.nome = $('input#nome').val();
		Cli.email = $('input#email').val();
		Cli.telefone = $('input#telefone').val();
	var cliJson = JSON.stringify(Cli);
	
	$.post(controller,
		{action: 'insert_cliente',cliente:cliJson},
		function(data,textStatus){
			getListaCli(element);
			$('#indicator').hide();
		},
		"json"
	);
}

function deleteCli(element){
	$('#indicator').show();
	var Cli = new Object();
		Cli.id = $(element).attr('cli_id');
	var cliJson = JSON.stringify(Cli);
	
	$.post(controller,
		{action: 'delete_cliente',cliente:cliJson},
		function(data,textStatus){
			getListaCli(element);
			$('#indicator').hide();
		},
		"json"
	);
}

function getListaCli(element){
	$('#indicator').show();
	$.post(controller,
		{action:'get_lista_cliente'},
		function(data,textStatus){
			renderClienteLista(data);
			$('#indicator').hide();
		},
		"json"
	)
	
}











