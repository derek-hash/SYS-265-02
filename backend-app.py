from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define Task model
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(500))
    completed = db.Column(db.Boolean, default=False)

# Initialize database
with app.app_context():
    db.create_all()

# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    task_list = [{'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed} for task in tasks]
    return jsonify(task_list)

# Add a new task
@app.route('/tasks', methods=['POST'])
def add_task():
    task_data = request.get_json()
    new_task = Task(title=task_data['title'], description=task_data['description'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'id': new_task.id, 'title': new_task.title, 'description': new_task.description, 'completed': new_task.completed}), 201

# Mark a task as completed
@app.route('/tasks/<int:task_id>/complete', methods=['PATCH'])
def complete_task(task_id):
    task = Task.query.get(task_id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404
    task.completed = True
    db.session.commit()
    return jsonify({'message': 'Task marked as completed'})

# Delete a task
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get(task_id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404
    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
