import pymongo

mongoclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = mongoclient["hpl"]
col = db["mem"]
print("connected")

def getdb():
    return db

def getcol():
    return col 