from flask import Flask, jsonify

from connection import getdb, getcol


app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'hpl'
app.config['MONGO_URI'] = 'mongodb://localhost:27017'


db = getdb()
coll = getcol()


print(db.mem.find_one({"year": 19}))
info = db.mem.find_one({"year": 19})


@app.route('/get_password')
def getPassword():
    output = {}
    output['name'] = info['name']
    output['yeara'] = info['year']

    return jsonify({"result" : output })
    

if __name__ == '__main__':
    print('connection to the server is successful')
    app.run(debug=True)
    





