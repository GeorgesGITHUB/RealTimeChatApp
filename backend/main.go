package main

func main(){ 
	mainActual()
	//testDB()
}

//run differently depending if tables exist
func mainActual(){
	var db Database
	db.OpenConnection()
	db.CreateTables()
	db.PostUser(613,"Georges")
	db.PostUser(961,"Elias")
	db.PostUser(627,"John")
	db.CloseConnection()
	var cc CommController
	cc.Start()
}

func testDB() {
	// log.Println("--- Starting testDB Routine ---")
	// var db Database
	// db.OpenConnection()
	// defer db.CloseConnection()
	// db.DeleteTables()
	// db.createUsersTable()
	// db.createMessagesTable()
	// db.addUser(961,"Georges")
	// db.addUser(627,"John")
	// message_id, timestamp:=db.addMessage(961,"raw","text","morse")
	// log.Println("message_id", message_id, "timestamp:",timestamp)
	// message_id, timestamp=db.addMessage(627,"raw","text","morse")
	// log.Println("message_id", message_id, "timestamp:",timestamp)
}