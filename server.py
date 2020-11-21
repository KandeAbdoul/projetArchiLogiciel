from flask import Flask, jsonify, request
from zeep import Client
from zeep.transports import Transport
from requests import Session
from requests.auth import HTTPBasicAuth
import UserType
wsdl = 'http://localhost:8585/?wsdl'
session = Session()
client=Client(wsdl)

# print(response)
app = Flask(__name__)
@app.route('/')
def index():
    return 'server'

@app.route('/user/<id>')
def getUserById(id):
    response = client.service.getUser(id)
    print(response)
    return {"user_id":response.user_id,"name": response.name, "type": response.type, "indentifier": response.identifier, 'login': response.login, "password": response.password}
            
@app.route('/user/role/<role>')
def getUserByRole(role):
    users = []
    ids = []
    response = client.service.getUserByRole(role)
    for u in response:
        print(u)
        ids.append(u.user_id)
        users.append({"name": u.name, "type": u.type, "indentifier": u.identifier, 'login': u.login, "password": u.password})
    return dict(zip(ids,users))
            
@app.route('/users')
def getAllUsers():
    users = []
    ids = []
    response = client.service.getAllUsers()
    for u in response:
        ids.append(u.user_id)
        users.append({"name": u.name, "type": u.typee, "indentifier": u.identifier, 'login': u.login, "password": u.password})
    return dict(zip(ids,users))

@app.route('/add-user')
def addUSer():
    res = {}
    response = client.service.addUser(request.args.get('name'), request.args.get('identifier'),request.args.get('type'), request.args.get('login'), request.args.get('password'))
    if(response == True):
        res.update({'respose':True})
    else:
        res.update({'respose':False})
    return res


if __name__ == "__main__":
    app.run(port=3030)
#     print('le serveur toure sur le port 3030')