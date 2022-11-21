from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class USER:
    db_name='Recipes'
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def create_user(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , password ,created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s ,%(password)s, NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(cls.db_name).query_db( query, data )
    @classmethod
    def get_one_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.db_name).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_one_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db(query, data)
        return cls(results[0])

    @classmethod
    def get_all(cls, data):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db_name).query_db(query, data)
        users = []
        for row in results:
            users.append(cls(row))
        return users


    # @staticmethod
    # def validate_user(data):
    #     is_valid = True # we assume this is true
    #     query = "SELECT * FROM users WHERE email = %(email)s;"
    #     results = connectToMySQL(USER.db_name).query_db(query, data)
    #     if len(results)>=1 :
    #         flash('Email Alrady Exist')
    #         is_valid = False
    #     if not EMAIL_REGEX.match(data['email']): 
    #         flash("Invalid email address!")
    #         is_valid = False
    #     if len(data['first_name']) < 3:
    #         flash("First Name must be at least 3 characters.")
    #         is_valid = False
    #     if len(data['last_name']) < 3:
    #         flash("Last Name must be at least 3 characters.")
    #         is_valid = False
    #     if len(data['password']) < 8:
    #             flash("Bun must be at least 3 characters.")
    #             is_valid = False
    #     if data['password']!=data ['confirm_password'] :
    #             flash("Password Don't match.")
    #     return is_valid


    @staticmethod
    def validate_register(user):
        is_valid = True
        query = "SELECT * FROM user WHERE email = %(email)s;"
        results = connectToMySQL(USER.db_name).query_db(query,user)
        if len(results) >= 1:
            flash("Email already taken.","register")
            is_valid=False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid Email!!!","register")
            is_valid=False
        if len(user['first_name']) < 3:
            flash("First name must be at least 3 characters","register")
            is_valid= False
        if len(user['last_name']) < 3:
            flash("Last name must be at least 3 characters","register")
            is_valid= False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters","register")
            is_valid= False
        if user['password'] != user['confirm']:
            flash("Passwords don't match","register")
        return is_valid