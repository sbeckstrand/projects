from firebaseFunction import *

from flask import Flask, render_template, flash, request
from wtforms import Form, StringField, PasswordField
from wtforms_components.fields import SelectField
from wtforms.fields.html5 import DateField, IntegerField
from wtforms.validators import DataRequired

class Form(Form):
    vendor = StringField('vendor',  validators=[DataRequired()])
    date = DateField('date',  validators=[DataRequired()])
    amount = IntegerField('amount',  validators=[DataRequired()])
    categoryChoices = [('expense', 'Expense'), ('bill', 'Bill'), ('sav', 'Savings')]
    category = SelectField('category', choices=categoryChoices,  validators=[DataRequired()])
    typeChoices = [('groceries', 'Groceries'), ('gas', 'Gas'), ('entertainment', 'Entertainment'), ('eatOut', 'Eating Out'), ('misc', 'Misc')]
    expenseType = SelectField('expenseType', choices=typeChoices,  validators=[DataRequired()])
    notes = StringField('notes', validators=[DataRequired()])

def new():
    form = Form()
    if request.method == 'POST':
        vendor = request.form['vendor']
        date = request.form['date']
        amount = float(request.form['amount'])
        category = request.form['category']
        expenseType = request.form['expenseType']
        notes = request.form['notes']

        addExpense(vendor, date, amount, category, expenseType, notes)


    results = getRecentExpenses()
    #Modify results
    for result in results:
        for key, value in list(result.items()):
            if isinstance(value, str):
                value = value.capitalize()
                result[key] = value

        result['date'] = str(result['date'])
        result['date'] = result['date'][:10]
        result['amount'] = '${0:.2f}'.format(result['amount'])



    # if form.validate():
    #     flash("Success")
    # else:
    #     flash('Error, All the form fields are required.')

    return render_template('new.html', form=form, results=results)
