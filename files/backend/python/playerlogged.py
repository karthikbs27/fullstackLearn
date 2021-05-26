from connection import getdb
from flask import Flask, jsonify


def getinfo():
    db = getdb()
    info = db.mem.find_one({"year": 19})
    print(info)
    
  
getinfo()