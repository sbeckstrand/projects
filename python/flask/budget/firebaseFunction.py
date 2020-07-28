import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

cred = credentials.Certificate('budget-6f66d-8c167ec3b445.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

#########################################
# Home Page                             #
#########################################

def getLimitTotal(document, field):
    limit = db.collection('budget').document(u'{}'.format(document)).get().to_dict()['{}'.format(field)]
    return limit


def getCategoryTotal(year, month, category):
    transactions = db.collection(u'expenses').where(u'year', u'==', year).where(u'month', u'==', month).where(u'category', u'==', category).get()
    total = 0
    for transaction in transactions:
        total += transaction.to_dict()['amount']

    return total

def calculatePercentage(limit, usage):
    percentage = (100 / limit) * usage
    percentage = round(percentage, 2)
    return percentage




#########################################
# New/Expense Page                      #
#########################################

def addExpense(vendor, date, amount, category, expenseType, notes):
    date = date.replace('-', ' ').split(' ')
    data = {
        u'vendor': vendor,
        u'date' : datetime.datetime(int(date[0]), int(date[1].strip("0")), int(date[2].strip("0")), 0, 0, 0),
        u'amount' : amount,
        u'category' : category,
        u'type' : expenseType,
        u'dateAdded' : datetime.datetime.now(),
        u'notes' : notes,
        u'month' : int(date[1].strip("0")),
        u'year' : int(date[0])
    }
    doc_ref = db.collection(u'expenses').add(data)


def getRecentExpenses():
    docs = db.collection(u'expenses').order_by(u'dateAdded', direction=firestore.Query.DESCENDING).limit(5).get()
    docList = []
    for doc in docs:
        docList.append(doc.to_dict())

    return docList
