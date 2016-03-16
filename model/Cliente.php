<?php
class Cliente {
	
	private $conn, $table;
	
	public function __construct($host,$user,$pass,$db){
		$this->conn = new PDO("mysql:host=".$host.";dbname=".$db,$user,$pass);
		$this->table = get_class($this);
	}
	
	public function getClientes(){
		$st = $this->conn->prepare("SELECT * FROM ".$this->table);
		$st->execute();
		return json_encode($st->fetchAll(PDO::FETCH_ASSOC));
	}
	
	public function insert($cli){
		$st = $this->conn->prepare("INSERT INTO ".$this->table."(nome, email, telefone) VALUES (?,?,?)");
		$st->execute(array($cli->nome, $cli->email, $cli->telefone));
		return json_encode($this->conn->lastInsertId());
	}
	
	public function delete($cli){
		$st = $this->conn->prepare("DELETE FROM ".$this->table." WHERE id=?");
		$st->execute(array($cli->id));
		return json_encode($st->rowCount());
	}
	
	public function update($cli){
		$st = $this->conn->prepare("UPDATE ".$this->table." SET ". $cli->field . "=? WHERE id=?");
		$st->execute(array($cli->newvalue, $cli->id));
		return json_encode($st->rowCount());
	}
	
	public function getProperties(){
		$st = $this->conn->prepare("DESCRIBE ".$this->table);
		$st->execute();
		return json_encode($st->fetchAll(PDO::FETCH_COLUMN));
	}
	
}
?>