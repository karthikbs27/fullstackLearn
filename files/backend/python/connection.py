import pymongo

mongoclient = pymongo.MongoClient("mongodb://localhost:27017/")
myDbase = mongoclient["hpl"]

