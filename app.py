from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({"tasks": ["Task 1", "Task 2", "Task 3"]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
