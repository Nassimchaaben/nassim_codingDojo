# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
from .ninja import Ninjas
class Dojos:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        # Create an empty list to append our instances of friends
        USERS = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            USERS.append( cls(user) )
        return USERS

        # Now we use class methods to query our database
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO dojos (name) VALUES (%(name)s)"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )

    @classmethod
    def get_one_with_ninjas(cls, data ):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojos_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        print(results)
        new = cls(results[0])
        if results[0]["ninjas.id"] != None:
            for row in results:
                n = {
                    'id': row['ninjas.id'],
                    'first_name': row['first_name'],
                    'last_name': row['last_name'],
                    'age': row['age'],
                    'created_at': row['ninjas.created_at'],
                    'updated_at': row['ninjas.updated_at']
                }
                new.ninjas.append(Ninjas(n))
            return new

    # #get One user
    # @classmethod
    # def get_one(cls,data):
    #     query  = "SELECT * FROM users WHERE id = %(id)s;"
    #     result = connectToMySQL('dojos_and_ninjas').query_db(query,data)
    #     return cls(result[0])
    

    # @classmethod
    # def fixTheuser(cls,data):
    #     query = "UPDATE users SET first_name=%(fname)s,last_name=%(lname)s,email=%(email)s,created_at=now(),updated_at=now() WHERE id = %(id)s;"
    #     return connectToMySQL('dojos_and_ninjas').query_db(query,data) 

    # @classmethod
    # def delete(cls,data):
    #     query  = "DELETE FROM users WHERE id = %(id)s;"
    #     return connectToMySQL('dojos_and_ninjas').query_db(query,data)