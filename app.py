from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory store for tasks (replace with DB logic later)
tasks = []

# Endpoint to get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# Endpoint to add a new task
@app.route('/tasks', methods=['POST'])
def add_task():
    task_data = request.get_json()  # Get JSON data sent from frontend
    new_task = {
        'id': len(tasks) + 1,  # Simple ID generation
        'title': task_data.get('title'),
        'description': task_data.get('description'),
        'completed': False  # Default state of the task
    }
    tasks.append(new_task)  # Add task to the in-memory list
    return jsonify(new_task), 201  # Return the new task as a response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
