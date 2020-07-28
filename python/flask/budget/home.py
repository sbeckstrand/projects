import datetime
import random
from flask import render_template
from firebaseFunction import *


def home():

    billLimit = getLimitTotal('Bills', 'limitTotal')
    billUsage = getCategoryTotal(datetime.datetime.now().year, datetime.datetime.now().month, "bill")
    billPercent = calculatePercentage(billLimit, billUsage)

    expenseLimit = getLimitTotal('Expenses', 'limitTotal')
    expenseUsage = getCategoryTotal(datetime.datetime.now().year, datetime.datetime.now().month, "expense")
    expensePercent = calculatePercentage(expenseLimit, expenseUsage)

    savingsLimit = getLimitTotal('Savings', 'limitTotal')
    savingsUsage = getCategoryTotal(datetime.datetime.now().year, datetime.datetime.now().month, "sav")
    savingsPercent = calculatePercentage(savingsLimit, savingsUsage)

    percents = {"Expenses": expensePercent, "Bills": billPercent, "Savings" :savingsPercent}


    return render_template('home.html', month = date('month'), percents=percents)


def date(set):
    now = datetime.datetime.now()

    if set == 'month':
        months = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
        currentMonth = months[now.month]
        return currentMonth
