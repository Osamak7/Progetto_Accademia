import psycopg2

host = "localhost" # indirirro ip del tuo server
port = "5432" # la porta di default di PostgresSQL
dbname = "accademia"
user = "postgres"
password = "postgres"

try:
    connection = psycopg2.connect(
        host = host,
        port = port,
        dbname= dbname,
        user= user,
        password = password
    )
    print("Connessione al database avvenuta con successo")
except Exception as e:
    print(f"Errore durante la connessione al database {e}")

cursor = connection.cursor()


contatore = 0
i = 0
while i!= 5 :
    print("1: stampa la tabbella wp")
    print("2: stampa la tabbella assenza")
    print("3: stampa la tabbella persona")
    print("4: Scegli tu quale tabbella vuoi visionare")
    print("5: Exit")

    i = int(input("inserisci la rischiesta: "))
    if i== 1:
        print()
        #esegui query
        cursor.execute("Select * from wp")

        # Recupera i risultati
        rows = cursor.fetchall()
        for row in rows:
            print(row)

    elif i == 2:
        print()
        #esegui query
        cursor.execute("Select * from assenza")

        # Recupera i risultati
        rows = cursor.fetchall()
        for row in rows:
            print(row)

    elif i == 3:
        print()
        #esegui query
        cursor.execute("Select * from persona")

        # Recupera i risultati
        rows = cursor.fetchall()
        for row in rows:
            print(row)

    elif i == 4:
        print()
        x = input("inserisci la tabbella che vuoi visionare: ")
        try :

            cursor.execute(f"select * from {x}")

            rows = cursor.fetchall()
            if rows:
                for row in rows:
                    print(row)

        except Exception as e :
            print(f"non esiste questa tabbella {x}\n")
            if contatore > 3:
                print("non sei in grado inserisci il 5 per uscire ")
            connection = psycopg2.connect(
            host = host,
            port = port,
            dbname= dbname,
            user= user,
            password = password
            )
      
            cursor= connection.cursor()
            contatore +=1

        

