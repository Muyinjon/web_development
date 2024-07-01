from flask import Flask, render_template,request,url_for,redirect
from flask_sqlalchemy import SQLAlchemy


#create an instance of the Flask class
app = Flask(__name__)



#create an instance of SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:admin@localhost/quotes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


#create an instance of SQLAlchemy
db = SQLAlchemy(app)

class Favorite_quotes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(30))
    quote = db.Column(db.String(2000))

#use a root decorator to create a root for the application
@app.route('/')
def index():
    result=Favorite_quotes.query.all()
    listcolors = ['red', 'blue', 'green', 'yellow']
    return render_template('Index.html',
                           quote1='I cannot teach anybody anything, i can only make them think - Socrates',
                           colors=listcolors,
                           result=result)
@app.route('/quotes')
def quotes():
    return render_template('quotes.html')

@app.route('/process', methods=['POST'])
def process():
    """
    Process the POST request from the form and add the data to the database.

    This function handles the POST request from the form and extracts the
    author and quote from the request. It then creates a new instance of the
    Favorite_quotes model with the author and quote and adds it to the database.
    Finally, it redirects the user back to the index page.

    Returns:
        redirect: A redirect to the index page.
    """
    # Extract the author and quote from the request
    author = request.form['author']
    quote = request.form['quote']

    # Create a new instance of the Favorite_quotes model
    quotedata = Favorite_quotes(author=author, quote=quote)

    # Add the new data to the database
    db.session.add(quotedata)
    db.session.commit()

    # Redirect the user back to the index page
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.debug = False
    with app.app_context():
        db.create_all()
    app.run()