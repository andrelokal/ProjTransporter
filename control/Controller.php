 <?php
require_once("../util/config.php");

$cliente = new Cliente($host,$user,$pass,$db);

if(!isset($_POST['action'])){
    print json_encode(0);
    return;
}

switch($_POST['action']){
    case 'get_lista_cliente':
        print $cliente->getClientes();
    break;
    
    case 'insert_cliente':
        $cli = new stdClass;
        $cli = json_decode($_POST['cliente']);
        print $cliente->insert($cli);
    break;
    
    case 'delete_cliente':
        $cli = new stdClass;
        $cli = json_decode($_POST['cliente']);
        print $cliente->delete($cli);
    break;
    
    case 'update_cliente':
        $cli = new stdClass;
        $cli = json_decode($_POST['cliente']);
        print $cliente->update($cli);
    break;
    
    case 'get_properties':
        print $cliente->getProperties();
    break;
}

exit();

?>
